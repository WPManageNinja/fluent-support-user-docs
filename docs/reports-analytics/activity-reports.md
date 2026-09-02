---
title: "Activity"
description: "Understand when your helpdesk is busiest using a time-of-day heat map and a daily comparison of ticket creation against agent replies."
---

# Activity

The ‘**Activity**’ report answers a scheduling question rather than a performance one: *when* is your support desk actually busy? It maps ticket and reply volume across the hours of the day and across the days of your date range.

> [!NOTE]
> This page merges the earlier **Activity Reports** and **Response Activity** screens into a single view.

## Accessing Activity

Navigate to the **Reports** tab from the top menu and select **Activity** from the report sidebar.

A **Date Range** picker sits at the top of the page, and the **Live / Snapshot** selector sits in the top right corner. See [Live and Snapshot View](/reports-and-stats#live-and-snapshot-view).

## Activity Trends by Time of Day

The heat map grids the days of the week (Mon–Sun) against the hours of the day, and shades each cell by how much activity it saw.

* **Lighter cells** represent quieter hours.
* **Darker cells** represent your peak hours.

A **Less → More** scale sits below the grid so you can read the shading.

### Filtering the Heat Map

The dropdown in the top right corner of this card switches what the grid measures:

* **All Tickets:** Every ticket created, regardless of who acted on it.
* **Agent Response:** Only replies sent by your agents — this is your team's working pattern.
* **Customer Response:** Only replies sent by customers — this is when your customers are actually at their desks.

![The Activity Trends by Time of Day heat map with the report type dropdown open](/images/reports-analytics/reports/activity-reports/activity-trends-by-time-of-day.webp)

> [!TIP]
> Compare **Customer Response** against **Agent Response**. Where the customer grid is dark and the agent grid is light, you have customers writing in during hours nobody is covering. That gap is usually the cheapest response time improvement available to you.

## Ticket Creation vs. Agent Replies, by Day

Below the heat map, this chart plots two series against each other across your date range:

* **Ticket Creation** — how many tickets arrived each day.
* **Agent Replies** — how many replies your team sent each day.

Reading them together tells you whether your team is keeping pace with intake. When the reply line tracks above the creation line, you are working the backlog down. When it dips below and stays there, the queue is growing.

![The Ticket Creation vs. Agent Replies chart comparing daily intake against daily agent output](/images/reports-analytics/reports/activity-reports/ticket-creation-vs-agent-replies.webp)

> [!NOTE]
> Set the start and end date to the **same day** and this chart switches from a day-by-day view to an **hour-by-hour** breakdown of that single day.
