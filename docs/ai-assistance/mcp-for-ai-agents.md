# MCP for AI Agents

MCP (Model Context Protocol) is an open standard that lets AI clients talk directly to external services. With Fluent Support's MCP integration, AI tools like Claude Desktop, Claude Code, Cursor, and Codex can read and act on your support tickets — searching tickets, drafting replies, creating new tickets, closing conversations, and more — all through your own WordPress site, with your authorization.

Nothing leaves your server without your permission. The AI acts as an agent using your account's existing permissions.

## What AI Agents Can Do

Once connected, an AI client can:

- **Browse and search tickets** — by status, agent, product, mailbox, priority, date, or keyword
- **Read full ticket details** — including the full conversation thread, customer history, tags, and custom fields
- **Reply to tickets** — post responses as your agent account
- **Create tickets** — open new tickets on behalf of customers
- **Close, reopen, or update tickets** — change status, priority, assignment, and more
- **Merge tickets** — combine duplicate conversations (requires Fluent Support Pro)
- **Look up customers** — search your customer list and view their ticket history
- **Access saved replies** — retrieve canned responses when drafting replies
- **View team context** — agents list, products, mailboxes, tags, and open ticket counts

All actions respect your agent's existing Fluent Support permissions.

## Requirements

- Fluent Support (free)
- **FluentHub** plugin installed and active (provides the MCP adapter)

FluentHub is a free companion plugin. Fluent Support will prompt you to install it when you enable MCP.

## How To Enable MCP

1. Go to **Fluent Support** from your WordPress dashboard.
2. Open **Global Settings** and click **MCP for AI Agents** in the left sidebar.
3. Turn on the **Enable MCP for AI Agents** toggle.

![MCP settings page with the enable toggle](/images/ai-assistance/mcp-for-ai-agents/mcp-settings-disabled.webp)

<!-- TODO: Capture screenshot of the MCP settings page before enabling and save to /images/ai-assistance/mcp-for-ai-agents/mcp-settings-disabled.webp -->

### Install FluentHub

If FluentHub is not yet installed, you will see a prompt after enabling the toggle.

- Click **Install FluentHub** to install and activate it automatically, or
- Click **Activate FluentHub** if it is already installed but not active, or
- Click **Get FluentHub** to go to your Plugins page if automatic installation is not available.

After FluentHub activates, the page will reload and show a **Connected** status.

![MCP settings showing FluentHub connected and endpoint URL](/images/ai-assistance/mcp-for-ai-agents/mcp-connected-endpoint.webp)

<!-- TODO: Capture screenshot of the connected state with endpoint URL visible and save to /images/ai-assistance/mcp-for-ai-agents/mcp-connected-endpoint.webp -->

The **Endpoint URL** and the number of registered tools will appear once the adapter is active. You will need the endpoint URL when connecting an AI client.

## Connect an AI Client

With MCP enabled and FluentHub active, you can connect any compatible AI tool.

### Step 1 — Create a WordPress Application Password

The AI client needs a credential to authenticate requests. Create an Application Password for your WordPress account:

1. Go to **Users → Profile** in your WordPress dashboard (or click the **Create an application password** link on the MCP settings page).
2. Scroll down to **Application Passwords**.
3. Enter a name for the application (for example, "Claude Desktop") and click **Add New Application Password**.
4. Copy the generated password — you will not be able to see it again.

### Step 2 — Enter Your Credentials

Back on the MCP settings page, under **Connect a client**:

1. Enter your **WordPress username** in the first field.
2. Paste the application password in the **Application password** field.

### Step 3 — Copy the Connection Snippet

Select the tab for your AI client:

| Tab | Client |
|-----|--------|
| **Claude Code** | Claude Code CLI |
| **Claude Desktop** | Claude Desktop app |
| **Cursor** | Cursor IDE |
| **Codex** | OpenAI Codex |
| **Other** | Any MCP-compatible client |

![Client tabs with connection snippet ready to copy](/images/ai-assistance/mcp-for-ai-agents/mcp-client-snippet.webp)

<!-- TODO: Capture screenshot of the client tabs with a snippet rendered (Claude Code tab active) and save to /images/ai-assistance/mcp-for-ai-agents/mcp-client-snippet.webp -->

Once your credentials are entered, the snippet updates automatically with your username and application password encoded. Click **Copy snippet** and paste it into your AI client's configuration.

::: tip Local or self-signed sites
If your site runs locally or uses a self-signed SSL certificate, check the **Local / self-signed site (disable TLS verification)** option under the **Claude Desktop** tab before copying the snippet. This adjusts the snippet so the desktop app can connect without a trusted certificate.
:::

## Tips and Notes

::: info
- Each WordPress user who wants to connect an AI client needs their own Application Password.
- Application Passwords are different from your regular WordPress login password — they are generated separately and can be revoked at any time from your profile.
- The AI can only access tickets and data your WordPress account is authorized to see. If your account is restricted to certain mailboxes or permissions, the AI respects those same limits.
- To revoke access, delete the Application Password from your WordPress profile, or disable the MCP toggle in Global Settings.
:::
