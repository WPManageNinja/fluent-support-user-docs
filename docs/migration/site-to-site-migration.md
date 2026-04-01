# Fluent Support - Site-to-Site Ticket Migration Guide

This comprehensive guide explains how to successfully migrate all your Fluent Support data—including tickets, conversations, customers, agents, attachments, and settings—from one WordPress website to another.

Because there is no built-in, one-click tool for site-to-site transfers, this process involves direct database operations. Please follow these instructions carefully to ensure a smooth transition.

## 1. What Gets Migrated?

Fluent Support stores all its data in custom database tables prefixed with `fs_` and saves physical attachment files in your WordPress uploads directory. Here is exactly what will be transferred:

* **Tickets (`fs_tickets`):** All support tickets, along with their statuses, priorities, and timestamps.
* **Conversations (`fs_conversations`):** All ticket replies, internal notes, and messages.
* **Profiles (`fs_persons`):** All customer and agent profile data.
* **Attachments Data (`fs_attachments`):** File references, URLs, and server paths (metadata).
* **Physical Files:** The actual files located in your server's `wp-content/uploads/fluent-support/` directory.
* **Configurations:** Mailboxes (`fs_mail_boxes`) and Products/categories (`fs_products`).
* **Tags & Groups:** Ticket tags and agent group definitions (`fs_taggables`), as well as their assignments (`fs_tag_pivot`).
* **System Data:** Metadata and settings (`fs_meta`), ticket Activity Logs (`fs_activities`), Agent performance metrics (`fs_data_metrix`), and AI usage tracking (`fs_ai_activity_logs`).
* **Pro Features (If applicable):** Saved/canned replies (`fs_saved_replies`), Time tracking logs (`fs_time_tracks`), Workflows (`fs_workflows`), and Workflow individual actions (`fs_workflow_actions`).


## 2. Migration Prerequisites

Before initiating the migration, ensure you have the following ready:

* **Destination Setup:** Fluent Support must be installed and activated on the destination site. You must run it at least once so the system generates the empty database tables.
* **Pro Version:** If you utilize Pro features, Fluent Support Pro must also be installed and activated on the destination site.
* **Server Access:** You need database access (e.g., phpMyAdmin, Adminer, or MySQL CLI) and file access (e.g., FTP, SFTP, or a file manager) for both the source and destination websites.

> **⚠️ CRITICAL:** Always create a complete backup of both the source and destination sites before proceeding.

## 3. Choosing a Migration Method

There are three primary ways to migrate your data:

* **Database Export/Import (Recommended):** Export specific Fluent Support tables from the source database and import them into the destination. This offers clean, selective control over your data, though it requires basic SQL knowledge.
* **Full SQL Dump:** Use `mysqldump` via command line to export only the Fluent Support tables. This is incredibly fast for large datasets but requires SSH/CLI access.
* **Migration Plugins:** Use a plugin like WP Migrate DB, All-in-One WP Migration, or UpdraftPlus. This provides a user-friendly interface, but some plugins require a premium version to selectively migrate specific tables.

--- 

## Step-by-Step: Database Export/Import

### Step 1: Prepare the Source Site

First, log in to your **source site's WordPress admin dashboard** and note down a few details you'll need for verification later —

- Total number of tickets
- Number of agents and customers
- Any active mailbox configurations

Then, check your **WordPress table prefix** — you'll need this when exporting. You can find it in `wp-config.php`:

```php
$table_prefix = 'wp_';
```

Most sites use `wp_` as the default prefix.

### Step 2: Export the Database Tables

Now export all the Fluent Support tables from your source database. Replace `wp_` with your actual table prefix wherever needed.

**Core tables (free plugin):**
```
wp_fs_tickets
wp_fs_conversations
wp_fs_persons
wp_fs_attachments
wp_fs_mail_boxes
wp_fs_products
wp_fs_taggables
wp_fs_tag_pivot
wp_fs_meta
wp_fs_activities
wp_fs_data_metrix
wp_fs_ai_activity_logs
```

**Pro tables (if using Fluent Support Pro):**
```
wp_fs_saved_replies
wp_fs_time_tracks
wp_fs_workflows
wp_fs_workflow_actions
```

#### Using phpMyAdmin

1. Open **phpMyAdmin** on the source site and select your WordPress database.
2. Click the **Export** tab and choose **Custom** export method.
3. In the **Tables** section, deselect all tables, then select only the `fs_` prefixed tables listed above.
4. Set the format to **SQL**.
5. Under **Object creation options**, check **"Add DROP TABLE / VIEW / PROCEDURE / FUNCTION / EVENT / TRIGGER statement"** — but only if the destination is a fresh Fluent Support install with no existing data you want to keep.
6. Click **Go** to download the SQL file.

#### Using MySQL Command Line

```bash
# Replace values with your actual database credentials and table prefix
DB_NAME="your_database_name"
DB_USER="your_db_user"
DB_PASS="your_db_password"
DB_HOST="localhost"
PREFIX="wp_"

mysqldump -u $DB_USER -p$DB_PASS -h $DB_HOST $DB_NAME \
  ${PREFIX}fs_tickets \
  ${PREFIX}fs_conversations \
  ${PREFIX}fs_persons \
  ${PREFIX}fs_attachments \
  ${PREFIX}fs_mail_boxes \
  ${PREFIX}fs_products \
  ${PREFIX}fs_taggables \
  ${PREFIX}fs_tag_pivot \
  ${PREFIX}fs_meta \
  ${PREFIX}fs_activities \
  ${PREFIX}fs_data_metrix \
  ${PREFIX}fs_ai_activity_logs \
  ${PREFIX}fs_saved_replies \
  ${PREFIX}fs_time_tracks \
  ${PREFIX}fs_workflows \
  ${PREFIX}fs_workflow_actions \
  > fluent_support_export.sql
```

> **NOTE:** If you are on the free version and the Pro tables don't exist, simply omit the last four tables. `mysqldump` will throw an error if a table doesn't exist.

#### Using WP-CLI

```bash
wp db export fluent_support_export.sql --tables=$(wp db tables 'wp_fs_*' --format=csv)
```

---

### Step 3: Export Attachment Files

Fluent Support stores all uploaded files in this directory on your server:

```
wp-content/uploads/fluent-support/
```

Copy the entire `fluent-support/` folder from the source site.

#### Using SSH/SCP

```bash
# On the source server, create a compressed archive
cd /path/to/wordpress/wp-content/uploads/
tar -czf fluent-support-files.tar.gz fluent-support/

# Download to your local machine
scp user@source-server:/path/to/wordpress/wp-content/uploads/fluent-support-files.tar.gz .
```

#### Using FTP/SFTP

1. Connect to the source site via FTP/SFTP.
2. Navigate to `wp-content/uploads/`.
3. Download the entire `fluent-support/` folder.

---

### Step 4: Export WordPress User Accounts

Fluent Support links customers and agents to WordPress user accounts via the `user_id` field in the `fs_persons` table. For migration to work correctly, those same WordPress users must exist on the destination site.

**Option A: Full site migration** — WordPress users are already included. You can skip this step.

**Option B: Migrating only Fluent Support data** — You need to ensure matching users exist on the destination site. Run this query on the source database to get a list of all WordPress users linked to Fluent Support:

```sql
SELECT DISTINCT p.user_id, u.user_login, u.user_email, u.display_name
FROM wp_fs_persons p
LEFT JOIN wp_users u ON p.user_id = u.ID
WHERE p.user_id IS NOT NULL AND p.user_id > 0
ORDER BY p.person_type, p.id;
```

You'll then need to create these users on the destination site (manually or using a user export/import plugin) before moving on.

---

### Step 5: Import on the Destination Site

> **IMPORTANT:** Make sure Fluent Support is installed and activated on the destination site before importing. If the destination already has Fluent Support data you want to preserve, see the [FAQ section on merging data](#faq) below.

#### If both sites use the same table prefix

Import the SQL file directly using your preferred method.

**Using phpMyAdmin:**
1. Open **phpMyAdmin** on the destination site and select the WordPress database.
2. Click the **Import** tab.
3. Choose the exported SQL file and click **Go**.

**Using MySQL CLI:**
```bash
mysql -u DB_USER -pDB_PASS -h DB_HOST DB_NAME < fluent_support_export.sql
```

**Using WP-CLI:**
```bash
wp db import fluent_support_export.sql
```

#### If the table prefixes are different between sites

You must update the table prefix in the SQL file before importing. For example, if the source uses `wp_` and the destination uses `wps_`:

```bash
sed -i 's/wp_fs_/wps_fs_/g' fluent_support_export.sql
```

Then import the modified file.

---

### Step 6: Import Attachment Files

Now upload the attachment files to the destination site.

#### Using SSH/SCP

```bash
# Upload to the destination server
scp fluent-support-files.tar.gz user@dest-server:/path/to/wordpress/wp-content/uploads/

# On the destination server, extract
cd /path/to/wordpress/wp-content/uploads/
tar -xzf fluent-support-files.tar.gz
```

#### Using FTP/SFTP

1. Connect to the destination site via FTP/SFTP.
2. Navigate to `wp-content/uploads/`.
3. Upload the `fluent-support/` folder.

Make sure the folder permissions are set correctly — typically `755` for directories and `644` for files.

---

### Step 7: Fix URLs and File Paths

If the source and destination sites have different domain names, you must update the file URLs and paths stored in the database. Run the following SQL queries on the **destination database** — replace the domain names with your actual values:

```sql
-- Update attachment full URLs
UPDATE wp_fs_attachments
SET full_url = REPLACE(full_url, 'https://old-site.com', 'https://new-site.com')
WHERE full_url LIKE '%old-site.com%';

-- Update attachment file paths (if the server path differs)
UPDATE wp_fs_attachments
SET file_path = REPLACE(file_path, '/old/server/path/wp-content/uploads', '/new/server/path/wp-content/uploads')
WHERE file_path LIKE '%/old/server/path/%';

-- Update any URLs in ticket content
UPDATE wp_fs_tickets
SET content = REPLACE(content, 'https://old-site.com', 'https://new-site.com')
WHERE content LIKE '%old-site.com%';

-- Update any URLs in conversation content
UPDATE wp_fs_conversations
SET content = REPLACE(content, 'https://old-site.com', 'https://new-site.com')
WHERE content LIKE '%old-site.com%';

-- Update mailbox settings if needed
UPDATE wp_fs_mail_boxes
SET settings = REPLACE(settings, 'old-site.com', 'new-site.com')
WHERE settings LIKE '%old-site.com%';

-- Update email footer if it contains site URLs
UPDATE wp_fs_mail_boxes
SET email_footer = REPLACE(email_footer, 'https://old-site.com', 'https://new-site.com')
WHERE email_footer LIKE '%old-site.com%';
```

#### Using WP-CLI (Recommended)

WP-CLI handles serialized data safely and is the recommended approach for the URL replacement:

```bash
wp search-replace 'https://old-site.com' 'https://new-site.com' \
  wp_fs_attachments wp_fs_tickets wp_fs_conversations wp_fs_mail_boxes wp_fs_meta \
  wp_fs_products wp_fs_saved_replies \
  --precise --recurse-objects
```

---

### Step 8: Re-link WordPress User Accounts

The `fs_persons` table has a `user_id` column that references WordPress user IDs (`wp_users.ID`). If user IDs differ between the source and destination sites, you'll need to update these references.

#### If user IDs are the same (full site migration)

No action needed. Skip to Step 9.

#### If user IDs differ (Fluent Support data only migration)

The safest approach is to re-map `user_id` values by matching email addresses:

```sql
-- Update customer/agent user_id based on matching email addresses
UPDATE wp_fs_persons p
INNER JOIN wp_users u ON p.email = u.user_email
SET p.user_id = u.ID
WHERE p.user_id IS NOT NULL AND p.user_id > 0;
```

Also update the `created_by` field in related tables:

```sql
-- Update mailbox creator references
UPDATE wp_fs_mail_boxes mb
INNER JOIN wp_fs_persons p ON mb.created_by = p.user_id
SET mb.created_by = p.user_id;

-- Update product creator references
UPDATE wp_fs_products pr
INNER JOIN wp_users u ON pr.created_by IN (
    SELECT old_user_id FROM your_mapping_table
)
SET pr.created_by = u.ID;
```

> **TIP:** If user IDs can't be re-mapped, agents won't be linked to their WordPress login accounts. They can be re-linked manually via **Fluent Support > Settings > Agents**, or by updating `fs_persons.user_id` directly in the database.

#### Re-assign Agent Permissions

After migration, each agent needs the proper WordPress user meta for Fluent Support permissions. Run this query to check if permissions exist on the destination:

```sql
SELECT u.ID, u.user_email, um.meta_value
FROM wp_users u
INNER JOIN wp_fs_persons p ON u.ID = p.user_id AND p.person_type = 'agent'
LEFT JOIN wp_usermeta um ON u.ID = um.user_id AND um.meta_key = '_fluent_support_permissions'
ORDER BY u.ID;
```

If permissions are missing, you can copy the user meta from the source site export or set them manually in **Fluent Support > Settings > Agents**.

---

### Step 9: Verify the Migration

After completing the import, log in to your destination site's WordPress admin and go to your **Fluent Support Dashboard** to verify everything is working correctly.

| What to Check | How to Check |
|---------------|--------------|
| Ticket count matches | Compare the dashboard ticket count with the source site |
| Tickets open correctly | Click into several tickets and verify content loads |
| Conversations display | Open a ticket and check all replies are visible in the correct order |
| Attachments accessible | Click on file attachments to verify they download correctly |
| Customer profiles | Go to the **Customers** section and verify profiles are intact |
| Agent profiles | Go to **Settings > Agents** and verify agents are listed |
| Mailbox configuration | Check **Settings > Email Piping / Mailboxes** |
| Tags display | Verify ticket tags are visible in ticket views |
| Saved Replies (Pro) | Confirm saved/canned replies are available |
| Workflows (Pro) | Confirm automation workflows are intact |

---

## Handling Attachment Files

Fluent Support stores attachments in: `wp-content/uploads/fluent-support/`

Each attachment record in the `fs_attachments` table contains two important path fields:

- **`file_path`** — The absolute server path (e.g., `/var/www/html/wp-content/uploads/fluent-support/ticket-42/image.png`)
- **`full_url`** — The web-accessible URL (e.g., `https://example.com/wp-content/uploads/fluent-support/ticket-42/image.png`)

Both fields must be updated after migration if the domain or server path changes. See [Step 7](#step-7-fix-urls-and-file-paths) above.

> **NOTE:** Fluent Support uses signed URLs for secure file access (`?fst_file={hash}&secure_sign={signature}`). The `file_hash` column in `fs_attachments` is used for this. Signatures are generated dynamically — they do **not** need to be migrated and will work automatically on the new site.

---

## Handling User Account Mapping

The `fs_persons.user_id` column links Fluent Support persons to WordPress user accounts. This is critical for agent login, customer portal access, permission checks, and email notification routing.

There are three scenarios you may encounter:

**Scenario 1: Full site migration (same users)**
No action needed. User IDs remain the same.

**Scenario 2: Fresh destination site with new user accounts**
WordPress user IDs will differ. Use the email-based remapping query from [Step 8](#step-8-re-link-wordpress-user-accounts) to fix this.

**Scenario 3: Users don't exist on the destination site**
Create the necessary WordPress user accounts first (matching email addresses), then run the remapping query. Without valid `user_id` links, agents won't be able to log in to the Fluent Support dashboard, and customers won't see their tickets in the customer portal.

---

## Post-Migration Checklist

Go through this checklist after completing the migration to make sure everything is in order:

- [ ] **Ticket count** matches between source and destination
- [ ] **Open a few tickets** — content, status, priority, and timestamps display correctly
- [ ] **Conversations** — all replies and notes are visible in the correct order
- [ ] **Attachments** — click download links to verify files are accessible
- [ ] **Customer portal** — log in as a customer and verify tickets are visible
- [ ] **Agent login** — verify agents can access the Fluent Support dashboard
- [ ] **Agent permissions** — verify agents have the correct permission levels
- [ ] **Mailbox configuration** — email piping settings may need reconfiguration (IMAP/SMTP credentials are site-specific)
- [ ] **Tags and agent groups** — verify they appear in ticket views and settings
- [ ] **Saved replies (Pro)** — check that canned responses are available
- [ ] **Workflows (Pro)** — review automation rules (they may reference agent IDs that changed)
- [ ] **Email notifications** — send a test reply to verify email delivery works
- [ ] **Integrations** — re-configure any third-party integrations (Slack, Telegram, FluentCRM, etc.) as API keys and webhooks are site-specific

---

## Database Tables Reference

All Fluent Support tables use the WordPress table prefix (default `wp_`) followed by `fs_`.

### Core Tables (Free Plugin)

#### `fs_tickets` — Support Tickets
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| customer_id | BIGINT UNSIGNED | FK → `fs_persons.id` |
| agent_id | BIGINT UNSIGNED | FK → `fs_persons.id` |
| mailbox_id | BIGINT UNSIGNED | FK → `fs_mail_boxes.id` |
| product_id | BIGINT UNSIGNED | FK → `fs_products.id` |
| product_source | VARCHAR(192) | Product source identifier |
| privacy | VARCHAR(100) | `private` (default) |
| priority | VARCHAR(100) | `normal`, `medium`, `critical` |
| client_priority | VARCHAR(100) | Customer-set priority |
| status | VARCHAR(100) | `new`, `active`, `closed` |
| title | VARCHAR(192) | Ticket subject |
| slug | VARCHAR(192) | URL-friendly slug |
| hash | VARCHAR(192) | Unique ticket hash |
| content_hash | VARCHAR(192) | MD5 of content |
| message_id | VARCHAR(192) | Email message ID (for email-based tickets) |
| source | VARCHAR(192) | `web`, `email`, etc. |
| content | LONGTEXT | Ticket body |
| secret_content | LONGTEXT | Internal notes |
| last_agent_response | TIMESTAMP | Last agent reply time |
| last_customer_response | TIMESTAMP | Last customer reply time |
| waiting_since | TIMESTAMP | Current wait start time |
| response_count | INT | Number of replies |
| first_response_time | INT | Seconds to first agent response |
| total_close_time | INT | Seconds to ticket resolution |
| resolved_at | TIMESTAMP | When ticket was closed |
| closed_by | BIGINT UNSIGNED | FK → `fs_persons.id` |
| created_at | TIMESTAMP | Ticket creation time |
| updated_at | TIMESTAMP | Last update time |

#### `fs_conversations` — Ticket Replies & Notes
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| serial | INT UNSIGNED | Sequence number within ticket |
| ticket_id | BIGINT UNSIGNED | FK → `fs_tickets.id` |
| person_id | BIGINT UNSIGNED | FK → `fs_persons.id` |
| conversation_type | VARCHAR(100) | `response`, `note`, `internal_info` |
| content | LONGTEXT | Reply body |
| source | VARCHAR(100) | `web`, `email`, etc. |
| content_hash | VARCHAR(192) | MD5 of content |
| message_id | VARCHAR(192) | Email message ID |
| is_important | ENUM('yes','no') | Pinned/important flag |
| created_at | TIMESTAMP | Reply creation time |
| updated_at | TIMESTAMP | Last update time |

#### `fs_persons` — Customers & Agents
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| first_name | VARCHAR(192) | First name |
| last_name | VARCHAR(192) | Last name |
| email | VARCHAR(192) | Email address |
| title | VARCHAR(192) | Job title |
| avatar | VARCHAR(192) | Avatar URL |
| person_type | VARCHAR(192) | `customer` or `agent` |
| status | VARCHAR(192) | `active`, `inactive` |
| ip_address | VARCHAR(20) | Registration IP |
| last_ip_address | VARCHAR(20) | Last seen IP |
| address_line_1 | VARCHAR(192) | Address fields |
| address_line_2 | VARCHAR(192) | |
| city | VARCHAR(192) | |
| zip | VARCHAR(192) | |
| state | VARCHAR(192) | |
| country | VARCHAR(192) | |
| note | LONGTEXT | Admin notes |
| hash | VARCHAR(192) | Unique person hash |
| user_id | BIGINT UNSIGNED | **FK → `wp_users.ID`** (WordPress user link) |
| description | MEDIUMTEXT | Bio/description |
| remote_uid | BIGINT UNSIGNED | External system user ID |
| last_response_at | TIMESTAMP | Last response time |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_attachments` — File Attachments
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| ticket_id | BIGINT UNSIGNED | FK → `fs_tickets.id` |
| person_id | BIGINT UNSIGNED | FK → `fs_persons.id` |
| conversation_id | BIGINT UNSIGNED | FK → `fs_conversations.id` |
| file_type | VARCHAR(100) | MIME type |
| file_path | TEXT | **Server file path** (needs updating on migration) |
| full_url | TEXT | **File URL** (needs updating on migration) |
| settings | TEXT | Serialized settings |
| title | VARCHAR(192) | Filename |
| file_hash | VARCHAR(192) | MD5 hash for secure URLs |
| driver | VARCHAR(100) | `local` (default) |
| status | VARCHAR(100) | `active` |
| file_size | VARCHAR(100) | File size |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_mail_boxes` — Mailbox Configuration
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| name | VARCHAR(192) | Display name |
| slug | VARCHAR(192) | Unique slug |
| box_type | VARCHAR(50) | `web` or `email` |
| email | VARCHAR(192) | Mailbox email |
| mapped_email | VARCHAR(192) | Incoming email address |
| email_footer | LONGTEXT | Email footer HTML |
| settings | LONGTEXT | Serialized IMAP/SMTP config |
| avatar | VARCHAR(192) | Mailbox avatar |
| created_by | BIGINT UNSIGNED | FK → `wp_users.ID` |
| is_default | ENUM('yes','no') | Default mailbox flag |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_products` — Products/Categories
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| source_uid | BIGINT UNSIGNED | External product ID |
| mailbox_id | BIGINT UNSIGNED | FK → `fs_mail_boxes.id` |
| title | VARCHAR(192) | Product name |
| description | TEXT | Description |
| settings | LONGTEXT | Serialized settings |
| source | VARCHAR(100) | `local` or `external` |
| created_by | BIGINT UNSIGNED | FK → `wp_users.ID` |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_taggables` — Tags & Agent Groups
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| tag_type | VARCHAR(192) | `ticket_tag` or `agent_group` |
| title | VARCHAR(192) | Tag/group name |
| slug | VARCHAR(192) | Unique slug |
| description | LONGTEXT | Description |
| settings | TEXT | Serialized settings |
| created_by | BIGINT UNSIGNED | FK → `wp_users.ID` |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_tag_pivot` — Tag/Group Relationships
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| tag_id | BIGINT UNSIGNED | FK → `fs_taggables.id` |
| source_id | BIGINT UNSIGNED | Ticket ID or Agent person ID |
| source_type | VARCHAR(192) | `ticket_tag`, `agent_group`, or `ticket_watcher` |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_meta` — Metadata & Settings
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| object_type | VARCHAR(192) | `ticket_meta`, `response`, `option`, `person_meta`, `_fs_auto_draft`, `agent_restrictions`, etc. |
| object_id | BIGINT | Related object ID |
| key | VARCHAR(192) | Meta key |
| value | LONGTEXT | Serialized value |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

> **IMPORTANT:** Plugin settings (business hours, email templates, integration configs, etc.) are stored in this table with `object_type = 'option'`. These are automatically included when you export the `fs_meta` table.

#### `fs_activities` — Activity Log
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| person_id | BIGINT UNSIGNED | Who performed the action |
| person_type | VARCHAR(192) | `agent`, `customer`, `system` |
| event_type | VARCHAR(192) | `ticket_created`, `status_changed`, etc. |
| object_id | BIGINT UNSIGNED | Ticket/conversation ID |
| object_type | VARCHAR(192) | `ticket`, `conversation` |
| description | MEDIUMTEXT | Activity description |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_data_metrix` — Performance Metrics
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| stat_date | DATE | Metric date |
| data_type | VARCHAR(100) | `agent_stat` |
| agent_id | BIGINT UNSIGNED | Agent person ID |
| replies | INT UNSIGNED | Reply count |
| active_tickets | INT UNSIGNED | Open tickets |
| resolved_tickets | INT UNSIGNED | Closed tickets |
| new_tickets | INT UNSIGNED | New tickets |
| unassigned_tickets | INT UNSIGNED | Unassigned tickets |
| close_to_average | INT UNSIGNED | Avg close time |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_ai_activity_logs` — AI Usage Tracking
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| agent_id | BIGINT UNSIGNED | Agent person ID |
| ticket_id | BIGINT UNSIGNED | Ticket ID |
| model_name | VARCHAR(50) | AI model used |
| tokens | MEDIUMTEXT | Token usage data |
| prompt | LONGTEXT | Prompt sent |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

---

### Pro Tables (Pro Plugin)

#### `fs_saved_replies` — Canned Responses
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| created_by | BIGINT UNSIGNED | Creator user ID |
| mailbox_id | BIGINT UNSIGNED | FK → `fs_mail_boxes.id` |
| product_id | BIGINT UNSIGNED | FK → `fs_products.id` |
| title | VARCHAR(192) | Reply title |
| content | LONGTEXT | Reply content |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_time_tracks` — Time Tracking
| Column | Type | Description |
|--------|------|-------------|
| id | INT UNSIGNED | Primary key |
| agent_id | BIGINT UNSIGNED | FK → `fs_persons.id` |
| customer_id | BIGINT UNSIGNED | FK → `fs_persons.id` |
| ticket_id | BIGINT UNSIGNED | FK → `fs_tickets.id` |
| mailbox_id | BIGINT UNSIGNED | FK → `fs_mail_boxes.id` |
| started_at | TIMESTAMP | Timer start |
| completed_at | TIMESTAMP | Timer end |
| message | TEXT | Time entry note |
| status | VARCHAR(50) | `committed` (default) |
| working_minutes | INT UNSIGNED | Actual minutes |
| billable_minutes | INT UNSIGNED | Billable minutes |
| is_manual | TINYINT(1) | Manual entry flag |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_workflows` — Automation Workflows
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| created_by | BIGINT | Creator user ID |
| priority | INT | Execution priority |
| title | VARCHAR(192) | Workflow name |
| trigger_key | VARCHAR(192) | Trigger event |
| trigger_type | VARCHAR(50) | `manual` (default) |
| settings | LONGTEXT | Serialized trigger conditions |
| status | VARCHAR(50) | `draft` or `published` |
| last_ran_at | TIMESTAMP | Last execution time |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

#### `fs_workflow_actions` — Workflow Actions
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key |
| title | VARCHAR(192) | Action name |
| action_name | VARCHAR(192) | Action identifier |
| workflow_id | BIGINT | FK → `fs_workflows.id` |
| settings | LONGTEXT | Serialized action settings |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

---

### Settings & Options

Fluent Support stores all plugin-level settings inside the `fs_meta` table — not in `wp_options`. Settings rows have `object_type = 'option'`, with the `key` being the setting name (e.g., `global_business_settings`, `_ticket_form_settings`, `_activity_settings`, `_fluentcrm_intergration_settings`, `file_upload_driver`) and `value` holding the serialized setting value.

These settings are automatically included when you export the `fs_meta` table.

### WordPress Options

A few minor entries are also stored in the standard WordPress `wp_options` and `wp_usermeta` tables:

| Option Key | Description |
|------------|-------------|
| `_fluent_support_permissions` | User meta key for agent permissions (stored in `wp_usermeta`) |
| `_fluent_last_m_run` | Last maintenance run timestamp |

These are minor and will be regenerated automatically on the destination site.

---

## Table Relationships Diagram

```
wp_users
  └── fs_persons.user_id ──────────────────────────────┐
                                                         │
fs_persons (customers & agents)                          │
  ├── fs_tickets.customer_id                             │
  ├── fs_tickets.agent_id                                │
  ├── fs_tickets.closed_by                               │
  ├── fs_conversations.person_id                         │
  ├── fs_attachments.person_id                           │
  ├── fs_activities.person_id                            │
  ├── fs_tag_pivot.source_id (when source_type = agent_group or ticket_watcher)
  ├── fs_time_tracks.agent_id                            │
  └── fs_time_tracks.customer_id                         │
                                                         │
fs_tickets                                               │
  ├── fs_conversations.ticket_id                         │
  ├── fs_attachments.ticket_id                           │
  ├── fs_tag_pivot.source_id (when source_type = ticket_tag)
  ├── fs_meta.object_id (when object_type = ticket_meta) │
  ├── fs_activities.object_id                            │
  └── fs_time_tracks.ticket_id                           │
                                                         │
fs_conversations                                         │
  └── fs_attachments.conversation_id                     │
                                                         │
fs_mail_boxes                                            │
  ├── fs_tickets.mailbox_id                              │
  ├── fs_products.mailbox_id                             │
  └── fs_time_tracks.mailbox_id                          │
                                                         │
fs_products                                              │
  └── fs_tickets.product_id                              │
                                                         │
fs_taggables (tags & agent groups)                       │
  └── fs_tag_pivot.tag_id                                │
                                                         │
fs_workflows                                             │
  └── fs_workflow_actions.workflow_id                     │
```

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| **"Table already exists" error on import** | Destination already has Fluent Support tables with data | Add `DROP TABLE IF EXISTS` to your SQL export, or manually truncate destination tables first |
| **Tickets show but no conversations** | `fs_conversations` table not imported or `ticket_id` mismatch | Verify `fs_conversations` was imported and `ticket_id` values match `fs_tickets.id` |
| **Attachments show broken links** | URLs still point to old domain or file paths are wrong | Run the URL replacement queries from [Step 7](#step-7-fix-urls-and-file-paths) |
| **Attachments 404 error** | Files not copied to destination | Copy the `wp-content/uploads/fluent-support/` directory |
| **Agents can't access dashboard** | `user_id` not linked or permissions missing | Re-map user IDs ([Step 8](#step-8-re-link-wordpress-user-accounts)) and check `_fluent_support_permissions` user meta |
| **Customer portal shows no tickets** | Customer `user_id` doesn't match WordPress account | Re-map user IDs by email match |
| **Foreign key ID mismatches** | Auto-increment IDs shifted during import | Ensure you exported with `INSERT` statements that include explicit ID values, not `INSERT ... SELECT` |
| **Serialized data broken** | Search-replace corrupted serialized strings | Use WP-CLI `search-replace` with `--precise` and `--recurse-objects` flags, which handle serialized data correctly |
| **Email piping not working** | IMAP/SMTP settings stored in `fs_mail_boxes.settings` are site-specific | Re-configure email piping in **Fluent Support > Settings** on the destination site |
| **Workflows referencing wrong agents** | Agent `person_id` values may differ if tables were re-imported with different auto-increment | Check workflow action settings and update agent/mailbox references |

---

## FAQ

**Q: Can I merge tickets from two Fluent Support sites into one?**

Yes, but it requires careful handling to avoid ID conflicts. Before importing, note the highest ID in each `fs_` table on the destination site. In the SQL export from the source, offset all IDs by adding a large number (e.g., +100000) to all `id`, foreign key, and reference columns, then import the offset data. This is an advanced operation — consider using a staging site first.

---

**Q: Do I need to re-configure email piping after migration?**

Yes. The IMAP/SMTP connection settings in `fs_mail_boxes.settings` may include credentials and server details specific to the source site. Review and update your mailbox configurations at **Fluent Support > Email Piping** after migration.

---

**Q: Will webhook URLs and integration settings survive the migration?**

The configuration data is migrated, but webhooks and API keys for third-party integrations (Slack, Telegram, etc.) typically reference the source site's URLs or credentials. You'll need to reconfigure these in **Fluent Support > Settings > Integrations**.

---

**Q: What if I only want to migrate certain tickets (e.g., open tickets only)?**

You can add `WHERE` clauses to your SQL export. For example:

```sql
-- Export only open/active tickets
SELECT * FROM wp_fs_tickets WHERE status IN ('new', 'active');

-- Then export related conversations
SELECT c.* FROM wp_fs_conversations c
INNER JOIN wp_fs_tickets t ON c.ticket_id = t.id
WHERE t.status IN ('new', 'active');

-- And related attachments
SELECT a.* FROM wp_fs_attachments a
INNER JOIN wp_fs_tickets t ON a.ticket_id = t.id
WHERE t.status IN ('new', 'active');
```

Export these as `INSERT` statements and import them on the destination.

---

**Q: How do I handle different WordPress table prefixes?**

If the source site uses `wp_` and the destination uses `wps_`, do a find-and-replace in the SQL file before importing:

```bash
sed 's/wp_fs_/wps_fs_/g' fluent_support_export.sql > fluent_support_import.sql
```

---

**Q: Is there any data stored in `wp_options` that I need to migrate?**

Fluent Support stores nearly all settings in its own `fs_meta` table (with `object_type = 'option'`), which is included in the table export. The only WordPress-level data is `_fluent_support_permissions` in `wp_usermeta` (agent permissions per user) and a few transient options for cron scheduling (which are auto-regenerated). Agent permissions will need to be reassigned on the destination site if user IDs change.

---

**Q: Can I automate this migration process?**

Yes! You can script the entire process using a bash script combining `mysqldump`, `rsync`/`scp`, and `wp search-replace`. Here's a minimal working example:

```bash
#!/bin/bash
# Source site
SRC_DB="source_db"
SRC_USER="db_user"
SRC_PASS="db_pass"
SRC_HOST="source-host.com"
SRC_PATH="/var/www/source/wp-content/uploads/fluent-support"
SRC_DOMAIN="https://old-site.com"

# Destination site
DST_DB="dest_db"
DST_USER="db_user"
DST_PASS="db_pass"
DST_HOST="localhost"
DST_PATH="/var/www/dest/wp-content/uploads/fluent-support"
DST_DOMAIN="https://new-site.com"
PREFIX="wp_"

# 1. Export tables
TABLES="${PREFIX}fs_tickets ${PREFIX}fs_conversations ${PREFIX}fs_persons ${PREFIX}fs_attachments ${PREFIX}fs_mail_boxes ${PREFIX}fs_products ${PREFIX}fs_taggables ${PREFIX}fs_tag_pivot ${PREFIX}fs_meta ${PREFIX}fs_activities ${PREFIX}fs_data_metrix ${PREFIX}fs_ai_activity_logs"
mysqldump -u $SRC_USER -p$SRC_PASS -h $SRC_HOST $SRC_DB $TABLES > fs_export.sql

# 2. Import tables
mysql -u $DST_USER -p$DST_PASS -h $DST_HOST $DST_DB < fs_export.sql

# 3. Copy files
rsync -avz $SRC_HOST:$SRC_PATH/ $DST_PATH/

# 4. Fix URLs (using WP-CLI on destination)
cd /var/www/dest
wp search-replace "$SRC_DOMAIN" "$DST_DOMAIN" $TABLES --precise --recurse-objects
```

---

We hope this guide helps you complete your migration smoothly. If you run into any issues not covered here, feel free to reach out to the Fluent Support team.