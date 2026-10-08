# Web & Email-Based Settings in Business Inbox

**Web and Email-Based (Mailbox)** business inbox allow customers to create support tickets both from the website and email. This article will explain the functionalities of web and email-based business (mailbox) settings in Fluent Support. Read the article accordingly to understand what these settings do.

## Web and Email-Based (Mailbox) Settings of Business Inbox 

Go to **Business Inboxes** from the **Fluent Support** **Dashboard** , select the business inbox you kept **Web and Email-Based (Mailbox)** , and click on **View Setting**.

![View settings from Fluent Support Dashboard](/images/setup-configuration/business-inboxes/web-and-email-settings-in-business-inbox/view-settings-2-scaled-1.webp)

You will find **Inbox Settings,** **Email Settings, and Email Piping** in the left menu to set your **Web and Email-Based (Mailbox).** After making changes, click **Save Settings** at the top right of the page.

![Inbox Settings, Email Settings and Email Piping of a Business Inbox](/images/setup-configuration/business-inboxes/web-and-email-settings-in-business-inbox/3-settings-1.webp)

### Inbox Settings 

The **Inbox Settings** page contains the following options:

* **Inbox Name:** The name of this business inbox.
* **Support Inbox Email:** The email address of the inbox. Customers' replies are received at this address.
* **From Name:** The sender name customers see on emails written by an agent. See [From Name](#from-name) below.
* **Admin Email Address:** The email address of the admin who should receive admin notifications for this inbox.
* **Email Footer For Customers:** A footer that is added to emails sent to customers. You can use the **Visual** or **Code** editor, add media, and insert **Smart Codes**.
* **Inbox Color:** The color used to identify this inbox in the ticket list.
* **Hide Badge in Tickets:** Check this box to hide the inbox badge in the ticket list.

For more details about the settings that work the same way as a web-based inbox, check this **[Documentation](/web-based_settings_in_business_inbox)**.

But, you need to complete the **Email Piping** settings first to activate your email-based business inbox. To know the process for Email Piping, check this **[Documentation](/email-piping-email-based-support-ticket)**.

#### From Name

The **From Name** setting controls the sender name customers see on emails written by an agent, such as replies and outreach emails. Choose one of the following:

* **Inbox name:** Emails are sent using the business inbox name. This is the default.
* **Replying agent's name:** Emails are sent using the name of the agent who replied.
* **Custom:** Emails are sent using a custom name that you enter.

How it applies:

* **Agent replies and outreach emails** use the From Name you select.
* **Automatic emails**, such as confirmations, always use the **inbox name**.
* The email address stays the same, so customer replies still reach this inbox and **thread back** into the same ticket.

### Email Settings 

This setting also works exactly in the same process as **Web-Based** **Settings** of Business Inbox. So, to know more about how to use this **Email** **Settings** , check this [**Documentation**](/web-based_settings_in_business_inbox).

To place an agent's signature in the emails, add the <code v-pre>{{agent.signature}}</code> smartcode to the email template. See [Managing Email Notifications](/customize-email-notifications#agent-signature-in-email-templates).

### Email Piping 

To activate your **Email-based Business Inbox** , you need to complete the **Email** **Piping** first. So, to know the process for **Email Piping** , check this **[Documentation](/email-piping-email-based-support-ticket)**.
