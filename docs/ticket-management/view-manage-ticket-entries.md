# View & Manage Ticket Entries

The **Tickets** section is the central hub for viewing and managing all customer inquiries within Fluent Support. This dashboard provides a comprehensive view of your support operations, customer information, and specific user summaries in one place.

## Accessing Tickets

To view your tickets, navigate to your **Fluent Support Dashboard** and click on **Tickets** in the top navigation menu.

![Ticket Management](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-management-1.webp)

## Ticket List Views

The **Ticket Filters** sidebar on the left of the ticket list groups your tickets into views. Click any view to load its tickets in the list. The view you are on is highlighted, and its name appears as the list title.

Most views show a live count next to their name. The counts refresh as the list reloads, so they stay current while you work.

![Ticket Filters sidebar with the My Work, Needs Attention, Priority, Status and Tags view groups and their ticket counts](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-list-views.webp)

### My Work

* **Assigned to Me:** Open tickets assigned to you. Open means tickets with the **New** or **Active** status.
* **Unassigned:** Open tickets that no agent has been assigned to yet. Agents who can only see tickets assigned to them do not see this view.
* **Bookmarks** (Pro): Tickets you have bookmarked, in any status. This view has no count.

### Needs Attention

* **Waiting For Reply:** Open tickets where the customer is waiting on your team. This includes new tickets, tickets with no agent reply yet, and tickets where the customer replied after the last agent reply. The count is highlighted when it is above zero.

### Priority

One view for each agent priority, from highest to lowest: **Critical**, **Medium** and **Normal**. Each view and its count include only open tickets with that **Agent Priority**. The **Critical** count is highlighted when it is above zero.

### Status

* **Open:** Tickets with the **New** or **Active** status.
* **Active:** Tickets with the **Active** status.
* **Closed:** Tickets with the **Closed** status.
* **New:** Tickets with the **New** status.
* **All:** Every ticket, in any status.

### Saved Filters (Pro)

This group lists the searches you saved with the [Advanced Filter](/advanced-filter-save-search-feature). Click one to apply it to the list. The group appears only after you save at least one search, and saved filters have no count.

### Tags

This group lists your ticket tags. Click a tag to see the open tickets that carry it. The sidebar shows the first eight tags. When you have more, use the **Filter tags** search box to find the one you need. Tags have no count.

::: info
The counts include only the tickets you are allowed to see. If your access is limited to certain tickets or business inboxes, the counts reflect that, so two agents may see different numbers for the same view.
:::

### Collapse the Sidebar and Groups

* Click a group name, such as **My Work** or **Priority**, to fold or unfold that group. Fluent Support remembers which groups you closed in your browser.
* Click the arrow button next to **Ticket Filters** (**Collapse Sidebar**) to shrink the sidebar to a narrow column of icons. Hover over an icon to see the view name. The collapsed sidebar hides **Saved Filters** and **Tags**. Click the button again (**Expand Sidebar**) to bring the full sidebar back.

On phones and tablets, the sidebar is hidden so the list starts at the top of the screen. Tap the list title to open **Ticket Views** and pick a view.

::: tip
You can jump to some views with [keyboard shortcuts](/navigate-with-keyboard-shortcut), such as **Assigned to Me**, **Unassigned** and **Bookmarks**.
:::

## Individual Ticket Management

Clicking on any ticket from the list opens the individual ticket page, where you can respond to customers and manage ticket metadata.

### Switch Views and Move Between Tickets

When you open a ticket from the list, the left column keeps showing the tickets in the view you came from. Click any ticket there to open it.

To work through a different view without going back to the list:

1. Click the view name at the top left of the ticket page. It shows the current view, such as **Assigned to Me**, and how many tickets it holds.
2. Pick another view from the menu. The menu has the same groups as the [ticket list sidebar](#ticket-list-views).
3. The ticket list on the left reloads with the new view. The ticket you are reading stays open.

To move through the list one ticket at a time, use the position control at the top right of the ticket page:

1. Check your place in the list, shown as a position such as **3 of 42**.
2. Click the up arrow (**Previous ticket**) or the down arrow (**Next ticket**) to open the ticket before or after this one.
3. When you reach the end of a page, Fluent Support loads the next or previous page for you, so you can keep going through the whole view.

The arrows are disabled on the first and last ticket in the view. Click the arrow button next to the view name (**Collapse Sidebar**) to hide the ticket list on the left and give the conversation more room.

![Single ticket top bar with the view switcher menu open and the previous and next ticket arrows](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-view-switcher-navigation.webp)

::: tip
You can also move to the next or previous ticket with a [keyboard shortcut](/navigate-with-keyboard-shortcut).
:::

::: info
The view switcher and the position control appear when you open a ticket from the ticket list. If you open a ticket from a direct link, the full **Ticket Filters** sidebar shows on the left instead.
:::

### Core Response Tools

* **A) Reply:** Opens the text editor to respond to the customer. You can format text (bold, italic), add links, and use the **Add Media** button to upload files.
* **B) Notes:** Allows agents to leave internal comments that are invisible to the customer. This is ideal for team collaboration and private context.
    * **Send as Informational Reply:** Use this to provide updates without changing the ticket's "Waiting" status.
    * **Reply and Close:** A single action to send your response and immediately resolve the ticket.
* **C) Business Inbox:** Shows and allows you to sort by the specific business brand associated with the ticket.
* **D) Product/Service:** Displays the specific product or service the customer is inquiring about.
* **E) AI Assistant:** Provides options to summarize long conversations and analyze customer satisfaction.
* **F) Ask AI:** Utilize artificial intelligence to draft responses based on the ticket context.
* **G) Templates:** Insert pre-written responses (Saved Replies) to common questions.
* **H) Smart Codes:** Insert dynamic data, such as the customer's name or ticket ID, directly into your reply.

![Ticket Management](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-management-3.webp)

* **I) Refresh Button:** This “Refresh” lets you update ticket entries with the latest information.
* **J) Add Bookmark:** This is the button for bookmarking the tickets.
* **K) Agent Selection:** Use the dropdown menu to reassign the ticket to a different support staff member.
* **L) Automatic Workflow:** Manually trigger pre-configured automation sequences for the ticket.
* **M) Close Ticket:** This is the button for closing your ticket.

![Ticket Management](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-management-4.webp)

### When Someone Replies While You Are Typing

If a customer or another agent adds a reply while you are still writing yours, Fluent Support holds your reply before sending it and shows a **New reply on this ticket** message, such as "Sarah replied while you were writing." This stops you from sending an answer that is already out of date.

You have two choices:

* **Show new replies:** Loads the new replies into the conversation so you can read them first. Your reply stays in the editor, so you can adjust it and send it when you are ready.
* **Send anyway:** Sends your reply as it is.

![New reply on this ticket dialog](/images/ticket-management/daily-operations/view-manage-ticket-entries/new-reply-while-writing.webp)

### Leaving A Ticket With An Unsent Reply

When you move to the next or previous ticket with the arrow buttons or a [keyboard shortcut](/navigate-with-keyboard-shortcut) while your reply box still has text, an image, or an attachment, Fluent Support asks before you go. The **Unsent reply** message says "Your reply has not been sent. Leave this ticket?". Click **Stay** to go back to your reply, or **Leave** to open the other ticket.

## Customer Information & Additional Details

The right sidebar provides a 360-degree view of the customer and the ticket's priority level.

* **Customer Information:** View the customer's name, email, and profile details. You can also edit or block the profile using the options menu (three dots).
* **Additional Details:**
    * **Client Priority:** The priority level set by the customer during submission.
    * **Agent Priority:** The priority level assigned by the support staff.
    * **Add Tags:** Apply custom labels for better ticket organization and filtering.
    * **Integration Data:** View data from connected apps like WooCommerce (purchase history), LMS platforms (enrollment status), or FluentCRM.
    * **Previous Conversations:** A list of the customer's past support history to provide full context for the current issue. When a customer has many past tickets, a **Load More** button appears at the bottom of the list — click it to fetch additional tickets without leaving the current ticket view.

![Ticket Management](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-management-5.webp)

### Ticket Stats

The **Ticket Stats** widget in the right sidebar gives you a quick summary of the ticket's history. It is expanded by default, and you can collapse it like the other sidebar widgets.

* **Created:** The date and time the ticket was created. Below it, you will see who started it ("by" an agent's name, for tickets an agent started) or where it came from ("via" a source, such as Web or Email).
* **First response:** How long the customer waited for the first agent reply, for example "2h 14m". It shows **Not yet** while the ticket is still new, and **Not recorded** when no first response time was saved for the ticket.
* **Replies:** The number of replies on the ticket.
* **Resolved in:** For closed tickets, how long the ticket took to resolve, with the date it was closed.

![Ticket Stats widget on a closed ticket](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-stats-widget.webp)