---
title: "Agent Performance"
description: "A guide to comparing agent output side by side — team filters, growth stats, the agent comparison chart, daily team activity and the per-agent summary table."
---

# Agent Performance

The ‘**Agent Performance**’ report gives you a bird's-eye view of your whole support team and lets you compare agents against each other. It is aimed at support managers and administrators who need to monitor team efficiency rather than their own.

> [!NOTE]
> This page replaces the separate **Agents Reports** and **Team Performance** screens from earlier versions. Both are now a single view with team filtering built in.

## Accessing Agent Performance

Navigate to the **Reports** tab from the top menu bar and click **Agent Performance** in the report sidebar.

## Filters

The toolbar above the report gives you four controls:

* **All Teams:** Filter to one or more [agent groups](/agent-group), or leave it on **All Teams** to include everyone. You can select multiple teams at once.
* **Agent selection:** Individually selected agents appear as removable chips next to the team dropdown. Click the **✕** on a chip to drop that agent, or the **✕** at the end of the row to clear the selection.
* **Date Range:** Set the reporting period.
* **Reset Filter:** Clears your team and agent selection in one click.

An **Export** button sits at the far right. Exports respect the filters currently applied, so what you download matches what you see on screen.

The **Live / Snapshot** selector in the top right corner lets you compare against an earlier capture. See [Live and Snapshot View](/reports-and-stats#live-and-snapshot-view).

![Agent Performance report showing team and agent filters, quick stats and the Agents Statistics chart](/images/reports-analytics/reports/agents-report/agent-performance-overview.webp)

## Quick Stats

Four cards summarise the selected agents over the selected range:

* **Total Responses:** Every reply sent by the selected agents.
* **Tickets closed:** Tickets resolved by those agents within the range.
* **Open Ticket:** Tickets assigned to those agents that were created in the range and are still open.
* **Active agents:** Shown as a ratio, for example **7 /9**. The first number is how many of the selected agents actually sent a reply during the range; the second is how many agents are selected in total. An agent who sent no replies is not counted as active.

## Agents Statistics

A chart plotting your team's output over time. Use the tabs in the top right of the card to switch between:

* **Ticket Stats** — tickets assigned to the selected agents.
* **Resolve Stats** — tickets they closed.
* **Response Stats** — replies they sent.

## Agent Comparison

A horizontal bar chart ranking the selected agents against each other on a single measure, so an outlier is obvious at a glance. Agents with no activity in the period appear with no bar.

Charts on this page support zooming — drag the slider on the right edge of the chart to focus on part of the range.

## Daily Team Activity

Below the comparison chart, the **Daily Team Activity** grid stacks each agent's daily output into a single chart, colour coded per agent, with the date range printed in the heading. The five most active agents are named in the legend and the rest are grouped under **Others**.

This is where you see the shape of your team's week — who carries the load, and which days everyone shows up.

![The Agent Comparison bar chart and the stacked Daily Team Activity chart](/images/reports-analytics/reports/agents-report/agent-comparison-daily-team-activity.webp)

> [!TIP]
> Set the start and end date to the same day and this chart switches to an hourly view, showing you how a single day's work was spread across the hours.

## Agents Report Summary

At the bottom of the page, a table lists each agent individually. For every agent you can see:

* **Responses:** Replies sent within the range.
* **Interactions:** Distinct tickets the agent replied to.
* **Open Tickets:** Their current open ticket count.
* **Closed:** Tickets they resolved in the range.
* **Likes** and **Dislikes:** Customer feedback received on their replies.
* **Current Overall:** Their live queue health — **Waiting Tickets**, **Average Waiting** and **Max Waiting**.

Click any column header to sort the table by that measure.

![The Agents Report Summary table listing per-agent responses, interactions, open tickets and waiting times](/images/reports-analytics/reports/agents-report/agents-report-summary.webp)

> [!NOTE]
> The **Current Overall** column reflects the agent's queue as it stands right now, not as it stood during the selected date range. The remaining columns are scoped to your date filter.
