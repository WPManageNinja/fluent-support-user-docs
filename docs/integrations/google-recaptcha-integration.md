# Google reCAPTCHA Integration

---

**Fluent Support** allows you to integrate **Google reCAPTCHA** to protect your support portal from spam and bot submissions. This guide walks you through obtaining your reCAPTCHA keys from the updated Google console and configuring them inside Fluent Support.

> [!NOTE]
> Google reCAPTCHA is now part of **Google Cloud Fraud Defense**. The interface has been updated, but the integration process in Fluent Support remains straightforward.

## Step 1: Access the reCAPTCHA Console

Visit [**Google reCAPTCHA**](https://www.google.com/recaptcha/about/), now part of **Google Cloud Fraud Defense**. Click the **Fraud Defense Console** button or go directly to the [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create) to register your site.

![Google reCAPTCHA – Part of Google Cloud Fraud Defense](/images/integrations-channels/other/google-recaptcha-integration/v3-admin-console-scaled-1.webp)

## Step 2: Register Your Site

You will land on the **Register a new site** page. Fill in the following fields:

![Register a new site form](/images/integrations-channels/other/google-recaptcha-integration/register-a-new-site-page-scaled-1.webp)

- **Label:** Enter a recognizable name for your site (e.g., `example.com`) to easily identify it in your console later.
- **reCAPTCHA type:** Choose one of the two verification methods:
  - **Score based (v3):** Verifies requests silently with a score, requiring no user interaction.
  - **Challenge (v2):** Verifies requests with a visible challenge (e.g., the "I'm not a robot" checkbox).
- **Domains:** Click the **+** icon to add your domain without the protocol or trailing slash (e.g., `example.com`).
- **Google Cloud Platform:** Expand this section to associate your new reCAPTCHA setup with a specific Google Cloud project. Use the dropdown menu to select your desired **Project Name**.

Once all required fields are filled out, click the **SUBMIT** button at the bottom of the page.

## Step 3: Copy Your API Keys

After successfully registering your site, Google will direct you to a page displaying your integration credentials. You will need to copy two specific keys:

![Copy Site Key and Secret Key](/images/integrations-channels/other/google-recaptcha-integration/copy-site-key-and-scret-key-scaled-1.webp)

- **SITE KEY:** Use this key in the HTML code your site serves to users (frontend).
- **SECRET KEY:** Use this key for communication between your site and reCAPTCHA (backend).

Copy both keys and keep them handy for the next step.

## Step 4: Configure reCAPTCHA in Fluent Support

Go to your **WordPress Admin** dashboard, navigate to **Fluent Support → Settings**, and click **Recaptcha** from the left menu.

1. Enable the integration by toggling the **Enable reCAPTCHA** switch.
2. Fill in the settings:
   - **reCAPTCHA Version:** Select **Version 2** or **Version 3** to match the type you registered in Step 2.
   - **Site Key:** Paste the SITE KEY you copied from the Google console.
   - **Secret Key:** Paste the SECRET KEY you copied from the Google console.
   - **Use reCAPTCHA on:** Check the boxes to indicate where the challenge should appear (e.g., **Login Form** and/or **Signup Form**).
3. To verify the setup, scroll to the **Validate Captcha** section at the bottom. It should display the reCAPTCHA widget correctly.
4. Click **Save Settings** in the top right corner to apply your changes.

![Configure reCAPTCHA in Fluent Support Settings](/images/integrations-channels/other/google-recaptcha-integration/global-settings-recapcha-save-settings-scaled-1.webp)

That's it! Your Fluent Support portal is now protected by Google reCAPTCHA.

---
