# FluentBooking Integration

The **FluentBooking Integration** lets your support agents share meeting links directly from a Fluent Support ticket. This is helpful when a ticket needs a live call, onboarding session, product walkthrough, or troubleshooting meeting.

Once FluentBooking is installed and active on the same WordPress site, Fluent Support automatically detects it and adds meeting tools inside the ticket reply workflow.

## What You Can Do With This Integration

With FluentBooking connected to Fluent Support, agents can:

* Insert booking links while replying to a ticket.
* Choose a FluentBooking meeting type from the reply editor.
* Preview available time slots before sharing the link.
* Share selected time slots or the full booking link with the customer.
* Copy available meeting times to the clipboard.
* View upcoming and past meetings from the ticket sidebar.
* Open the related FluentBooking booking from the ticket view.

## Before You Start

Make sure you have:

* Fluent Support installed and activated.
* FluentBooking installed and activated on the same WordPress site.
* At least one active FluentBooking event type.
* Calendar sharing or a public booking page enabled for the event type you want to share.

## Enable the Integration

Before the meeting tools appear in the ticket reply editor, you need to enable the integration in Fluent Support's Global Settings.

1. Go to **Fluent Support** from your WordPress dashboard.
2. Open **Settings** and click **Global Settings** from the left sidebar.
3. Scroll down to find **Enable Fluent Booking Integration** and check the box.
4. Click **Save Settings**.

<!-- TODO: Capture screenshot for this step and save it at /images/integrations-channels/core-integrations/fluentbooking-integration/enable-fluentbooking-toggle.webp -->

::: info
This toggle only appears when FluentBooking is installed and active. If you do not see it, make sure FluentBooking is activated on your site.
:::

## Share a FluentBooking Link From a Ticket

First, go to **Fluent Support** from your WordPress dashboard and open the ticket where you want to schedule a meeting.

In the reply editor, click the **Call a Meeting** button.

<!-- TODO: Capture screenshot for this step and save it at /images/integrations-channels/core-integrations/fluentbooking-integration/call-a-meeting-button.webp -->

This will open the FluentBooking meeting panel inside Fluent Support.

## Choose a Meeting Type

From the **Meeting Type** dropdown, select the FluentBooking event type you want to share with the customer.

The dropdown can show details such as the event title, calendar name, and meeting duration. This helps agents choose the right meeting option without leaving the ticket.

<!-- TODO: Capture screenshot for this step and save it at /images/integrations-channels/core-integrations/fluentbooking-integration/select-meeting-type.webp -->

If no event types are available, Fluent Support will show a message and provide a link to open FluentBooking.

::: tip
If you do not see your meeting type, check FluentBooking and make sure the event is active and publicly available.
:::

## Offer Available Time Slots

After selecting a meeting type, choose the availability range you want to offer.

Available options include:

* **Next 3 days**
* **This week**
* **Next week**
* **Next 14 days**
* **Specific Dates**

When you choose **Specific Dates**, you can select up to 7 available dates. Fluent Support only allows available FluentBooking dates to be selected.

<!-- TODO: Capture screenshot for this step and save it at /images/integrations-channels/core-integrations/fluentbooking-integration/offer-availability.webp -->

The preview area shows available slots based on the selected meeting type and range. You can edit the displayed slots, select all slots, clear slots, or remove a day from the preview.

## Add an Optional Message

Use the **Message** field if you want to include a short note with the booking link.

For example, you can write:

```text
Please choose a time that works best for you.
```

This message will be inserted with the booking link or copied with the available times.

## Insert or Copy the Booking Link

Once the meeting type and availability are ready, you can choose one of the following options:

* **Insert with Times:** Adds the selected available time slots and booking link into the ticket reply.
* **Insert Booking Link:** Adds the booking link into the ticket reply when no specific slots are selected.
* **Copy to Clipboard:** Copies the selected availability so you can paste it somewhere else.

<!-- TODO: Capture screenshot for this step and save it at /images/integrations-channels/core-integrations/fluentbooking-integration/insert-booking-link.webp -->

After inserting the link, review your reply and send it to the customer.

## View Meetings From the Ticket Sidebar

When FluentBooking is active, Fluent Support adds a **Meeting** widget to the ticket sidebar.

This widget can show:

* The next scheduled meeting.
* Meeting status.
* Calendar or event name.
* Meeting date and time.
* Meeting timezone.
* Join meeting link, when available.
* A direct link to view the booking in FluentBooking.
* Past meetings related to the customer or generated ticket links.

<!-- TODO: Capture screenshot for this step and save it at /images/integrations-channels/core-integrations/fluentbooking-integration/meeting-sidebar-widget.webp -->

This gives agents quick meeting context while working on the ticket.

## How Scheduled Meetings Appear in the Ticket

When a customer schedules a meeting from a FluentBooking link connected to a ticket, Fluent Support can add meeting information to the ticket timeline. This helps agents see that a meeting was booked without manually checking FluentBooking.

The timeline entry can include the meeting title, date, timezone, and a link to view the booking.

## Troubleshooting

If the FluentBooking meeting option does not appear in Fluent Support, check the following:

* FluentBooking is installed and active.
* You have at least one active FluentBooking event type.
* The event type has calendar sharing or a public booking page enabled.
* The agent has permission to use the selected FluentBooking calendar.
* The ticket has a customer email address, especially when checking related meetings in the sidebar.

If everything is configured but the option still does not appear, open FluentBooking and confirm that your event type can be accessed from its public booking page.

