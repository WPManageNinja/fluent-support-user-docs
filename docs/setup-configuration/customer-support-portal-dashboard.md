# Customer Support Portal Dashboard

The **Customer Portal** is intended for direct use by end-users where users can view & use the dashboard to submit tickets. This article will guide you through how the **Customer Portal** of Fluent Support can be used with all the available options.

## Customer Portal 

To learn how you can use the customer portal with the help of its all available options, follow the steps with the screenshots below – 

First, sign up or log in to the customer support portal and the **Customer Portal Dashboard** will open with all available options.

> [!Note]
> Remember, for sign-up, use a valid email as a verification code will be sent to the user email for confirmation, ensuring only valid emails can be used for sign-in.

![Customer Support Portal Dashboard](/images/setup-configuration/customer-portal/customer-support-portal-dashboard/dashboard-of-customer-support-portal-1-1.webp)

**All the options of the Customer Portal Dashboard are explained below:**

**A. Create Ticket** : Using this button, users can **create** and **submit** as many **support tickets** as they want. 

**B. Logout** : Using this button, users can logout from their customer support portal dashboard at any time. **Remember** , you can get the logout option, in two different ways. These are: 

  1. **Use Gutenberg Block** : To get the logout option, you need to add the **Customer Support Portal** to your **WordPress Site** (desired page/post) using the Gutenberg Block. To learn how to add a **Customer Portal** using **Gutenberg Bloc** k, read this [Documentation](/customize-your-customer-portal).  

  2. **Use Shortcode** : The second way to get the logout option in the **Customer Portal Dashboard** is to add the following **Shortcode** to your **WordPress Site** (desired page/post). To learn more details about adding a **Customer Portal** using **Shortcode** , read this [Documentation](/shortcodes).

`[fluent_support_portal show_logout = yes]`

**C**.**Status Filter** : Using this, users can filter which tickets they want to see in their dashboard based based on the available ticket stauses (e.g., **All** , **Opened,** or **Closed** tickets). 

**D. Product Filter** : Using this dropdown option, users can filter their tickets based on the available **Products**.

**E**. **Tickets Sorting** : With this, users can **Sort** their tickets in **Ascending** or **Descending** order based on **Ticket ID** , **Title** , & **Created** **At** options. 

**F**. **Search Bar** : Using this search bar, users can search for any of their desired tickets by putting its title in the box.

**G**. **Conversation** : Under this column, all tickets will be listed.

**H**. **Date** : Under this column, users can see the opening time of their tickets.

**I. Status** : Inside this column, users can see the ticket **statuses** (e.g., **New** , **Active,** and **Closed**) for each ticket.

**J: Tickets Display Dropdown** : Using the option, users can define per page how many tickets they want to see.

**K: Pagination** : Using this arrow option, users can scroll to different pages.


## Changing Your Account Email

Customers can update the email address on their account right from the Customer Portal. Because the email address is what links a customer to their tickets, Fluent Support asks the customer to confirm the new address before the change takes effect.

Here is how it works from the customer's side:

1. The customer enters a new email address in their portal profile and saves it.
2. Fluent Support sends a **verification email** to the **new** address. The account keeps using the old email until this step is completed.
3. The customer opens that email and clicks the **verification link**. The link is signed and unique to that request, so it cannot be guessed or reused.
4. The account email is updated, and the customer can log in with the new address from then on.

> [!NOTE]
> If the customer never clicks the link, nothing changes — the old email address stays on the account. They can simply request the change again to receive a fresh link.

### What happens to tickets already sent from the new address?

Sometimes a customer has already been emailing your support inbox from the new address before they updated their profile. In that case, Fluent Support has been collecting those tickets under a separate, unlinked customer record.

When the customer verifies the new email, Fluent Support **automatically merges** that unlinked record into their account. All tickets, replies, and history from both addresses are brought together under one customer, so agents see the full picture in a single place and the customer sees all of their tickets in the portal.

> [!TIP]
> No action is needed from your agents — the merge happens on its own the moment the customer confirms the new email.

::: details For developers
If you have built an add-on that stores its own data against a customer ID, hook into the `fluent_support/merging_customer_records` action. It fires when two customer records are merged, so you can move your data from the old record to the one that is being kept.
:::
