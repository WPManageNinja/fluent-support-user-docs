/**
 * markdown-it plugin: replace the default image renderer with a client-only
 * <ZoomableImage> component that owns its own <img>.
 *
 * Notes on why it is written this way (see the broken-images post-mortem):
 * - No slot: the component renders the <img> from props, so SSR and client
 *   produce identical markup.
 * - Attribute values are HTML-escaped (alt text often contains " & < >).
 * - Wrapped in <ClientOnly> so there is no SSR markup to mismatch on hydration.
 * - Explicit closing tag, not a self-closing tag.
 * - Non-absolute src values fall through to the default renderer so Vite's
 *   asset pipeline still handles them.
 */

/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function zoomablePlugin(md) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self)

    const srcIndex = token.attrIndex('src')
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self)

    const src = token.attrs[srcIndex][1]
    const alt = token.content || ''

    // Relative paths are rewritten/hashed by Vite at build time. The component
    // emits src verbatim, so anything not absolute or remote must be left alone.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self)
    }

    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`
  }
}
