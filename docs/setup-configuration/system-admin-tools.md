# System Admin Tools

**System Admin Tools** help you keep Fluent Support healthy. They check that scheduled tasks run, that the database tables are in place, and let you clear out old logs.

To open them, go to **Settings** from your **Fluent Support Dashboard** and click **System Admin Tools** in the left sidebar. There are three pages:

* [Cron Job Monitor](#cron-job-monitor)
* [Database Health](#database-health)
* [Data Cleanup](#data-cleanup)

## Cron Job Monitor

Fluent Support runs background tasks, such as closing inactive tickets and clearing old logs, through WordPress cron. The **Cron Job Monitor** shows whether they are running on time.

![Cron Job Monitor page with REST API Status and Cron Job Status](/images/setup-configuration/system-admin-tools/cron-job-monitor.webp)

### REST API Status

Fluent Support talks to your site through the REST API. This section tests **GET**, **POST**, **PUT** and **DELETE** requests and shows one of these results for each:

* **Operational:** the request works.
* **Slow Response:** the request works but took longer than expected.
* **Down:** the request failed. Check with your host or security plugin, since a firewall may be blocking it.

### Cron Job Status

This section shows your server's **Memory Limit**, **Current Usage** and **Max Execution Time**. Below them, each scheduled task lists its next run time:

* **Next Run:** when the task runs next.
* **Overdue:** the task should have run already and has not.
* **Not scheduled:** the task is not set up.

With Fluent Support Pro, its scheduled tasks are listed here too.

Click **Run** next to a task, then confirm, to run it manually. Use this after fixing a problem to catch up without waiting.

::: info
If you see **Server side cron is not enabled**, WordPress cron only runs when someone visits your site. On a quiet site tasks can run late. Setting up a real server cron job fixes this. Click **Read More** in the notice for the steps.
:::

## Database Health

Fluent Support stores tickets, replies, customers and settings in its own database tables. If an update is interrupted, a table can go missing. **Database Health** lists every table and its status.

![Database Health page listing the Fluent Support database tables with a Healthy status](/images/setup-configuration/system-admin-tools/database-health.webp)

* **Healthy** means the table is present.
* **Missing** means it needs to be recreated. The page shows how many tables are missing.

To fix a missing table:

1. Click **Repair Now**.
2. Confirm in the dialog.

With Fluent Support Pro, its tables are listed here too. Repair only creates missing tables and columns. It never deletes your data. Click **Re-check** to test again afterward.

## Data Cleanup

Over time, logs build up in your database. **Data Cleanup** removes old ones.

![Data Cleanup page with log types and a time range](/images/setup-configuration/system-admin-tools/data-cleanup.webp)

1. Under **Select logs you want to delete**, tick the types you want to clear:
   * **Activity Logs:** ticket and agent actions shown on the Activities page.
   * **AI Activity Logs:** records of AI replies, summaries and their token usage.
   * **Internal Notifications:** in-app notifications sent to agents, such as mentions and assignments.
2. Set the **Time Range (days)**. Only logs older than this many days are deleted. The minimum is 7 days.
3. Click **Preview Log Summary** to see how many records of each type will go.
4. Review the **Count** for each **Type**, then click **Yes, Delete Old Logs**.

::: warning
Deleted logs cannot be recovered. Your tickets, replies, customers and attachments are never deleted.
:::
