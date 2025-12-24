# Managing Tickets Using WhatsApp


---

**Fluent Support** allows you to manage your tickets using **WhatsApp**. You can see your New Tickets notification in your **WhatsApp** account and reply to your ticket from this. This article will guide you in setting up **WhatsApp** integration with **FluentSupport**.

## Fluent Support Twilio Settings 

To learn how to manage your Tickets using Twilio (WhatsApp), follow the steps with the screenshots below –

### Sign Up On Twilio 

First, you’ll need a **[Twilio](https://www.twilio.com/)** account to get started, go to their [**website**](https://www.twilio.com/) and **sign up for a free account.** 

>[!Note]
>You will need an Email Address and a verified mobile number to start their free trial.

### Get The **Account SID** And **Auth Token** From Twilio 

Once you finish the signup and all Twilio Console configurations, you will get the **Account SID** and **Auth Token** for the **Twilio account** from the **Console** **page**. Now, **copy** this to use it for later.

![Account SID And Auth Token From Twilio](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/account-sid-and-auth-token-scaled-1.webp)

### Get The WhatsApp Number from Twilio 

Once you’re done copying the Twilio Console information, it’s time to get the **WhatsApp number**.

Go to **Messaging** in the left-hand sidebar from the Console, expand the **Try it out** dropdown, and Select**Send a WhatsApp Message.** After enabling the Sandbox, Twilio provides a **WhatsApp** **Number** and a **Code**.

![WhatsApp Number from Send a WhatsApp message under Twilio](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/get-whatsapp-number-from-messaging-tab-under-send-a-whatsapp-message-scaled-1.webp)

But, before using this number, you have to set up the **WhatsApp Sandbox**. To learn how to set up WhatsApp Sandbox, follow the steps with screenshots below –

#### Setup WhatsApp Sandbox 

Now, **create** a **WhatsApp contact with this number** and **send** the provided **code** from your desired **WhatsApp** **Account**. This will **return a notification** to your **Twilio** **WhatsApp** **chat**. 

![provided code in whatsApp contact](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/send-provided-code-in-whatsapp-contact-1-1.webp)

Also, a **message** **received** **notification** will **appear** in the **Sandbox**.

To begin a business-initiated chat, **select** one of our **pre-approved** **templates** from the **Message Template** dropdown list just by clicking the **Arrow Icon** , and after selection click the **Send template message** button.

You can engage your users in business-related dialogue at this phase. The use of pre-approved templates was needed for business-initiated interactions up to the user’s response.

Now, click the **Next step** and go to the **User-initiated conversation** page. 

![Pre-approved templates & next step button](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/pre-approved-templates-next-step-button-1-1.webp)

And, this will show as another **Message notification** in the**Sandbox**. But to get the message notification, you should **reply** to the**previously sent template message** from your**WhatsApp account**. 

![Send a Reply from Twilio](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/send-a-reply-from-twilio-2-1.webp)

From here, you can also **send** **messages** to **Twilio WhatsApp chat**. Now, again click the **Next step** and go to the **Wrap-up** page. 

![User-intended conversation page](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/user-intended-conversation-page-2-1.webp)

On this page, you will see that configuring your **WhatsApp Sandbox** is done.

![Wrap up page](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/wrap-up-page-1.webp)

## Configure Whatsapp (Twilio) in Fluent Support #

Go to **Settings** or **Global Settings** from the **Fluent Support Dashboard** and select **Notification Integrations** from the left sidebar to find the **Twilio** option. Open the **Twilio Integration Settings** page.

Now fill in all the fields with the necessary information (**Account SID** , **Auth Token** , and **WhatsApp** **Number**) that you have copied before. You can **enable the checkboxes** if needed.

Once you are done, do not forget to click the **Save Settings** button.

![Twilio Integration Settings](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/twilio-integration-settings-1.webp)

**A brief explanation of other options mentioned above –**

  * **Notification Events:** Using this option, choose for which instances you want to be notified through Twilio. The available notification events are – **Ticket Created** , **Ticket Closed** , **Replied by Customer** , and **Ticket** **Assigned** **To** **Agent**.  

  * ****Enable Twilio Integration** :** Enable this option, to get the two other options for enabling replies from WhatsApp through agents.  

  * **Enable Reply From WhatsApp (Agent can directly reply from Telegram):** You can also enable this option so that your support agents can directly reply from WhatsApp. To **enable this** you need to **copy the provided URL** and paste it to **When a message comes in** field under the **Sandbox Settings** tab in Twilio.  

  * **Fallback Agent for reply from WhatsApp message:** Using this option, you can select a specific fallback agent from the dropdown list for replies from WhatsApp messages.

## Reply Tickets From WhatsApp #

To reply to any tickets direcly from WhatsApp, follow the steps with screenshots below –

Go to the **Sandbox Settings** tab from this page and **paste the URL** that you have copied before from the **Twilio Integration Settings** page inside the **WHEN A MESSAGE COMES IN** field.

Then, copy the **WhatsApp Number** from the **Sandbox Participants.**

![Sandbox Settings](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/sanbox-settings-1-1.webp)

Now, again go back to **Settings** from **Fluent Support** **Dashboard** and open the **Support Staff** settings option from the left sidebar. Click the **Pencil Icon** of your **desired agent** you want to give access to reply.

![Support Staff](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/managing-tickets-using-whatsapp:support-staff-2.webp)

Scroll down to **Twilio Integration** and paste the **WhatsApp Number** you copied before. Then, hit the **Update** button.

Make sure to include the **Country Code** when adding this number. Now you can receive ticket notifications on the Twilio chat in WhatsApp and submit responses by replying to the ticket notifications.

![WhatsApp number field](/guide/public/images/integrations-channels/messaging-apps/managing-tickets-using-whatsapp/managing-tickets-using-whatsapp:whatsapp-number-field-inside-twilio-integration-3.webp)

>[!Note]
>To reply to any specific tickets directly from WhatsApp chat, you’ll have to type in **Ticket number** before the message. For example, to reply to ticket no. 33 you have to type **33** and then type your response.


---

