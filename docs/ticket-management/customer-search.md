# Searching Customers

The search on the **Customers** screen finds any customer in seconds. Type a name, an email address or a customer ID, and FluentSupport works out what you mean. You can also search one field at a time, such as a city or a ticket count, and combine several fields in one search.

## When Should You Use This?

- Find a customer when you only remember part of their name or email.
- Open a customer by ID, such as `#42`.
- Build quick lists, such as customers with more than two tickets or blocked customers.

## How To Search

1. Go to **FluentSupport > Customers**.
2. Click the **Search** icon above the customer list.
3. Type what you know and press **Enter**.

FluentSupport shows the best matches first when you search by name or email. Choose a sort order from the sort button if you prefer a different order.

## Just Type

| You type | FluentSupport finds |
|---|---|
| `timothy cook` | Customers whose name or email contains every word |
| `"timothy cook"` | The exact phrase in the full name or email |
| `jane@example.com` | The customer with that email address |
| `#1024` | The customer with ID 1024 |

## Search One Field

Put a field name and a colon before the value, for example `city:berlin`.

You don't need to remember the field names. Type `/` in the search box and pick a field from the menu. Use the arrow keys to move, **Enter** to pick and **Esc** to close.

![The field menu that opens when you type / in the customer search box](/images/ticket-management/search-filter/customer-search/customer-search-field-menu.webp)

These fields are available:

| Field | Searches | Example |
|---|---|---|
| `email:` | Email | `email:acme.com` |
| `name:` | Full name | `name:"timothy cook"` |
| `first:` / `last:` | First or last name | `first:timothy` |
| `title:` | Job title | `title:manager` |
| `address:` | Address | `address:"main street"` |
| `city:` | City | `city:"new york"` |
| `state:` | State | `state:california` |
| `zip:` | Postal code | `zip:10001` |
| `country:` | Country | `country:US` |
| `status:` | Status | `status:blocked` |
| `tickets:` | Number of tickets | `tickets:>2` |
| `open:` | Number of open tickets | `open:0` |
| `created:` | Created date | `created:2026-05` |
| `activity:` | Last activity date | `activity:<2026-01-01` |
| `user:` | WordPress user ID | `user:42` |
| `id:` | Customer IDs | `id:12,48` |

### Numbers And Dates

Ticket counts and dates also take `>`, `>=`, `<` and `<=`:

- `tickets:>2`: more than two tickets
- `open:0`: no open tickets
- `created:2026-05`: created in May 2026. You can also use a year (`2026`) or a day (`2026-05-14`).
- `activity:<2026-01-01`: no activity since the start of 2026

Use quotes for values with spaces, such as `city:"new york"`.

### Combine Searches

Every part of your search must match. For example, `open:>0 activity:<2026-01-01` finds customers with open tickets but no activity since the start of 2026. `city:berlin anna` finds customers named Anna in Berlin.

![Customer search results for tickets:>1](/images/ticket-management/search-filter/customer-search/customer-search-results.webp)

## Search Tips

Click the **?** icon in the search box, or type `?`, to open **Search tips**. It lists every field and a few ready-made examples.

![The Search tips dialog with examples and every search field](/images/ticket-management/search-filter/customer-search/customer-search-tips.webp)

## Tips And Notes

::: tip
A word with a colon that isn't a field name, such as a time like `10:30`, is searched as ordinary text.
:::
