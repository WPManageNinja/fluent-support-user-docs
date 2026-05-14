# Public Ticket Numbers

By default, Fluent Support identifies each ticket using its internal database ID. **Public Ticket Numbers** give you a separate, human-readable serial number for each ticket — something like `FS-1042` — that is shown in the ticket list, ticket view, email notifications, and the Customer Portal.

This is useful when you want ticket references that look professional, don't expose your internal ticket volume, and are easy to quote in conversation with customers.

## What Public Ticket Numbers Do

When you enable this feature, every new ticket receives a sequential public number starting from your chosen minimum. The number appears:

* In the ticket list and ticket view inside the admin panel.
* In email notification subjects and body where ticket number is referenced.
* In the Customer Portal, so customers can cite a ticket number when following up.

Existing tickets keep their original ID until they are updated. New tickets will receive public numbers starting from your configured minimum.

## Enable Public Ticket Numbers

1. Go to **Fluent Support** from your WordPress dashboard.
2. Open **Settings** and click **Global Settings** from the left sidebar.
3. Scroll down to find **Enable Minimum Ticket Number** and check the box.
4. Set the **Minimum Ticket Number** — this is the starting point for your serial numbers. Fluent Support shows you what the next number will be so you can plan accordingly.
5. Optionally, add a **Ticket Prefix** such as `FS-`, `SUP-`, or your brand abbreviation.
6. Click **Save Settings**.

<!-- TODO: Capture screenshot for this step and save it at /images/setup-configuration/public-ticket-numbers/enable-ticket-numbers.webp -->

::: info
The minimum ticket number only sets a floor. If the database has already generated ticket IDs above your minimum, Fluent Support will continue from the higher value so numbers are always unique.
:::

## Ticket Prefix

The prefix is a short text string added before the serial number. For example, with a prefix of `FS-` and a minimum number of `1000`, the first ticket will display as `FS-1000`.

Keep prefixes short — three to five characters works well. The prefix is applied to all new tickets globally.

::: tip
Developers can control the prefix per product using the `fluent_support/ticket_prefix` WordPress filter. See the [Developer Documentation](https://developers.fluentsupport.com/) for details.
:::

## Where Ticket Numbers Appear

| Location | What is shown |
|----------|---------------|
| Ticket list | Public number in the ticket row |
| Ticket view | Public number in the ticket header |
| Email notifications | Public number in the subject and body |
| Customer Portal | Public number on the customer's ticket list and ticket view |

## Frequently Asked Questions

**What happens to tickets created before I enabled this feature?**
Tickets created before enabling this setting keep their original internal IDs for their public number. Only new tickets receive the serial number format.

**Can I change the minimum number after saving?**
Yes, but only in a way that moves the starting number forward. Fluent Support will not reuse numbers that have already been assigned.

**Does the prefix change for existing tickets?**
No. The prefix applies only to tickets created after the setting is saved.
