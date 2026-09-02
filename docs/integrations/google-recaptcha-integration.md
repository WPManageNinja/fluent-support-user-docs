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
   - **Use reCAPTCHA on:** Check the boxes to indicate where the challenge should appear — the **Login Form**, the **Signup Form**, and the **Ticket Creation Form** on your customer portal.
3. To verify the setup, scroll to the **Validate Captcha** section at the bottom. It should display the reCAPTCHA widget correctly.
4. Click **Save Settings** in the top right corner to apply your changes.

![Configure reCAPTCHA in Fluent Support Settings](/images/integrations-channels/other/google-recaptcha-integration/global-settings-recapcha-save-settings-scaled-1.webp)

That's it! Your Fluent Support portal is now protected by Google reCAPTCHA.

## Protecting the Ticket Creation Form

Spam tickets waste agent time. Alongside the login and signup forms, reCAPTCHA can also guard the **ticket creation form** on your [customer portal](/customer-support-portal-setup), so bots cannot open tickets in the first place.

Tick the ticket creation form option under **Use reCAPTCHA on**, save, and the portal form picks up the protection immediately. Both versions are supported:

* **Version 2** shows the familiar "I'm not a robot" checkbox challenge above the submit button.
* **Version 3** scores visitors silently in the background and displays only the small reCAPTCHA badge in the corner of the page.

### What Your Customers Experience

A blocked script should never trap a real customer, so the ticket form is built to fail safely:

* reCAPTCHA is loaded **lazily**, so it does not slow down the rest of the portal.
* Tokens are **refreshed** rather than reused, so a form left open in a tab still submits correctly.
* If Google's script fails to load, the form offers a **retry** instead of leaving the customer at a dead end.

> [!NOTE]
> reCAPTCHA v3 requires the badge to remain visible on the page, or a Google-approved notice in its place. If you hide the badge with custom CSS, add the required attribution text to your portal instead.

---
