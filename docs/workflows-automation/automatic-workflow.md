# Automatic Workflow

A **Workflow/Automation** is a sequence of tasks that can be done [**Manually**](/manual-workflow) or **Automatically** using certain triggers and conditions to avoid performing the same actions repeatedly. 

This article will guide you through the process required to learn how to create  the **Automatic Workflow** in Fluent Support.

## Create An Automatic Workflow

From the **Fluent Support Dashboard,** go to **Workflows** and click the **\+ Create New** button to create a new workflow.

![Workflows from Fluent Support Dashboard](/images/workflows-automation/automatic-workflow/dashboard-workflow-add-new-automatic-workflow-1.webp)

Give a **Name** to your workflow and choose workflow type **Automatic**, and click on the **Create Workflow** button to create it.

![Popup page for adding a new workflow](/images/workflows-automation/automatic-workflow/automatic-workflow:automatic-popup-2.webp)

After you create it, the editor opens as a flow of cards: **When**, **Only if** and **Then**. Click the **When** card. In the **When should this workflow run?** panel, choose a **Trigger** to decide when your **Workflow** will run.

For example, if you choose **On Ticket Creation**, the Workflow will automatically run each time a ticket is created.

![The When should this workflow run panel listing the available triggers](/images/workflows-automation/automatic-workflow/workflow-drawer-trigger.webp)

You can choose from these triggers:

| Trigger | When the workflow runs |
|---|---|
| **On Ticket Creation** | A customer submits a new ticket. |
| **On Customer Response** | A customer replies to an existing ticket. |
| **On Ticket Reopened** | A closed ticket is reopened, by the customer or by an agent. |
| **On Agent Response** | An agent replies to a ticket. |
| **On Agent Assigned** | A ticket is assigned to an agent. |
| **On Customer Feedback** | A customer likes or dislikes an agent's reply. |
| **On Ticket Closed** | A ticket is closed. |

::: tip
**On Customer Feedback** is handy for catching unhappy customers. Add the **Feedback** condition set to **Dislike**, then add an internal note or assign the ticket to a team lead.
:::

Click the **Only if** card to set **Conditions**. A ticket must match every **AND** group. Inside a group, matching one **OR** row is enough. Click **+ OR** to add a row to a group and **+ AND** to add a new group. Leave the card empty to run on every ticket.

![The Only run if panel with a condition row and the + OR and + AND buttons](/images/workflows-automation/automatic-workflow/workflow-drawer-conditions.webp)

You will get the following options to set the Condition for your Workflow. Each trigger shows only the conditions that make sense for it. For example, **Ticket Title** is only available with **On Ticket Creation**, and **Feedback** is only available with **On Customer Feedback**.

**Customer**

  * Customer First Name
  * Customer Last Name
  * Customer Email

**Message**

  * Ticket Title
  * Message Content
  * Attachments
  * Added Time Range
  * Added Date Range

**Ticket**

  * Ticket Priority (Client)
  * Ticket Priority (Agent)
  * Selected Product
  * Mailbox
  * Agent Group
  * Ticket Tags
  * Ticket Source
  * Bookmarks

**Ticket Tags** and **Agent Group** use the **Includes In** and **Not Includes In** operators. **Includes In** matches a ticket that has any of the tags you pick, and **Not Includes In** matches a ticket that has none of them. **Ticket Priority (Agent)** and **Ticket Source** use **Equal** and **Not Equal**. **Ticket Source** lets you match where the ticket came from, such as **Web**, **Email**, **Agent outreach**, **MCP (AI agents)**, or an importer.

**Feedback** *(only with the **On Customer Feedback** trigger)*

  * Feedback: **Like** or **Dislike**

**Fluent CRM** *(appears when FluentCRM is active)*

  * Customer CRM Tag(s)
  * Customer CRM List(s)

**Easy Digital Downloads** *(appears when EDD is active)*

  * Customer Purchased Product
  * Customer Purchased Package (Variation)
  * Customer Has Active License *(requires EDD Software Licensing)*

**FluentCart** *(appears when FluentCart is active)*

  * Customer Purchased Product
  * Customer Purchased Package (Variation)
  * Customer Has Active License *(requires FluentCart Pro)*

**Custom Fields**

Here, all of your existing custom fields will appear.

To remove a condition, click the delete icon at the end of its row.

Next, add the **Action/s** (Task) your **Workflow** should perform. Click the **+** button below the **Only if** card (**Add an action here**), search or pick an action in the **Add an action** panel, fill in its fields in the **Edit action** panel, and click **Done**. Then click **Save Workflow**.

![The Add an action panel with a search box and the list of actions](/images/workflows-automation/automatic-workflow/workflow-drawer-add-action.webp)

![The Edit action panel with the action's fields, Delete Action and Done](/images/workflows-automation/automatic-workflow/workflow-drawer-edit-action.webp)

You can choose from these Actions:

Some actions are hidden for certain triggers, so the list you see depends on the trigger you chose. With **On Ticket Creation**, **Remove Tag(s)** and **Remove Bookmarks** are not offered. With **On Ticket Closed**, **Add Response**, **Close Ticket**, **Assign Agent**, **Block Ticket Submitter (Customer)** and **Delete Ticket** are not offered.

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

You can add more than one action. Click the **+** between steps (or below the last one) to insert another action in that position. Each action shows as a **Then, step** card.

To delete an action, click its card, then click **Delete Action** at the bottom of the **Edit action** panel.

You can **change the name of your workflow** anytime. Click the pencil icon next to the name at the top of the editor.

You can also **set the sequence of your actions** by dragging the **Drag to reorder** handle on an action card.

Once you set up the actions, **Publish** it by turning on the **Status** toggle at the top right of the editor to run the **Workflow**. Otherwise, it stays a **Draft**. A **Save Workflow** button saves your changes, and **Unsaved changes** shows next to it until you do.

## The Workflow Flow Editor

The editor shows each workflow as a flow of step cards, so it reads like a sentence:

* **When** something happens (the trigger).
* **Only if** your conditions match.
* **Then** run the actions, one **Then, step** card for each.

Click a card to edit it in the side panel. Drag a card by its handle to reorder it, or click **+** between cards to add an action anywhere in the flow. The **Status** toggle at the top shows **Draft** or **Published**.

![The workflow editor showing a When, Only if and Then flow of step cards](/images/workflows-automation/automatic-workflow/workflow-flow-editor.webp)

### Check What a Workflow Did

Each run of a workflow appears in the **Activity Log**, with a link to the workflow and the ticket. A failed action shows in red. The editor also lists the workflow's **Recent Runs**, so you can test a new workflow right after you save it. Runs are kept as long as the activity log keeps its entries.

## Workflows Do Not Trigger Themselves

Some actions can cause the same event that started the workflow. For example, an **On Agent Response** workflow with an **Add Response** action adds an agent reply, and an **On Agent Assigned** workflow with an **Assign Agent** action assigns an agent.

Fluent Support stops these loops for you:

* A reply or assignment made by a workflow never starts that same workflow again.
* A workflow can still start a different workflow, but this chain stops after three workflows deep.

::: info
You do not need to set anything up for this. It works automatically for every automatic workflow.
:::

## See How Automatic Workflow Runs 

For example, I set the **Trigger** as “**On Ticket Creation”** , **Condition** as “**Ticket Title that contains Refund word** ”, and **Action** as “**Add Bookmarks** ” in this **Workflow.**

Now, you can see that the **Ticket** shown in the screenshot below is **Automatically** **Bookmarked** after the **Creation** as it has the **Refund** word in the **Title.**

>[!Note]
>When you bookmark a ticket and select another agent, you’ll see the selected agent in the **Watchers** list.

![Refund Ticket is bookmarked automatically ](/images/workflows-automation/automatic-workflow/ticket-bookmarked-with-automatic-workflow-12.webp)

>[!Note]
>You can easily get all of your bookmarked tickets under the **Bookmarks** option placed in the left sidebar of Fluent Support’s **Tickets**.

![Tickets will be stored under Bookmarked section](/images/workflows-automation/automatic-workflow/ticket-bookmark-list-13.webp)

This is how you can create and run **Automatic Workflow** in **Fluent** **Support!**  

