# Support Expiry

---

When you sell software with a support period, such as a licensed plugin or a membership, you may want to notify customers automatically when that period ends. Fluent Support handles this through a standard **Automatic Workflow** that checks the customer's license and sends a notification with renewal instructions.

This approach works with both **Easy Digital Downloads** and **FluentCart**, and needs no extra settings page.

## Requirements

- **Fluent Support Pro** must be active.
- **EDD** (with **EDD Software Licensing**) or **FluentCart Pro** must be installed and active, whichever platform you use to issue licenses. The license and purchase conditions used below become available through that integration.

## How It Works

When a customer submits a ticket, the workflow checks whether they purchased your product and whether their license is still active. Based on the result, it can automatically send them a message, for example letting them know their support period has ended and how they can renew.

## Before You Start: Set Up the Product

There is one small but important setup step that makes the whole workflow reliable.

**Create a matching product in Fluent Support.** Fluent Support keeps its own list of products (under **Settings → Products**), and these are separate from the products in EDD or FluentCart. The internal product IDs on each side are different and will never match automatically. So before building the workflow, add a product in Fluent Support's [Products](/creating-ticket-categories-products) section that mirrors the EDD or FluentCart product you want to target (for example, a "WP Social Ninja" product).

**Why this matters.** When a customer opens a ticket, they choose a product in the ticket form's **Product** field (see [Customize Forms](/ticket-form-customization)). That choice is the Fluent Support product. To make sure the workflow targets the right product, you line up two conditions:

- **Customer Purchased Product**: the product the customer actually bought, read from EDD or FluentCart.
- **Selected Product**: the Fluent Support product the customer picked on the ticket form.

Adding both conditions "syncs" the two sides, so the workflow only acts when the purchased product and the selected product refer to the same thing.

## Setting Up the Support Expiry Workflow

### Step 1: Create a New Automatic Workflow

From the **Fluent Support Dashboard**, go to **Workflows** and click **+ Create New** in the top-right corner.

![All Workflows page with the Create New button highlighted](/images/workflows-automation/support-expiry/support-expiry-all-workflows.webp)

In the **Add a New Workflow** popup, give the workflow a name such as `Support Expiry Notification`, select **Automatic** as the workflow type, and click **Create Workflow**.

![Add a New Workflow popup with a name entered and the Automatic type selected](/images/workflows-automation/support-expiry/support-expiry-create-workflow.webp)

### Step 2: Set the Trigger

Under **Set Your Trigger & Conditions**, choose **On Ticket Creation** as the trigger. This ensures the check runs the moment a customer tries to open a new ticket.

### Step 3: Add the Conditions

Conditions decide exactly which customers the workflow acts on. Join each one with **AND** so they all have to be true. The conditions below are added by your EDD or FluentCart integration.

**Condition 1: Confirm the purchased product**

Open the condition dropdown and select **Customer Purchased Product**. Set the operator to **Includes In** and choose the product the customer bought (for example, `WP Social Ninja`). This value comes from EDD or FluentCart.

**Condition 2: Sync with the Fluent Support product**

Click **+ AND**, open the dropdown again, and select **Selected Product**. Set it to **Equal** and choose the matching Fluent Support product you created earlier. This is the product the customer picks on the ticket form, and pairing it with Condition 1 keeps both sides in sync.

**Condition 3: Check the license**

Click **+ AND**, select **Customer Has Active License**, and set the value to match your goal. For a support-expiry notice, set it to **No** so the workflow only reaches customers whose license is no longer active.

::: tip Why two product conditions?
Fluent Support and EDD/FluentCart use different internal IDs for the same product, so they cannot be matched automatically. Using **Customer Purchased Product** (from EDD/FluentCart) together with **Selected Product** (from Fluent Support) lines the two sides up, so the workflow always targets the correct product.
:::

#### Targeting a specific package

If a product is sold in multiple packages or tiers (for example, **WP Social Ninja Basic**, **Advanced**, and **Agency**), you can narrow the workflow to just one of them by combining two **Customer Purchased Product** conditions:

- **Customer Purchased Product → Includes In → WP Social Ninja - Basic** (the customer owns the Basic package), and
- **Customer Purchased Product → Not Includes In → WP Social Ninja - Agency** (the customer does not own the higher tier).

Together these target only customers who hold the Basic package and not the upgraded one. The screenshot below shows a complete example that uses both the product sync and the package targeting.

![Workflow conditions showing Customer Purchased Product and Selected Product synced for WP Social Ninja, with package targeting and a license check](/images/workflows-automation/support-expiry/support-expiry-conditions-example.webp)

*In this example the license check is set to **Yes**, because it targets active Basic-package customers (a tier-eligibility use case). For a support-expiry notice, you would set **Customer Has Active License** to **No** instead.*

### Step 4: Add the Workflow Actions

Under **Workflow Actions (Tasks)**, click **+ Add Action** and choose **Add Response**. Write a clear, friendly message letting the customer know their support period has ended and explaining how they can renew to continue receiving help.

![Workflow editor showing the On Ticket Creation trigger, the purchase condition, and the Add Response action](/images/workflows-automation/support-expiry/support-expiry-workflow-setup.webp)

::: info
The workflow fires after the ticket is created, so the ticket the customer just submitted will still exist. Your agents can handle or close it as needed.
:::

### Step 5: Publish the Workflow

Click **Update Workflow** to save, then toggle **Publish** to make the workflow live.

---
