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

## Reaching Out With "Initiated by agent"

Tick **Initiated by agent** when you are the one starting the conversation, for example to follow up on an order or tell a customer about an issue. The ticket then reads like an email you sent, not like a request from the customer:

* **What you write becomes your first reply.** The text you enter in **Ticket Details** is sent as your reply, so the conversation opens with your message.
* **In the ticket view,** your team sees a one-line note, such as "Sarah Lee started this conversation", instead of a customer message at the top.
* **In the customer portal,** the customer sees your message as the first message in the conversation.
* **The source shows as Agent outreach** in the ticket list, on the dashboard, and in the ticket view. You can also find these tickets with the **Source** item in the [Advanced Filter](/advanced-filter-fluent-support).

### The Email Your Customer Receives

Fluent Support emails your message to the customer using the **Agent Outreach Ticket (To Customer)** email in your Business Inbox's **Email Settings**. By default:

* **Subject:** The ticket subject you entered (<code v-pre>{{ticket.title}}</code>), just like a normal email.
* **Body:** Your message (<code v-pre>{{response.full_content}}</code>) followed by your agent signature (<code v-pre>{{agent.signature}}</code>). For web-based inboxes, it also adds a **Reply to this conversation** link so the customer can answer in the portal.

The usual "ticket created" confirmation is not sent for these tickets, so the customer gets only your message.

::: info
If you already customized the **Agent Outreach Ticket (To Customer)** email for an inbox, your saved subject and body are kept. To learn more about inbox email templates, see [Web-Based Settings in Business Inbox](/web-based_settings_in_business_inbox).
:::

<!-- TODO: Capture screenshot of an agent-initiated ticket in the ticket view showing the "started this conversation" note and the Agent outreach source, and save it at /images/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer/agent-outreach-ticket-view.webp -->
