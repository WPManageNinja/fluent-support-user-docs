---
title: "Adding Support Staff/Agents"
description: "A guide on how to add new support agents to Fluent Support and configure their permissions and access levels."
---

# Adding Support Staff/Agents

Fluent Support allows you to add Agents/Staff to manage your tickets, as well as define specific **Permissions** and **Settings** for them. This article will guide you through the steps of adding new Support Staff/Agents and configuring their access levels.

## Add Support Staff/Agents

Go to **Settings** from your **Fluent Support Dashboard** and click on **Support Staff** from the left sidebar.

![The Support Staff section in Fluent Support Settings](/images/setup-configuration/agents-permissions/adding-support-staff-agents/add-new-support-staff-1.webp)

Click the **Add New** button to add a **Support Agent/Staff**. A pop-up window will appear for adding information about the **Agent**.

![The Add New button to create a Support Agent](/images/setup-configuration/agents-permissions/adding-support-staff-agents/add-new-2.webp)

### Configuring Agent Information

In the pop-up window, you will need to fill in the following details:

* **Basic Information:** Enter the **First Name**, **Last Name**, **Email**, and **Title** (Job Title, e.g., Support Staff, Developer).
* **Slack Integration:** If you use Slack notifications, enter the **Slack User ID** here.
* **Twilio Integration:** Enter a **WhatsApp Phone Number** if you are using Twilio integration.
* **Permissions:** Check the boxes to grant specific permissions. These are categorized into:
    * **Tickets Permissions:** (e.g., View Dashboard, Manage Own Tickets, Delete Tickets).
    * **Workflow Permissions:** (e.g., Manage Workflows).
    * **Settings:** (e.g., Manage Overall Settings).
    * **Reporting:** (e.g., View All Reports).
* **Restrictions:** You can check **Business Inbox Access Restriction** if you want to limit this agent to specific business inboxes.

![Configuring basic information and setting permissions for a new agent](/images/setup-configuration/agents-permissions/adding-support-staff-agents/add-new-support-staff-3.webp)

### Agent Signature

You can give each agent a custom sign-off, such as their name, role, and company logo, for the emails your customers get when that agent replies. Scroll to the **Agent Signature** section at the bottom of the agent configuration window and check the box labeled **Enable signature for this agent**.

1. When checked, a rich text editor will open.
2. Use the standard formatting tools (bold, italic, lists, links) to design the signature text.
3. Switch between **Visual** and **Code** views as needed. Use **Add media** to insert images, such as a company logo or a headshot, directly into the signature.

#### Where the signature appears

The signature is not added to replies automatically. It is added to emails through the <code v-pre>{{agent.signature}}</code> smartcode in your inbox email templates. You will find it as **Agent Signature** in the smartcode list when you edit a template under **Business Inboxes** > **Email Settings**.

* The reply is saved and shown in the ticket exactly as the agent wrote it. The signature only goes into the email.
* The default templates for **Replied by Agent (To Customer)** in email-based inboxes and **Agent Outreach Ticket (To Customer)** use <code v-pre>{{response.full_content}}{{agent.signature}}</code>, so the signature follows the reply.
* If an agent has no signature, or it is turned off, the smartcode prints nothing.
* You can use smartcodes inside a signature too, for example <code v-pre>{{agent.full_name}}</code>. They are filled in when the email is sent.

::: warning
Email templates you saved before this update are kept exactly as you wrote them. If you want signatures in those emails, open the template and add <code v-pre>{{agent.signature}}</code> where the signature should go, usually right after <code v-pre>{{response.full_content}}</code>. See [Web-Based Settings in Business Inbox](/web-based_settings_in_business_inbox#adding-the-agent-signature-to-emails).
:::

<!-- TODO: Capture screenshot of the Agent Signature section with the help text under "Enable signature for this agent" and save it at /images/setup-configuration/agents-permissions/adding-support-staff-agents/agent-signature.webp -->



When you have finished filling in the information, personalizing the signature, and selecting permissions, click **Update** or **Create** at the bottom right to save.

This is how you can add as many new staff/agents as you need!


