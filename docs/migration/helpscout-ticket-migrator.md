# HelpScout Ticket Migrator

[HelpScout](https://www.helpscout.com/) is a SaaS tool for customer communication. **HelpScout** users can easily transfer their **tickets** to [Fluent Support](https://fluentsupport.com/) through an **API**. This article will guide you through the process.

## Import Tickets From Help Scout 

From the **Fluent Support Dashboard**, go to **Settings** and select **Ticket Importer** from the left sidebar. Find **Help Scout** in the list of migration options and click the **Import Tickets** button.

![Ticket migration from HelpScout](/images/migration/helpscout-ticket-migrator/access-ticket-importer-1.webp)

## Configuring the Import

A popup window titled Configure Help Scout Import will appear. This window asks for your **App ID**, **App Secret**, and **Authorization Code**. Now, copy the **HelpScout Redirection URL** for future use.

![HelpScout Redirection URL](/images/migration/helpscout-ticket-migrator/help-scout-popup-page-scaled-1.webp)

### Create an App in Help Scout

To get the required credentials, you need to create an application in your [Help Scout](https://www.helpscout.com/) account.

Go to the **Profile Icon** from the right-hand corner of the **Dashboard,** select **Your Profile** , choose **My Apps,** and click the **Create My App** button.

![Create My App in HelpScout](/images/migration/helpscout-ticket-migrator/profile-icon-my-apps-create-app-scaled-1.webp)

Name your App, paste the previously copied URL into the **Redirection URL** field, and click the **Create** button.

![Paste Redirection URL](/images/migration/helpscout-ticket-migrator/app-name-redirection-url-create-scaled-1.webp)

### Authorize the Connection

Once your app is created in Help Scout, you will be provided with an **App ID** and **App Secret**. Now, copy the **App ID** and **App Secret** from here.

![App ID and App Secret](/images/migration/helpscout-ticket-migrator/copy-app-id-app-secret-scaled-1.webp)

Return to the **Help Scout** popup page from the **Fluent Support Dashboard** and paste the **App ID** & **App Secret** copied from your Help Scout account into the desired field.

To obtain the Authorization Code, click the **Get Authorized** button now.

This action will redirect you to **Help Scout** to authorize access. Click **Authorize** when prompted.

![HelpScout page](/images/migration/helpscout-ticket-migrator/authorize-button-1.webp)

### Request Token and Import

You will receive your Authorization code here, now simply **copy** it.

![Receive your Authorization code](/images/migration/helpscout-ticket-migrator/copy-authorization-code-scaled-1.webp)

Return to the **Help Scout** popup page again and **paste** this in the **Authorization Code** field.


Click the **Request Token** to get your **Access Token**. After requesting the token, a Choose **Mailbox** dropdown will appear. Select the specific Help Scout mailbox you wish to import tickets from.

You can choose only one **Mailbox** at a time, and without selecting the specific mailbox you won’t be able to import your tickets.

![Request Token option](/images/migration/helpscout-ticket-migrator/request-ticket-button-choose-mailbox-scaled-1.webp)

Once you have selected the mailbox, click the **Import Tickets** button to begin the process.

Congratulations, you are now ready to proceed! The importation of tickets will begin, and a notification will be sent once all your tickets have been successfully imported.

Here, you can see all the **Tickets** are **Imported** and the migration date & time are displayed as well.

![Preview of Imported Tickets from HelpScout](/images/migration/helpscout-ticket-migrator/help-scout-tickets-migrated-1.webp)

This is how you can migrate your all tickets from **Help Scout** to Fluent Support!

---

## Migrate via WP-CLI

For large mailboxes or interrupted migrations, you can run the Help Scout import from the command line using WP-CLI. The CLI method supports automatic resume — if a previous run was interrupted, it picks up where it left off.

::: info
WP-CLI migration requires **Fluent Support Pro** and [WP-CLI](https://wp-cli.org/) installed on your server. The CLI uses a Help Scout API access token directly rather than the OAuth flow used by the UI importer.
:::

### Get a Help Scout access token

1. Log in to your [Help Scout](https://www.helpscout.com/) account.
2. Go to **Your Profile → My Apps** and click **Create My App**.
3. After the app is created, copy the **App ID** and **App Secret**.
4. Exchange them for an access token using a tool like `curl`:

```bash
curl -X POST "https://api.helpscout.net/v2/tokens" \
  --data "grant_type=client_credentials&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET"
```

Copy the `access_token` value from the response.

### Find your mailbox ID

Your mailbox ID is the numeric ID shown in the Help Scout dashboard URL when viewing a mailbox (e.g. `app.helpscout.com/mailboxes/12345`).

### Basic command

```bash
wp fluent_support helpscout_ticket_import \
  --access_token=YOUR_ACCESS_TOKEN \
  --mailbox_id=12345
```

If you omit either flag, the command will prompt you for it interactively.

### Resuming an interrupted migration

If the import stops partway through, run the same command again with the same `--mailbox_id`. Fluent Support saves progress after each page and continues from where it left off automatically.

### Parameters

| Flag | Required | Description |
|------|----------|-------------|
| `--access_token` | Yes | A Help Scout API access token |
| `--mailbox_id` | Yes | The numeric ID of the Help Scout mailbox to import |

