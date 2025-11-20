# Outgoing Webhook

[Original Documentation](https://fluentsupport.com/docs/outgoing-webhook/)

---

The **Outgoing Webhook** feature of **[Fluent Support](https://fluentsupport.com/)** allows sending data from Fluent Support to other external platforms through **Workflows**. This article will guide you through the whole process of doing it.

## Outgoing Webhook #

To learn how to send data using Outgoing Webhook, follow the steps with screenshots below —

You have to send data through either **Manual** or **Automatic** workflow. To ensure which one is appropriate for you, check this **[Documentation](https://fluentsupport.com/docs/workflows-automations/)**.

Go to **Workflows** from the **Fluent Support Dashboard** , and click the **\+ Add new Workflow** button and a popup will appear.

![Add workflow from Fluent Support Dashboard](public/images/ticket-management/automation-in-tickets/outgoing-webhook/Dashboard-Add-new-workflow-scaled.webp)

You can choose between [**Manual**](https://fluentsupport.com/docs/manual-workflow/) and **[Automatic](https://fluentsupport.com/docs/automatic-workflow/) **workflows according to your needs (e.g., I selected the **Automatic** type to run the Workflow automatically).

Now, enter a Name for the **WorkFlow,** select the **WorkFlow** **Type** , and click Continue.

![Fill all information and click continue](public/images/ticket-management/automation-in-tickets/outgoing-webhook/Workflows-popup-page-continue-button-scaled.webp)

Now choose a Trigger from the dropdown list to decide when your **Workflow** will run.

For example, I chose the **On Ticket Creation** trigger so that the Workflow automatically runs each time a ticket is created.

![Choose trigger from dropdown](public/images/ticket-management/automation-in-tickets/outgoing-webhook/workflow-trigger-scaled-1.webp)

Then, you have to set a **Condition** that will trigger the Workflow. Multiple conditions can be set using the **\+ OR** and **\+ AND** options. You can also delete any existing condition by clicking the **Trash Icon** button.

![Set one or more conditions and delete any if needed](public/images/ticket-management/automation-in-tickets/outgoing-webhook/set-conditions-trash-icon-scaled-1.webp)

Now, select the “**Trigger** **Outgoing** **Webhook”** action from the dropdown list for **Workflow** to perform.

![Select Outgoing WebHook trigger](public/images/ticket-management/automation-in-tickets/outgoing-webhook/Set-Outgoing-Webhok-Action.webp)

This will expand to show additional fields. Once you fill in all the necessary fields, click the **Save** button.

You will get the following Fields to fill in —

  * **Webhook UR** L: Enter the **URL** of your **Third-party application** (e.g., [**Zapier**](https://zapier.com/), [**Pably**](https://www.pabbly.com/connect/)).
  * **Content Type** : Choose the data type as **Form** if you want to map the form submission entries. Otherwise, use **JSON.**
  * **Include Data:** Select the information you want to include for sending.
  * **Action Title:** Lastly, add a name to the action.

Plus, multiple actions can be set by clicking the **Add Another Action** and following the same process. Also, you can delete any action by clicking the **Trash Icon** button.

![Fill in all the necessary fields under outgoing webhook](public/images/ticket-management/automation-in-tickets/outgoing-webhook/Workflow-Action-tasks.webp)

Once you are done, setting up the actions, **Publish** this by enabling the **Toggle** button at the top right corner to run the workflow.

To save any new changes always press the **Update Workflow** button right next to the Toggle.

![Publish the Workflow](public/images/ticket-management/automation-in-tickets/outgoing-webhook/Publish-the-workflow.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [**@support team**](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

**Source:** [Original Documentation](https://fluentsupport.com/docs/outgoing-webhook/)
