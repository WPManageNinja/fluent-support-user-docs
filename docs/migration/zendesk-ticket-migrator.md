# Zendesk Ticket Migrator

Zendesk is a comprehensive SaaS platform for customer service solutions. Fluent Support allows Zendesk users to easily transfer their existing tickets directly into Fluent Support using an API connection. This article will guide you through the migration process.

## Import Tickets From Zendesk 

From the **Fluent Support Dashboard**, go to **Settings** and select **Ticket Importer** from the left sidebar. Find **Zendesk** in the list of migration options and click the **Import Tickets** button.

![Ticket migration from Zendesk](/images/migration/zendesk-ticket-migrator/zendesk-settings-1.webp)

## Configuring the Import

A popup page will appear asking for your **Zendesk Domain, Email Address,** and **API Key.** To proceed, you need to retrieve these credentials from your Zendesk account.

![Zendesk Domain, Email Address, and API Key](/images/migration/zendesk-ticket-migrator/zendesk-settings-2.webp)

### Retrieve API Credentials from Zendesk

To get the **Zendesk Domain** and **API Key,** login to your [Zendesk](https://www.zendesk.com/) account. Press the **API Tokens** from the sidebar and click on the **Get Started** button.

![Zendesk Settings Icon](/images/migration/zendesk-ticket-migrator/zendesk-api-1.webp)

Now here you have to give a Description to your API key and then clcik on the **Save** button.

![Get started to get the Zendesk API](/images/migration/zendesk-ticket-migrator/zendesk-api-3.webp)

On the **Zendesk API** page now the **API token** will appear. Simply, copy the API and click on the **Save** button.

![Add API token](/images/migration/zendesk-ticket-migrator/zendesk-api-4.webp)

Also, copy **Zendesk’s Domain URL** from the URL section.

![Zendesk’s Domain URL](/images/migration/zendesk-ticket-migrator/zendesk-domain-1.webp)


### Authorize and Import

Return to the **Zendesk** popup page from the **Fluent Support Dashboard**.  
  
Paste the **Domain URL,** **Email** (which you used to open your Zendesk account), and **API Key** (copied from your Zendesk account), into the desired fields. Finally, click on the **Import Tickets** button.

![Finally Import Tickets ](/images/migration/zendesk-ticket-migrator/zendesk-settings-3.webp)

Congratulations, you are now ready to proceed! The importation of tickets will begin, and a notification will be sent once all your tickets have been successfully imported.

Here, you can see all the **Tickets** are **Imported** and the migration date & time are displayed as well.

This is how you can migrate your all tickets from **Zendesk** to **Fluent Support**!

---

## Migrate via WP-CLI

If you have a large number of tickets or a migration that was interrupted, you can run the Zendesk import from the command line using WP-CLI. The CLI method supports automatic resume — if a previous run was interrupted, it picks up exactly where it left off.

::: info
WP-CLI migration requires **Fluent Support Pro** and [WP-CLI](https://wp-cli.org/) installed on your server.
:::

### Basic command

```bash
wp fluent_support zendesk_ticket_import \
  --domain=https://yourcompany.zendesk.com \
  --email=admin@yourcompany.com \
  --access_token=YOUR_API_TOKEN
```

If you omit any of the flags, the command will prompt you for them interactively.

### Import archived tickets

Zendesk keeps closed tickets in an archive. To include them in your migration, add the `--include_archived` flag:

```bash
wp fluent_support zendesk_ticket_import \
  --domain=https://yourcompany.zendesk.com \
  --email=admin@yourcompany.com \
  --access_token=YOUR_API_TOKEN \
  --include_archived
```

### Resuming an interrupted migration

If the import stops partway through — due to a timeout, server restart, or connection issue — run the same command again with the same `--domain`. Fluent Support saves a cursor after each page of tickets and will continue from the last successfully imported page automatically.

### Parameters

| Flag | Required | Description |
|------|----------|-------------|
| `--domain` | Yes | Your full Zendesk URL, e.g. `https://yourcompany.zendesk.com` |
| `--email` | Yes | The email address of your Zendesk admin account |
| `--access_token` | Yes | Your Zendesk API token (same one used in the UI import) |
| `--include_archived` | No | Pass this flag to include archived/closed tickets |

