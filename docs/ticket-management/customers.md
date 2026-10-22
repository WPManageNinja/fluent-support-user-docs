# Customers

The **Customers** screen lists everyone who has contacted your support team. From here you can find a customer quickly with smart search, sort and filter the list, choose which columns to show, block or unblock customers in bulk, and open a customer's profile to see all of their tickets in one place.

## Open the Customers Screen

1. Go to your **Fluent Support** dashboard.
2. Click **Customers** in the top navigation menu.

![The Customers list in Fluent Support](/images/ticket-management/customers/customers-list.webp)
<!-- TODO: Capture screenshot of the Customers list (All tab, a few customers, one with the Blocked badge) and save it at /images/ticket-management/customers/customers-list.webp -->

::: info
You only see **Customers** if your role has permission to access private data (customers and agents). See [Permission Management for Agents](/permission-management-for-agents).
:::

## The Customers List

Each row shows one customer. Click anywhere on a row, or on the customer's name, to open their profile.

* **Customer:** The customer's photo, name, ID (for example **#24**) and email address. Blocked customers show a **Blocked** badge next to their name.
* **Tickets:** How many open tickets the customer has out of their total, for example **2 open / 5**. Click it to open the ticket list filtered to that customer. The count only includes tickets you are allowed to see.
* **Location:** The customer's city and country.
* **Last Activity:** How long ago the customer was last active. Hover over it to see the exact date and time.
* **Created at:** The date the customer was added.

To add a customer by hand, click **Add Customer** at the top of the page, fill in the form, and click **Create Customer**.

### Filter With the Tabs

Use the tabs at the top of the list to narrow it down:

* **All:** Every customer.
* **Has open tickets:** Only customers who have at least one open ticket.
* **Active:** Customers who are not blocked.
* **Blocked:** Customers you have blocked.

### Row Actions

Click the three dots at the end of a row to see more options:

* **Edit:** Opens the **Update customer** window to change the customer's details.
* **View tickets:** Opens the ticket list filtered to this customer.
* **Block** / **Unblock:** Blocks the customer, or unblocks them if they are already blocked.
* **Delete:** Deletes the customer. See [Delete Customers](#delete-customers).

## Search Customers

Click the **Search** icon (magnifying glass) above the list to open the search box. Type what you are looking for and press **Enter**. To close the search and show the full list again, click **Cancel** or clear the box.

![The customer search box with a search summary below it](/images/ticket-management/customers/customers-search.webp)
<!-- TODO: Capture screenshot of the open customer search box after running a search such as city:London tickets:>2, showing the summary line below the box, and save it at /images/ticket-management/customers/customers-search.webp -->

### Just Type

You do not need any special syntax for everyday searches. The search works out whether you typed a name, an email address or a customer ID:

* `timothy cook` finds customers whose first name, last name or email contains every word you typed.
* `"timothy cook"` (with quotes) finds customers whose full name or email contains that exact phrase.
* `jane@example.com` finds the customer with that email address. A partial address, such as `@example.com`, finds every email that contains it.
* `#1024` finds the customer with ID 1024.

When you search by name or email with at least 3 characters, the best matches are shown first and the summary under the box says **Best matches first**. If you then pick a sort order, the list follows your sort instead, and a **Sort by best match** link appears so you can switch back.

### Search One Field

To search a single field, type the field name, a colon, and the value, for example `city:London`. You can combine several fields and plain words, and a customer must match all of them. For example, `city:berlin anna` finds customers named Anna who live in Berlin.

Put values that contain spaces in quotes, for example `city:"new york"`.

::: tip
Type `/` in the search box to open the **Search by** menu. Pick a field with the arrow keys and press **Enter**, and Fluent Support adds it to the box for you.
:::

These are all the fields you can search:

| Search | What it matches |
| --- | --- |
| `email:acme.com` | Email addresses that contain the value. A full email address must match exactly. |
| `name:timothy` | First or last name. With several words, each word must match. |
| `first:timothy` | First name contains the value. You can also write `first_name:`. |
| `last:cook` | Last name contains the value. You can also write `last_name:`. |
| `title:manager` | Job title contains the value. |
| `address:"main street"` | Address line 1 or address line 2 contains the value. |
| `city:"new york"` | City contains the value. |
| `state:california` | State contains the value. |
| `zip:10001` | Postal code contains the value. You can also write `postal_code:`. |
| `country:US` | Country contains the value. |
| `status:blocked` | Customer status. Use `status:active` or `status:blocked`. |
| `tickets:>2` | Total number of tickets. |
| `open:0` | Number of open tickets. |
| `created:2026-05` | The date the customer was added. You can also write `since:`. |
| `activity:<2026-01-01` | The customer's last activity date. |
| `user:42` | The ID of the WordPress user linked to the customer. You can also write `user_id:`. |
| `id:12,48` | One or more customer IDs, separated by commas. |

### Ticket Counts and Dates

`tickets:` and `open:` take a number, with an optional comparison in front:

* `tickets:3` means exactly 3 tickets.
* `tickets:>2` means more than 2, and `tickets:>=2` means 2 or more.
* `open:<2` means fewer than 2 open tickets, and `open:<=1` means 1 or fewer.
* `open:0` finds customers with no open tickets.

Like the **Tickets** column, these counts only include tickets you are allowed to see.

`created:` and `activity:` take a year, a month or a day:

* `created:2026` matches the whole year 2026.
* `created:2026-05` matches May 2026.
* `created:2026-05-14` matches that single day.
* `created:>2026-01-01` matches after that date, and `created:<2026-01-01` matches before it. You can also use `>=` and `<=`.

For example, `open:>0 activity:<2026-01-01` finds customers who still have open tickets but have not been active since the start of 2026.

### Search Tips

Click the **?** icon inside the search box to open **Search tips**. It shows example searches under **Just type** (click **Try** to run one) and every field under **Search one field** (click a field to add it to the box).

![The Search tips window](/images/ticket-management/customers/customers-search-tips.webp)
<!-- TODO: Capture screenshot of the Search tips window opened from the ? icon in the customer search box and save it at /images/ticket-management/customers/customers-search-tips.webp -->

::: info
* Under the search box, a short summary shows how your search was understood, so you can check that each part was read the way you meant.
* If you type a field name that does not exist, such as `area:north`, it is searched as plain text and the summary tells you it is not a search field.
* A field with nothing after it, such as `city:` on its own, matches no customers.
:::

## Sort the List

1. Click the **Sort** icon above the list.
2. Under **Sort By**, choose one option:
    * **Created at**
    * **Last Activity**
    * **Name**
3. Choose **Ascending** or **Descending**.

The list updates right away. By default, the newest customers are shown first.

## Show or Hide Columns

1. Click the **Toggle columns** icon above the list.
2. Under **Columns**, check or uncheck **Location**, **Last Activity** and **Created at**.

The **Customer** and **Tickets** columns are always shown. Your choice is remembered in your browser, so the list looks the same the next time you open it.

![The Columns menu for showing or hiding columns](/images/ticket-management/customers/customers-columns.webp)
<!-- TODO: Capture screenshot of the open Columns popover (Toggle columns icon) next to the Sort By popover if possible, and save it at /images/ticket-management/customers/customers-columns.webp -->

::: tip
The **Location** column hides itself when none of the customers on the current page have a city or country saved.
:::

## Block or Unblock Customers in Bulk

1. Check the box next to each customer you want to change. Use the checkbox in the header to select every customer on the page.
2. A bar appears above the list showing how many customers you selected, for example **3 customers selected**.
3. Click **Block** or **Unblock**.

To clear your selection without making a change, click **Clear selection**.

![The bulk action bar with Block, Unblock and Delete buttons](/images/ticket-management/customers/customers-bulk-actions.webp)
<!-- TODO: Capture screenshot of the Customers list with three customers selected, showing the bulk bar with Block, Unblock, Delete and Clear selection, and save it at /images/ticket-management/customers/customers-bulk-actions.webp -->

You can also block or unblock a single customer from the row's three-dot menu, or by setting **Status** to **Blocked** or **Active** in the customer's edit form.

### What Blocking Does

A blocked customer is cut off from support until you unblock them:

* They cannot open the customer portal. Instead, they see "Your account is not active. Please contact support."
* They cannot submit new tickets or reply to existing tickets from the portal.
* Ticket forms built with Fluent Forms do not create a ticket for them.
* If you use email piping, emails they send are not turned into tickets or replies.
* They do not receive email notifications from Fluent Support, such as replies from agents. Notification emails to your team still go out.

Blocking does not delete anything. The customer's existing tickets stay in your ticket list, and unblocking gives them full access again.

::: warning
Bulk actions apply to the customers you selected on the current page. Check your selection before you click **Block**.
:::

## Delete Customers

You can delete one customer from the row's three-dot menu, or several at once by selecting them and clicking **Delete** in the bulk bar. Fluent Support asks you to confirm first.

::: warning
Deleting a customer is permanent. All data associated with the customer, including their tickets, is deleted. By default, only site administrators can delete customers, so other agents do not see the **Delete** option. If you only want to stop someone from contacting support, block them instead.
:::

## The Customer Profile

Click a customer in the list to open their profile. A breadcrumb at the top (**Customers** > customer name) takes you back to the list, and the list keeps your tab, search, sort and page.

![A customer profile with the tickets table and profile card](/images/ticket-management/customers/customer-profile.webp)
<!-- TODO: Capture screenshot of a customer profile page showing the Tickets table on the left and the profile card with Open / Closed / Total stats on the right, and save it at /images/ticket-management/customers/customer-profile.webp -->

### Profile Actions

At the top right of the profile:

* **Edit:** Opens the **Update customer** window, where you can change the name, email, job title, note, address and **Status**. Click **Update Customer** to save.
* The three-dot menu contains:
    * **View in ticket list:** Opens the main ticket list filtered to this customer.
    * **Reset photo to Gravatar:** Removes a custom photo and goes back to the customer's Gravatar. This only shows when the customer has a custom photo.
    * **Delete customer:** Deletes the customer and their data. This only shows if you are allowed to delete customers.

### Tickets

The main area lists the customer's tickets, newest first.

* Use the **All**, **Open** and **Closed** tabs to filter them.
* Type in **Search tickets...** and press **Enter** to search this customer's tickets.
* Each row shows the **Ticket** title and number (with the product, and the inbox when you have more than one), its **Status**, the **Assignee** (or **Unassigned**) and the **Last Update**.

Click a ticket to open it.

### Profile Card

The card on the right sums up the customer:

* **Photo:** Click the camera icon (**Upload a custom photo**) to upload a new photo.
* **Name and email:** Click the email to write to the customer, or use the copy button to copy the address. The job title and a **Blocked** badge show here when they apply.
* **Open**, **Closed** and **Total:** How many tickets the customer has in each state.
* **Address**, **Created at** and **Last activity:** The customer's saved address, the date they were added and when they were last active.
* **WordPress user:** The linked WordPress user ID, shown when the customer has a WordPress account. Click it to open that user's profile.
* **Note:** Any note you saved on the customer.

### Sidebar Widgets

Below the profile card you may see extra widgets, depending on the plugins you use:

* **FluentCRM Profile:** Shown when FluentCRM is active and the customer is a FluentCRM contact.
* Widgets from your other integrations, such as purchase history. Click a widget's title to expand it.

These are the same widgets you see in the ticket sidebar. See [Dynamic Sidebar Widgets](/dynamic-sidebar-widgets).
