# Public Ticket Numbers

By default, **Fluent Support** identifies each ticket using its internal database ID. With **Public Ticket Numbers**, you can give every ticket a separate, human-readable serial number — something like `FS-1042` — that's shown in the ticket list, ticket view, email notifications, and the Customer Portal.

This is useful when you want ticket references that look professional, don't expose your internal ticket volume, and are easy to quote in conversations with customers.

## What Public Ticket Numbers Do

When you enable this feature, every new ticket receives a sequential public number starting from your chosen minimum. The number appears:

* In the **Ticket List** and **Ticket View** inside the admin dashboard.
* In **Email Notifications** — both in the subject and body, wherever the ticket number is referenced.
* In the **Customer Portal**, so customers can cite a ticket number when following up.

Existing tickets keep their original IDs. Only **new tickets** created after enabling this feature will use the public number format.

## Enable Public Ticket Numbers

To turn on Public Ticket Numbers, follow the steps below.

Go to **Settings** from your **Fluent Support Dashboard** and click on **Global Settings** from the left sidebar.

Scroll down and you'll find the **Enable Minimum Ticket Number** option. Check the box to turn it on.

![Enable Minimum Ticket Number option in Fluent Support Global Settings](/images/setup-configuration/customer-portal/public-ticket-numbers/public-ticket-number-1.webp)

Once enabled, two new fields will appear right below — **Minimum Ticket Number** and **Ticket Prefix**.

* **Minimum Ticket Number** — Set the starting point for your serial numbers (for example, `1000`). Fluent Support shows you the **Next Ticket Number** just below the field so you can plan accordingly.
* **Ticket Prefix** *(optional)* — Add a short prefix such as `FS-`, `SUP-`, or your brand abbreviation. This prefix will be added before every new public ticket number.

![Minimum Ticket Number and Ticket Prefix fields in Fluent Support](/images/setup-configuration/customer-portal/public-ticket-numbers/public-ticket-number-2.webp)

Once you're done, click the **Save Settings** button at the top right corner to apply the changes.

> **Remember:** Always press the **Save Settings** button after finishing the configuration. Otherwise, your changes will not take effect.

::: info
The minimum ticket number only sets a floor. If your database has already generated ticket IDs above your chosen minimum, Fluent Support will continue from the higher value so ticket numbers always stay unique.
:::

## Ticket Prefix

The prefix is a short text string added before the serial number. For example, with a prefix of `FS-` and a minimum number of `1000`, the very first ticket will display as `FS-1000`.

Keep prefixes short — three to five characters works best. The prefix is applied to all new tickets globally.

::: tip
Developers can control the prefix per product using the `fluent_support/ticket_prefix` WordPress filter. See the [Developer Documentation](https://developers.fluentsupport.com/) for more details.
:::

## Where Ticket Numbers Appear

Once enabled, your public ticket number will show up across Fluent Support and the Customer Portal:

| Location | What is shown |
| -------- | ------------- |
| **Ticket List** | Public number in each ticket row |
| **Ticket View** | Public number in the ticket header |
| **Email Notifications** | Public number in the subject line and body |
| **Customer Portal** | Public number on the customer's ticket list and ticket view |

## Using the Public Ticket Number in Email Templates

Once public ticket numbers are enabled, you can include the public number directly in your email notification subjects and body content using the <code v-pre>{{ticket.public_id}}</code> smart code.

### Where to Find It

Open any **Business Inbox**, click the **Settings** icon, and navigate to **Email Settings**. When you edit a notification template — such as *Ticket Created (To Customer)* or *Replied by Agent (To Customer)* — you'll see a list of available smart codes on the right side of the editor. **Public Ticket ID** (<code v-pre>{{ticket.public_id}}</code>) is listed there. Click it to insert it at your cursor position, or type it manually.

<!-- TODO: Capture screenshot of the email notification editor showing the Public Ticket ID smart code in the list, save at /images/setup-configuration/customer-portal/public-ticket-numbers/public-ticket-number-email-smartcode.webp -->

### Example Usage

A subject line like this:

```
[{{ticket.public_id}}] We received your support request: {{ticket.title}}
```

…will produce emails with subjects such as:

```
[FS-1042] We received your support request: Login issue on mobile
```

### Fallback Behavior

<code v-pre>{{ticket.public_id}}</code> always returns a value — it is safe to use in your templates even before you enable the Public Ticket Numbers feature. When the feature is off, it falls back to the internal database ticket ID. Once you enable the feature, it automatically starts outputting the formatted public number for all new tickets.

::: tip
Add <code v-pre>{{ticket.public_id}}</code> to your email subject lines so customers always have a reference number they can quote when following up.
:::

## Frequently Asked Questions

**What happens to tickets created before I enabled this feature?**
Tickets created before enabling this setting keep their original internal IDs as their public number. Only new tickets will follow the serial number format.

**Can I change the minimum number after saving?**
Yes, but only in a way that moves the starting number forward. Fluent Support will never reuse numbers that have already been assigned.

**Does the prefix change for existing tickets?**
No. The prefix is applied only to tickets created after the setting is saved.
