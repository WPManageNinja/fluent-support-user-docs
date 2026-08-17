# MCP for AI Agents

Fluent Support has a built-in **MCP (Model Context Protocol)** server that connects your helpdesk to AI clients like **Claude Desktop, Claude Code, Cursor, and OpenAI Codex**. Once it is set up, your AI assistant can browse tickets, draft replies, close conversations, look up customer history, and more, all through your own WordPress site, with your authorization.

Think of MCP as a secure bridge between your AI client and Fluent Support. Instead of opening the admin and clicking around manually, the AI calls the same actions you would, but through a secure, authenticated endpoint. You stay in control: every action is authorized by a WordPress Application Password you generate yourself, and you can revoke that access at any time.

::: info
MCP for Fluent Support is available on the **free version**. No Pro license is needed to connect an AI client.
:::

## Before You Start

You will need:

- **Fluent Support** (free or Pro)
- **FluentToolkit** plugin installed and active (the small, free companion plugin that powers the MCP adapter)

If FluentToolkit is not installed yet, do not worry. Fluent Support will prompt you to install it right from the MCP settings page, which we will cover below.

## Step 1: Open the MCP Settings

1. Go to **Fluent Support** from your WordPress dashboard.
2. Click **Global Settings** in the left sidebar.
3. Under the **AI Integration** section, click **MCP for AI Agents**.

You will land on the MCP settings page. When you first open it, the **Enable MCP for AI Agents** toggle is off and the page explains what MCP does.

![MCP for AI Agents settings page with the enable toggle turned off](/images/ai-assistance/mcp-for-ai-agents/mcp-settings-toggle-off.webp)

## Step 2: Enable MCP for AI Agents

Turn on the **Enable MCP for AI Agents** toggle at the top of the page. This is what tells Fluent Support to expose its tools to AI agents, with your authorization.

If FluentToolkit is not yet installed, a **Get FluentToolkit** button appears as soon as you flip the toggle on. Click that button, and Fluent Support installs FluentToolkit on your site for you.

![MCP settings page with the toggle enabled and the Get FluentToolkit button visible](/images/ai-assistance/mcp-for-ai-agents/mcp-get-fluenthub.webp)

::: tip
Prefer to install it yourself? Download FluentToolkit from [https://static.wpmanageninja.com/fluent-toolkit.zip](https://static.wpmanageninja.com/fluent-toolkit.zip), then upload the ZIP via **Plugins → Add New → Upload Plugin** and activate it.
:::

::: tip
If FluentToolkit is already installed but not active, you will see an **Activate FluentToolkit** button instead. Just click it to activate, no reinstall needed.
:::

Once FluentToolkit is active, the page updates to show a **Connected** badge, the active adapter version, your **Endpoint URL**. Below that, the **Connect a client** panel appears, ready for the next step.

## Step 3: Create an Application Password

Your AI client needs a credential to authenticate its requests. WordPress Application Passwords are purpose-built for this. They are separate from your login password and can be revoked at any time.

In the **Connect a client** panel, click the **Create an application password** link. This takes you to your WordPress profile.

![MCP settings page showing FluentToolkit connected, the endpoint URL, and the Connect a client panel](/images/ai-assistance/mcp-for-ai-agents/mcp-enabled-connected.webp)

1. Scroll down to the **Application Passwords** section.
2. In the **New Application Password Name** field, type a recognizable name, for example `FluentSupport` or `Claude Desktop`.
3. Click **Add Application Password**.

![WordPress Application Passwords section with a new password name entered and the Add Application Password button highlighted](/images/ai-assistance/mcp-for-ai-agents/mcp-app-password-create.webp)

WordPress generates and displays the password right away. **Copy it now.** You will not be able to see it again after you leave this page.

![WordPress Application Passwords section showing the newly generated password ready to copy](/images/ai-assistance/mcp-for-ai-agents/mcp-app-password-copy.webp)

::: warning
Save the generated password somewhere safe before navigating away. It is shown only once. If you lose it, you can simply revoke it and create a new one.
:::

## Step 4: Connect Your AI Client

Head back to **Fluent Support → Global Settings → MCP for AI Agents** and find the **Connect a client** panel again.

1. Enter your **WordPress username** in the first field.
2. Paste the application password you just copied into the **Application password** field.
3. Select the tab that matches your AI client: **Claude Code**, **Claude Desktop**, **Cursor**, **Codex**, or **Other**.
4. The snippet below updates automatically with your credentials encoded. Click **Copy snippet**.

![MCP settings page with the username and password filled in and the Claude Code snippet ready to copy](/images/ai-assistance/mcp-for-ai-agents/mcp-snippet-ready.webp)

Now paste the snippet into your AI client. The exact spot depends on which one you use:

| Client | Where the snippet goes |
|--------|------------------------|
| **Claude Code** | Run the command in your terminal |
| **Claude Desktop** | Add it to `claude_desktop_config.json`, then restart Claude Desktop |
| **Cursor** | Paste it into `mcp.json` in Cursor's MCP settings, then reload |
| **Codex** | Follow the instructions shown under the snippet on the Codex tab |
| **Other** | Adapt the generic config block for your MCP-compatible client |

For example, running the snippet in Claude Code adds the server and confirms it was registered successfully in your terminal.

![Claude Code terminal showing the Fluent Support MCP server was added successfully](/images/ai-assistance/mcp-for-ai-agents/mcp-claude-code-success.webp)

Restart your AI client (or start a new session) and you are all set. Your AI can now read and act on your Fluent Support tickets.

## Common AI Workflows

Here are a few practical things your AI can handle once it is connected.

### Intelligent Ticket Triage

When a new ticket arrives, the AI reads it, checks the customer's history, auto-tags it by category (billing, bug, refund, feature), routes it to the right agent, and adds an internal note with a suggested action, all before a human even opens it.

### Autonomous First Response

For common issues, the AI reads the ticket, finds the most relevant saved reply, sends an instant response, and marks the ticket as waiting on the customer, without any agent involvement.

### Duplicate Merging

The AI checks incoming tickets against existing open tickets from the same customer. If it finds a match, it merges them and logs a note explaining why.

### Manager Reporting

Instead of pulling reports manually, managers can ask: *"How many billing tickets are still open from this week?"* or *"Which agent had the fastest response time today?"* The AI queries the insights and context tools and answers immediately.

### Idle Ticket Cleanup

On a scheduled basis, the AI can find tickets that have been waiting for a customer reply for over 5 days, send a follow-up message, and auto-close them after 48 hours if there is still no reply.

## What You Can Do With It

Once connected, your AI assistant gets access to **20 Fluent Support tools**. You never call these by name. The AI picks the right tool based on what you ask in plain language. Here is a friendly overview of what is available, grouped by area.

### Ticket Tools

- **Create a ticket** (`fluent-support-create-ticket`): Open a new ticket on behalf of a customer.
- **Get a ticket** (`fluent-support-get-ticket`): Read the full details of any ticket, including the conversation thread.
- **List tickets** (`fluent-support-list-tickets`): Browse and filter tickets by status, agent, date, keyword, and more.
- **Update a ticket** (`fluent-support-update-ticket`): Change a ticket's priority, subject, status, and other fields.
- **Close a ticket** (`fluent-support-close-ticket`): Mark a resolved ticket as closed.
- **Reopen a ticket** (`fluent-support-reopen-ticket`): Reopen a previously closed conversation.
- **Delete a ticket** (`fluent-support-delete-ticket`): Permanently remove a ticket.
- **Merge tickets** (`fluent-support-merge-tickets`): Combine two duplicate tickets into one.
- **Bulk action** (`fluent-support-bulk-action`): Close, assign, or tag many tickets in a single command.

### Communication Tools

- **Reply to a ticket** (`fluent-support-reply-to-ticket`): Send a response to the customer as your agent account.
- **Add an internal note** (`fluent-support-add-internal-note`): Leave a private note that only your team can see.
- **List saved replies** (`fluent-support-list-saved-replies`): Pull up your canned responses to use or adapt.

### Assignment & Tagging Tools

- **Assign a ticket** (`fluent-support-assign-ticket`): Route a ticket to a specific agent or team.
- **Tag a ticket** (`fluent-support-tag-ticket`): Add or remove tags on any ticket.

### Customer & Activity Tools

- **Search customers** (`fluent-support-search-customers`): Find customers by name, email, or other fields.
- **Get customer tickets** (`fluent-support-get-customer-tickets`): See every ticket a specific customer has submitted.
- **Get ticket activity** (`fluent-support-get-ticket-activity`): View the full activity log for a ticket: who replied, when, and what changed.

### Workflow & Insight Tools

- **List workflows** (`fluent-support-list-workflows`): See all automation workflows in your account.
- **Get support context** (`fluent-support-get-support-context`): Pull real-time context like available agents and open ticket counts.
- **Get support insights** (`fluent-support-get-support-insights`): Fetch analytics and performance data.

### Example Prompts

Here are a few things you can simply ask your AI client once it is connected:

- *"Summarize the last 5 open tickets from customer `john@example.com`."*
- *"Reply to ticket #142 using our standard refund saved reply."*
- *"Show all high-priority tickets assigned to Sarah that are still open."*
- *"Close all tickets that have been waiting for a customer reply for more than 7 days."*
- *"Which agent closed the most tickets this month?"*


## Tips and Notes

::: info

- Each WordPress user who wants to connect an AI client needs their own Application Password.
- Application Passwords are completely separate from your WordPress login password. You can revoke them individually at any time from **Users → Profile → Application Passwords**.
- The AI can only access tickets and data your WordPress account is authorized to see. Mailbox restrictions, role limits, and agent permissions all apply to the AI the same way they apply to you.
- To disconnect an AI client at any time, revoke its Application Password from your WordPress profile. Flip off the **Enable MCP for AI Agents** toggle to cut off all connected clients at once.
- The snippet generated by Fluent Support contains your encoded credentials. Never share it publicly or commit it to a repository.

:::
