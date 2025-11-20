# Dropbox Integration


---

**Dropbox** is a cloud storage platform that enables easy file storage, sharing, and seamless access and collaboration across multiple devices. Integrating it with **[Fluent Support](https://fluentsupport.com/)** allows automatic ticket attachment uploads, streamlining workflows. This article guides you through this integration process.

## Dropbox Integration With Fluent Support #

To integrate Fluent Support with Dropbox, follow the steps with screenshots below —

### Create an app in Dropbox #

To **create** or Log in to your **Dropbox** , **[click here](https://www.dropbox.com/)**. Then, go to your [**Dropbox Account**](https://www.dropbox.com/) developer section and click the **Create Apps** button to create an app in Dropbox.

![Create an app in Dropbox](public/images/integrations-channels/other/dropbox-integration/dropbox-developer-create-apps-scaled-1.webp)

In the “**Choose an AP** I” select **Scoped Access** and in the “**Choose the type of access you need** ” select **App folder**.  
Then, give a name to your app, agree with the **terms and conditions** if you want, and finally click the **Create app** button.

![Create a new app on the DBX Platform popup page](public/images/integrations-channels/other/dropbox-integration/create-a-new-app-on-the-dbx-platform-scaled.webp)

### Configure Dropbox Settings #

Your Dropbox App **Settings** page will appear where you must provide an authorized **OAuth2 Redirect URL** and click the **Add** button.

![Dropbox App Settings](public/images/integrations-channels/other/dropbox-integration/oauth2-redirect-url-paste-scaled-1.webp)

To **get this** **OAuth2 Redirect URL** , go to your Fluent Support **Dashboard > Global Settings > File Upload Integration > Dropbox >** **Configure** > copy the **OAuth2 redirect URL.**

![Dropbox Configure option from Fluent Support dashboard](public/images/integrations-channels/other/dropbox-integration/fluent-support-dashboard-global-integration-config-scaled-1.webp)

![OAuth2 Redirect URL](public/images/integrations-channels/other/dropbox-integration/copy-authorixed-url-scaled-1.webp)

### Dropbox App Permissions #

Now go to the **Permissions** section of your Dropbox app.  
Select these areas **(files.metadata.write, files.content.write, files.content.read, sharing.write, file_requests.write),** and click the **Submit** button.

![Dropbox App Permissions](public/images/integrations-channels/other/dropbox-integration/permissions-scaled-1.webp)

### Obtain App Credentials #

To obtain the app’s credentials, copy the **App Key** and **App Secret** from your Dropbox app settings.

![Obtain App Credentials](public/images/integrations-channels/other/dropbox-integration/copy-the-api-key-api-secret-scaled-1.webp)

### Configure Dropbox in Fluent Support #

Return to your **Fluent Support Dashboard,** go to **Global Settings,** click the **Configure** under **File Upload Integrations,** and a popup will appear.

![Dropbox Configure option from Fluent Support dashboard](public/images/integrations-channels/other/dropbox-integration/file-upload-integration-configure-1.webp)

Then, paste the **App key** & **App Secret** into the **Client ID** & **Client Secret** fields, and click the **Connect to Dropbox** button.

![Client ID, Client Secret and Connect to Dropbox options](public/images/integrations-channels/other/dropbox-integration/paste-client-id-secret-connect-button-scaled-1.webp)

This is how you can integrate Dropbox with Fluent Support!  

---

