# AI Setup

Fluent Support Pro includes built-in AI assistance that helps your agents write better replies, summarize long conversations, and analyze customer sentiment — without leaving the ticket view. You can connect any of three AI providers: **OpenAI**, **Google Gemini**, or **Anthropic Claude**.

This page covers choosing a provider, getting your API key, and connecting it to Fluent Support.

::: info
AI features require **Fluent Support Pro**. The AI Model Setup page will show an upgrade prompt if Pro is not active.
:::

## How To Set It Up

1. Go to **Fluent Support** from your WordPress dashboard.
2. Open **Global Settings** and click **AI Model Setup** in the left sidebar.
3. Turn on the **Enable AI** toggle.
4. Under **AI Provider**, choose your **Provider** from the dropdown.
5. Select a **Model** for that provider.
6. Enter your **API Key**.
7. Click **Save**.

![AI Model Setup page showing the Enable AI toggle, Provider dropdown, and API Key field](/images/ai-assistance/openai-integration-with-fluent-support/ai-model-setup.webp)

<!-- TODO: Capture screenshot of the new AI Model Setup settings page and save to /images/ai-assistance/openai-integration-with-fluent-support/ai-model-setup.webp -->

Once saved, AI tools become available inside every ticket. To learn how to use them, see [AI Features in Tickets](/features-of-openai-integration-in-fluent-support).

---

## Choosing a Provider

Each provider connects through its own API key. Pick the one you already have an account with, or the one whose pricing and models best fit your team.

| Provider | Good for |
|----------|---------|
| **OpenAI** | Widest model selection; GPT-4.1 and o-series models |
| **Google Gemini** | Fast and cost-effective; Gemini 2.5 Flash is a strong default |
| **Anthropic Claude** | Detailed, thoughtful replies; Claude Sonnet 4 recommended |

---

## Get Your API Key

### OpenAI

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and sign in.
2. Click **+ Create new secret key**.
3. Give it a name and click **Create secret key**.
4. Copy the key immediately — you will not be able to see it again.

**Available models:** GPT-4.1, GPT-4.1 Mini, GPT-4.1 Nano, GPT-4o, GPT-4o Mini, GPT-4 Turbo, GPT-4, GPT-3.5 Turbo, o1, o3, o3-mini, o4-mini.

### Google Gemini

1. Go to [aistudio.google.com](https://aistudio.google.com) and sign in with your Google account.
2. Click **Get API key** from the left sidebar.
3. Click **Create API key** and select or create a project.
4. Copy the generated key.

**Available models:** Gemini 2.5 Pro, Gemini 2.5 Flash *(recommended)*, Gemini 2.5 Flash Lite, Gemini 2.0 Flash Lite.

### Anthropic Claude

1. Go to [console.anthropic.com](https://console.anthropic.com) and sign in.
2. Open **API Keys** from the left menu.
3. Click **Create Key**, give it a name, and copy the key.

**Available models:** Claude Opus 4 *(most powerful)*, Claude Sonnet 4 *(recommended)*, Claude Haiku 4 *(fastest)*.

---

## Replacing a Saved Key

When a key is already saved, the API Key field shows `****` followed by the last four characters of your saved key. To replace it, type a new key into the field and click **Save**. Switching to a different provider automatically clears the saved key for the previous provider so stale credentials are not carried over.

---

## Tips and Notes

::: tip
If you are unsure which model to pick, start with the one marked **Recommended** in the model dropdown — Gemini 2.5 Flash for Gemini, or Claude Sonnet 4 for Anthropic.
:::

::: info
- Only one AI provider is active at a time. Switching providers changes where all AI requests are sent.
- API costs are billed directly by the provider — Fluent Support does not charge for AI usage beyond your Pro license.
- You can review AI usage per agent in the **AI Activities** tab under **Activities** in your Fluent Support dashboard.
:::
