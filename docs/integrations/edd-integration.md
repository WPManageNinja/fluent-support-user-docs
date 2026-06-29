# EDD Integration


---

**Easy Digital Downloads (EDD)** is a platform for managing and selling digital products on WordPress. Fluent Support integrates with EDD to display a user’s purchase history—including **Product Name**, **Purchase Status**, and **Product Price—directly** on the **Ticket Entries** page.

This article will guide you through integrating [**Easy Digital Downloads**](https://easydigitaldownloads.com/) with **Fluent Support**.

## EDD Integration With Fluent Support

To integrate EDD with Fluent Support, follow the guideline below:

> [!Note]
> You do not need to perform any manual integration steps. The connection happens automatically if the Easy Digital Downloads (EDD) plugin is already installed and active on your site.

## EDD Product Information in Tickets

Once integrated, support agents can easily verify purchase details while viewing a ticket.

For example, when a support agent clicks on the **Eye Icon** next to the product price within the ticket view, a pop-up will appear displaying the user’s detailed EDD purchase history.

![Preview of Easy Digital Downloads \(EDD\) Integration with Fluent Support  ](/images/integrations-channels/core-integrations/edd-integration/easy-digital-dwnloads-1.webp)

## EDD Custom Fields

You can add an **EDD Products** or **EDD Orders** dropdown field to your ticket submission form. This lets customers select the specific product or order they need help with when they open a ticket — giving your agents immediate context without having to ask.

To add an EDD custom field, go to **Settings → Custom Fields** and click **+ Add New Field**. Choose **EDD Products** or **EDD Orders** as the **Field Type** and click **Add**.

<!-- TODO: Capture screenshot showing the Custom Fields settings with EDD field types selected, save at /images/integrations-channels/core-integrations/edd-integration/edd-custom-fields.webp -->

Give the field a **Public Label** (e.g., "Which product do you need help with?"), configure any additional options, and click **Add** to save. The field will now appear on your ticket submission form for customers to fill in.

## EDD Workflow Conditions

When EDD is active, your automatic workflows gain a dedicated **Easy Digital Downloads** condition group in the condition picker. These conditions let you trigger workflows based on what a customer actually owns — no custom field required.

The available EDD conditions are:

- **Customer Purchased Product** — matches customers who have purchased a specific EDD download. You can search and select one or more products from a dropdown.
- **Customer Purchased Package (Variation)** — matches customers who purchased a specific variable-price option, such as "Plugin Pro – Personal" or "Plugin Pro – Agency".
- **Customer Has Active License** — a Yes/No condition that checks whether the customer holds a currently active EDD software license. This condition only appears when the **EDD Software Licensing** extension is active.

<!-- TODO: Capture screenshot showing the workflow builder with the Easy Digital Downloads condition group expanded, save at /images/integrations-channels/core-integrations/edd-integration/edd-workflow-conditions.webp -->

::: tip
Use EDD commerce conditions together with EDD custom fields for the most powerful workflows. Custom fields let the customer tell you which product they need help with at submission time; commerce conditions let you automatically route or respond based on what they actually purchased.
:::

This is how the integration of **Easy Digital Download** with **Fluent Support** works!

---

