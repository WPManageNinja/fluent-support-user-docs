# Remote Portal

With **Remote Portal** you can run your helpdesk on its own WordPress site, for example `support.example.com`, while your customers create and follow their tickets on your main website. Your customers never leave your store or product site, and your support team keeps working in Fluent Support as usual.

Remote Portal needs **Fluent Support Pro** on the support site and the free **Fluent Support Client** plugin on your main site.

## When Should You Use This?

* Your store, membership or product site is busy, and you want the helpdesk on a separate site.
* Your customers already have accounts on your main site, and you want them to get support there without creating another account.
* You want agents to see a customer's purchases, subscriptions, licenses or CRM profile from the main site while they answer tickets.

## How It Works

Two sites take part:

| Site | What runs there | What it does |
| ---- | --------------- | ------------ |
| **Support site** | Fluent Support + Fluent Support Pro | Stores every ticket. Your agents work here. |
| **Main site** | Fluent Support Client | Shows the Customer Portal to your logged-in customers. |

When a logged-in customer opens a ticket on your main site, the ticket is created on the support site under that customer's email address. Agents reply on the support site, and the customer sees the reply in the portal on your main site. Ticket links in email notifications also point to the portal on your main site.

::: info
Fluent Support itself must **not** be active on the main site. The Fluent Support Client plugin stays switched off on any site where Fluent Support is active.
:::

## Before You Start

Make sure that:

* Fluent Support Pro is active on the support site.
* Both sites are served over **HTTPS**. Application Passwords and customer data travel between the two sites, so Remote Portal needs a secure connection.
* **Application Passwords** are available on the support site. Some security plugins turn them off.
* You are logged in as a **site administrator** on the support site. Only an administrator can connect or disconnect Remote Portal.

## Step 1: Turn On Remote Portal

On the **support site**, go to **Fluent Support > Settings > Remote Portal** and switch on **Enabled**.

![Remote Portal settings on the support site](/images/setup-configuration/customer-portal/remote-portal/remote-portal-enable.webp)
<!-- TODO: Capture screenshot of Settings > Remote Portal with the Enabled switch on and the four connect steps visible, save at /images/setup-configuration/customer-portal/remote-portal/remote-portal-enable.webp -->

## Step 2: Create The Connection User

Your main site works on the support site as one WordPress user. Create that user on the **support site**:

1. Create a new WordPress user.
2. Add the user as a support agent in [Agent Permissions](/permission-management-for-agents) with these three permissions:
   * **Sensitive Data**
   * **Manage Other Tickets**
   * **Manage Settings**
3. To limit what the main site can see, restrict the agent to the business inbox your portal will use.

You can use an administrator account instead, but a restricted agent is safer.

## Step 3: Create An Application Password

Still on the **support site**, go to **Users**, edit the user from Step 2, and scroll down to **Application Passwords**. Type a name such as `Customer Portal` and click **Add New Application Password**.

Copy the password right away. WordPress shows it only once.

![Creating an Application Password on the support site](/images/setup-configuration/customer-portal/remote-portal/remote-portal-app-password.webp)
<!-- TODO: Capture screenshot of the WordPress user profile Application Passwords section with a new password shown, save at /images/setup-configuration/customer-portal/remote-portal/remote-portal-app-password.webp -->

## Step 4: Install Fluent Support Client On Your Main Site

On the Remote Portal settings page, click **Download the connector plugin (.zip)**. Then, on your **main site**, go to **Plugins > Add New > Upload Plugin**, upload the file and activate **Fluent Support Client**.

## Step 5: Generate A Connection Key

Back on the **support site**, click **Generate connection key** on the Remote Portal page, then click **Copy key**.

![Connection key on the support site](/images/setup-configuration/customer-portal/remote-portal/remote-portal-key.webp)
<!-- TODO: Capture screenshot of a generated connection key with the Copy key and Generate a new key buttons, save at /images/setup-configuration/customer-portal/remote-portal/remote-portal-key.webp -->

::: warning
A connection key works **once** and expires **30 minutes** after it was generated. If it expires, click **Generate a new key**.
:::

## Step 6: Connect From Your Main Site

On your **main site**, go to **Settings > FluentSupport Client**. The settings screen is titled **Fluent Support Connector**.

1. Paste the key into **Connection key**.
2. Enter the **Username** of the user from Step 2.
3. Paste the **Application Password** from Step 3.
4. Click **Connect**.

![Connecting the main site with the key, username and Application Password](/images/setup-configuration/customer-portal/remote-portal/remote-portal-connect.webp)
<!-- TODO: Capture screenshot of Settings > FluentSupport Client on the main site with the Connection key, Username and Application Password fields, save at /images/setup-configuration/customer-portal/remote-portal/remote-portal-connect.webp -->

The Application Password is entered only on your main site, the site that uses it. The Remote Portal page on the support site updates by itself once the main site connects.

## Step 7: Choose The Portal Page

After connecting, your main site asks for the portal settings:

* **Customer portal page**: pick an existing page, or choose **Create a Support page for me**. The page shows the portal through the `[fluent_support_client_portal]` shortcode.
* **Mailbox for new tickets**: the business inbox that new tickets go to. Only inboxes the connection user can access are listed. Leave it empty to use the support site's default.
* **Message for logged-out visitors**: shown to visitors who are not logged in. HTML and shortcodes, such as a login form, are supported.

Click **Save**.

![Portal page, mailbox and logged-out message on the main site](/images/setup-configuration/customer-portal/remote-portal/remote-portal-page.webp)
<!-- TODO: Capture screenshot of the Portal page form on the main site, save at /images/setup-configuration/customer-portal/remote-portal/remote-portal-page.webp -->

## Check The Connection

Your main site runs a **Connection check** after you save. Each line shows a check mark when it passes:

* This site can call the support site
* The support user can access the portal mailbox
* The support site can read customer data from this site
* The customer portal page is published

Click **Run check again** after you fix a problem.

On the support site, the Remote Portal page shows the connected main site, the portal page, the user it connects as, the connector version, where customer data comes from, and the last request in each direction. Click **Test connection** to check it from that side.

![Connection details on the support site](/images/setup-configuration/customer-portal/remote-portal/remote-portal-connected.webp)
<!-- TODO: Capture screenshot of the Connection table on the support site with the Test connection and Disconnect buttons, save at /images/setup-configuration/customer-portal/remote-portal/remote-portal-connected.webp -->

## What Your Customers Can Do

On the portal page of your main site, logged-in customers can:

* Open new tickets, with attachments and custom fields
* See their tickets and reply to them
* Close and reopen their tickets
* See suggested help articles while they write a ticket, if your developer set up article sources

## What Your Agents See

When an agent opens a ticket on the support site, the ticket sidebar shows the customer's data from your main site. Fluent Support Client sends it from these plugins when they are active on the main site:

* **FluentCart**: orders, subscriptions and licenses
* **Easy Digital Downloads**: purchases and lifetime value
* **FluentCRM**: the contact's profile, tags and lists

The same data is available to AI agents that use the [MCP server](/mcp-for-ai-agents).

## More On The Main Site

Fluent Support Client also works with these plugins on your main site:

* **Fluent Forms**: create support tickets on the support site from form submissions.
* **FluentCRM**: show a contact's support tickets in their FluentCRM profile.

## Connect With wp-config.php Instead

If you manage your sites in code, you can set the connection in `wp-config.php` on both sites instead of using a connection key.

1. On the support site's Remote Portal page, click **Use wp-config.php instead**.
2. Enter the **Customer portal page on the main site** and the **Username on this site**.
3. Copy the first snippet into the support site's `wp-config.php`, and the second into the main site's `wp-config.php`.
4. In the main site's snippet, replace `APPLICATION PASSWORD` with the Application Password you created in Step 3.
5. On the main site, open **Settings > FluentSupport Client**, choose the portal page, and save.

::: info
The snippets contain a new token that must be the same on both sites. While the connection is set in `wp-config.php`, the connection key, **Disconnect** and token changes are turned off on both sites. Change or remove the lines in `wp-config.php` instead.
:::

## Disconnect

To disconnect, click **Disconnect** on the support site's Remote Portal page, or click **Disconnect** at the bottom of the main site's settings.

When you disconnect from the support site, the customer data widgets stop. The main site's portal keeps working while it still has the Application Password, so also revoke that password from the connection user's profile on the support site to cut the main site off completely.

## Moving From The Fluent Support Server Plugin

Remote Portal replaces the old **Fluent Support Server** plugin. If it is still active on your support site, Fluent Support shows a notice. Deactivate Fluent Support Server, then connect your main site again from **Settings > Remote Portal** with the steps above.

## Troubleshooting

**"The support site rejected the username or Application Password"**
Check both values. If they are right, a security plugin may have turned off Application Passwords, or your host may strip the `Authorization` header. Ask your host to pass it through. On Apache, you can add this line to the support site's `.htaccess`:

```
SetEnvIf Authorization (.+) HTTP_AUTHORIZATION=$1
```

**"The support site refused this user"**
Remote Portal may be switched off on the support site, the user may have lost one of the three permissions, or the support site was connected again with another user.

**"The support site does not offer Remote Portal"**
Update Fluent Support Pro on the support site and switch on **Settings > Remote Portal**.

**Customers see "no permission" on their tickets**
The connection user can't access the business inbox the portal uses. Give the agent access to that inbox, or pick another inbox in the main site's settings.

**The connection key expired**
Keys expire after 30 minutes and work only once. Generate a new key on the support site.

::: tip
Testing on a local site? Remote Portal requires HTTPS unless the site sets `define('WP_ENVIRONMENT_TYPE', 'local');` or `development` in `wp-config.php`.
:::
