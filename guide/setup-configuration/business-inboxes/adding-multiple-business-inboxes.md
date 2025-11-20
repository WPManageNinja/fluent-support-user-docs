# Adding Multiple Business Inboxes


---

This article guides you on adding **Multiple** **Business Inboxes** using the [**Fluent Support**](https://fluentsupport.com/) plugins for your **WordPress** site to ensure your multiple business management is effortless. Follow the instructions accordingly to add **Business** **Inboxes** as many as you want.

## How To Add Multiple Business Inboxes #

To learn how to add multiple business inboxes in Fluent Support, follow the steps with the screenshots below:

Go to the Fluent Support **Dashboard** & click on the **Business Inboxes** tab. 

![Business Inboxes from Fluent Support Dashboard](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/Dashboard-Business-Inboxes-1-scaled.webp)

Click the **Add New Business Inbox** button and a pop-up box will appear.

![Add new Business Inbox](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/Add-New-Business-Inbox.webp)

Add a relevant **Inbox Name** &**Email** (company name & business email) and select the **Support** **Channel**.

Keep the support channel **Web-Based** if you want to allow customers to create support tickets from the website only. To learn more, check this **[Documentation](https://fluentsupport.com/docs/web-based_settings_in_business_inbox/)**.  
  
Or, choose **Web and Email based** **(Mailbox)** for email-based support ticket setup using email piping. For more details, check this **[Documentation](https://fluentsupport.com/docs/web-and-email-based-settings-in-business-inbox/)**.

Once you are done, click the **Add Business Inbox** and your new business inbox will be added.

![Fill in the Add a New Business Inbox popup page](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/Add-inbox-popup-info-button.webp)

This way, you can add **Multiple** **Business** **Inboxes** for your multiple businesses.

To ensure your website can deliver emails in the easiest, fastest, and most secure way from the **email address** that you use under the **Support Inbox Email** , we recommend using the **[FluentSMTP](https://fluentsmtp.com/)** plugin. To learn the basic use of the **FluentSMTP** plugin, check this [**Documentation**](https://fluentsmtp.com/docs-category/getting-started/).

![Business Inbox is added](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/final-look-of-multiople-business-inbox.webp)

## Setup Support Portal For A Specific Business Inbox #

To easily manage multiple business inboxes, you can easily set up a **Support Portal** for your specific **Business Inbox** using a **Shortcode** that will direct support tickets from any page to the right inbox and create a personalized support portal for your business needs.

To learn the whole process, follow the steps with the screenshots below —

Go to the page where you want to embed a portal and paste the below shortcode.

**Shortcode** : [ fluent_support _portal show_logout = ‘yes’ business_box_id=2 ]  
**Remember** , instead of **2** (business box ID), use your own **Business Box ID** from your chosen business inbox.

To find the Business Box ID, go to **Business Inboxes** from **Fluent Support Dashboard,** and click on the **View Settings** of your desired business inbox.

![View Settings button](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/5.-View-settings-scaled.webp)

Now, you will find the business box ID in the URL of that business box as shown below. Copy the **Business Box ID**(number) from here.

![](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/Business-Box-ID.webp)

And, use the **ID** in your **Shortcode** and place it anywhere on your website as per your requirements as I have used it below —

This service is especially helpful for **[Web-Based Business Inboxes](https://fluentsupport.com/docs/web-based_settings_in_business_inbox/)**.

![](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/Using-ID-in-Shortcode.webp)

Here you can see the preview of the **Customer Support Portal** in the screenshot below.

![Preview of Customer Support portal](public/images/setup-configuration/business-inboxes/adding-multiple-business-inboxes/8.-Support-Portal-Preview.webp)


---

