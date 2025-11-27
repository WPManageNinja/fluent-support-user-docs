# Change Log


---

## **1.10.4** (Nov 21, 2025)

  * **Fixed:** Issue with attachments not showing from third-party storage.
  * **Updated:** License Server

## **1.10.3** (Nov 17, 2025)

  * **Resolved:** issues affecting public ticket and attachment visibility.

## **1.10.2** (Nov 6, 2025)

  * **Fixed:** Guideline Issues

## **1.10.1** (Oct 31, 2025)

  * **Fixed:** Text Domain Issues
  * **Updated:** Libraries
  * **Added:** Prevent Direct Access to Plugin Files
  * **Added:** GitHub Public repo link in the readme file

## **1.10.0** (Oct 23, 2025)

  * **Added:** Fluent Cart product purchase widget in the ticket sidebar.
  * **Added:** Fluent Cart product and order options in custom fields.
  * **Added:** Workflow trigger based on Fluent Cart product and order from custom fields.
  * **Added:** Option to integrate the customer portal into the Fluent Cart customer dashboard.
  * **Added:** Multi-select option for product filtering in tickets.
  * **Improved:** Refined plugin performance for increased speed and efficiency.

## **1.9.2** (Aug 20, 2025)

  * **Added:** Product assignment to tickets in Workflow Actions.
  * **Added:** Support for custom field data in Outgoing Webhooks.
  * **Improved:** Click-to-copy shortcode functionality on the Global Settings page.
  * **Improved:** Smart code selection dropdown in Email Settings with click-to-insert functionality in WP Editor.
  * **Improved:** Dash icon updated.
  * **Fixed:** CSRF issue fixed on Report Export – nonce verification.
  * **Fixed:** Error during AI activity log cleanup.

## **1.9.1** (Jul 15, 2025)

  * **Improved:** After selecting the portal page, it now displays the page name along with the page ID.
  * **Improved:** Enhanced data validation when creating a customer through the “Create Ticket on Behalf of Customer” module.
  * **Improved:** Added a filter to control the display of bottom borders in email templates.
  * **Fixed:** Custom field “required” validation not working under certain conditions.
  * **Fixed:** Start date does not display correctly in the Paid Memberships Pro widget.
  * **Fixed:** Design conflict with the Blocksy theme in the customer portal.
  * **Fixed:** Translation issues across various modules.
  * **Fixed:** Agents unable to edit additional data fields.
  * **Fixed:** Custom fields do not render properly in the admin portal when creating a ticket on behalf of a customer.
  * **Fixed:** Selected product displayed as ID instead of name in view ticket module.
  * **Fixed:** Change customer option showed only the current customer ID instead of the full list.
  * **Fixed:** Workflow didn’t work when Fluent Community plugin was inactive.
  * **Fixed:** Attachment access issue on symlinked servers using realpath.

## **1.9.0** (May 28, 2025)

  * **Added:** Integration with Fluent Community. (Pro)
  * **Added:** Informational replies on admin ticket responses.
  * **Added:** Help Scout, Freshdesk & Zendesk Ticket Migration Now Available in Free Version.
  * **Improved:** Internal note functionality now works for closed tickets.
  * **Improved:** Responses in closed tickets can now be edited.
  * **Fixed:** Error message shown for the Priority field when the Product is required in the customer portal.
  * **Fixed:** Fatal error triggered by the Share Essentials weekly cron job.
  * **Fixed:** Customer responses not displaying in agent response stats within agent reports.
  * **Fixed:** Incorrect ticket response count shown in today’s stats.
  * **Fixed:** Broken media upload CSS in the page editor caused by the [ fluent_support_admin_portal ] shortcode.
  * **Fixed:** “Waiting For Reply” filter not working in advanced filtering.
  * **Fixed:** Responsive issues in the Agent Portal.

## **1.8.8** (Apr 22, 2025)

  * **Fixed:** Ticket status was not displaying correctly on the ticket view page in the customer portal.
  * **Fixed:** File types, quantity limits, and file sizes were not displaying correctly in the customer portal.
  * **Fixed:** Missing translations in the customer portal.
  * **Fixed:** Changes to ticket form configurations were not reflecting in the customer portal.
  * **Fixed:** Removed unnecessary API call on the customer portal page.
  * **Fixed:** Custom field not updating correctly via REST API.
  * **Fixed:** Issue with Fluent Form and Fluent CRM integration.
  * **Fixed:** Issues with updating actions in the workflow.
  * **Fixed:** Issue with conflicting forms in the customer portal’s registration and password reset process.

## **1.8.7** (March 20, 2025)

  * **Improvement:** Enhanced and refined the Customer Portal UI/UX.
  * **Improvement:** New block editor for the updated Customer Portal layout.
  * **Improvement:** Resume options for incomplete Freshdesk ticket migrations.
  * **Fixed:** Images pasted directly are deleted after some time.
  * **Fixed:** Unable to edit customers with no name in the customer list.
  * **Fixed:** Attachment issue when creating a ticket from Fluent Forms.
  * **Fixed:** Issue with unchecking agent permissions.
  * **Fixed:** Missing option to delete custom fields during creation.
  * **Fixed:** Creating an action in a workflow also creates a duplicate action.
  * **Fixed:** Advanced filter does not work when a multi-select option is selected.
  * **Fixed:** Unable to assign users to a new business box if the current one is restricted to agents.
  * **Fixed:** Product not displaying in WooCommerce widget.
  * **Fixed:** Conditional logic for custom fields not working properly when creating a ticket from the admin portal.
  * **Fixed:** Direct copy-paste of images was not functioning properly in multisite.

## **1.8.6** (Feb 28, 2025)

  * **Fixed:** Textdomain Consistency: Standardized all translation string textdomains across the plugin for better internationalization support.
  * **Fixed:** Enhanced Security: Implemented proper data escaping and improve overall plugin security.
  * **Fixed:** Media Protection: Reinforced security measures for attachment uploads by restricting direct access to image directories and implementing proper file path validation.

## **1.8.5** (Dec 26, 2024)

  * **Added:** Agent Time Tracking (Pro)
  * **Added:** Saved search (Pro)
  * **Added:** Keyboard Shortcuts
  * **Fixed:** Issue where the Customer Portal’s rich text editor reverted to a basic editor upon reload.
  * **Fixed:** Recaptcha functionality issue in the Customer Portal.
  * **Fixed:** WorkFlow action sequence title issue.
  * **Fixed:** Issue where embedded content appeared in preformatted form in the reply message after reloading.
  * **Fixed:** Compatibility issue with the Sequential Order Plugin.
  * **Fixed:** 404 error page not showing when an incorrect ticket number is entered in the ticket view URL.
  * **Fixed:** Error message displaying when the Customer Portal loads.
  * **Fixed:** Notes within a closed ticket becoming non-editable.
  * **Fixed:** Restricted agents being incorrectly assigned to a mailbox through the ticket dashboard’s bulk action feature.
  * **Fixed:** Email verification message translation and verification message hooks not functioning properly.

## **1.8.4** (Sep 27, 2024)

  * **Hot-fix:** Fixed issue with Activity logs cleanup

## **1.8.2** (Sep 25, 2024)

  * **Added:** Workflow action sequence (Pro)
  * **Added:** Direct paste image in WP Editor
  * **Fixed:** Required sign not visible for product options marked as required during ticket creation
  * **Fixed:** Reply button toggle option not working in the admin portal
  * **Fixed:** Issue with the route URL on the All Tickets page
  * **Fixed:** Filter not refreshing in the Customer Portal after clicking the (❌) icon in the search field
  * **Fixed:** OpenAI routing issue resolved
  * **Fixed:** CSS issue related to ticket filter theme in the Customer Portal
  * **Fixed:** Responsive issue on the view ticket page
  * **Fixed:** After importing tickets from another SaaS platform, the agent is imported but not synchronized with the system

## **1.8.1** (Sep 10, 2024)

  * **Fixed:** Email verification vulnerability issue in signup
  * **Fixed:** Customer portal ticket fetching vulnerability issue

## **1.8.0** (August 15, 2024)

  * **Added:** OpenAI integration
  * **Added:** Filters in the customer portal
  * **Added:** Email verification in the signup
  * **Added:** Two-factor authentication
  * **Added:** Ticket Preview on Side Pane
  * **Fixed:** Freshdesk Ticket Migration Issue
  * **Fixed:** Response message saving error in auto-close setting
  * **Fixed:** Data existing issue in “Create Customer Form”
  * **Fixed:** Shortcode Paste Issue
  * **Fixed:** Permission error in “Delete Tickets”
  * **Fixed:** Issue with email condition in the workflow trigger

## **1.7.90** (May 28, 2024)

  * **Added:** Activity Trends by Time of Day (Pro)
  * **Added:** Integration with Fluent Boards (Pro)
  * **Added:** Integrations Logs
  * **Added:** Upload ticket attachments to their respective ticket folders in Google Drive, organized accordingly (Pro)
  * **Added:** Duplicate or clone workflows (Pro)
  * **Added:** Required option in product field (Pro)
  * **Fixed:** If the site language is not set to English, the workflow always defaults to manual mode
  * **Fixed:** Inbox identifier css issue in all tickets table
  * **Fixed:** If anyone choose View dashboard and draft_reply then it will not show any tickets
  * **Fixed:** Freshdesk ticket migration issue
  * **Fixed:** Zendesk ticket migration issue
  * **Fixed:** Clicking the “Import Tickets” button in the ticket migration module opens multiple modals simultaneously
  * **Fixed:** Issue with Bookmark
  * **Fixed:** When the file name is too long, the file will not upload during ticket creation or in responses
  * **Fixed:** If a restriction is applied to a specific business box, it still appears on the dashboard
  * **Fixed:** MemberPress integration to show separate lists for recurring and non-recurring subscriptions
  * **Fixed:** The WooCommerce widget is not shown on the ‘View Customer’ page

## **1.7.80** (April 3, 2024)

  * **Added:** Restrict business boxes for specific agents
  * **Added:** Ticket search feature in customer portal
  * **Added:** MemberPress Integration
  * **Added:** Option to resume the migration process for the last incomplete ticket in Helpscout (Pro)
  * **Added:** Display the exact time of ticket or response creation upon hovering over it in the admin portal
  * **Fixed:** Attachment download issue in email piping
  * **Fixed:** BetterDocs integration issue
  * **Fixed:** Agent Only field isn’t displaying into the ticket
  * **Fixed:** Draft Reply approve button issue with attachment
  * **Fixed:** There is an issue with exporting the agent report time
  * **Fixed:** The Gravatar image link is causing a PHP 8.2 deprecated issue
  * **Fixed:** The issue with the “Enable Reply from Telegram” button in Telegram
  * **Fixed:** The Auto Close Settings are not saving
  * **Fixed:** Helpscout ticket migration issue
  * **Fixed:** When responding to emails in German, create a new ticket instead of replying.

## **1.7.72** (January 10, 2024)

  * **Fixed:** Notification integration settings issue
  * **Fixed:** Displaying an incorrect assigned agent name
  * **Fixed:** Links open in same tab issue
  * **Fixed:** Telegram reply issue
  * **Fixed:** Required functionality is not working in the conditional field
  * **Fixed:** Ticket status issue

## **1.7.7** (December 13, 2023)

  * **Added:** Trigger Fluent CRM automation within workflow (Pro)
  * **Added:** Agent feedback in ticket response (Pro)
  * **Added:** Agent permission for save response as draft
  * **Added:** New shortcode for agent title signature in the inbox settings
  * **Added:** Custom registration field using hooks
  * **Fixed:** Agent can assign ticket without permission
  * **Fixed:** The time duration displayed for ticket creation and response creation is inconsistent
  * **Fixed:** Open a new thread in email for every response created
  * **Fixed:** Translation issue
  * **Fixed:** MySQL orderby security issue

## **1.7.6** (November 07, 2023)

  * **Improved:** File Upload
  * **Improved:** UI

## **1.7.5** (November 01, 2023)

  * **Fixed:** Update and delete customer profile issue
  * **Fixed:** Reset avatar issue for customer and agent
  * **Fixed:** Ticket ID not included in outgoing webhook
  * **Fixed:** Update and delete issue in saved reply
  * **Fixed:** Ticket ID not included in outgoing webhook **(Pro)**
  * **Fixed:** Update and delete issue in saved reply **(Pro)**
  * **Fixed:** Time difference issue in saved reply **(Pro)**

## **1.7.4** (October 31, 2023)

  * **Added:** Gutenberg block editor support for customer portal
  * **Added:** Option to set additional fields in register form
  * **Added:** Agent assigns permission for support staff
  * **Fixed:** Added a few missing translations
  * **Fixed:** “not contain” condition does not work in the workflow
  * **Fixed:** Ticket delete button is only shown in the Pro version
  * **Fixed:** Freshdesk migrator issue fixing
  * **Fixed:** File upload and view issue for 3rd party
  * **Improved:** Ticket ordering in the customer portal
  * **Improved:** Implemented 404 page for invalid ticket id

## **1.7.3** (August 23, 2023)

  * **Added:** Option to delete ticket from inside view ticket
  * **Added:** Re-design permission page
  * **Added:** Report by Product(Pro)
  * **Added:** Report by Business Inbox(Pro)
  * **Added:** Support RTL email template
  * **Fixed:** Hide agent performance report from dashboard if the user doesn’t have permission
  * **Fixed:** Tickets page – search not working in some case
  * **Fixed:** Issue in Customer Fields required with conditions(Pro)
  * **Fixed:** Save as draft in reply ticket not working
  * **Fixed:** Manage Customer – upload avatar for customer not working
  * **Fixed:** Add media button is not working for wp-editor
  * **Fixed:** Attachment not working from email for 3rd party(Pro)
  * **Fixed:** The issues in inner sidebar while route changing

## **1.7.2** (July 17, 2023)

  * **Fixed:** Create ticket issue for required fields
  * **Fixed:** Edit button in draft mode
  * **Fixed:** Add cc or Discard cc button not showing

## **1.7.1** (July 15, 2023)

  * **Fixed:** File Attachment view issue
  * **Fixed:** remove error_log for debugging

## **1.7.0** (July 14, 2023)

  * **Added:** Effortless draft mode and auto save functionality
  * **Added:** Option to set maximum file upload limit
  * **Added:** Option to set dedicated business box for webhook(Pro)
  * **Added:** Option to set as default business box
  * **Added:** Option to set business box in the customer portal shortcode
  * **Added:** Option to upload file in the ticket create form
  * **Added:** Business box added in the workflow action and condition list (Pro)
  * **Added:** Option to merge multiple tickets at the same time
  * **Added:** Summary by agent report on the dashboard
  * **Added:** Email CC support(Pro)
  * **Added:** Support file attachment upload in third party (Google Drive and Dropbox)(Pro)
  * **Added:** Zendesk migrator(Pro)
  * **Fixed:** Exception handled in route issue
  * **Fixed:** Edit reply issue
  * **Fixed:** Workflow action ordering issue (Pro)
  * **Fixed:** Custom field required in conditional form (Pro)
  * **Fixed:** Conditional form rendering issue (Pro)
  * **Fixed:** Ticket create using API endpoint (Pro)
  * **Fixed:** Freshdesk migrator issue (Pro)
  * **Improved:** More improvements

## **1.6.9** (March 16, 2023)

  * **Added:** Google reCAPTCHA support
  * **Added:** Custom field required or optional (Pro)
  * **Added:** Custom field in the workflow condition (Pro)
  * **Added:** Saved replies templates in auto ticket close module (Pro)
  * **Added:** Saved replies templates in the workflow (Pro)
  * **Fixed:** Fluent CRM widget missing issue (Pro)
  * **Fixed:** Ticket merge popup issue (Pro)
  * **Fixed:** Delete action of manual workflow (Pro)
  * **Improved:** More improvements

## **1.6.8** (February 14, 2023)

  * **Added:** Notify user when agent create a ticket on behalf of them
  * **Added:** Migrate Tickets from Freshdesk (Pro)
  * **Added:** Toggle to stop auto close bookmarked tickets (Pro)
  * **Fixed:** Custom fields issues while creating ticket from Fluent Forms
  * **Fixed:** Issue with Shortcode
  * **Fixed:** Issue on ticket close
  * **Fixed:** Issue with telegram reply (Pro)
  * **Fixed:** Support staff not assigned to ticket via workflow (Pro)
  * **Fixed:** Frontend agent portal issues (Pro)
  * **Fixed:** More Bug Fixes and Improvements

## **1.6.7** (November 24, 2022)

  * **Added:** Dynamic Dashboard
  * **Added:** Agent assigned to Activity
  * **Added:** Export Agent Summary Report **(Pro)**
  * **Added:** JS HelpDesk Importer
  * **Fixed:** Manual Workflow bug fixing
  * **Fixed:** Attachment does not send on the first response
  * **Added:** Help Scout Ticket Migrator **(Pro)**
  * **Fixed:** Block user's ticket not blocking issue
  * **Fixed:** Filters not staying in place
  * **Improved:** WooCommerce purchase history design

## **1.6.6** (October 19, 2022)

  * **Added:** Activity Log Filters
  * **Added:** Active Tickets for Products
  * **Added:** Waiting Tickets stat on the Dashboard
  * **Added:** Hourly Reports for tickets activity
  * **Added:** New Trigger – Ticket Closed on Automation **(Pro)**
  * **Added:** Close Ticket Silently (without triggering emails)
  * **Added:** Migrate Tickets from Awesome Support
  * **Added:** Migrate Tickets from SupportCandy
  * **Fixed:** and Improvements of a few minor UI issues

## **1.6.5** (August 24, 2022)

  * **Added:** Auto Close Ticket Module based on ticket inactivity days **(Pro)**
  * **Improved:** Saved Replies [you can add more replies] **(Pro)**
  * **Improved:** Styling Improvements
  * **Fixed:** a few minor issues on integrations

## **1.6.2** (August 22, 2022)

  * **Fixed:** a few minor bugs regarding data sanitizations
  * **Fixed:** Saved Replies issues
  * **Fixed:** All external links are will open in a new tab
  * **Added:** Auto Linking linkable contents
  * **Improved:** Create new ticket flow improved from the agent side

## **1.6.1** (August 19, 2022)

  * **Added:** Ticket create action in FluentCRM
  * **Added:** FluentCRM list on ticket sidebar
  * **Added:** Fluent Support ticket summary in WP Dashboard toolbar
  * **Added:** Fluent Support ticket summary in WP Dashboard toolbar
  * **Added:** Fluent Support summary WP Dashboard Widget
  * **Fixed:** Customer ticket creation page disappear on page reload
  * **Improvement:** Security
  * **Improvement:** Code Base
  * **Added:** Shortcode support in the workflow (Pro)
  * **Added:** LearnPress integration (Pro)
  * **Added:** Split reply to a new ticket (Pro)
  * **Added:** License status in EDD widget (Pro)
  * **Added:** Agent portal in frontend (Pro)
  * **Added:** Ticket closing feature from Slack and Telegram (Pro)
  * **Added:** Adding or removing ticket bookmark from the workflow (Pro)
  * **Fixed:** Email box setup issue on translated sites (Pro)
  * **Fixed:** WooCommerce customer guest purchase not displaying in WooCommerce widget (Pro)
  * **Improvement:** Security (Pro)
  * **Improvement:** Code Base (Pro)

## **1.5.7** (July 07, 2022)

  * **Added:** Customer Logout Feature
  * **Added:** Customer Password Reset Feature
  * **Added:** Global Customer Searching on Ticket Creation on Behalf of Customer **(Pro)**
  * **Added:** Template for Ticket Creation on Behalf of Customer **(Pro)**
  * **Fixed:** WooCommerce Order Total Issue **(Pro)**
  * **Fixed:** Text Encoding Issue on Email Piping **(Pro)**
  * **Added:** Avatar Reset Feature
  * **Improved:** Code Base

## **1.5.6** (May 26, 2022)

  * **Improved:** Code Base
  * **Fixed:** Image alignment issue in email template
  * **Fixed:** Editor issue inside a modal popup
  * **Added:** Ticket Merge System **(Pro)**
  * **Added:** Ticket Watcher System **(Pro)**
  * **Added:** Mailbox Check in Workflow **(Pro)**
  * **Fixed:** Customer avatar doesn't display in the customer portal
  * **Fixed:** Customer WP Profile Update doesn't Reflect in Fluent Support Customer Profile
  * **Added:** FluentCRM List & Tag Check in Workflow **(Pro)**
  * **Added:** FluentCRM List & Tag Attach & Detach in Workflow **(Pro)**
  * **Fixed:** WooCommerce Multi Currency Issue **(Pro)**
  * **Fixed:** WooCommerce Draft Product Display in Custom Fields **(Pro)**

## **1.5.5** (March 02, 2022)

  * **Added:** GDPR compliance and WordPress Data-Export API
  * **Added:** Today's stats of tickets
  * **Added:** Attachment support in the email notification
  * **Added:** Ticket moving feature from one mailbox to another
  * **Fixed:** Conflict while creating a ticket from agent-end in some specific servers
  * **Added:** Whatsapp integration via Twilio **(Pro)**
  * **Added:** Outgoing Webhook Integration in the workflow **(Pro)**
  * **Added:** Agents report filtering by a specific agent **(Pro)**
  * **Added:** Today’s stats of tickets **(Pro)**
  * **Added:** Send notification to 3rd party integrated notification system on agent assign **(Pro)**
  * **Added:** Ticket moving feature from one mailbox to another **(Pro)**
  * **Fixed:** Ticket created email notification not sending when creating a ticket via incoming webhook **(Pro)**

## **1.5.4** (January 19, 2022)

  * **Added:** Email notification on ticket assign
  * **Added:** Ticket priority selection in Fluent Forms integration
  * **Added:** Customer profile picture changing the option in agent area
  * **Added:** Customer registration on ticket creation from agent area
  * **Added:** WordPress user registration on ticket creation from agent area
  * **Added:** Plugin PHP API
  * **Added:** Ticket customer changing option from the agent dashboard
  * **Added:** Missing translations
  * **Improved:** Authentication Improvements
  * **Fixed:** Attachment issue
  * **Fixed:** Email notification not sent to the customer when an agent replies to a ticket
  * **Improved:** Authentication Improvements
  * **Fixed:** Attachment issue
  * **Fixed:** Email notification not sent to the customer when an agent replies to a ticket
  * **Added:** Ticket advanced filtering (Pro)
  * **Added:** Custom fields on Telegram integration **(Pro)**
  * **Added:** Incoming Webhook **(Pro)**
  * **Added:** Missing translations **(Pro)**
  * **Fixed:** Issues related to email piping **(Pro)**
  * **Fixed:** Email footer not sending to email notification **(Pro)**
  * **Fixed:** Discord Notification issues **(Pro)**
  * **Fixed:** Custom fields not saving when creating a ticket from the agent dashboard **(Pro)**

## **1.5.3** (November 22, 2021)

  * **Fixed:** Preview text issue
  * **Added:** Support for Non-Latin chars
  * **Added:** Customer Delete Feature

## **1.5.2** (November 17, 2021)

  * **Fixed:** File upload bug issue
  * **Fixed:** Ticket priority display issue

## **1.5.1** (November 16, 2021)

  * **Fixed:** Registration shortcode

## **1.5.0** (November 16, 2021)

  * **Improved:** Save notifications
  * **Improved:** Enforcing hook names convention
  * **Added:** The final release for the public launch

## **1.4.6** (November 15, 2021)

  * **Improved:** UI & UX Improvements
  * **Added:** Signup and Login Form
  * **Added:** Fully Translation Ready

## **1.4.2** (November 14, 2021)

  * **Improved:** UI Improvements
  * **Fixed:** Data Syncing Issue

## **1.4.1** (November 13, 2021)

  * **Fixed:** Remove Fluent Forms Dependencies
  * **Added:** Deep integration with FluentCRM
  * **Improved:** UI Improvements

## **1.4.0** (November 12, 2021)

  * **Added:** Initial Release

---

