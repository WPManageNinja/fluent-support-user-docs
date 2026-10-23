# Connecting S3-Compatible Storage with FluentSupport

S3-Compatible Storage lets you keep ticket attachments with any storage provider that speaks the Amazon S3 API. Use it for **DigitalOcean Spaces**, **Wasabi**, **Backblaze B2**, **MinIO** and other S3-compatible services.

FluentSupport keeps your bucket private. Agents and customers open each file through a short-lived signed link, so nobody can browse your bucket.

::: info Pro feature
S3-Compatible Storage is part of FluentSupport Pro. For Amazon itself, use [Amazon S3](/amazon-s3). For Cloudflare, use [Cloudflare R2](/cloudflare).
:::

## Phase 1: Prepare Your Bucket

Do these steps in your storage provider's dashboard.

1. **Create a bucket.** Give it a name you'll recognize, such as `acme-support-files`. Keep the bucket **private**.
2. **Create an access key.** Create an access key and secret key that can read and write files in this bucket. Copy both keys and keep them safe. Most providers show the secret key only once.
3. **Find your endpoint.** The endpoint is your provider's S3 API host, without the bucket name.

| Provider | Endpoint example |
|---|---|
| DigitalOcean Spaces | `nyc3.digitaloceanspaces.com` |
| Wasabi | `s3.eu-central-1.wasabisys.com` |
| Backblaze B2 | `s3.us-west-004.backblazeb2.com` |
| MinIO | your server's host, such as `minio.example.com` |

## Phase 2: Connect It to FluentSupport

1. Go to **FluentSupport > Settings > File Upload Integrations**.
2. Find **S3-Compatible Storage** and click its **Settings (gear) icon**.

![The S3-Compatible Storage card in File Storage Settings](/images/integrations-channels/other/s3-compatible/s3-compatible-storage-card.webp)

3. Fill in the settings:
    * **Endpoint:** Your provider's endpoint from Phase 1, such as `nyc3.digitaloceanspaces.com`.
    * **Region:** Optional. Leave it empty and FluentSupport detects it from the endpoint. Enter it yourself if your provider gives you a region that the endpoint doesn't show.
    * **Access Key** and **Secret Key:** The keys you created in Phase 1.
    * **Bucket Name:** The exact name of your bucket.
    * **Addressing Style:** Keep **Virtual-hosted (bucket.endpoint)** for most providers. Choose **Path-style (endpoint/bucket)** if your provider needs it. MinIO usually does.
    * **Custom Domain (Optional):** Leave it empty unless your provider serves the bucket from your own domain, such as `https://files.yourdomain.com`.
    * **Path Prefix:** The folder for FluentSupport files inside your bucket. The default is `fluent-support`.
4. Click **Save & Connect**.

![S3-Compatible Storage settings filled in for DigitalOcean Spaces](/images/integrations-channels/other/s3-compatible/s3-compatible-storage-settings.webp)

5. When the connection succeeds, the S3-Compatible Storage card shows a switch. Turn it on to store new attachments in your bucket.

Only one storage is active at a time. Files you uploaded before keep working from where they are.

## Keep Your Keys Out of the Database (Optional)

You can define the settings in your `wp-config.php` file instead of the settings screen. When the access key constant exists, FluentSupport uses these values and shows the settings as read-only.

```php
define('FLUENT_SUPPORT_S3C_ENDPOINT', 'nyc3.digitaloceanspaces.com');
define('FLUENT_SUPPORT_S3C_ACCESS_KEY', 'your-access-key');
define('FLUENT_SUPPORT_S3C_SECRET_KEY', 'your-secret-key');
define('FLUENT_SUPPORT_S3C_BUCKET', 'your-bucket');
```

You can also set these optional constants:

- `FLUENT_SUPPORT_S3C_REGION`
- `FLUENT_SUPPORT_S3C_PATH_STYLE`: `'yes'` for path-style addressing
- `FLUENT_SUPPORT_S3C_CUSTOM_DOMAIN`
- `FLUENT_SUPPORT_S3C_PATH_PREFIX`

## Tips And Notes

::: warning The endpoint must be a public address
FluentSupport only connects to endpoints on the public internet. A MinIO server on your local network or on a private IP address fails with "The endpoint host could not be found or is not a public address."

To allow a private endpoint, a developer can add this filter to your site:

```php
add_filter('fluent_support_pro/storage_allow_private_endpoint', '__return_true');
```
:::

::: tip Changing your settings later
Each file remembers the connection that stored it. You can change the bucket, region or keys, or disconnect, and older attachments keep working.
:::
