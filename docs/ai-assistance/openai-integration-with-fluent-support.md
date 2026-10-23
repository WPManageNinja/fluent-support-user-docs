# AI Setup

Fluent Support Pro includes built-in AI assistance that helps your agents write better replies, summarize long conversations, and analyze customer sentiment — without leaving the ticket view. You can connect any of three AI providers: **OpenAI**, **Google Gemini**, or **Anthropic Claude**.

This page covers choosing a provider, getting your API key, and connecting it to Fluent Support.

::: info
AI features require **Fluent Support Pro**. The AI Model Setup page will show an upgrade prompt if Pro is not active.
:::

## How To Set It Up

1. Go to **Fluent Support** from your WordPress dashboard.
2. Click **Global Settings** in the left sidebar, then open **AI Model Setup** under the **AI Integration** section.
3. Turn on the **Enable AI** toggle at the top of the page. Once enabled, AI becomes available for response suggestions and ticket summaries.
4. In the **AI Provider** box, pick your **Provider** from the dropdown (OpenAI, Google Gemini, or Anthropic Claude).
5. Choose a **Model** for that provider from the **Model** dropdown. If you are not sure, keep the first option, **Default**. See [The Default Model](#the-default-model).
6. In the **API Key** box, paste your **API Key**. It is stored securely on your site.
7. Click **Save** in the top-right corner.

![AI Model Setup page showing the Enable AI toggle, the AI Provider and Model dropdowns, and the API Key field](/images/ai-assistance/openai-integration-with-fluent-support/ai-model-setup.webp)

Once saved, AI tools become available inside every ticket. To learn how to use them, see [AI Features in Tickets](/features-of-openai-integration-in-fluent-support).

---

## Choosing a Provider

Each provider connects through its own API key. Pick the one you already have an account with, or the one whose pricing and models best fit your team.

| Provider | Default model | Good for |
|----------|---------------|---------|
| **OpenAI** | GPT-6.1 Sol | Widest model selection, from GPT-6 Astra down to GPT-5 Mini |
| **Google Gemini** | Gemini 3.8 Flash | Fast and cost-effective Flash and Flash Lite models |
| **Anthropic Claude** | Claude Sonnet 5.5 | Detailed, thoughtful replies |

---

## Get Your API Key

### OpenAI

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and sign in.
2. Click **+ Create new secret key**.
3. Give it a name and click **Create secret key**.
4. Copy the key immediately — you will not be able to see it again.

**Available models:** GPT-6 Astra *(most powerful)*, GPT-6.1 Sol *(default)*, GPT-6 Sol, GPT-6 Luna *(fastest)*, GPT-5.6 Sol, GPT-5.6 Terra, GPT-5.6 Luna, GPT-5.4 Mini, GPT-5 Mini.

### Google Gemini

1. Go to [aistudio.google.com](https://aistudio.google.com) and sign in with your Google account.
2. Click **Get API key** from the left sidebar.
3. Click **Create API key** and select or create a project.
4. Copy the generated key.

**Available models:** Gemini 4 Argon *(most powerful)*, Gemini 3.8 Flash *(default)*, Gemini 3.7 Flash, Gemini 3.6 Flash, Gemini 3.5 Flash, Gemini 3.5 Flash Lite *(fastest)*, Gemini 3.1 Flash Lite.

### Anthropic Claude

1. Go to [console.anthropic.com](https://console.anthropic.com) and sign in.
2. Open **API Keys** from the left menu.
3. Click **Create Key**, give it a name, and copy the key.

**Available models:** Claude Opus 5.5 *(most powerful)*, Claude Sonnet 5.5 *(default)*, Claude Haiku 5.5 *(fastest)*.

---

## The Default Model

The first option in the **Model** dropdown is **Default**. It shows the model it uses right now, for example **Default (currently Claude Sonnet 5.5)**. When you pick a provider, the **Model** dropdown starts on this option.

With **Default** selected, Fluent Support uses the model it recommends for your provider. When a plugin update changes the recommended model, your site switches to it on its own, so you do not need to come back and change the setting.

Pick a specific model instead if you want to keep using the same one after updates.

::: info
If the model you picked is later removed from the list, usually because the provider retired it, Fluent Support uses the default model instead.
:::

---

## Replacing a Saved Key

When a key is already saved, Fluent Support shows "A key ending in" followed by the last four characters of your saved key. To replace it, type a new key into the field (its placeholder reads "Enter a new key to replace the saved one") and click **Save**. Switching to a different provider automatically clears the saved key for the previous provider so stale credentials are not carried over.

---

## Tips and Notes

::: tip
If you are unsure which model to pick, keep **Default** selected. It uses GPT-6.1 Sol for OpenAI, Gemini 3.8 Flash for Gemini, and Claude Sonnet 5.5 for Anthropic, and it follows the recommended model as it changes.
:::

::: info
- Only one AI provider is active at a time. Switching providers changes where all AI requests are sent.
- API costs are billed directly by the provider — Fluent Support does not charge for AI usage beyond your Pro license.
- You can review AI usage per agent in the **AI Activities** tab under **Activities** in your Fluent Support dashboard.
- The provider you configure here also powers the [AI Ticket Audit](/ai-ticket-audit) report, which reads your conversations and returns a mood, a sentiment score and a one-line summary for each ticket.
:::
