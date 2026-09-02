---
title: "Business Boxes"
description: "Track workload health, waiting tickets and mailbox pressure across your business inboxes."
---

# Business Boxes

The ‘**Business Boxes**’ report analyses support pressure across your different input channels — your [business inboxes](/business-inbox). It is the report to open when you run multiple brands or departments (for example Sales and Support) from a single Fluent Support install and need to know which one is falling behind.

## Accessing Business Boxes

Navigate to the **Reports** tab and click **Business Boxes** in the report sidebar.

## Filters

* **All Mailboxes:** Choose a specific business inbox to scope the report to, or leave it on **All Mailboxes**. The dropdown lists every inbox you have configured.
* **Date Range:** Set the reporting period for the statistics chart.

The **Live / Snapshot** selector in the top right corner lets you compare against an earlier capture. See [Live and Snapshot View](/reports-and-stats#live-and-snapshot-view).

![The Business Boxes report with the All Mailboxes dropdown open, showing the configured business inboxes](/images/reports-analytics/reports/business-boxes/business-boxes-mailbox-filter.webp)

## Workload Health

The cards across the top of the page are a **live gauge** of your current queue. They show the state of your helpdesk right now and are **not affected by the date range filter**.

* **Tickets Awaiting Reply:** Open tickets currently waiting on an agent.
* **Unassigned Tickets:** Tickets with no agent assigned.
* **Avg. Customer Wait:** How long the average waiting customer has been waiting.

When you pick a specific mailbox from the dropdown, these figures narrow to that mailbox — so you can see whether the pressure is spread across your inboxes or concentrated in one.

## Business Box Statistics

A chart showing volume trends across your inboxes over the selected date range. Use the tabs in the top right of the card to switch between:

* **Ticket Stats** — tickets received.
* **Resolve Stats** — tickets closed.
* **Response Stats** — replies sent.

## Tickets Waiting Longest

The table at the bottom of the page is the heart of this report. It lists the tickets that have been waiting on a reply the longest, oldest first, so nothing quietly rots at the bottom of a queue.

| Column | What it shows |
| --- | --- |
| **ID** | The ticket number. Click a row to open the ticket. |
| **Subject** | The ticket title. |
| **Customer** | Who is waiting. |
| **Waiting Since** | The exact time the ticket started waiting on you. |
| **Wait Time** | How long it has been waiting, in hours and minutes. |
| **Product** | The product the ticket relates to, if one was selected. |

![The Tickets Waiting Longest table showing ticket ID, subject, customer, waiting time and product](/images/reports-analytics/reports/business-boxes/tickets-waiting-longest.webp)

Applying a mailbox filter narrows this table to tickets from that inbox only. Rows are keyboard accessible, so you can move through them and open a ticket without using the mouse.

> [!TIP]
> This table shows the ten longest-waiting tickets at a time. Work them from the top down — the ticket at the top has been waiting the longest and is the most likely to turn into a complaint.
