# Bulk Action in Tickets

Fluent Support lets you work on many tickets at once with **Bulk Actions**. You can reply to several tickets together, assign them to an agent, add or remove tags, close or reopen them, change their priority or product, and more. This article walks you through the whole process.

## Turn On Bulk Actions

First, go to **Tickets** from your **Fluent Support** dashboard.

![Tickets from Fluent Support dashboard](/images/ticket-management/productivity-tools/bulk-action-in-tickets/bulk-action-1.webp)

Open the ticket list you want to work with, such as **My Tickets**, **All Tickets**, **Unassigned**, or **Bookmarks**. Then click the **More Action** button and choose **Show Bulk Action**. A checkbox now appears next to every ticket.

![All ticket sections](/images/ticket-management/productivity-tools/bulk-action-in-tickets/bulk-action-2.webp)

## Select Tickets

Check the tickets you want to change. You can also use the **Select All** checkbox at the top of the list to select every ticket on the page.

As soon as you select a ticket, the bulk action bar appears at the bottom of the list. On the left it shows how many tickets you selected, for example **3 selected**, with an **X** button to clear the selection.

![Bulk action bar with selected tickets](/images/ticket-management/productivity-tools/bulk-action-in-tickets/bulk-action-3.webp)

<!-- TODO: Replace bulk-action-3.webp with a screenshot of the new bulk action bar (selected count, Reply, Assign, Tags, Close, More, and the delete icon) and save it at /images/ticket-management/productivity-tools/bulk-action-in-tickets/bulk-action-3.webp -->

::: tip
Press **Esc** to close an open action panel. Press **Esc** again to clear your selection.
:::

## Available Bulk Actions

The most used actions sit right on the bar: **Reply**, **Assign**, **Tags**, and **Close**. The rest are inside the **More** menu, grouped by what they do. Each action opens a small panel where you pick an option, then you click one button to apply it. The button names the change, for example **Set 3 tickets to Critical priority**, so you always know what will happen before you click.

![The More menu with Ticket, Assignment, and Automation groups](/images/ticket-management/productivity-tools/bulk-action-in-tickets/bulk-action-4.webp)

<!-- TODO: Replace bulk-action-4.webp with a screenshot of the open More panel (Ticket, Assignment, and Automation groups) and save it at /images/ticket-management/productivity-tools/bulk-action-in-tickets/bulk-action-4.webp -->

### On the bar

* **Reply:** Opens the **Reply To Selected Tickets** window, so you can send the same reply to all selected tickets at once.
* **Assign:** Assigns all selected tickets to one agent. Search for the agent in the list, then click the apply button, for example **Assign 3 tickets to Jane Doe**.
* **Tags:** Adds tags to or removes tags from the selected tickets. Use the **Add** / **Remove** switch at the top of the panel, choose one or more tags, then apply.
* **Close:** Closes all selected tickets. Tickets that are already closed are skipped. Customers get the ticket closed email if it is turned on for the inbox.

### Ticket group (in More)

* **Priority:** Sets the same priority, such as **Normal**, **Medium**, or **Critical**, on all selected tickets.
* **Product:** Moves the selected tickets to another product.
* **Reopen:** Reopens the selected tickets. Only tickets that are closed are reopened, and the panel tells you how many of your selection that is. If none of the selected tickets are closed, the button stays disabled.

### Assignment group (in More)

* **Assign to agent group:** Assigns the selected tickets through one of your [Agent Groups](/agent-group). This group only shows when you have at least one agent group.

### Automation group (in More)

* **Run workflow:** Runs a manual workflow on all selected tickets. When you pick a workflow, the panel lists what it will do before you run it. This group only shows when you have at least one manual workflow. See [Manual Workflow](/manual-workflow).

### Danger zone

* **Delete:** The trash icon at the far right of the bar deletes the selected tickets. This removes the tickets with their replies, notes, and attachments, and it cannot be undone.

::: warning
Deleting tickets is permanent. Double-check your selection before you click **Delete**.
:::

## Tips And Notes

::: info
* **Run workflow** needs [Fluent Support Pro](/upgrade-to-fluent-support-pro-add-on), because workflows are a Pro feature. All other bulk actions are available in the free version.
* You only see the actions your role allows. **Assign** and **Assign to agent group** need permission to assign agents, and **Delete** needs permission to delete tickets. See [Permission Management for Agents](/permission-management-for-agents).
* **Product** only appears when you have at least one product. In the **Priority** and **Product** lists, the option every selected ticket already has is marked **Already set**.
* On small screens, the bar folds into a single **Actions** menu that lists every action, with **Delete tickets** under **Danger zone**.
:::
