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
- Try downloading and uploading the plugin manually via FTP


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

## Permission & Access Issues

### Agents cannot access tickets

1. **Check Permissions:** Go to **Settings → Agents & Permissions** and verify agent permissions
2. **User Roles:** Ensure users have the correct WordPress user roles
3. **Business Inbox Access:** Verify agents have access to the correct business inboxes

### Customers cannot access the portal

- Check "**Who can access customer portal?**" settings
- Verify user roles are allowed
- Ensure the portal page is published and accessible
- Check if any security plugins are blocking access

## Still Need Help?

If you've tried the solutions above and still need assistance:

 * **Check Documentation:** Review other documentation articles for detailed guides.
 * **Contact Support:** Reach out to our support team through your [support portal](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).
