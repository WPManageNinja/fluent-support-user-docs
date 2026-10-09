# View & Manage Ticket Entries

The **Tickets** section is the central hub for viewing and managing all customer inquiries within Fluent Support. This dashboard provides a comprehensive view of your support operations, customer information, and specific user summaries in one place.

## Accessing Tickets

To view your tickets, navigate to your **Fluent Support Dashboard** and click on **Tickets** in the top navigation menu.

![Ticket Management](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-management-1.webp)

## Ticket Filtering Sections

Once in the Tickets area, you will find four primary sections in the left sidebar to help organize your workflow:

* **All Tickets:** Displays every ticket submitted to the system.
* **My Tickets:** Shows only the tickets specifically assigned to you (the active agent).
* **Unassigned:** Contains tickets that have not yet been assigned to a support agent.
* **Bookmarks:** Stores tickets you have specifically marked for easy access.

![Ticket Management](/images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-management-2.webp)

## Individual Ticket Management

Clicking on any ticket from the list opens the individual ticket page, where you can respond to customers and manage ticket metadata.

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

<!-- TODO: Capture screenshot of the "New reply on this ticket" dialog with the Show new replies and Send anyway buttons, and save it at /images/ticket-management/daily-operations/view-manage-ticket-entries/new-reply-while-writing.webp -->

### Leaving A Ticket With An Unsent Reply

When you move to the next or previous ticket with a [keyboard shortcut](/navigate-with-keyboard-shortcut) while your reply box still has text, an image, or an attachment, Fluent Support asks before you go. The **Unsent reply** message says "Your reply has not been sent. Leave this ticket?". Click **Stay** to go back to your reply, or **Leave** to open the other ticket.

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

<!-- TODO: Capture screenshot of the Ticket Stats sidebar widget on a closed ticket (showing Created, First response, Replies and Resolved in), and save it at /images/ticket-management/daily-operations/view-manage-ticket-entries/ticket-stats-widget.webp -->