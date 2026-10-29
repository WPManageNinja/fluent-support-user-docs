---
title: "System Admin Tools"
description: "A guide to Fluent Support's System Admin Tools — checking background tasks with the Cron Job Monitor, repairing missing tables with Database Health, and removing old logs with Data Cleanup."
---

# System Admin Tools

Fluent Support does a lot of work in the background: it closes inactive tickets, clears old logs, retries piped emails, and sends [scheduled replies](/scheduled-replies). When something there goes wrong, the symptoms show up elsewhere, for example tickets that never auto-close or a log table that keeps growing.

**System Admin Tools** give you one place to check and fix the system behind your helpdesk. It has three pages:

* **Cron Job Monitor:** Shows whether background tasks are running on time, and lets you run them manually.
* **Database Health:** Checks that every Fluent Support table exists, and repairs missing ones.
* **Data Cleanup:** Deletes old logs to keep your database lean.

## Open System Admin Tools

Go to **Fluent Support → Settings** and open **System Admin Tools** in the left sidebar. You will see **Cron Job Monitor**, **Database Health** and **Data Cleanup** under it.

> [!IMPORTANT]
> Anyone with the **Manage Overall Settings** [permission](/permission-management-for-agents) can view these pages. To **run** a task, **repair** the database, or **delete** logs, you also need to be a WordPress **Administrator**, because these actions change site data.


## Cron Job Monitor

The **Cron Job Monitor** lists Fluent Support's scheduled background tasks and shows when each one runs next. At the top, it also shows the **REST API Status** of your site.

![Cron Job Monitor](/images/setup-configuration/system-admin-tools/cron-job-monitor-2.webp)

### Cron Job Status

Each task shows its **Next Run** time:

| Task | Runs | What it does |
|---|---|---|
| **Hourly Cleanup and Auto-Close** | Every hour | Removes temporary and abandoned uploads, finishes deleting files from remote storage, and closes inactive tickets for [Auto-Close](/automatic-ticket-closing) *(Pro)*. |
| **Daily Log Cleanup** | Every day | Deletes activity logs, AI activity logs and internal notifications older than your [retention settings](/overall-activities#activity-log-settings). |
| **Weekly Maintenance** | Every week | Runs data maintenance and removes old background-task logs. |
| **Email Piping Retry and Storage Tokens** *(Pro)* | Every 30 minutes | Retries piped emails that failed and refreshes connections to remote file storage. |
| **Advanced Reports Snapshot** *(Pro)* | Every 6 hours | Saves a snapshot of your [Reports](/reports-and-stats) data so the reports load quickly. Snapshots are kept for up to 15 days. |

A task can show one of these states:

* **in** *time*: Scheduled and on time.
* **Overdue:** *time* **ago**: The task should have run but didn't. This usually means WordPress cron is not firing on your site.
* **Not scheduled**: The task is missing from the schedule. Deactivating and reactivating Fluent Support usually schedules it again.

To run a task right away, click **Run Manually** next to it. When asked **Run** *task name* **now?**, click **Run**.

> [!WARNING]
> Running a task does the real work: **Hourly Cleanup and Auto-Close** can close tickets, and **Daily Log Cleanup** deletes old logs.

![Running a task manually from the Cron Job Monitor with the confirmation prompt](/images/setup-configuration/system-admin-tools/cron-job-monitor-run-manually-3.webp)


### Server Side Cron

By default, WordPress only runs scheduled tasks when someone visits your site. On a quiet site, tasks can run late. If you see the message **Server side cron is not enabled. Please consider enabling server side cron.**, ask your host to set up a real server cron job for your site. Click **Read More** on the page for instructions.

### Server Limits and REST API Status

Above the task list, the **Cron Job Status** section shows the limits your background tasks run under:

* **Server Memory Limit** and **Current Usage**
* **Max Execution Time**

The **REST API Status** section at the top of the page checks that your site accepts **GET**, **POST**, **PUT** and **DELETE** requests. Fluent Support's admin needs all four. Each one shows **Operational**, **Slow Response** or **Down**. If any request is down, a security plugin, firewall, or host rule is often blocking it.


## Database Health

Fluent Support stores tickets, replies, customers and settings in its own database tables. If an update was interrupted, a table may be missing, and parts of the plugin will stop working.

The **Database Health** page lists every table with its status:

* **Healthy:** The table exists.
* **Missing:** The table is not in your database.

At the top, you'll see **All tables are present.** or a warning such as **2 table(s) are missing.**

![The Database Health page listing Fluent Support tables with their Healthy status](/images/setup-configuration/system-admin-tools/database-health-5.webp)

### Repair Missing Tables

If any table is missing, click **Repair Now** and confirm. This re-runs Fluent Support's database setup, which **only creates missing tables and columns. It never deletes data.** Click **Re-check** afterwards to confirm everything shows **Healthy**.


## Data Cleanup

Logs grow over time. **Data Cleanup** lets you delete old ones in one go, without touching your tickets.

You can delete these log types:

| Log type | What it contains |
|---|---|
| **Activity Logs** | Ticket and agent actions shown on the [Activities](/overall-activities) page. |
| **AI Activity Logs** | Records of AI replies, summaries and their token usage. |
| **Internal Notifications** | In-app notifications sent to agents, such as mentions and assignments. |

To delete old logs:

1. Enter the **Time Range (days)**. Only logs older than this number of days will be deleted. The minimum is **7 days**.
2. Under **Select logs you want to delete**, tick the log types.
3. Click **Preview Log Summary**.

![The Data Cleanup page with the time range, the log types to delete and the Preview Log Summary button](/images/setup-configuration/system-admin-tools/data-cleanup-7.webp)

4. The **Preview Log Summary** window shows how many entries of each type will be removed. Review the counts, then click **Yes, Delete Old Logs**.

![The Preview Log Summary window showing how many logs will be deleted, with the Yes, Delete Old Logs button](/images/setup-configuration/system-admin-tools/data-cleanup-preview-8.webp)

> [!WARNING]
> Deleted logs are removed **permanently**. Tickets, replies, customers and attachments are never deleted by Data Cleanup.

::: tip
To clear old logs automatically instead, set a retention period in the [Activity Log Settings](/overall-activities#activity-log-settings). The **Daily Log Cleanup** task removes them for you every day.
:::

That's it! You can now keep an eye on your helpdesk's background work and keep its database tidy.
