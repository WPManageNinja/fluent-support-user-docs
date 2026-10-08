# Managing Email Notifications

With Fluent Support, you can set up **Email Notifications** that will send automated emails to customers, admins, or support agents based on certain actions such as a new Ticket created, a Ticket replied to by an agent, a ticket closed by an agent, etc. 

This article will help you through the steps required to learn the whole process.

## Set & Customize Your Email Notifications 

From the Fluent Support **Dashboard** , go to **Business Inboxes** , select your desired business inbox, and click on the **Setting Icon**.

![Open the settings of  the desired business inbox](/images/email-notifications/managing-email-notifications/email-notification-1.webp)

Here are your **Email Settings** from where you can customize your email notification. To know the **Detailed Functionalities** of **Email Settings** , read this [Documentation](/web-and-email-settings-in-business-inbox).

![Open Email Settings](/images/email-notifications/managing-email-notifications/email-notification-2.webp)

Choose the **Notification Type** from the list of email notifications that suits your needs.

![Choose from all the Notification Types](/images/email-notifications/managing-email-notifications/email-notification-3.webp)

A brief explanation of the Settings of the Above-Mentioned Email Notifications List:

 * **Ticket Created (To Customer):** When a customer creates a new ticket, they will receive an email notification.  
 * **Replied by Agent (To Customer)** : When an agent replies to a ticket, the customer will receive an email notification.  
 * **Ticket Closed by Agent (To Customer)** : When an agent closes a ticket, the customer will receive an email notification.  
 * **Ticket Created (To Admin):** When a customer submits a new ticket, the admin will receive an email notification.  
 * **Replied by Customer (To Agent/Admin)** : When a customer replies to a ticket, the assigned **Agent or Admin** will receive the email as a notification.  
 * **Ticket Agent Change (To Agent):** When a ticket agent changes, the agent/s will receive an email notification.  
 * **Ticket Created by Agent (To Customer):** When an agent creates a ticket, the customer will receive an email notification. The email subject is the ticket title.

## Agent Signature in Email Templates

An agent's signature is added to an email only where you place the <code v-pre>{{agent.signature}}</code> smartcode in the template, usually at the end of the **Replied by Agent (To Customer)** message. It is not appended automatically, so a reply shows exactly one sign-off.

> [!WARNING]
> If you upgraded and your email template was saved in an earlier version, the signature stays missing until you add <code v-pre>{{agent.signature}}</code> to the template.

To set up an agent's signature text, see [Adding Support Staff Agents](/adding-support-staff-agents#agent-signature).

![Setup agent signature](/images/email-notifications/managing-email-notifications/shortcode-agent-signature-4.webp)

## Sender Name

Agent replies use the **From Name** chosen in the business inbox's email settings (inbox, agent, or custom). Automatic emails always use the inbox name. See [Web & Email-Based Settings in Business Inbox](/web-and-email-settings-in-business-inbox) for details.

