# Email Piping

You must set up **Email Piping** first to use the **Business Inboxes** for **Email-based** support channels in Fluent Support. This article will guide you through the steps required for **Email Piping**.

## Email Piping Settings

To set up **Email Piping** , you must create a **Business Inbox** with an **Email-Based** support channel. And, to learn how to create this, read this [Documentation](/web-and-email-settings-in-business-inbox).

Go to **View Settings** from your desired email-based business inbox and click **Email Piping**.

![Open desired Business inbox's settings](/images/setup-configuration/business-inboxes/email-piping-email-based-support-ticket/email-piping-dashboard-1.webp)

>Read the **terms and conditions** before you agree to it and click the **Get Piping Email Details**.

To get the **email piping details** , ensure your **fluent support license key** is **active** as **Email Piping** is a **Pro Feature** of **Fluent Support**. To learn how to get the license key and activate it, read this [Documentation](/upgrade-to-fluent-support-pro-add-on).

![Get piping email details](/images/setup-configuration/business-inboxes/email-piping-email-based-support-ticket/get-email-piping-details-2.webp)

Now, copy the **Mailbox Email** address provided by **Fluent Support** to set up auto-forwarding of your emails from other email addresses.

![Copy Masked Mailbox Email ](/images/setup-configuration/business-inboxes/email-piping-email-based-support-ticket/copy-the-mailbox-email-provided-by-fluent-support-3.webp)

## How to Forward/Redirect From an Email Provider

In this step, you need to set up an email forwarding or redirection from your email provider or host. Depending on your email provider, you can easily set up email forwarding following the instructions provided.

Remember, after setting up Email forwarding, a **verification email** will be sent. So, **check recent tickets** for the verification code.

To show you the process, we have listed a few examples below –

### Forward or redirect from an Email Provider

  * [Google Workspace (formerly known as G Suite)](/auto-forward-from-google-workspace-to-fluent-support)
  * [Office 365 Outlook Web Access (OWA)](/forward-from-microsoft-365-outlook-web-access-owa)
  * [Amazon WorkMail](https://docs.aws.amazon.com/workmail/latest/userguide/email-rules.html)
  * [Zoho Mail](https://www.zoho.com/mail/help/email-forwarding.html)
  * [Yahoo Mail](https://help.yahoo.com/kb/new-mail-for-desktop/enable-automatic-email-forwarding-yahoo-mail-sln29133.html)

### Forward or redirect from a Host

  * [Blue](https://www.bluehost.com/hosting/help/email-forwarders/1000)[host](https://www.bluehost.com/hosting/help/email-forwarders/1000)
  * [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/308/2214/how-to-set-up-free-email-forwarding/)
  * [cPanel](https://docs.cpanel.net/cpanel/email/forwarders/)
  * [GoDaddy](https://www.godaddy.com/en-in/help/forward-incoming-email-to-another-email-address-32282)
  * [Dreamhost](https://help.dreamhost.com/hc/en-us/articles/215724207-How-do-I-add-a-forward-only-email-address-)

After you have set an auto-forward, your mailbox will be active. Now, when anyone sends an email to your email address, a new ticket will be created in Fluent Support.

## Collaboration with CC in Fluent Support Tickets

CC is an email feature that allows you to include additional recipients in a message, with CC recipients visible to all.

The Screenshots below show the whole process being demonstrated visually:

When a user sends an email to your business inbox and includes additional CC users in subsequent reply emails, Fluent Support automatically designates CC users as sub-customers for that specific ticket. You will see the **Apply CC** button to add CC emails in your ticket.

Here, you can see the customer-added CC email which you can add or remove by pressing the **Apply CC** and **Discard CC** button before replying if you want. You can add multiple **CC Email** here. 

![Apply CC](/images/setup-configuration/business-inboxes/email-piping-email-based-support-ticket/email-piping-cc.webp)


To reply to the ticket, click on the **Add Reply** button. Your ticket reply will be sent to the primary customer and all the CC recipients.

>Replies from CC users are treated as coming from the primary customer i.e., CC users can reply to the agent directly from their mailbox.

## How Automatic Emails Are Handled

Not every email that reaches your inbox is written by a person. Out-of-office replies, delivery failures, and system notices can open tickets you don't need, reopen closed tickets, or even start an endless back-and-forth between two autoresponders. Fluent Support Pro sorts these emails for you, with nothing to set up.

### Out-of-Office and Other Auto-Replies

When a customer's mail program sends an automatic reply (for example, "I'm away until Monday") to one of your ticket emails:

* It does **not** create a new ticket and does **not** count as a customer reply, so a closed ticket stays closed.
* It is added to the ticket as an internal note that starts with "Automatic reply received from *customer email*", followed by the email subject and a short excerpt. Your agents can still see that the customer is away.
* If the auto-reply cannot be linked to a ticket, or it does not come from the ticket's customer or a CC'd address, it is discarded.

### Bounced Emails

When an email you sent for a ticket cannot be delivered, the delivery failure is added to that ticket as an internal note:

* "An email to *address* could not be delivered." when the failed address is known.
* "An email for this ticket could not be delivered." when it is not.

The note also shows the error code or message from the mail server when one is available. Delay notices and "delivered" reports are ignored, because they are not failures. A bounce that cannot be linked to a ticket is discarded.

::: tip
If you see a bounce note on a ticket, check the customer's email address for typos before replying again.
:::

### Other Automated Emails

Some machine-sent emails are real work, such as payment notices, alerts, or form notifications. Fluent Support treats these like any other email and creates a ticket (or adds a reply) as usual. The only difference is that **no automatic confirmation email** is sent back to the sender, so two automated systems can't keep emailing each other.

### Loop Protection Limits

As an extra safety net, Fluent Support limits the automatic emails it sends back to a customer whose ticket came in by email. This covers the "ticket created" confirmation and replies added by a [workflow](/automatic-workflow). Within any **3 hours**, each customer gets at most:

* **10** automatic emails in total, and
* **2** automatic emails with the same subject.

Anything over the limit is held back. Replies written by your agents are never held back.

### How Customer Replies Find Their Ticket

Every email Fluent Support sends to a customer carries a hidden, signed reference to the ticket in its email headers. When the customer replies, Fluent Support uses this reference to add the reply to the right ticket, even if the customer changes the subject line. The reference is signed, so nobody can attach an email to another customer's ticket by guessing a ticket ID.

If the reference is missing (for example, the customer's mail program removed it), Fluent Support looks for the public ticket number in the subject, such as <code v-pre>#1042</code>, and matches it against that customer's own tickets.

When neither is found, a reply (a subject starting with **Re:**) can still be matched to one of the customer's tickets in the same inbox with exactly the same title, if that ticket had activity in the last 30 days. A brand-new email is always a new ticket, even if its subject matches an older ticket.

::: info
Partial subject matching, where a reply could join a ticket that only shares a few words of its subject, is now **off by default**. It used to put new questions on old, unrelated tickets. Developers can turn it back on with the `fluent_support/ticket_partial_match` filter.
:::

If you want to know more details about Email Piping, you can also read this [What is Email Piping and Why?](https://fluentsupport.com/what-is-email-piping-and-why/)  
