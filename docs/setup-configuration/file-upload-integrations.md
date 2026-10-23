# File Upload Integrations

Fluent Support offers several platforms for storing uploaded files: your **Default WordPress Storage**, **Dropbox**, **Google Drive**, **Cloudflare R2**, **Amazon S3** and **S3-Compatible Storage** (such as DigitalOcean Spaces, Wasabi, Backblaze B2 and MinIO). The remote storage options need Fluent Support Pro. You can select only one storage platform for your uploaded files at a time. This article will guide you through the process required to upload your files in fluent support.

## File Upload Integration With Fluent Support 

Go to **Settings** from your **Fluent Support Dashboard** and click on **File Upload Integrations** from the left sidebar.

### Enable Your File Storage Platform

To enable a third-party storage platform (like Dropbox or Google Drive), click the **Settings** (Gear Icon) located on the right side of the specific integration you want to set up.

For example, to set up Dropbox, click the gear icon next to the **Dropbox** option.

![Dropbox platform for file uploading](/images/setup-configuration/ticket-forms-fields/file-upload-integrations/file-upload-integration-configure-1-1.webp)

### Configuration Example: Dropbox

Once you click the settings icon, a pop-up window will appear requiring your credentials to connect the service. For Dropbox, you will need to provide the following:

  * **oAuth2 Redirect URL:** **Copy** the URL provided in the grey box and add it to your **Dropbox App** settings.
  * **Dropbox Client ID:** Enter your unique App Key/ID.
  * **Dropbox Client Secret:** Enter your unique App Secret.

Once you have entered the details, click the **Connect (or Reconnect)** button to authorize the integration.

![Configure DropboxSettings popup page](/images/setup-configuration/ticket-forms-fields/file-upload-integrations/configure-dropbox-settings-popup-1.webp)

### Detailed Integration Guides

For specific instructions on how to generate the Client IDs and Secrets required for these platforms, please refer to their respective documentation guides below:

 * **Dropbox Integration:** To learn how to generate your keys and integrate Dropbox, read this full [Documentation](/dropbox-integration) .
 * **Google Drive Integration:** To learn how to set up Google Drive storage for your tickets, read this full [Documentation](/google-drive-integration).
 * **Cloudflare R2 Integration:** To learn how to connect a Cloudflare R2 bucket, read this full [Documentation](/cloudflare).
 * **Amazon S3 Integration:** To learn how to connect an Amazon S3 bucket, read this full [Documentation](/amazon-s3).
 * **S3-Compatible Storage:** To learn how to connect DigitalOcean Spaces, Wasabi, Backblaze B2, MinIO or another S3-compatible service, read this full [Documentation](/s3-compatible-storage).

>Remember: No configuration is necessary if you choose to stick with the Default WordPress Storage platform.

Before uploading the files to **Google Drive** , you must integrate it with your Fluent Support.

## How Remote Files Are Handled

Once a remote storage is active, Fluent Support takes care of your files behind the scenes. Here is what to expect.

### Dropbox and Google Drive Files Stay Private

Files stored in Dropbox or Google Drive are never shared with a public link. Agents and customers open attachments from the ticket just as before, and Fluent Support first checks that the person is allowed to see that ticket:

* **Dropbox:** The file opens through a temporary link that Dropbox creates at that moment and that expires after 4 hours.
* **Google Drive:** Your site fetches the file from your Google Drive and delivers it directly, so the file never needs a share link.

::: info Dropbox permissions
Dropbox needs the **files.metadata.read**, **files.content.write**, **files.content.read**, **sharing.read** and **sharing.write** permissions on your Dropbox app. If any are missing, the Dropbox card shows a warning naming them. Enable them in the Dropbox App Console (Permissions tab), then reconnect Dropbox. See the [Dropbox guide](/dropbox-integration) for details.
:::

### Deleting Files Happens in the Background

When a ticket is deleted, its files are removed from your remote storage in the background, so you do not have to wait for the storage service. If a file cannot be removed, the storage card shows a warning with the number of files that could not be removed.

### Old Files Keep Working After Connection Changes

Each file remembers the storage account or bucket it was uploaded to. If you switch to a different storage, connect another account or bucket, or disconnect a storage, files uploaded earlier still open from their tickets as long as that storage account or bucket still exists.

::: warning
Do not delete the old bucket, account or app with your storage provider while tickets still use its files. Fluent Support can no longer open files that were removed on the provider's side.
:::

### Email Attachments

When a notification email includes attachments, Fluent Support fetches remote files and attaches them to the email as usual. Each email can carry up to **10 MB** of attachments in total. Files that would go over this limit, or that cannot be fetched from the storage, are listed under **Attachments** at the end of the email as download links instead. These links stay valid for **30 days**.

## Moving Existing Files With WP-CLI

Turning on a remote storage only affects **new** uploads. Files that are already on your server stay there. If you have server access, you can move them with WP-CLI. Connect the storage first, as the commands only work with a connected storage.

```bash
wp fluent_support storage move-to-remote --driver=s3_compatible --dry-run
wp fluent_support storage move-to-remote --driver=s3_compatible
```

* **move-to-remote:** Copies the attachments stored on your server to the remote storage, then removes the local copies.
* **move-to-local:** Copies a storage's attachments back to your server. The remote copies are kept.
* **make-private** (Dropbox and Google Drive only): Removes the public links that older versions of Fluent Support Pro created. The files keep opening from their tickets afterwards.

Use `--driver` to pick the storage: `amazon_s3`, `cloudflare_r2`, `s3_compatible`, `dropbox` or `google_drive`. Add `--dry-run` to only count the files without moving them, and `--limit=<number>` to stop after that many files.

::: tip
Run the command with `--dry-run` first to see how many files will be moved.
:::

This is how you can integrate File Upload Platforms with Fluent Support!  
