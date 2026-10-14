# FluentCRM Integration


---

[**FluentCRM**](https://fluentcrm.com/) is a self-hosted email marketing automation plugin for WordPress. When it is active on the same site as **Fluent Support**, the two plugins share customer data in both directions: your support customers become CRM contacts, agents see and manage the CRM profile from inside a ticket, and your CRM team sees support tickets inside the contact profile.

In this guide, you will learn how to:

* Turn on the integration and sync new customers to FluentCRM.
* Use the **FluentCRM** widget in the ticket sidebar.
* View a contact's support tickets inside FluentCRM.
* Create support tickets automatically from a FluentCRM automation.
* Use FluentCRM tags and lists in Fluent Support workflows.

>[!Note]
>FluentCRM must be installed and activated on the same WordPress site as Fluent Support. To learn how, read this [**documentation**](https://fluentcrm.com/docs/how-to-install-upgrade-and-activate-license/). If it is not installed, the integration settings page offers an **Install FluentCRM** button instead.

## Enable the FluentCRM Integration

From your **Fluent Support** Dashboard, go to **Global Settings**, click **FluentCRM Integration** from the left menu, and check **Enable FluentCRM Integration**.

![Enable FluentCRM Integration option.](/images/integrations-channels/core-integrations/fluentcrm-integration/fluent-crm-settings-enable-1.webp)

Once enabled, the following options appear:

* **Default status for new contacts:** Choose **Subscribed** or **Pending**. If you choose **Pending**, FluentCRM sends a double opt-in email to every new contact created by this integration.
* **Add to FluentCRM list (optional):** Pick a list to add every synced customer to.
* **Add to Tags:** Pick one or more tags to apply to every synced customer.

Click **Save Settings** when you are done.

![Fluent CRM Integration Settings options](/images/integrations-channels/core-integrations/fluentcrm-integration/default-status-dropdown-menus-save-settings-2.webp)

### How the Sync Works

The sync runs each time Fluent Support creates a **new customer**, for example when someone submits their first ticket.

* **New email address:** A FluentCRM contact is created with the customer's name and address details, using the default status you chose. If the status is **Pending**, a double opt-in email is sent.
* **Email already exists in FluentCRM:** The existing contact's name and address details are updated. Their email address and subscription status are not changed, so nobody is re-subscribed.
* **List and tags:** The list and tags you selected are added to the contact in both cases.

>[!Note]
>Only customers created after you enable the integration are synced. Existing customers are not imported.

## FluentCRM Widget in the Ticket Sidebar

When FluentCRM is active, the **Customer Informations** card in the ticket sidebar gets a **CRM** section for a customer who has a matching contact (matched by email address). It shows:

* **CRM status:** The contact's FluentCRM status, such as **Subscribed**. Click it to open the full contact profile in FluentCRM.
* **Contacts Tag:** The tags applied to the contact.
* **Contacts List:** The lists the contact belongs to.

![FluentCRM section in the ticket sidebar](/images/integrations-channels/core-integrations/fluentcrm-integration/fluentcrm-widget-3.webp)

### Manage Tags and Lists From a Ticket

Agents who have FluentCRM's **manage contacts** permission can change the contact's tags and lists without leaving the ticket.

1. In the **CRM** section, click the **+** button under **Contacts Tag** or **Contacts List**.
2. In the **Apply / Remove Tags on FluentCRM Profile** popup, select the tags (or lists) you want, or click the **x** on one to remove it.
3. Click **Update Settings**.


>[!Note]
>Updating sets the contact's tags (or lists) to exactly the ones shown in the popup. Anything you remove is removed from the contact in FluentCRM. Agents without the FluentCRM permission cannot edit them.

![Manage Tags and Lists From a Ticket](/images/integrations-channels/core-integrations/fluentcrm-integration/manage-tag-and-list-4.webp)

### Find FluentCRM Contacts When Adding a Customer

When you create a ticket on behalf of someone, search for them by name or email in the **Search Existing contact or provide email address** field. Fluent Support looks in your existing customers first. If none match, it searches your FluentCRM contacts and lists them for you to pick. Selecting a contact creates a Fluent Support customer from it, so you don't have to enter their details again.

![Searching for a contact while creating a ticket](/images/integrations-channels/core-integrations/fluentcrm-integration/picking-contact-5.webp)

## View Support Tickets in FluentCRM

Fluent Support adds a **Support Tickets by Fluent Support** section to the contact profile in FluentCRM. To see it, open **FluentCRM > Contacts**, click a contact, and open the **Tickets** tab.

The table lists the contact's tickets with the ticket ID, title, status, how long ago it was submitted, and a **View Ticket** link that opens the ticket in Fluent Support.

>[!Note]
>You only see tickets that your Fluent Support role allows you to open. A FluentCRM manager who is not a Fluent Support agent sees an empty list.

![View Support Tickets in FluentCRM](/images/integrations-channels/core-integrations/fluentcrm-integration/view-support-ticket-6.webp)

## Create a Support Ticket From a FluentCRM Automation

FluentCRM automations get a **Create Support Ticket** action under the **Fluent Support** category. Use it to open a ticket for a contact automatically, for example when a contact is tagged for a follow-up call or completes an onboarding sequence.

1. In FluentCRM, go to **Automations** and open (or create) an automation.
2. Click the **+** icon to add an action and choose **Create Support Ticket** under **Fluent Support**.

![Create Support Ticket action in a FluentCRM automation](/images/integrations-channels/core-integrations/fluentcrm-integration/create-support-ticket-8.webp)

3. Fill in the fields:
   * **Ticket Title:** Supports FluentCRM smart codes, such as the contact's name.
   * **Ticket Description:** Supports smart codes. Both title and description are required.
   * **Default Business Inbox:** The inbox the ticket is created in. If left empty, the default inbox is used.
   * **Default Assigned Agent (optional):** Assign the ticket to a specific agent.
   * **Priority (Admin):** Set the internal priority.
4. Click **Save Settings** and publish the automation.

![Create Support Ticket action settings](/images/integrations-channels/core-integrations/fluentcrm-integration/create-support-ticket-9.webp)

When the automation runs, Fluent Support finds or creates a customer for the contact and opens the ticket with the source set to **fluent-crm**. If the title or description is empty, the step is skipped.

## Use FluentCRM Tags and Lists in Workflows

Workflows are part of **Fluent Support Pro**. When FluentCRM is active, workflows get extra FluentCRM options:

* **Conditions:** **Customer CRM Tag(s)** and **Customer CRM List(s)** let a workflow run only for customers who have (or lack) certain tags or lists.
* **Actions:** **Add To FluentCRM Tag(s)**, **Remove From FluentCRM Tag(s)**, **Add To FluentCRM List(s)**, **Remove From FluentCRM List(s)** and **Run Automation**.

For example, you can tag a customer as `Escalated` when a ticket is marked critical, or add them to a "Resolved tickets" list when a ticket closes. To learn how to build workflows, read the [Automatic Workflow](/automatic-workflow) and [Manual Workflow](/manual-workflow) documentation.

## Check the Integration Status

You can confirm the integration is active from **Integrations** (Integration Statuses) in Fluent Support. FluentCRM appears there when the plugin is installed and active. Read more on the [Integration Statuses](/integration_statuses) page.

This is how you can complete the FluentCRM integration with Fluent Support!

---
