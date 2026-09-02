---
title: "Ticket Overview"
description: "A guide to the Ticket Overview report — current workload, ticket volume, agent response output, same-day response rate and product distribution."
---

# Ticket Overview

The ‘**Ticket Overview**’ report is the front page of your helpdesk. It answers the question every support manager opens the dashboard to ask: *how are we doing right now, and how did we get here?*

It combines a live workload gauge with date-scoped volume, response and distribution statistics on a single screen.

## Accessing Ticket Overview

Navigate to the **Reports** tab from the top menu and select **Ticket Overview** from the report sidebar. It is the first item in the list.

## Filters

Two controls sit at the top of the page:

* **All Products:** Narrow the product distribution to a single product, or leave it on **All Products**.
* **Date Range:** Set the reporting period. Click the **✕** on the picker to clear it.

The **Live / Snapshot** selector sits in the top right corner. See [Live and Snapshot View](/reports-and-stats#live-and-snapshot-view) for how captures work.

![Ticket Overview dashboard showing current support workload, overall ticket stats and product distribution](/images/reports-analytics/reports/ticket-overview/ticket-overview-dashboard.webp)

## Current Support Workload

This card is a **live gauge**. It always reflects the state of your helpdesk right now and is **not affected by the date range filter**.

* **Tickets Awaiting Reply:** How many open tickets are currently waiting on an agent.
* **Unassigned Tickets:** Tickets with no agent assigned to them.
* **Avg. Waiting Time:** How long the average waiting customer has been waiting.

A **Needs Attention** badge appears on this card when your waiting queue crosses into unhealthy territory, giving you an at-a-glance warning without reading the numbers.

## Overall Ticket Stats

Unlike the workload card, these figures respect your selected date range.

* **New Tickets:** Tickets created within the range.
* **Not Responded Yet:** Tickets created within the range that have not received a single reply.
* **Closed Ticket:** Tickets resolved within the range.

Below the numbers, the **Daily Ticket Creation** chart plots how many tickets arrived on each day of the range. If your start and end date are the same day, this chart switches to an hourly view instead.

## Agent Response Stats

This section measures output rather than intake.

* **Total Responses:** Every agent reply sent within the range.
* **Tickets Handled:** The number of distinct tickets those replies touched.
* **Active Agents:** Agents who sent at least one reply in the range. Agents with no replies are not counted.
* **Avg. Response:** Total responses divided by active agents — the average output per working agent.

The **Daily Response Distribution** chart below plots reply volume across the same period.

![Agent Response Stats showing total responses, tickets handled, active agents and the daily response distribution chart](/images/reports-analytics/reports/ticket-overview/ticket-overview-agent-response-stats.webp)

## Product Distribution by Tickets

On the right side of the page, this card breaks your ticket volume down by product for the selected range.

* **Total Tickets** shows the overall count. When you filter to a specific product using the **All Products** dropdown, this total narrows to that product only.
* Below it, the top products are listed with a coloured bar showing their relative share.
* Tickets with no product assigned appear under **No Product**.
* Click **View Details** to jump to the full [Product Insight](/products-reports) report.

## Same-Day Response Rate

The donut chart at the bottom right shows how much of your incoming volume gets a reply on the day it arrives.

A ticket counts as **Answered same day** when its **first agent reply** landed on the same calendar date the ticket was created. Everything else — replied to later, or not replied to at all — falls into the remaining segment.

> [!TIP]
> This is one of the fastest health checks in the whole Reports section. A same-day rate that drops week over week usually shows up here before it shows up in customer complaints.
