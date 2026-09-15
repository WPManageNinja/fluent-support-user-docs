# Common Issues & FAQs

This article addresses common issues and frequently asked questions about **[Fluent Support](https://fluentsupport.com/)**. If you're experiencing a problem or have a question, check this guide first for quick solutions.

## General Questions

### What is Fluent Support?

Fluent Support is a comprehensive WordPress support ticket system that helps you manage customer support requests efficiently. It allows you to create tickets, manage conversations, track agent performance, and integrate with various WordPress plugins and ssservices.

### Requirements 

Fluent Support requires:
- WordPress 5.6 or higher
- PHP 7.4 or higher
- MySQL 5.6 or higher

## Installation & Activation Issues

### The plugin won't activate

**Possible causes and solutions:**

1. **PHP Version:** Ensure your server is running PHP 7.4 or higher. Check your PHP version in your hosting control panel.

2. **Plugin Conflicts:** Deactivate other plugins temporarily to check for conflicts. Reactivate them one by one to identify the conflicting plugin.

3. **File Permissions:** Ensure WordPress has proper file permissions to install plugins.

### Plugin installation fails

- Check your WordPress file permissions
- Verify you have sufficient disk space
- Ensure your hosting provider allows plugin installations
- Try downloading the plugin file and uploading it manually via **FTP/SFTP**.


## Email & Notification Issues

### Emails are not being sent

**Troubleshooting steps:**

1. **Check Email Settings:** Go to **Settings → Global Settings → Email Settings** and verify your email configuration.

2. **Test Email Functionality:** Use a plugin like "FluentSMTP" to test if WordPress can send emails.

3. **Check Spam Folder:** Sometimes emails end up in spam. Ask recipients to check their spam folders.

4. **SMTP Configuration:** If using SMTP, verify your SMTP credentials are correct.

5. **Email Piping:** If using email piping, ensure your email forwarding is properly configured.

### Email piping is not working

If your email piping is configured correctly but tickets aren't appearing, the issue is likely due to a connection being blocked. Here is a summary of the most common causes:

* **Disabled REST-API:** FluentSupport relies on the WordPress REST-API to receive data. If this is disabled, email parsing will fail.
* **Cloudflare Bot Fight Mode:** This security feature can misidentify parsed emails as bot traffic and block them. Try disabling it to restore the connection.
* **Security Plugins:** Some WordPress security plugins block third-party connections. Check your plugin settings to ensure they aren't interfering with the parser.
* **Server-Side Security:** Your hosting provider may have firewalls or IMAP restrictions that prevent third-party parsing for security reasons.

**Recommendation:** If you have checked your API and plugins and the issue persists, contact your hosting provider to see if their server security is blocking the incoming data.

## Ticket Management Issues

### Tickets are not appearing

1. **Check Filters:** Make sure no filters are applied that might hide tickets
2. **User Permissions:** Verify the user has proper permissions to view tickets
3. **Database Issues:** Check if there are any database errors in your WordPress error logs

### Cannot create tickets

- Verify the ticket form is properly configured
- Check if required fields are filled
- Ensure the user has permission to create tickets
- Check for JavaScript errors in the browser console

### Attachments are not uploading

1. **File Size Limits:** Check your PHP upload limits (`upload_max_filesize` and `post_max_size`)
2. **File Types:** Verify the file type is in the accepted file types list
3. **Permissions:** Ensure the uploads directory has write permissions
4. **Storage Integration:** If using cloud storage, verify the integration is properly configured

## Integration Issues

### Integration is not working

**Common solutions:**

1. **Check Integration Status:** Go to **Settings → Integrations** and verify the integration is active
2. **API Credentials:** Ensure all API keys and credentials are correctly entered
3. **Plugin Updates:** Make sure both Fluent Support and the integrated plugin are up to date
4. **Compatibility:** Verify the integration is compatible with your current versions

### WooCommerce integration issues

- Ensure WooCommerce is installed and activated
- Verify the integration is enabled in Fluent Support settings
- Check that products are properly configured
- Review WooCommerce order data for any issues

## Performance Issues

### Slow loading times

1. **Caching:** Enable caching plugins to improve performance
2. **Database Optimization:** Use a database optimization plugin
3. **Hosting:** Consider upgrading your hosting plan if you have many tickets
4. **Plugins:** Deactivate unnecessary plugins that might slow down the site

### High server resource usage

- Check for any background processes running
- Review your ticket volume and consider archiving old tickets
- Optimize your database regularly
- Consider using a more powerful hosting plan

### Inline images from a customer's email are missing

Some mobile mail clients — notably **iOS Mail** and the **Gmail app** — insert photos without the `[image: filename]` placeholder text that Fluent Support uses to position inline images in the message body.

Since **v2.4.0**, an inline image with no matching placeholder falls back to being shown as a regular visible attachment on the ticket instead of staying hidden. If you are on an older version and an attachment appears to have vanished from an email-piped ticket, update Fluent Support.

## Permission & Access Issues

### Agents cannot access tickets

1. **Check Permissions:** Go to **Settings → Agents & Permissions** and verify agent permissions
2. **User Roles:** Ensure users have the correct WordPress user roles
3. **Business Inbox Access:** Verify agents have access to the correct business inboxes

### An agent cannot see the report pages

Every report page except [Personal Reports](/personal-report) requires **two** permissions, not one: **View All Reports** *and* **Access Private Data (Customers, Agents)**.

If an agent is missing either, the advanced report pages are hidden from the Reports sidebar entirely. Grant both under **Settings → Agents & Permissions**, or see [Permission Management for Agents](/permission-management-for-agents).

### Two-factor codes or login links expire immediately

On sites running a **non-UTC timezone**, two-factor codes and customer portal login links could expire earlier than their stated window because the expiry timestamp was read in the site's local timezone rather than UTC.

This is fixed in **v2.4.0**. If customers report that codes are dead on arrival, update Fluent Support and confirm your WordPress timezone under **Settings → General**.

### The reCAPTCHA challenge does not appear on the ticket form

1. **Check the version setting:** reCAPTCHA **v3** shows only a small badge in the page corner, not a checkbox. If you expected the "I'm not a robot" tick box, you need **v2**.
2. **Check where it is enabled:** Under **Settings → Recaptcha**, confirm the **Ticket Creation Form** is ticked under **Use reCAPTCHA on**.
3. **Check the keys match the version:** A v2 key pair will not work on a v3 site setting, or vice versa. Re-register the site in the Google console if needed.
4. **Blocked script:** If Google's script cannot load, the form shows a retry option rather than blocking the customer. A consistently failing load usually means a firewall, ad blocker, or a region where Google services are unreachable.

See the [Google reCAPTCHA Integration](/google-recaptcha-integration) guide for full setup steps.

## Still Need Help?

If you've tried the solutions above and still need assistance:

 * **Check Documentation:** Review other documentation articles for detailed guides.
 * **Contact Support:** Reach out to our support team through your [support portal](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).
