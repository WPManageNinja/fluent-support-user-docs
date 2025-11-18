# Incoming Webhook

[Original Documentation](https://fluentsupport.com/docs/incoming-webhook/)

---

The **Incoming Webhook** feature of [**Fluent Support**](https://fluentsupport.com/) allows users to create tickets automatically from an external platform or server using a **FORM-type** request format. This article will guide you through the whole process of doing it.

## Incoming Webhook in Fluent Support #

To learn the process of using Incoming Webhook, follow the steps with screenshots below —

### Get The Incoming Webhook Link #

From the **Fluent Support Dashboard** go to **Global** **Settings** , select **Incoming Webhook** from the left sidebar, and you will see a webhook link on that page. Now select **Business Box** and copy the **Webhook Link** to start using it.

![Incoming WebHook from Global Settings under Fluent Support dashboard](public/images/integrations/incoming-webhook/global-settings-incoming-webhook-select-business-nox-copy-url-scaled.webp)

### **Regenerate The Webhook Link** #

You can also **Regenerate** the **Webhook** **Link** by clicking on the **Refresh** button. If you regenerate a new URL, you must change all your used webhook links with the new one.

![Regenerate The Webhook Link](public/images/integrations/incoming-webhook/regenerate-url-refresh-icon-scaled-1.webp)

### **How To Send Data Using Incoming Webhook** #

You can use any external platform that suits your needs to send data using the Incoming Webhook feature. E.g., here, I used [**Postman**](https://www.postman.com/) as an external platform.

To use this Incoming Webhook, choose **Post** as the **Request Method** and **Form-data** as the **Request Format**.  
Then, paste the **Webhook Link,** map the **Key** field following the Incoming Webhook’s **Field Key,** and enter the appropriate **Value** that suits your needs. Finally, click on the **Send** button to create the ticket.

![Send Data Using Incoming Webhook](public/images/integrations/incoming-webhook/send-data-using-incoming-webhook-postman-platform-1.webp)

Here, you can see a **ticket** is **created** **automatically** in Fluent Support.

![Automatically created ticket](public/images/integrations/incoming-webhook/ticket-created-in-fluent-support-1.webp)

### **How To Reply Ticket Using Incoming Webhook** #

Customers can also reply to a ticket using the incoming webhook. However, some mandatory things are required to reply to a ticket.  
  
This includes the **Customer** **email** , **Ticket** **content** , **Ticket** **title** , and ensuring that the **Ticket** **Title** is the same as the one you used while creating the ticket. Here, you can see a reply is sent to the previously created ticket from **Postman** using **Incoming Webhook.**

![Reply Ticket Using Incoming Webhook](public/images/integrations/incoming-webhook/reply-ticket-using-incoming-webhook-postman-1.webp)

Here, you can see a **reply is added** to the ticket by a user in Fluent Support.

![Added reply in Fluent Support](public/images/integrations/incoming-webhook/replied-added-to-fluent-support-portal-scaled-1.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [**@support team**](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

**Source:** [Original Documentation](https://fluentsupport.com/docs/incoming-webhook/)
