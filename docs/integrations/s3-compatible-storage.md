# Connecting S3-Compatible Storage with FluentSupport

If your helpdesk receives a lot of file attachments, storing them directly on your WordPress site can quickly eat up your server space. Many cloud storage providers speak the same "S3 language" that Amazon S3 uses. With the **S3-Compatible Storage** option, you can send your ticket attachments to any of these providers instead, which keeps your site light and your files safe in the cloud.

This guide shows you how to connect your storage to FluentSupport. At the end, we also walk through **Backblaze B2** as an example of how to collect the details you need from a provider.

> **Pro feature:** S3-Compatible Storage is available in **FluentSupport Pro**. Using Amazon S3 or Cloudflare R2? They have their own guides: [Amazon S3](/amazon-s3) and [Cloudflare R2](/cloudflare).

## Supported Providers

S3-Compatible Storage works with any service that offers an S3-compatible API, including:

* **Backblaze B2**
* **DigitalOcean Spaces**
* **Wasabi**
* **MinIO** (self-hosted)
* Other services that support the S3 API

## What You Will Need

Before you connect, collect these details from your storage provider:

* **Endpoint:** The address of your provider's S3 service, such as `s3.us-west-004.backblazeb2.com`.
* **Bucket Name:** The name of the private bucket (container) where your files will be stored.
* **Access Key and Secret Key:** A pair of keys that can read, upload and delete files in that bucket.

Not sure where to find them? Jump to the [Backblaze B2 example](#example-collecting-your-details-from-backblaze-b2) below to see how it is done.

> **⚠️ IMPORTANT:** Most providers show the Secret Key only once, right after you create it. Copy both keys to a safe place before you leave that page.

## Phase 1: Connecting Your Storage to FluentSupport

1. Log in to your WordPress admin dashboard and go to **FluentSupport > Settings**.
2. In the left sidebar, click on **File Upload Integrations**.
3. Find the **S3-Compatible Storage** option in the list and click the **Settings (gear) icon** on the right side.

![File Storage Settings page with the gear icon of S3-Compatible Storage highlighted](/images/integrations-channels/other/s3-compatible/storage-card.webp)

4. A pop-up window named **Configure S3-Compatible Storage Settings** will appear. Carefully fill in your information:
    * **Endpoint:** Paste your provider's endpoint, for example `s3.us-west-004.backblazeb2.com`. Do not add the bucket name. If you paste it with `https://`, FluentSupport removes that for you.
    * **Region:** Optional. Leave it empty and FluentSupport reads the region from the endpoint for Backblaze B2, DigitalOcean Spaces and Wasabi. For other providers, type your bucket's region.
    * **Access Key:** Paste the access key (for Backblaze, the **keyID**).
    * **Secret Key:** Paste the secret key (for Backblaze, the **applicationKey**).
    * **Bucket Name:** Type the exact name of your bucket, for example `fluentsupport`.
    * **Addressing Style:** Keep **Virtual-hosted (bucket.endpoint)** for most providers. Choose **Path-style (endpoint/bucket)** only if your provider requires it, as MinIO usually does.
    * **Custom Domain (Optional):** You can leave this empty.
    * **Path Prefix:** Keep `fluent-support`. This is the folder inside your bucket where your files will be organized.
5. Click the **Save & Connect** button.

![Configure S3-Compatible Storage Settings pop-up with the Endpoint, Region, Access Key, Secret Key, Bucket Name, Addressing Style, Custom Domain and Path Prefix fields](/images/integrations-channels/other/s3-compatible/settings-form.webp)

FluentSupport now checks that it can reach your bucket with these keys. If everything is correct, you will see the message **Storage settings have been saved**.

## Phase 2: Making It Your Active Storage

Saving the settings connects your storage, but FluentSupport will not use it until you switch it on.

1. Close the pop-up to return to the **File Storage Settings** page.
2. On the **S3-Compatible Storage** option, turn on the **toggle switch**.
3. An **Active** badge appears next to the name, and the **Default WordPress Storage** switches off.

![S3-Compatible Storage with the toggle turned on and the Active badge](/images/integrations-channels/other/s3-compatible/storage-active.webp)

> **Only one storage can be active at a time.** New uploads go to the active storage, while files uploaded earlier stay where they were saved and keep opening as usual.

**Optional: Upload in the background.** Below the storage list, you will find the **Upload in the background** switch. When it is on, replies are saved right away and the files are copied to your remote storage a few seconds later. This is helpful if you often upload large files.

## Test Your Connection

1. Open any ticket and add a reply with a small attachment, such as an image.
2. Open the attachment from the ticket. It should open or download as usual.
3. In your provider's dashboard, open your bucket. You should see the file inside the `fluent-support` folder, in a sub-folder named after the ticket.

## Example: Collecting Your Details from Backblaze B2

The screens differ from provider to provider, but the idea is always the same: create a private bucket, create a key for it, and copy the endpoint. Here is how it looks in **Backblaze B2**.

### Step 1: Create a Bucket

1. Log in to your **Backblaze** account. In the left sidebar, under **B2 Cloud Storage**, click on **Buckets**.
2. Click the **Create a Bucket** button.

![Backblaze B2 Buckets page with the Create a Bucket button](/images/integrations-channels/other/s3-compatible/backblaze-create-bucket.webp)

3. In the **Bucket Unique Name** box, type a name for your bucket, such as `fluentsupport`. The name must be unique across all of Backblaze and at least 6 characters long.
4. Under **Files in Bucket are**, make sure **Private** is selected. FluentSupport never needs public access to your files, because it opens them through short-lived secure links.
5. Leave the other options as they are and click **Create a Bucket**.

![Backblaze Create a Bucket pop-up with the bucket name and the Private option selected](/images/integrations-channels/other/s3-compatible/backblaze-bucket-name.webp)

### Step 2: Copy the Endpoint

Your bucket now appears on the **Buckets** page. Look for the **Endpoint** line on the bucket card and copy its value. This is what you paste into the **Endpoint** field in FluentSupport.

![Backblaze bucket card with the Endpoint line highlighted](/images/integrations-channels/other/s3-compatible/backblaze-endpoint.webp)

> **Note:** Your endpoint can be different from the example, depending on the region of your account. Always copy the exact value shown on your own bucket.

### Step 3: Create an Application Key

1. In the left sidebar, click on **Application Keys**.
2. Scroll down to the **Your Application Keys** section and click **Add a New Application Key**.

> **Please don't use the Master Application Key.** It has full access to your whole Backblaze account. Always create a separate key for FluentSupport, so you can limit it to one bucket.

![Backblaze Application Keys page with the Add a New Application Key button](/images/integrations-channels/other/s3-compatible/backblaze-application-keys.webp)

3. In the pop-up window, fill in the details:
    * **Name of Key:** Type a name you will recognize, such as `fluentsupport-key`.
    * **Allow access to Bucket(s):** Select the bucket you created in Step 1.
    * **Type of Access:** Choose **Read and Write**. This lets FluentSupport upload, open and delete files.
4. Leave the other options empty and click **Create New Key**.

![Backblaze Add Application Key pop-up with the key name, bucket and Read and Write access selected](/images/integrations-channels/other/s3-compatible/backblaze-add-application-key.webp)

5. Backblaze now shows a green success box with your new **keyID** and **applicationKey**.

> **⚠️ IMPORTANT:** The **applicationKey** appears only once. Click **Copy to Clipboard** or copy both values into a safe notepad right now. If you leave this page without saving them, you will have to create a new key.

![Backblaze success message showing the keyID and applicationKey](/images/integrations-channels/other/s3-compatible/backblaze-key-created.webp)

### Step 4: Add Them to FluentSupport

Now go back to [Phase 1](#phase-1-connecting-your-storage-to-fluentsupport) and paste your details. Here is how the Backblaze names match the FluentSupport fields:

| Backblaze | FluentSupport |
|---|---|
| Endpoint (on the bucket card) | **Endpoint** |
| Bucket name | **Bucket Name** |
| **keyID** | **Access Key** |
| **applicationKey** | **Secret Key** |

## Other Providers

For other providers, follow the same idea. Create a private bucket, create a key that can read and write to it, and copy the provider's endpoint. Common endpoint formats are:

| Provider | Endpoint format | Example | Addressing Style |
|---|---|---|---|
| Backblaze B2 | `s3.<region>.backblazeb2.com` | `s3.us-west-004.backblazeb2.com` | Virtual-hosted |
| DigitalOcean Spaces | `<region>.digitaloceanspaces.com` | `nyc3.digitaloceanspaces.com` | Virtual-hosted |
| Wasabi | `s3.<region>.wasabisys.com` | `s3.eu-central-1.wasabisys.com` | Virtual-hosted |
| MinIO | Your MinIO server's address | `minio.yourdomain.com` | Path-style |

For Backblaze B2, DigitalOcean Spaces and Wasabi, you can leave **Region** empty. For other providers, an empty **Region** is treated as `us-east-1`, so type your region if your provider uses a different one.

> **MinIO and private servers:** The endpoint must be a public address that your WordPress site can reach over the internet. A MinIO server on `localhost` or on a private local network address is not accepted. To allow a private endpoint, a developer can add this filter to your site:
>
> ```php
> add_filter('fluent_support_pro/storage_allow_private_endpoint', '__return_true');
> ```

## Keep Your Keys Out of the Database (Optional)

You can define the settings in your `wp-config.php` file instead of the settings screen. When the access key constant exists, FluentSupport uses these values and shows the settings as read-only.

```php
define('FLUENT_SUPPORT_S3C_ENDPOINT', 'nyc3.digitaloceanspaces.com');
define('FLUENT_SUPPORT_S3C_ACCESS_KEY', 'your-access-key');
define('FLUENT_SUPPORT_S3C_SECRET_KEY', 'your-secret-key');
define('FLUENT_SUPPORT_S3C_BUCKET', 'your-bucket');
```

You can also set these optional constants:

* `FLUENT_SUPPORT_S3C_REGION`
* `FLUENT_SUPPORT_S3C_PATH_STYLE`: `'yes'` for path-style addressing
* `FLUENT_SUPPORT_S3C_CUSTOM_DOMAIN`
* `FLUENT_SUPPORT_S3C_PATH_PREFIX`

## Troubleshooting

If FluentSupport cannot connect, the pop-up shows a message that starts with **Connection failed:** followed by the reason. Common causes:

* **Bucket does not exist:** Check the **Bucket Name** and make sure it matches the bucket that belongs to your **Endpoint**.
* **Access denied to bucket:** Check your **Access Key** and **Secret Key**. Also make sure the key is allowed to use that bucket with read and write access.
* **The endpoint host could not be found or is not a public address:** Check the **Endpoint** for typos, and remove the bucket name and any `https://` from it.
* **Please enter the secret key again when changing where files are stored:** When you change the **Endpoint**, type the **Secret Key** again before saving.

If a file could not be uploaded, FluentSupport keeps it safely on your WordPress server and shows a warning on the storage option. After fixing the problem, click **Retry now** to upload those files again.

## Changing or Disconnecting the Connection

Once connected, the pop-up shows a **Reconnect** button and a **Disconnect** button.

* To update your keys or bucket, change the fields and click **Reconnect**.
* To stop using this storage, click **Disconnect** and confirm.

Files that were already uploaded stay in your bucket, and FluentSupport remembers how to reach them. They keep opening from their tickets after you change the connection or disconnect, as long as the bucket and its keys still exist with your provider. To learn more, see [How Remote Files Are Handled](/file-upload-integrations#how-remote-files-are-handled).

**Congratulations!** Your FluentSupport is now connected to your S3-compatible storage, and new ticket attachments will be stored in your bucket.
