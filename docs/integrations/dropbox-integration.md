# Dropbox Integration


---

**Dropbox** is a cloud storage platform that enables easy file storage, sharing, and seamless access and collaboration across multiple devices. Integrating it with **Fluent Support** stores your ticket attachments in your Dropbox instead of on your WordPress server. This article guides you through the integration process.

## How Dropbox Storage Works

When Dropbox is your active storage, every file attached to a ticket is uploaded to a private folder of your Dropbox app.

- **Files stay private.** Fluent Support never creates a public Dropbox link for them.
- **Files open from the ticket.** When an agent or customer opens an attachment, Fluent Support asks Dropbox for a short-lived download link (valid for a few hours) and sends the browser there. Only people who can see the ticket get that link.
- **Email notifications still include attachments.** Fluent Support fetches the file from Dropbox when it sends the email.

## Dropbox Integration With Fluent Support

To integrate Fluent Support with Dropbox, follow the steps with screenshots below —

### Create an app in Dropbox

To **create** or Log in to your **Dropbox** , **[click here](https://www.dropbox.com/)**. Then, go to your [**Dropbox Account**](https://www.dropbox.com/) developer section and click the **Create Apps** button to create an app in Dropbox.

![Create an app in Dropbox](/images/integrations-channels/other/dropbox-integration/dropbox-developer-create-apps-scaled-1.webp)

In the “**Choose an API**” select **Scoped Access** and in the “**Choose the type of access you need**” select **App folder**.
Then, give a name to your app, agree with the **terms and conditions** if you want, and finally click the **Create app** button.

![Create a new app on the DBX Platform popup page](/images/integrations-channels/other/dropbox-integration/create-a-new-app-on-the-dbx-platform-scaled.webp)

### Configure Dropbox Settings

Your Dropbox App **Settings** page will appear where you must provide an authorized **OAuth2 Redirect URL** and click the **Add** button.

![Dropbox App Settings](/images/integrations-channels/other/dropbox-integration/oauth2-redirect-url-paste-scaled-1.webp)

To **get this** **OAuth2 Redirect URL** , go to your Fluent Support **Dashboard > Settings > File Upload Integration > Dropbox >** **Setting Icon** > copy the **OAuth2 redirect URL.**

![Dropbox Configure option from Fluent Support dashboard](/images/integrations-channels/other/dropbox-integration/fluent-support-dashboard-global-integration-config-scaled-1.webp)

![OAuth2 Redirect URL](/images/integrations-channels/other/dropbox-integration/copy-authorixed-url-scaled-1.webp)

### Dropbox App Permissions

Now go to the **Permissions** tab of your Dropbox app, tick these permissions, and click the **Submit** button:

| Permission | What Fluent Support uses it for |
|---|---|
| `files.content.write` | Uploading attachments and deleting them when their ticket is deleted |
| `files.content.read` | Opening attachments and adding them to email notifications |
| `sharing.read` | Finding public links that older versions created |
| `sharing.write` | Removing those public links |

![Dropbox App Permissions](/images/integrations-channels/other/dropbox-integration/permissions-scaled-1.webp)
<!-- TODO: Capture a new screenshot of the Permissions tab with the four permissions above ticked and save it at /images/integrations-channels/other/dropbox-integration/permissions-scaled-1.webp -->

::: warning
Set the permissions **before** you connect Dropbox in Fluent Support. Fluent Support asks Dropbox for exactly these permissions when you connect, so Dropbox shows an error if one of them is not ticked in your app. If you change them later, click **Reconnect** in Fluent Support (see [Fix a missing permission](#fix-a-missing-permission)).
:::

### Obtain App Credentials

To obtain the app’s credentials, copy the **App Key** and **App Secret** from your Dropbox app settings.

![Obtain App Credentials](/images/integrations-channels/other/dropbox-integration/copy-the-api-key-api-secret-scaled-1.webp)

### Configure Dropbox in Fluent Support

Return to your **Fluent Support Dashboard,** go to **Settings,** click the **setting icon** under **File Upload Integrations,** and a popup will appear.

![Dropbox Configure option from Fluent Support dashboard](/images/integrations-channels/other/dropbox-integration/file-upload-integration-configure-1.webp)

Then, paste the **App key** & **App Secret** into the **Client ID** & **Client Secret** fields, and click the **Connect to Dropbox** button.

![Client ID, Client Secret and Connect to Dropbox options](/images/integrations-channels/other/dropbox-integration/paste-client-id-secret-connect-button-scaled-1.webp)

Finally, turn on the switch next to **Dropbox** on the **File Upload Integrations** page to make it your active storage.

This is how you can integrate Dropbox with Fluent Support!

## Fix a Missing Permission

If your Dropbox app is missing a permission, Fluent Support keeps new attachments on your WordPress server instead of uploading them, so nothing is lost. You will see a warning on the **File Upload Integrations** page and on the Fluent Support dashboard, for example:

> Your Dropbox app is missing the files.content.read permission.

To fix it:

1. Open the [Dropbox App Console](https://www.dropbox.com/developers/apps) and select your app.
2. Go to the **Permissions** tab, tick the missing permission (see the [permission list](#dropbox-app-permissions)), and click **Submit**.
3. In Fluent Support, go to **Settings > File Upload Integrations**, click the **setting icon** next to **Dropbox**, and click **Reconnect**. Dropbox shows its approval screen with the full list of permissions. Click **Allow**.
4. Files that could not be uploaded are sent to Dropbox again after you reconnect. If the warning is still showing, click **Retry now** under it.

<!-- TODO: Capture a screenshot of the missing-permission warning with the Retry now button and save it at /images/integrations-channels/other/dropbox-integration/missing-permission-warning.webp -->

::: tip
Fluent Support does not retry failed uploads on its own. A failed upload stays on your server until you click **Retry now** or reconnect Dropbox.
:::

## Files Uploaded by Older Versions

Older versions of Fluent Support Pro made every Dropbox attachment public through a shared link. Those files keep working as before.

::: info
If your app was set up without the `sharing.write` permission, older versions could not create the shared link at all. In that case those attachments were kept on your WordPress server and were never in Dropbox.
:::

## Advanced: Manage Files With WP-CLI

If you have [WP-CLI](https://wp-cli.org/) access, you can manage attachments in bulk:

```bash
# Copy attachments stored on your server to Dropbox, then remove the local copies
wp fluent_support storage move-to-remote --driver=dropbox

# Copy your Dropbox attachments back to your server (the Dropbox copies are kept)
wp fluent_support storage move-to-local --driver=dropbox

# Remove the public links older versions created on Dropbox files
wp fluent_support storage make-private --driver=dropbox
```

Add `--dry-run` to see how many files would be processed, and `--limit=50` to process only some of them. `make-private` needs the `sharing.read` and `sharing.write` permissions.

## Disconnecting Dropbox

When you click **Disconnect**, new attachments are stored on your WordPress server again. Files already in Dropbox stay there, and they keep opening from their tickets as long as the Dropbox app and account still exist. If you plan to delete the Dropbox app, copy the files back to your server first (see [Manage files with WP-CLI](#advanced-manage-files-with-wp-cli)).
