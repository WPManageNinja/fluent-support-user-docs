# Connecting S3-Compatible Storage with FluentSupport

Many cloud storage providers speak the same "S3" language that Amazon S3 uses. With the **S3-Compatible Storage** option, you can store your ticket attachments with any of these providers instead of on your WordPress server, which keeps your site light and your files safe in the cloud.

This guide walks you through creating a bucket and access keys with your provider, then connecting them to FluentSupport.

::: info Pro feature
S3-Compatible Storage is available in **FluentSupport Pro**. Using Amazon S3 or Cloudflare R2? They have their own guides: [Amazon S3](/amazon-s3) and [Cloudflare R2](/cloudflare).
:::

## Supported Providers

S3-Compatible Storage works with any service that offers an S3-compatible API, including:

* **DigitalOcean Spaces**
* **Wasabi**
* **Backblaze B2**
* **MinIO** (self-hosted)
* Other services that support the S3 API

## Before You Begin

Make sure you have the following ready:

* **FluentSupport Pro** installed and activated.
* An account with your storage provider.
* A **bucket** (the container your files will be stored in). Keep it **private**; FluentSupport never needs public access to your files.
* An **access key** and a **secret key** that can list, read, upload and delete files in that bucket.
* Your provider's **endpoint** (the address of its S3 service). See [Endpoint and Region Examples](#endpoint-and-region-examples) below.

::: warning Save your secret key
Most providers show the secret key only once, right after you create it. Copy both keys to a safe place before you leave that page.
:::

## Step 1: Create a Bucket and Access Keys

The exact screens differ from provider to provider, but the steps are the same:

1. Log in to your storage provider's dashboard.
2. Create a new bucket, for example `fluentsupport-files`. Leave it **private**.
3. Note the bucket's **region** and the provider's **endpoint**.
4. Create an access key pair (some providers call it an "application key" or "API key") with read and write access to the bucket.
5. Copy the **access key** and the **secret key** and keep them somewhere safe.

## Step 2: Connect Your Storage to FluentSupport

1. Log in to your WordPress admin dashboard.
2. Go to **FluentSupport > Settings**.
3. In the left sidebar, click **File Upload Integrations**.
4. Find the **S3-Compatible Storage** card and click the **Settings (gear) icon** on the right.

<!-- TODO: Capture screenshot of the File Storage Settings page with the S3-Compatible Storage card and its gear icon highlighted, and save it at /images/integrations-channels/other/s3-compatible/storage-card.webp -->
![File Storage Settings page showing the S3-Compatible Storage card with its gear icon](/images/integrations-channels/other/s3-compatible/storage-card.webp)

5. A pop-up window named **Configure S3-Compatible Storage Settings** opens. Fill in the fields:
    * **Endpoint:** The S3 address of your provider, without the bucket name and without `https://`, for example `nyc3.digitaloceanspaces.com`.
    * **Region:** Optional. Leave it empty to let FluentSupport detect it from the endpoint, or type your bucket's region.
    * **Access Key:** Paste the access key from Step 1.
    * **Secret Key:** Paste the secret key from Step 1.
    * **Bucket Name:** Type the exact name of your bucket.
    * **Addressing Style:** Choose **Virtual-hosted (bucket.endpoint)** for most providers. Choose **Path-style (endpoint/bucket), e.g. MinIO** if your provider requires it, as MinIO usually does.
    * **Custom Domain (Optional):** You can leave this empty.
    * **Path Prefix:** Optional. The folder inside your bucket where files are saved. If you leave it empty, `fluent-support` is used.
6. Click **Save & Connect**.

<!-- TODO: Capture screenshot of the Configure S3-Compatible Storage Settings pop-up with sample values filled in (keys blurred), and save it at /images/integrations-channels/other/s3-compatible/settings-form.webp -->
![Configure S3-Compatible Storage Settings pop-up with the Endpoint, Region, Access Key, Secret Key, Bucket Name, Addressing Style, Custom Domain and Path Prefix fields](/images/integrations-channels/other/s3-compatible/settings-form.webp)

FluentSupport now checks that it can reach your bucket with these keys. If everything is correct, you will see the message **Storage settings have been saved**.

## Step 3: Make It Your Active Storage

Saving the settings connects your storage, but does not switch to it yet.

1. Close the pop-up to return to the **File Storage Settings** page.
2. On the **S3-Compatible Storage** card, turn on the toggle switch.
3. The card now shows an **Active** badge.

<!-- TODO: Capture screenshot of the S3-Compatible Storage card with the toggle on and the Active badge visible, and save it at /images/integrations-channels/other/s3-compatible/storage-active.webp -->
![S3-Compatible Storage card with the toggle switched on and the Active badge](/images/integrations-channels/other/s3-compatible/storage-active.webp)

::: info One storage at a time
Only one storage option can be active. New uploads go to the active storage, while files uploaded earlier stay where they were saved and keep opening as usual.
:::

## Endpoint and Region Examples

Use your provider's dashboard to confirm the exact values for your bucket. Common formats are:

| Provider | Endpoint format | Example | Addressing Style |
|---|---|---|---|
| DigitalOcean Spaces | `<region>.digitaloceanspaces.com` | `nyc3.digitaloceanspaces.com` | Virtual-hosted |
| Wasabi | `s3.<region>.wasabisys.com` | `s3.eu-central-1.wasabisys.com` | Virtual-hosted |
| Backblaze B2 | `s3.<region>.backblazeb2.com` | `s3.us-west-004.backblazeb2.com` | Virtual-hosted |
| MinIO | Your MinIO server's address | `minio.yourdomain.com` | Path-style |

For DigitalOcean Spaces, Wasabi and Backblaze B2, you can leave **Region** empty; FluentSupport reads it from the endpoint. For other providers, an empty **Region** is treated as `us-east-1`, so type your region if your provider uses a different one.

::: warning MinIO and private servers
The endpoint must be a public address that your WordPress site can reach over the internet. A MinIO server on `localhost` or on a private local network address is not accepted.
:::

## Test Your Connection

1. Open any ticket and add a reply with a small attachment, such as an image.
2. Open the attachment from the ticket. It should open or download as usual.
3. In your provider's dashboard, open your bucket. You should see the file inside your **Path Prefix** folder (for example `fluent-support`), in a folder named after the ticket.

## Troubleshooting

If FluentSupport cannot connect, the pop-up shows a message that starts with **Connection failed:** followed by the reason. Common causes:

* **Bucket does not exist:** Check the **Bucket Name** and make sure it is in the same region as your **Endpoint**.
* **Access denied to bucket:** Check your **Access Key** and **Secret Key**, and make sure the key is allowed to use that bucket.
* **The endpoint host could not be found or is not a public address:** Check the **Endpoint** for typos, and remove the bucket name and any `https://` from it.
* **Please enter the secret key again when changing where files are stored:** When you change the **Endpoint**, type the **Secret Key** again before saving.

If a file could not be uploaded, FluentSupport keeps it safely on your WordPress server and shows a warning on the storage card. After fixing the problem, click **Retry now** on the card to upload those files again.

## Changing or Disconnecting the Connection

Once connected, the pop-up shows a **Reconnect** button and a **Disconnect** button.

* To update your keys or bucket, change the fields and click **Reconnect**.
* To stop using this storage, click **Disconnect** and confirm.

Files that were already uploaded stay in your bucket, and FluentSupport remembers how to reach them. They keep opening from their tickets after you change the connection or disconnect, as long as the bucket and its keys still exist with your provider. To learn more, see [How Remote Files Are Handled](/file-upload-integrations#how-remote-files-are-handled).

**Congratulations!** Your FluentSupport is now connected to your S3-compatible storage, and new ticket attachments will be stored in your bucket.
