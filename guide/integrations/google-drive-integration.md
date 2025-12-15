# Google Drive Integration


---

Integrating **Google** **Drive** with the[ **Fluent Support**](https://fluentsupport.com/) plugin allows the synchronization of files between the two platforms. This article will guide you through integrating **Google** **Drive** with **Fluent** **Support**.

## Google Drive Integration With Fluent Support 

To integrate Fluent Support with Google Drive, follow the steps with screenshots below —

## Access the Google Drive

Go to your **Fluent Support Dashboard**, open **Settings**, then select the **File Upload Integration** section from the left sidebar. There, find **Google Drive** and click the **Settings** (gear) icon.

![Accessing Google Google Drive](/guide/public/images/integrations-channels/other/google-drive-integration/file-storage-settings.webp)

A pop-up will appear. Now, **copy** the **OAuth2 Redirect URL** displayed there for future use.

![Redirect URL Copy](/guide/public/images/integrations-channels/other/google-drive-integration/copy-redirect-url.webp)

### **Accessing Google Cloud Console** 

First, go to the [**Google Cloud Console**](https://console.cloud.google.com/) and select **APIs & Services.**

![Accessing Google Cloud Console](/guide/public/images/integrations-channels/other/google-drive-integration/welcome-google-cloud-console-scaled.webp)

### Creating New Project 

To get the API, create a new project by clicking the **Create Project**.

Or, you can easily select any of your existing projects from the “**Select a Project”** dropdown list by clicking on the **Arrow** **Icon.**

![Select a Project](/guide/public/images/integrations-channels/other/google-drive-integration/create-project-or-select-project-scaled-1.webp)

Give a name to your project (location is optional) and press the **CREATE** button.

![Creating New Project](/guide/public/images/integrations-channels/other/google-drive-integration/create-button-scaled-1.webp)

### **Enabling Google Drive API** 

Click on **\+ ENABLE APIS AND SERVICES.**

![ENABLE APIS AND SERVICES](/guide/public/images/integrations-channels/other/google-drive-integration/enable-apis-services-scaled-1.webp)

Select **Google Drive API**.

![Google Drive API](/guide/public/images/integrations-channels/other/google-drive-integration/google-drive-api-scaled-1.webp)

Now, click on the **ENABLE** button to activate the Google Drive API.

![Active ENABLE button](/guide/public/images/integrations-channels/other/google-drive-integration/enable-button-1.webp)

You will see the **CREATE CREDENTIALS** button, click on it.

![CREATE CREDENTIALS button](/guide/public/images/integrations-channels/other/google-drive-integration/create-credintials-scaled-1.webp)

**Here, you will find five steps that you need to complete. These are** :

  * Credential Type
  * OAuth consent screen
  * Scopes
  * OAuth Client ID
  * Your Credentials.

  * In **Credential Type** select the **User Data** field and press the **Next** button.

![Credential Type](/guide/public/images/integrations-channels/other/google-drive-integration/user-data-1.webp)

  * In the **OAuth Consent Screen** , give an App name, User support email, and Developer email. Once you are done, click the **SAVE AND CONTINUE** button.

![OAuth Consent Screen](/guide/public/images/integrations-channels/other/google-drive-integration/oath-consent-screen-1.webp)

  * As **Scopes** is optional, you can skip it and go to the next step by clicking the **SAVE AND CONTINUE** button.

![Scopes](/guide/public/images/integrations-channels/other/google-drive-integration/scopes-1.webp)

### Client ID and Client Secret

  * In **OAuth Client ID** ,

  – In the Application type select Web Application you can give any name here.  
  – In Authorized Javascript Origins give your domain name without the ‘/’ slash in the last.  
  – In the Authorized redirect URL paste the OAuth2 redirect URL

![OAuth Client ID](/guide/public/images/integrations-channels/other/google-drive-integration/oath-client-id-1.webp)

Here, you will find the **Client ID** and you can copy. Now click on the **Done** button and the credential will be ready.

![Your Credentials](/guide/public/images/integrations-channels/other/google-drive-integration/your-credentials-1.webp)

Now this page will come, go to the **CREDENTIALS** section and click on **Web Client 1** under OAuth 2.0 Client IDs.

![CREDENTIALS & Web Client 1](/guide/public/images/integrations-channels/other/google-drive-integration/credentials-web-client-id-scaled-1.webp)

After that, the below page will come and you will find the **Client ID** and **Client Secret** here copy these things.

![Client ID and Client Secret](/guide/public/images/integrations-channels/other/google-drive-integration/client-id-client-secret-scaled-1.webp)

Now, go to the **OAuth Consent Screen** section and click the **PUBLISH APP** button.

![OAuth Consent Screen and PUBLISH APP ](/guide/public/images/integrations-channels/other/google-drive-integration/publish-app-scaled-1.webp)

### **Configure Fluent Support** 

Now, return to your **Fluent Support Dashboard > Settings > File Upload Integration** section from the left sidebar. Then, find **Google Drive** and click the **Settings** (gear) icon.

Now, **Paste** the **Client ID** & **Client Secret** here. Click on the **Connect to Google Drive** button.

![Connect to Google Drive ](/guide/public/images/integrations-channels/other/google-drive-integration/configure-google-drive-settings-connect-google-drive-button-1.webp)

Now you have to choose an account for drive upload.

![Choose an account](/guide/public/images/integrations-channels/other/google-drive-integration/choose-an-account-scaled-1.webp)

Click on **Continue** to complete the drive confirmation process.

![Continue to complete](/guide/public/images/integrations-channels/other/google-drive-integration/continue-button-scaled-1.webp)

Click on the **Enable** button to end the integration process for Google Drive upload.

![Enable Google Drive](/guide/public/images/integrations-channels/other/google-drive-integration/enable-button-final-step-1.webp)

### For Example 

Here, you can see that a file is uploaded with a ticket reply.

![Example of Uploaded file](/guide/public/images/integrations-channels/other/google-drive-integration/uploaded-attached-file-with-ticket-reply-scaled-1.webp)

Now, you will find the uploaded file stored in your **Google Drive.**

![Preview of Stored File in Google Drive](/guide/public/images/integrations-channels/other/google-drive-integration/stored-file-in-google-drive-scaled-1.webp)

This is how you can integrate Google Drive with Fluent Support!  

---

