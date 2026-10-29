---
title: "Scheduled Replies"
description: "A guide to writing a ticket reply now and sending it later — scheduling, editing, sending early, cancelling, and what happens when the customer replies first."
---

# Scheduled Replies 

Sometimes the right reply is ready before the right moment. Your customer is asleep, the fix ships tomorrow, or you promised to follow up on Monday. **Scheduled Replies** let you write the reply now and have Fluent Support send it at the date and time you pick.

Until it goes out, you can edit it, reschedule it, send it right away, or cancel it. If the customer writes back or the ticket is closed first, Fluent Support pauses the reply so it never lands out of context.

> [!NOTE]
> Scheduled Replies are part of **Fluent Support Pro**. On the free version, the scheduling option is shown with a **PRO** badge.

## Schedule a Reply

Open the ticket you want to reply to and write your reply in the editor as usual. You can add attachments, saved replies, and formatting just like a normal reply.

Click the **arrow** on the right side of the **Reply** button, then choose **Schedule reply…** (*Send it later at a time you pick*).

![A ticket with a reply written in the editor and the Schedule reply option under the Reply button](/images/ticket-management/daily-operations/scheduled-replies/scheduled-replies-write-reply-1.webp)

The **Scheduling options** panel opens:

1. Pick the **Date** and **Time** you want the reply to be sent. It must be in the future.
2. Optionally, tick **Close ticket after it sends** to close the ticket as soon as the reply goes out.
3. Click **Schedule for later**.

::: tip
The panel tells you which timezone the date and time are in. If it says **Times are in UTC**, it also shows your local time, so you can check you picked the right moment.
:::

![Scheduling options](/images/ticket-management/daily-operations/scheduled-replies/scheduled-replies-scheduling-options-2.webp)

A confirmation message, **Reply scheduled for** *date and time*, appears. The reply is added to the top of the conversation, marked **Scheduled** with its send time (for example *Sends Fri, Oct 30 · 9:00 AM UTC*), and the ticket header shows a **Reply scheduled** badge. The customer does not see the reply until it is sent.

![A scheduled reply in the ticket conversation](/images/ticket-management/daily-operations/scheduled-replies/scheduled-replies-scheduled-in-ticket-3.webp)

### Rules for Scheduling

* **One per ticket:** A ticket can have one scheduled reply at a time. To schedule a different one, edit or cancel the existing reply first.
* **Replies only:** Internal notes cannot be scheduled.
* **Up to 90 days ahead:** A reply can be scheduled at most 90 days in advance.
* **The reply can't be empty:** Write your reply in the editor first, then pick when it should be sent.

## Find Tickets With a Scheduled Reply

In the ticket list, tickets with a pending reply show a badge with the send time, such as **Fri 9:00 AM UTC**. Hover over it to see **Reply scheduled · *date and time***. This way you know a follow-up is already on its way and don't reply twice.

![The ticket list showing the scheduled reply badge and its Reply scheduled tooltip on a ticket](/images/ticket-management/daily-operations/scheduled-replies/scheduled-replies-ticket-list-badge-4.webp)

## Edit, Reschedule, Send Now or Cancel

Open the ticket and find the scheduled reply in the conversation. Below the reply you can:

* **Edit:** Load the reply back into the editor to change its text. The editor shows *Editing the reply scheduled for* *date and time* while you work, and the reply won't send until you save. To pick a new date and time, click the arrow on the **Reply** button and choose **Reschedule…**. A confirmation, **Reply rescheduled for** *date and time*, appears.
* **Send now:** Send the reply to the customer immediately instead of waiting.
* **Cancel:** Stop the scheduled reply. Fluent Support asks **Cancel this scheduled reply?** first. Click **Cancel reply** to confirm, or **Keep scheduled** to leave it as it is. The text of a cancelled reply goes back to the editor as a draft.

> [!IMPORTANT]
> Only the agent who scheduled the reply can edit, reschedule, send, or cancel it. Other agents can see it on the ticket but cannot change it.

![The Edit, Send now and Cancel actions on a scheduled reply](/images/ticket-management/daily-operations/scheduled-replies/scheduled-replies-actions-5.webp)


## When a Scheduled Reply Is Paused

A reply written yesterday may not fit today. Fluent Support pauses a scheduled reply automatically when:

* **The customer replies** after you scheduled it. The reply shows *Customer name replied after you scheduled this. Check it before it sends.*
* **The ticket is closed** after you scheduled it. The reply shows *This ticket was closed after you scheduled this reply. Check it before it sends.*

A paused reply is marked **Paused** with the time it was due, the ticket header shows **Scheduled reply paused**, and the ticket is flagged **Needs review**. The reply is **not sent** until you act on it.

![A paused scheduled reply with the warning that the customer replied after it was scheduled](/images/ticket-management/daily-operations/scheduled-replies/scheduled-replies-paused-6.webp)

Read the new message, then choose what to do:

* **Send as planned:** The reply is still right. It goes back on the schedule.
* **Edit** or **Reschedule…:** Update the text or pick a new time. Picking a new time also resumes the reply.
* **Send now** or **Cancel:** Send it straight away or drop it.

If a ticket is deleted, its scheduled reply is deleted with it.

## Tips and Notes

* **Background sending:** Scheduled replies are sent by a background task, so the reply can go out a few minutes after the exact time you picked. If replies arrive late, check the **Cron Job Monitor** in [System Admin Tools](/system-admin-tools).
* **Pro deactivated:** If Fluent Support Pro is deactivated, pending replies are not sent. When you activate it again, they are queued again. Replies whose time passed while Pro was off are held, so you can check them before they go out.
* **Activity log:** Cancelling a scheduled reply is recorded in [Activities](/overall-activities).

That's it! You can now write replies when it suits you and send them when it suits your customer.
