# Web-Based Settings in Business Inbox

**Web-based Business Inbox** allows customers to create support tickets directly from the website only. This article will explain the functionalities of web-based business inbox settings in Fluent Support. 

## Web-Based Settings of Business Inbox 

Go to **Business Inboxes** from the **Fluent Support Dashboard** , select the **business inbox** you kept **Web-based** , and click on **View Setting**. 

![View Settings of specific web-based business inbox](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/view-settings-1-scaled.webp)

You will find two types of **Settings** options (**Inbox Settings** & **Email Settings**) to set your Web-Based Inbox.

### Inbox Settings 

In the **Inbox Settings,** you can do lots of customization, e.g., changing inbox name, adding admin email address & footer, selecting inbox color, etc. 

 **Inbox Name:** You can change the name of your Business inbox from here.

 **Support Inbox Email:** From here, you will find the email you used to create this business inbox. 

 **From Name:** Choose the sender name your customers see when an agent emails them from this inbox. You can pick one of three options:

 * **Inbox name:** Every agent email shows the inbox name, for example "Acme Support". This is the default.
 * **Replying agent's name:** The email shows the full name of the agent who wrote it, for example "Sarah Lee".
 * **Custom:** Write your own name pattern using smartcodes. For example, <code v-pre>{{agent.first_name}} from {{business.name}}</code> shows as "Sarah from Acme Support". You can use <code v-pre>{{agent.first_name}}</code>, <code v-pre>{{agent.last_name}}</code>, <code v-pre>{{agent.full_name}}</code>, and <code v-pre>{{business.name}}</code> (the inbox name).

::: info
The **From Name** applies only to emails an agent writes, such as ticket replies and tickets an agent starts for a customer. Automatic emails, like ticket confirmations and closed-ticket notices, always use the inbox name. The sender email address does not change, so customer replies still come back to this inbox. If the custom name comes out empty, Fluent Support falls back to the inbox name.
:::

<!-- TODO: Capture screenshot of the From Name setting with the Custom option selected, and save it at /images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/inbox-from-name.webp -->

 **Admin Email Address:** Here, you can add another email address for admin where admin will get email if enabled in email settings, and you can change it anytime.

![Admin Email Address](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/inbox-settings-2.webp)

**Email Footer For Customers:** You can also set Email footer for your customers where —
 
 * You can add **Media** , **Text** and customize their footer in **Visual/Code** mode from here
 * **Smart Codes:** You will find the Smartcodes here and you can use on your footer.

![Email Footer for Customers](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/email-footer-for-customer.webp)

 **Inbox Color:** From the Inbox Color drop-down, you can select any color for your business inboxes

 **Hide Badge in Tickets:** The Business Inbox Badge is an automatically generated label that appears next to a ticket’s title in the main ticket list. Its purpose is to provide a quick visual indicator of which Business Inbox (i.e., which support channel or product) the ticket belongs to. 
 
 Fluent Support creates this badge by using a short abbreviation from the name of the specific Business Inbox that received the ticket. For example, a ticket submitted to your “Automation Support” inbox might display an **`Aut.`**. badge.
 
 To hide the badge from the ticket, just need to enable the **`Hide Badge in Tickets`** button. 

![Hide Badge Tickets](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/hide-badget-4.webp)

Always press **Save Settings** after finishing all the customization in your **Inbox Settings** to save it, otherwise, changes will not appear in your inbox.

### Email Settings 

In the **Email Settings,** you can select to whom and when the email notifications will be delivered. Additionally, you can also customize the content of the email as well.

You will see certain options are enabled by default which can be modified at any time, and can add more options for sending and receiving email notifications as well.

First, select any option you want to add, customize or modify. Then, click on the **Pencil Icon** and a pop-up box will appear where you can enable notifications and customize email settings.

> For instance, I selected the **Ticket Created (To Customer)** option to send email notifications right after a customer submits a support ticket; but, you can choose any option to suit your needs.

![Email Settings of web-based business inbox](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/email-settings-5.webp)

To enable this option, click on **Enable This Email Notification** and press **Save Settings** to send this email notification to customers.

![Enable Email Notification](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/enable-button-for-options-drift-video.gif)

Click on the **Send Attachments (Not Recommended)** button to attach files to your email notifications.

> [!NOTE]
> **Why is this button suggested as (Not Recommended)?**  
> Sometimes when you attach any files to your email, it may face some delivery failure. 
> To avoid this situation and ensure that any kind of email is delivered without any hassle, we recommend using the **[FluentSMTP](https://fluentsmtp.com/)** plugin. 


![Send Attachments \(Not Recommended\)](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/send-attachments.webp)

You can customize the subject name and body content of your email using the **Email Subject** field and **Email Body** box. Also, use the **shortcodes** from the **Available Smartcodes** list within the Email body or subject which will dynamically fetch various information like the Customer name, email, ticket ID, etc.

![Customize your email subject & body using shortcode](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/customize-your-email-content-1.webp)

Always press **Save Settings** after finishing all the customization in your emails to save it, otherwise changes will not appear in your emails.

#### Adding the agent signature to emails

Agent signatures are not added to emails automatically. A signature appears only where an email template contains the <code v-pre>{{agent.signature}}</code> smartcode, listed as **Agent Signature** under **Available Shortcodes** when you edit a template such as **Replied by Agent (To Customer)**.

* The smartcode prints the replying agent's signature when the agent has one turned on, and nothing otherwise. Agents set their signature under [Support Staff](/adding-support-staff-agents#agent-signature).
* New default templates that include the agent's reply use <code v-pre>{{response.full_content}}{{agent.signature}}</code>, so the signature sits right below the reply. For example, **Agent Outreach Ticket (To Customer)** uses it, and so does **Replied by Agent (To Customer)** in email-based inboxes.
* In a web-based inbox, the default **Replied by Agent (To Customer)** email only tells the customer there is a new reply and links to the portal, so it has no signature. Add the smartcode if you want one there.

::: warning
Templates you saved before this update are kept as you wrote them and do not include the signature. To add it, click the **Pencil Icon** next to the email, place <code v-pre>{{agent.signature}}</code> in the **Email Body** (usually right after <code v-pre>{{response.full_content}}</code>), and click **Save Settings**.
:::

<!-- TODO: Capture screenshot of an email template with the agent.signature smartcode in the Email Body and the Agent Signature smartcode highlighted, and save it at /images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/agent-signature-smartcode.webp -->

### Set as Default 

 * **“Set as Default”** is another feature that allows you to set up one of your web-based business inboxes as the default inbox, i.e., automatically receive all emails from your business in one specific inbox by default.

This **“Set as Default”** feature is available for Web-Based Business Inboxes only.

![Set any web-based inbox as default business inbox](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/set-as-default.webp)

### Delete Business Inboxes 

The “**Delete”** setting option allows you to delete any business inbox and transfer all support tickets easily to another inbox. 

![Delete any web-based business inbox if needed](/images/setup-configuration/business-inboxes/web-based-settings-in-business-inbox/delete-business-inbox.webp)


