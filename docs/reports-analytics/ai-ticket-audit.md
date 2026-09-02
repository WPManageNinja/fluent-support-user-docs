---
title: "AI Ticket Audit"
description: "A guide to auditing support conversations with AI — setup, running an audit, reading mood and sentiment scores, and filtering the results."
---

# AI Ticket Audit

Reading every ticket is not realistic. Reading none of them is worse. The ‘**AI Ticket Audit**’ report sits in the middle.

It runs your support conversations through your configured AI provider and returns three things for each ticket: a **mood**, a **sentiment score** out of 10, and a **one-line summary** written from the customer's point of view. You can then filter by mood to surface the conversations that actually deserve your attention.

## Before You Start

The audit uses the AI provider you configure in Fluent Support, so you need to set that up first.

### Step 1: Enable AI

Go to **Settings** (gear icon) from your Fluent Support dashboard, expand **AI Integration** in the left sidebar and click **AI Model Setup**.

Turn on the **Enable AI** toggle.

![Enabling the AI toggle on the AI Model Setup settings page](/images/reports-analytics/reports/ai-ticket-audit/ai-model-setup-enable-ai.webp)

### Step 2: Choose a Provider and Add Your Key

Once AI is enabled, the provider settings appear:

* **Provider:** Select the AI service you want to use — **OpenAI**, **Google Gemini** or **Anthropic Claude**.
* **Model:** Choose the model used for text generation (for example, GPT-4o).
* **API Key:** Paste your key. It is stored securely, and once saved only the last few characters are shown back to you.

Click **Save** in the top right corner.

![Selecting the AI provider and model and saving the API key](/images/reports-analytics/reports/ai-ticket-audit/ai-model-setup-provider-and-key.webp)

> [!NOTE]
> For full details on each provider and where to generate an API key, see [AI Setup](/openai-integration-with-fluent-support).

## Running Your First Audit

Navigate to the **Reports** tab and select **AI Ticket Audit** from the report sidebar.

Before any audit has been run for the selected period, the page shows an empty state explaining what the audit does. Pick your **date range**, then click **Run Audit** — either the button in the top right corner or the one in the middle of the empty state.

![The AI Ticket Audit page before any audit has been run, showing the Run Audit button](/images/reports-analytics/reports/ai-ticket-audit/ai-ticket-audit-run-audit.webp)

### Which Tickets Get Audited

The audit does not process everything in the date range indiscriminately. A ticket is picked up when:

* It was **created within your selected date range**, and
* It is **not closed**, and
* It has either never been audited, or the customer has replied since the last audit was taken.

That last rule is what keeps the report cheap to revisit. Tickets that already have a **fresh** audit are skipped automatically, so running the report a second time will not re-bill you for work already done — and it will never create a duplicate row for the same ticket.

> [!NOTE]
> A single audit run processes up to **200 tickets**, and each user can audit up to **100 tickets per hour**. These limits keep your AI provider costs predictable and stop one enthusiastic agent from spending the whole budget. If you hit the hourly limit, the report tells you plainly and you can continue after the hour rolls over.

## Reading the Results

Once the run completes, the report fills in.

![AI Ticket Audit results showing summary stats, sentiment distribution, needs-attention tickets and the audited ticket table](/images/reports-analytics/reports/ai-ticket-audit/ai-ticket-audit-results.webp)

### Summary Stats

Across the top:

* **Tickets audited:** How many tickets the run covered.
* **Completed successfully:** Audits that returned a usable result.
* **Failed:** Audits the AI could not complete or whose response could not be read.
* **Avg. Sentiment Score:** The mean score across all completed audits, out of 10.
* **Need attention:** How many tickets came back as **Frustrated** or **Very Unhappy**.

### Sentiment Distribution

The AI classifies every conversation into exactly one of four moods:

| Mood | What it means |
| --- | --- |
| **Happy** | The customer's issue was handled well and they said so. |
| **Neutral** | A routine exchange with no strong feeling either way. |
| **Frustrated** | The customer is visibly unhappy with the experience so far. |
| **Very Unhappy** | The conversation has gone badly and needs intervention. |

The distribution bars show how your audited tickets split across these four moods.

### Needs Attention First

This panel lifts the three lowest-scoring conversations straight to the top of the page, with their ticket number, subject and score. It is the shortest path from "run the report" to "go fix something".

### The Audited Ticket Table

Below the charts, every audited ticket is listed with:

* **Ticket:** The ticket number and subject. Click through to open the conversation.
* **Product** and **Agent:** Who and what the ticket relates to.
* **Mood:** The mood label assigned by the AI.
* **Score:** The sentiment score out of 10.
* **AI Summary:** A one-sentence description of what happened, written from the customer's perspective.
* **Audited:** When this result was captured.
* **Escalate:** Acts on a conversation that needs a human.

Use the **mood chips** above the table — **All**, **Happy**, **Neutral**, **Frustrated**, **Very Unhappy** and **Failed** — to narrow the list. Each chip shows its own count, and switching chips returns you to page one.

## If Something Goes Wrong

If your AI provider is not configured, the key has stopped working, or the provider rejects the request, the report tells you what happened and names the screen you need to fix it on, rather than showing you an empty table.

Individual tickets whose audit could not be parsed are marked as **Failed** and counted separately, so a handful of bad responses never invalidates the rest of the run. Re-running the audit will pick those tickets back up.

> [!TIP]
> The audit reads the most recent part of each conversation rather than the entire history. Long threads are trimmed before being sent, which keeps the cost per ticket predictable no matter how long the ticket has been open.
