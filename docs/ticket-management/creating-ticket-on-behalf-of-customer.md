# Creating a Ticket on Behalf of the Customer

This article will guide you through the process required to **create a ticket** for any customer using the **Add Ticket** functionality of Fluent Support. (especially in situations where a customer requests your support staff to open a ticket on their behalf).

## How to Create Tickets on Behalf of the Customer

Go to your Fluent Support **Dashboard** & click on **Tickets.**

![Tickets from Fluent Support Dashboard](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/create-ticket-for-customers-1.webp)

Click on the **\+ Add Ticket** button in the top left corner of the **Tickets** tab and a pop-up page will appear for creating a ticket.

![Add ticket for customers](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/create-ticket-for-customers-2.webp)

You can reach your customer here by entering the customer’s name or email address into the search box.

![Provide customer name & email](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/create-ticket-for-customers-3.webp)

But, if the search fails, you can tick the checkbox **Could not find a contact? Create a new one** to add a new customer to your list.

![Could not find a contact? Create a new one checkbox](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/create-ticket-for-customers-4.webp)

After clicking the **Create a new one** , you will need to provide the necessary information about the customer and once you are done, click on the **Next** button to proceed. 

From here you can also create a new WordPress user by selecting the **Create New User in WordPress**. To create a new WordPress user you have to give the WordPress username and password for that user. 

![Create a new one option](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/create-ticket-for-customers-5.webp)

Here, you need to fill up the required fields with the customer’s details and requirements about the ticket.

Once you are done, click on **Create Ticket** to add the ticket on behalf of the customer.

![Finally create ticket for customer](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/create-ticket-for-customers-7.webp)

**A brief explanation of the settings shown in the screenshot above is given below —**

  * **Selected Contact Details:** Here, you will find the name & email of the customer on whose behalf you opened this ticket.
  * **Select Business Inbox:** Here, you can select Business Inbox from the dropdown to specify the mailbox where this ticket should open.
  * **Subject:** You can add the subject to your ticket here.
  * **Ticket Details:** Here, you can add appropriate ticket details using this **Text** editor. And, to know the details about the **Templates** setting located in the left corner under Ticket Details, [click here](/templated-saved-replies).
  * **Add Attchments:** Using this setting, you can attach files with your ticket which can be Photos, CSV, PDF/Docs, Zip, and JSON.
  * **Related Product/Service:** Here, you can select your relevant Product Name, for example. Fluent Support, Fluent CRM, and so on.
  * **Priority:** Also, you can choose the ticket’s priority level; there are three priority levels; **Normal, Medium** & **Critical.**
  * **Initiated by agent:** Check this box to clearly indicate that the support ticket is being created by an agent on behalf of the customer.
  * **Save as an internal note:** Check this box to log the ticket for your team only. The customer does not see it until you reply. See [Logging a Ticket as an Internal Note](#logging-a-ticket-as-an-internal-note).

## Reaching Out With "Initiated by agent"

Tick **Initiated by agent** when you are the one starting the conversation, for example to follow up on an order or tell a customer about an issue. The ticket then reads like an email you sent, not like a request from the customer:

* **What you write becomes your first reply.** The text you enter in **Ticket Details** is sent as your reply, so the conversation opens with your message.
* **In the ticket view,** your team sees a one-line note, such as "Sarah Lee started this conversation", instead of a customer message at the top.
* **In the customer portal,** the customer sees your message as the first message in the conversation.
* **The source shows as Agent outreach** in the ticket list (hover the source icon) and on the dashboard. You can also find these tickets with the **Source** item in the [Advanced Filter](/advanced-filter-fluent-support).

### The Email Your Customer Receives

Fluent Support emails your message to the customer using the **Agent Outreach Ticket (To Customer)** email in your Business Inbox's **Email Settings**. By default:

* **Subject:** The ticket subject you entered (<code v-pre>{{ticket.title}}</code>), just like a normal email.
* **Body:** Your message (<code v-pre>{{response.full_content}}</code>) followed by your agent signature (<code v-pre>{{agent.signature}}</code>). For web-based inboxes, it also adds a **Reply to this conversation** link so the customer can answer in the portal.

The usual "ticket created" confirmation is not sent for these tickets, so the customer gets only your message.

::: info
If you already customized the **Agent Outreach Ticket (To Customer)** email for an inbox, your saved subject and body are kept. To learn more about inbox email templates, see [Web-Based Settings in Business Inbox](/web-based_settings_in_business_inbox).
:::

![Agent outreach ticket in the ticket view](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/agent-outreach-ticket-view.webp)

## Logging a Ticket as an Internal Note

Sometimes a customer reaches you by phone, chat or in person, and you want a record of it without emailing them. Tick **Save as an internal note** when you create the ticket:

![The Create Ticket form with Save as an internal note ticked and the Internal note field](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/agent-logged-ticket-form.webp)

* **The field label changes** to **Internal note (the customer will not see this)**. What you write there, and any attachments, are saved as an internal note on the ticket.
* **In the ticket view,** your team sees a one-line note, such as "Sarah Lee logged this ticket", followed by your internal note.
* **The customer is not notified.** No ticket created email is sent, and the ticket does not appear in their customer portal.
* **Your first reply makes it visible.** When you reply to the customer, the ticket appears in their portal with your reply as the first message. Your internal note stays hidden from them.
* **The source shows as Logged by agent** in the ticket list and in the **Source** item of the [Advanced Filter](/advanced-filter-fluent-support).

::: info
You can tick either **Initiated by agent** or **Save as an internal note**, not both. Ticking one clears the other.
:::

![A logged ticket in the ticket view, opening with the internal note and the "logged this ticket" line](/images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/agent-logged-ticket-view.webp)
