# Support Expiry

---

When you sell software with a support period — such as a licensed plugin or a membership — you may want to notify customers automatically when that period ends. Fluent Support handles this through a standard **Automatic Workflow** that detects an expired license and sends the customer a notification with renewal instructions.

This approach works with both **Easy Digital Downloads** and **FluentCart** and requires no extra settings page.

## Requirements

- **Fluent Support Pro** must be active.
- **EDD** (with **EDD Software Licensing**) or **FluentCart Pro** must be installed and active — whichever platform you use to issue licenses.

## How It Works

When a customer submits a ticket, the workflow checks whether they hold an active license. If they do not, the workflow automatically sends them a notification explaining that their support period has ended and how they can renew.

::: warning
The **Customer Has Active License = No** condition matches customers with an expired license **and** customers who have never purchased anything. Always pair it with a **Customer Purchased Product** condition to avoid restricting new customers who haven't bought yet. See Step 3 below.
:::

## Setting Up the Support Expiry Workflow

### Step 1: Create a New Automatic Workflow

From the **Fluent Support Dashboard**, go to **Workflows** and click **+ Create New**.

Give the workflow a name such as `Support Expiry Notification`, select **Automatic** as the workflow type, and click **Create Workflow**.

<!-- TODO: Capture screenshot of the new workflow creation popup, save at /images/integrations-channels/core-integrations/support-expiry/support-expiry-create-workflow.webp -->

### Step 2: Set the Trigger

Under **Set Your Trigger & Conditions**, choose **On Ticket Creation** as the trigger. This ensures the check runs the moment a customer tries to open a new ticket.

### Step 3: Add the Conditions

You need **two conditions** joined with **AND** to target only customers who have purchased your product but whose license has since expired.

**Condition 1 — verify the customer is a buyer:**

Open the condition dropdown, scroll to the **Easy Digital Downloads** or **FluentCart** group, and select **Customer Purchased Product**. Choose the specific product(s) you want to protect.

**Condition 2 — check that their license is no longer active:**

Click **+ AND**, open the dropdown again, and select **Customer Has Active License** from the same group. Set the value to **No**.

<!-- TODO: Capture screenshot of the workflow conditions showing both conditions combined with AND, save at /images/integrations-channels/core-integrations/support-expiry/support-expiry-workflow-condition.webp -->

With both conditions in place, the workflow only fires for customers who bought your product but no longer hold an active license — new customers and customers of other products are not affected.

### Step 4: Add the Workflow Actions

Under **Workflow Actions (Tasks)**, click **+ Add Action** and choose **Add Response**. Write a clear, friendly message letting the customer know their support period has ended and explaining how they can renew to continue receiving help.

<!-- TODO: Capture screenshot of the Add Response action configured with a support-expiry notification message, save at /images/integrations-channels/core-integrations/support-expiry/support-expiry-workflow-action.webp -->

::: info
The workflow fires after the ticket is created, so the ticket the customer just submitted will still exist. Your agents can handle or close it as needed.
:::

### Step 5: Publish the Workflow

Click **Update Workflow** to save, then toggle **Publish** to make the workflow live.

---
