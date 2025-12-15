# HelpScout Ticket Migrator

[HelpScout](https://www.helpscout.com/) is a SaaS tool for customer communication. **HelpScout** users can easily transfer their **tickets** to [Fluent Support](https://fluentsupport.com/) through an **API**. This article will guide you through the process.

## Import Tickets From Help Scout 

From the **Fluent Support Dashboard**, go to **Settings** and select **Ticket Importer** from the left sidebar. Find **Help Scout** in the list of migration options and click the **Import Tickets** button.

![Ticket migration from HelpScout](/guide/public/images/migration/helpscout-ticket-migrator/access-ticket-importer-1.webp)

## Configuring the Import

A popup window titled Configure Help Scout Import will appear. This window asks for your **App ID**, **App Secret**, and **Authorization Code**. Now, copy the **HelpScout Redirection URL** for future use.

![HelpScout Redirection URL](/guide/public/images/migration/helpscout-ticket-migrator/help-scout-popup-page-scaled-1.webp)

### Create an App in Help Scout

To get the required credentials, you need to create an application in your [Help Scout](https://www.helpscout.com/) account.

Go to the **Profile Icon** from the right-hand corner of the **Dashboard,** select **Your Profile** , choose **My Apps,** and click the **Create My App** button.

![Create My App in HelpScout](/guide/public/images/migration/helpscout-ticket-migrator/profile-icon-my-apps-create-app-scaled-1.webp)

Name your App, paste the previously copied URL into the **Redirection URL** field, and click the **Create** button.

![Paste Redirection URL](/guide/public/images/migration/helpscout-ticket-migrator/app-name-redirection-url-create-scaled-1.webp)

### Authorize the Connection

Once your app is created in Help Scout, you will be provided with an **App ID** and **App Secret**. Now, copy the **App ID** and **App Secret** from here.

![App ID and App Secret](/guide/public/images/migration/helpscout-ticket-migrator/copy-app-id-app-secret-scaled-1.webp)

Return to the **Help Scout** popup page from the **Fluent Support Dashboard** and paste the **App ID** & **App Secret** copied from your Help Scout account into the desired field.

![Import tickets from HelpScout popup in Fluent Support dashboard](/guide/public/images/migration/helpscout-ticket-migrator/paste-app-id-app-secret-scaled-1.webp)

To obtain the Authorization Code, click the **Get Authorized** button now.

![ Get Authorized option](/guide/public/images/migration/helpscout-ticket-migrator/get-authorized-button-scaled-1.webp)

This action will redirect you to **Help Scout** to authorize access. Click **Authorize** when prompted.

![HelpScout page](/guide/public/images/migration/helpscout-ticket-migrator/authorize-button-1.webp)

### Request Token and Import

You will receive your Authorization code here, now simply **copy** it.

![Receive your Authorization code](/guide/public/images/migration/helpscout-ticket-migrator/copy-authorization-code-scaled-1.webp)

Return to the **Help Scout** popup page again and **paste** this in the **Authorization Code** field.

![Authorization Code field](/guide/public/images/migration/helpscout-ticket-migrator/paste-the-authorization-code-scaled-1.webp)

Click the **Request Token** to get your **Access Token**. After requesting the token, a Choose **Mailbox** dropdown will appear. Select the specific Help Scout mailbox you wish to import tickets from.

You can choose only one **Mailbox** at a time, and without selecting the specific mailbox you won’t be able to import your tickets.

![Request Token option](/guide/public/images/migration/helpscout-ticket-migrator/request-ticket-button-choose-mailbox-scaled-1.webp)

Once you have selected the mailbox, click the **Import Tickets** button to begin the process.

![Finally Import Tickets ](/guide/public/images/migration/helpscout-ticket-migrator/finally-import-tickets-button-scaled-1.webp)

Congratulations, you are now ready to proceed! The importation of tickets will begin, and a notification will be sent once all your tickets have been successfully imported.

Here, you can see all the **Tickets** are **Imported** and the migration date & time are displayed as well.

![Preview of Imported Tickets from HelpScout](/guide/public/images/migration/helpscout-ticket-migrator/help-scout-tickets-migrated-1.webp)

This is how you can migrate your all tickets from **Help Scout** to Fluent Support!  

