# Automatic Workflow

A **Workflow/Automation** is a sequence of tasks that can be done [**Manually**](/manual-workflow) or **Automatically** using certain triggers and conditions to avoid performing the same actions repeatedly. 

This article will guide you through the process required to learn how to create  the **Automatic Workflow** in Fluent Support.

## Create An Automatic Workflow

From the **Fluent Support Dashboard,** go to **Workflows** and click the **\+ Create New** button to create a new workflow.

![Workflows from Fluent Support Dashboard](/images/workflows-automation/automatic-workflow/dashboard-workflow-add-new-automatic-workflow-1.webp)

Give a **Name** to your workflow and choose workflow type **Automatic**, and click on the **Create Workflow** button to create it.

![Popup page for adding a new workflow](/images/workflows-automation/automatic-workflow/automatic-workflow:automatic-popup-2.webp)

Now choose a **Trigger** from the dropdown list to decide when your **Workflow** will run.

For example, if you choose the **On Ticket Creation** trigger, the Workflow will automatically run each time a ticket is created.

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

![Set Trigger to run workflow](/images/workflows-automation/automatic-workflow/workflows-automation:automatic-workflow:set-triggers-3.webp)

Then, you have to set a **Condition** that will trigger the **Workflow**. Multiple conditions can be set using the **+OR** and **+AND** options.

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

![Set Condition/s for the Workflow](/images/workflows-automation/automatic-workflow/automatic-workflow:set-conditions-4.webp)
<!-- TODO: Capture screenshot of the condition dropdown showing Ticket Priority (Agent), Ticket Tags, Ticket Source and the Feedback group, and save it at /images/workflows-automation/automatic-workflow/automatic-workflow-new-conditions.webp -->

You can also **Delete** any existing condition by clicking the **Trash Icon**.

![Delete any existing condition](/images/workflows-automation/automatic-workflow/automatic-workflow:delete-condition-5.webp)

Now, set the **Action/s** (Task) from the dropdown list for **Workflow** to perform. Once you fill in all the necessary fields, click the **Save** button.

You will get the following Actions from the Dropdown List –

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

![Set Actions \(Tasks\) for workflow](/images/workflows-automation/automatic-workflow/automatic-workflow:set-actions-6.webp)

Multiple actions can be set if needed. To do this, click the **+ Add Another Action** button and follow the same process.

![Add multiple action](/images/workflows-automation/automatic-workflow/automatic-workflow-set-multiple-actions-7.webp)

You can also **Delete** any existing action. To do this, expand the desired action by pressing it and then click the **Delete Action**.

![Delete any existing action](/images/workflows-automation/automatic-workflow/automatic-workflow:delete-actions-8.webp)

You can **change the name of your workflow** anytime from here as shown below.

![Change name of your workflow](/images/workflows-automation/automatic-workflow/automatic-workflow:change-workflow-name-9.webp)

Also, you can **set the sequence of your added workflow actions/tasks** using the **Drag and Drop Action** icon.

![Drag & Drop feature to set the action/task sequence](/images/workflows-automation/automatic-workflow/automatic-workflow:drag-drop-the-actionstasks-10.webp)

Once you set up the actions, **Publish** it by enabling the **Toggle** button at the top right corner to run the **Workflow**. Otherwise, it will be saved as a draft only.

To save any new changes always press the **Update Workflow** button right **next to the toggle**.

![Publish the workflow](/images/workflows-automation/automatic-workflow/automatic-workflow:publish-toggle-11.webp)

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

