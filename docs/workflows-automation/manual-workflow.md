# Manual Workflow

A **Workflow/Automation** is a sequence of tasks that can be done **Manually** or **[Automatically](/automatic-workflow)** using certain triggers and conditions to avoid performing the same actions repeatedly. 

This article will guide you through the process required to learn how to create the **Workflow Manually** in Fluent Support.

## Create A Manual Workflow 

From the **Fluent Support Dashboard,** go to **Workflows** and click the **\+ Create New** button to create a new workflow.

![Workflows from Fluent Support Dashboard](/images/workflows-automation/manual-workflow/workflows-from-fluent-support-dashboard-1.webp)

Give a **Name** to your workflow, choose **Manual** type, and click on the **Create Workflow** button to create it.

![Popup page for adding a new workflow](/images/workflows-automation/manual-workflow/popup-page-for-adding-a-new-manual-workflow-2.webp)

After you create it, the editor opens with a **When** card that reads **An agent runs it**. Agents run a manual workflow from the **Workflows** menu on a ticket. Next, add the **Action/s** (Task) your **Workflow** should perform. Click the **+** button below the **When** card (**Add an action here**), search or pick an action in the **Add an action** panel, fill in its fields in the **Edit action** panel, and click **Done**. Then click **Save Workflow**.

![The Add an action panel with a search box and the list of actions](/images/workflows-automation/manual-workflow/workflow-drawer-add-action.webp)

![The Edit action panel with the action's fields, Delete Action and Done](/images/workflows-automation/manual-workflow/workflow-drawer-edit-action.webp)

You can choose from these Actions:

**Ticket Actions**

  * Add Response
  * Add Internal Note
  * Close Ticket
  * Delete Ticket
  * Change Mailbox
  * Add Product
  * Change Priority

**Assignment**

  * Assign Agent
  * Assign Agent Group

**Tags & Bookmarks**

  * Add Tag(s)
  * Remove Tag(s)
  * Add Bookmarks
  * Remove Bookmarks

**Customer & Integrations**

  * Block Ticket Submitter (Customer)
  * Trigger Outgoing Webhook

**FluentCRM** *(appears when FluentCRM is active)*

  * Add To FluentCRM Tag(s)
  * Remove From FluentCRM Tag(s)
  * Add To FluentCRM List(s)
  * Remove From FluentCRM List(s)
  * Run Automation

>[!Note]
>**Delete Ticket** permanently deletes the ticket and no further actions will run after it, so place it last. **Block Ticket Submitter** prevents the customer from creating new tickets or accessing previous ones.

>[!Note]
>In a manual workflow, **Add Response**, **Add Internal Note**, and **Close Ticket** are performed by the agent who runs the workflow, so the *Response From* / *Note From* and *Fallback Agent* fields are not shown.

For example, here I selected the **Close Ticket** action. You can choose any option according to your needs.

You can add more than one action. Click the **+** between steps (or below the last one) to insert another action in that position. Each action shows as a **Then, step** card.

To delete an action, click its card, then click **Delete Action** at the bottom of the **Edit action** panel.

You can **change the name of your workflow** anytime. Click the pencil icon next to the name at the top of the editor.

You can also **set the sequence of your actions** by dragging the **Drag to reorder** handle on an action card.

Once you set up the actions, **Publish** it by turning on the **Status** toggle at the top right of the editor to run the **Workflow**. Otherwise, it stays a **Draft**. A **Save Workflow** button saves your changes, and **Unsaved changes** shows next to it until you do.

## Run Your Workflow In A Specific Ticket

Go to **Tickets** from the **Fluent Support Dashboard** , open your **desired ticket** , and click the **Workflow** button at the top right corner inside the ticket.

![Open the desired ticket to run the Workflow](/images/workflows-automation/manual-workflow/workflow-button-in-a-ticket-scaled-9.webp)

Here, you will find the **Workflow Action** you have created before, click on it, and the **Workflow** will be run.

![Run the Workflow](/images/workflows-automation/manual-workflow/run-the-manual-workflow-drift-video-1.gif)

This is how you can create and run **Manual Workflow** in Fluent Support!  

