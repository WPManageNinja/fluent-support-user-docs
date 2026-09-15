---
title: "Product Insight"
description: "Analyze support ticket volume, response activity, interactions and waiting workload broken down by product."
---

# Product Insight

The ‘**Product Insight**’ report breaks your support volume down by product. It is the fastest way to find out which product is generating the most tickets — and, more usefully, which one is generating the most *unanswered* tickets.

## Accessing Product Insight

Go to the **Reports** tab from the top menu bar and select **Product Insight** from the report sidebar.

## Filters

* **All Products:** View every product, or isolate a single one.
* **Date Range:** Set the reporting period.

The **Live / Snapshot** selector in the top right corner lets you compare against an earlier capture. See [Live and Snapshot View](/reports-and-stats#live-and-snapshot-view).

![Product Insight dashboard showing quick stats and the Ticket Volume by Product chart](/images/reports-analytics/reports/products-reports/product-insight-dashboard.webp)

## Quick Stats

* **Total Tickets:** Tickets created within the range.
* **Unanswered Tickets:** Tickets created in the range that have not received a single reply.
* **Waiting Workload:** How many tickets are currently waiting on an agent. This is a live figure and is not affected by the date range.
* **Response Activity:** Total agent replies sent within the range.

## Ticket Volume by Product

A horizontal bar chart ranking every product by ticket count for the selected range. Hover any bar to see the exact number in a tooltip.

Tickets that were submitted without a product selected are grouped under **No Product**. If that bar is large, it is usually worth revisiting your [ticket form settings](/ticket-form-customization) — you can make the product field required so customers categorise their own tickets.

Use the slider on the right edge of the chart to zoom into part of the list when you have many products.

## Product Breakdown

The table at the bottom of the page gives you the full picture for every product configured in your system, listed alphabetically.

| Column | What it counts |
| --- | --- |
| **Ticket Volume** | Tickets created for this product within the range. |
| **Response Activity** | Agent replies sent on this product's tickets within the range. |
| **Interactions** | Distinct tickets an agent replied to — one ticket counts once, no matter how many replies it received. |
| **Open Tickets** | Tickets created in the range that are still open. |
| **Closed** | Tickets for this product resolved within the range. |
| **Unanswered** | Tickets created in the range with no reply yet. Highlighted so it is hard to miss. |
| **Waiting Workload** | Tickets currently waiting on an agent. A live figure, not scoped to the date range. |

![The Product Breakdown table listing ticket volume, response activity, interactions and waiting workload per product](/images/reports-analytics/reports/products-reports/product-breakdown-table.webp)

The table paginates. Use the **10/page** dropdown at the bottom left to show more rows at a time, and the page numbers at the bottom right to move through the list.

> [!TIP]
> **Response Activity** and **Interactions** together tell you how hard a product is to support. A product with many responses but few interactions means each ticket is taking several rounds of back and forth to resolve — usually a documentation problem rather than a bug.
