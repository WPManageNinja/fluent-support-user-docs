---
title: "Reports and Stats"
description: "An overview of the Fluent Support Reports section, its eight report pages, the shared date range and snapshot toolbar, and who can access them."
---

# Reports and Stats

The **“Reports”** section is the analytics hub of Fluent Support. It gives you an accurate view of your entire support operation — ticket volume, agent output, product pressure, mailbox workload and customer sentiment — and lets you drill into any one of them.

This article gives you a focused overview of the Reports section and the tools shared across every report page.

## Accessing Reports

Click the **Reports** tab in the top navigation menu of your **Fluent Support Dashboard**. The reporting hub opens with a **report sidebar** on the left listing every available report.

You can collapse this sidebar using the panel icon next to the **Reports** heading, which gives your charts and tables the full width of the screen.

![The Reports section showing the report sidebar and the Ticket Overview page](/images/reports-analytics/reports/ticket-overview/ticket-overview-dashboard.webp)

## The Report Pages

The Reports sidebar is divided into **eight** pages, each answering a specific question about your support operation:

  **1. [Ticket Overview](/ticket-overview):** Your helpdesk at a glance. Current workload, ticket volume, agent response output, same-day response rate and product distribution, all on one page.

  **2. [Personal Reports](/personal-report):** Your own numbers as a logged-in agent. Private to you, and useful for tracking your individual productivity.

  **3. [Agent Performance](/agents-report):** Compare agents side by side. Includes team filtering, an agent comparison chart, a daily team activity grid and a detailed per-agent summary table.

  **4. [Product Insight](/products-reports):** Support volume broken down by product, so you can spot which product is draining your team.

  **5. [Business Boxes](/business-boxes-reports):** Workload health per business inbox — who is waiting, in which mailbox, and for how long.

  **6. [Activity](/activity-reports):** When your helpdesk is busiest. A time-of-day heat map plus a daily comparison of ticket creation against agent replies.

  **7. [Time Sheet](/time-sheet):** A tabular summary of activity by ticket, agent or customer over a date range, with export.

  **8. [AI Ticket Audit](/ai-ticket-audit):** Runs your tickets through your configured AI provider to return a mood, a sentiment score and a one-line summary for each conversation.

## Tools Shared Across Reports

Most report pages share the same toolbar controls, which sit directly under the page title.

### Date Range Filter

Every report page carries a **date range picker**. Pick a preset or set a custom start and end date, and the whole page recalculates.

On **Ticket Overview** and **Product Insight**, a small **✕** appears on the picker once a range is applied so you can clear it again.

> [!TIP]
> When you set the start and end date to the **same day**, the charts on Ticket Overview, Activity and Agent Performance automatically switch from a day-by-day view to an **hour-by-hour** view of that single day.

### Additional Filters

Individual pages add their own filters next to the date picker:

* **Ticket Overview** — an **All Products** dropdown.
* **Agent Performance** — an **All Teams** dropdown, a multi-select agent picker, **Reset Filter**, and **Export**.
* **Product Insight** — an **All Products** dropdown.
* **Business Boxes** — an **All Mailboxes** dropdown.
* **Time Sheet** — a **Select Mailboxes** dropdown and **Export**.

Product and agent dropdowns are sorted alphabetically and are searchable, so you can type to find an entry instead of scrolling a long list.

### Live and Snapshot View

Live numbers tell you where you stand today. They do not tell you where you stood last week. The **Live / Snapshot** selector in the top right corner of the report solves that.

Fluent Support captures your reporting data automatically **every 6 hours** in the background. Switch the selector from **Live** to a saved capture, and the page re-renders using the numbers from that moment in time. Switch back to **Live**, and your previous date range returns exactly as you left it.

A few things worth knowing about snapshots:

* Snapshots are stored **per report page**, so the list you see on Product Insight contains Product Insight captures only.
* Captures are kept for a limited window — up to **15 days** — and older ones are cleaned up automatically.
* In a snapshot, the **stat cards show cumulative totals** up to the moment of capture, while the **charts show the last 7 days** leading up to it.

The Live / Snapshot selector is available on **Ticket Overview**, **Agent Performance**, **Product Insight**, **Business Boxes** and **Activity**. Personal Reports, Time Sheet and AI Ticket Audit are always live.

### Sorting, Pagination and Keyboard Access

Report tables paginate, and you can change how many rows appear per page using the **10/page** dropdown at the bottom of the table. Changing a filter returns you to page one.

Ticket rows in reports are keyboard accessible — you can move through them with the keyboard and open a ticket without reaching for the mouse. Report tables, charts and toolbars also adapt to narrow screens instead of overflowing them.

Large numbers throughout the reports use thousand separators, so a four figure ticket count reads as `4,003` rather than `4003`.

## Who Can See These Reports

Access to the reporting hub is controlled by agent permissions, which you set under [Permission Management for Agents](/permission-management-for-agents).

* **Personal Reports** is available to any agent, and always shows only that agent's own numbers.
* The remaining report pages require **both** the **View All Reports** permission **and** the **Access Private Data (Customers, Agents)** permission.

An agent who is missing either permission will not see those pages listed in the Reports sidebar at all.

> [!NOTE]
> Reporting is one part of the analytics picture. For the widget-based summary of your helpdesk, see the [Dashboard Overview](/dashboard-overview) and [Dynamic Dashboard](/dynamic-dashboard). For a chronological log of agent actions, see [Overall Activities](/overall-activities).
