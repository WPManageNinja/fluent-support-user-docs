# Changelog

Stay updated with the latest improvements, new features, bug fixes, and performance enhancements in Fluent Support.

## Fluent Support v2.0.6

*Released on March 05, 2026*

::: code-group

```markdown [✨ Newly Added]
• Zendesk migration improvement to collect archived tickets and resume previous migrations
```

```markdown [🚀 Improvements]
• Updated Core PHP framework
```

```markdown [🐞 Bug fixes]
• Fixed Onboarding dark mode design issue
• Fixed Bulk option checkbox now visible by default
• Fixed Ticket list not updating after bulk actions
• Fixed File upload limit validation issue after deleting previously uploaded files
• Fixed WordPress admin bar overlapping Fluent Support menu
• Fixed Agent reply count in reports incorrectly including internal notes
• Fixed Error when navigating directly to a ticket URL due to window.history.state being null
```

:::

## Fluent Support v2.0.5

*Released on March 02, 2026*

::: code-group

```markdown [✨ Newly Added]
• Admin Dashboard Dark Mode
• Support for OpenAI GPT-5.2 & GPT-5.2 Chat models
• View Tickets (Read Only) permission
```

```markdown [🚀 Improvements]
• Faster ticket list loading
• Optimized large-scale Zendesk migration
```

```markdown [🐞 Bug fixes]
• Fixed Draft Reply permission issue
• Fixed Attachment links during ticket merge
• Fixed Ticket content unordered list formatting
• Fixed Integration settings save button visibility
• Fixed "Waiting Since" tooltip date display
• Fixed Saved Replies left menu link
• Fixed Login page styling issue
• Fixed Date range picker responsive layout
```

:::

## Fluent Support v2.0.2

*Released on February 09, 2026*

::: code-group

```markdown [🐞 Bug fixes]
• Fixed an issue where current ticket watchers were not displaying in the ticket list
• Fixed an issue where ticket merging could fail from the ticket view page
• Fixed an issue where reCAPTCHA settings were not saving properly
• Fixed a responsiveness issue with the bulk actions bar in the ticket list
• Fixed issues related to ticket migration
• Fixed a customer profile update issue by treating customer IP fields as strings
• Fixed a styling issue with the Ticket Merge dialog buttons
```

:::

## Fluent Support v2.0.1

*Released on February 06, 2026*

::: code-group

```markdown [🚀 Improvements]
• Improved onboarding completion UI and post-onboarding navigation
• Improved sanitization and validation handling
```

```markdown [🐞 Bug fixes]
• Fixed Saved Replies modal showing stale content when editing
```

:::

## Fluent Support v2.0.0

*Released on February 05, 2026*

::: code-group

```markdown [✨ Newly Added]
• Complete admin interface redesign with a modern layout
• Full RTL (Right-to-Left) language support across the interface
• Revamped menu structure with dropdowns for better organization
• Responsive hamburger menus for Main Menu, Settings, and Reports
• Drag & Drop Image Upload for tickets
• Ticket List Display Settings: manage layout and element visibility directly from the Display Settings icon
• Compact Ticket List Layout for faster scanning and higher information density
• Keyboard Shortcuts: Enable via Plugin Settings → Global Settings → Enable Keyboard Shortcuts. Click "Keyboard Shortcuts" to view all available commands
• Added Reports Stats API for product/business-specific insights
```

```markdown [🚀 Improvements]
• Fully mobile-responsive experience across all modules
• Improved Frontend Support Portal responsiveness and theme compatibility
• Refactored Customer Portal SCSS variables for easier dark mode implementation
• Updated core PHP framework; resolved PHP 8.4 compatibility issues
• Improved input sanitization and validation
• Migrated components to Options API and refactored Vue components for better performance
• Prevented unnecessary API calls in Reports module
• Separated personal reports from agent performance reports
• Selected date range persists when switching report tabs
```

```markdown [🐞 Bug fixes]
• Resolved issue where pressing Enter caused page reload instead of submitting forms
• Fixed Block Editor styles not applying correctly on Customer Portal
• Fixed WordPress 6.9 admin text editor toolbar compatibility issues
• Fixed database table error when Activity Log feature was disabled
• Fixed auto password generation issue for new users with empty password fields
```

:::

## Fluent Support v1.10.5

*Released on November 28, 2025*

::: code-group

```markdown [🔒 Security]
• Fixed an access control bypass in the customer portal caused by improper validation of the intended_ticket_hash parameter
• Added sanitize_sql_orderby() to prevent unsafe or invalid values in sorting queries
```

```markdown [🐞 Bug fixes]
• Fix product_id filter to require array in whereIn, preventing potential errors when a non-array value is provided
```

:::

## Fluent Support v1.10.4

*Released on November 21, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Issue with attachments not showing from third-party storage
```

```markdown [🚀 Improvements]
• License Server updated
```

:::

## Fluent Support v1.10.3

*Released on November 17, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Issues affecting public ticket and attachment visibility
```

:::

## Fluent Support v1.10.2

*Released on November 6, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Guideline Issues
```

:::

## Fluent Support v1.10.1

*Released on October 31, 2025*

::: code-group

```markdown [✨ Newly Added]
• Prevent Direct Access to Plugin Files
• GitHub Public repo link in the readme file
```

```markdown [🚀 Improvements]
• Libraries updated
```

```markdown [🐞 Bug fixes]
• Text Domain Issues
```

:::

## Fluent Support v1.10.0

*Released on October 23, 2025*

::: code-group

```markdown [✨ Newly Added]
• Fluent Cart product purchase widget in the ticket sidebar
• Fluent Cart product and order options in custom fields
• Workflow trigger based on Fluent Cart product and order from custom fields
• Option to integrate the customer portal into the Fluent Cart customer dashboard
• Multi-select option for product filtering in tickets
```

```markdown [🚀 Improvements]
• Refined plugin performance for increased speed and efficiency
```

:::

## Fluent Support v1.9.2

*Released on August 20, 2025*

::: code-group

```markdown [✨ Newly Added]
• Product assignment to tickets in Workflow Actions
• Support for custom field data in Outgoing Webhooks
```

```markdown [🚀 Improvements]
• Click-to-copy shortcode functionality on the Global Settings page
• Smart code selection dropdown in Email Settings with click-to-insert functionality in WP Editor
• Dash icon updated
```

```markdown [🐞 Bug fixes]
• CSRF issue fixed on Report Export – nonce verification
• Error during AI activity log cleanup
```

:::

## Fluent Support v1.9.1

*Released on July 15, 2025*

::: code-group

```markdown [🚀 Improvements]
• After selecting the portal page, it now displays the page name along with the page ID
• Enhanced data validation when creating a customer through the "Create Ticket on Behalf of Customer" module
• Added a filter to control the display of bottom borders in email templates
```

```markdown [🐞 Bug fixes]
• Custom field "required" validation not working under certain conditions
• Start date does not display correctly in the Paid Memberships Pro widget
• Design conflict with the Blocksy theme in the customer portal
• Translation issues across various modules
• Agents unable to edit additional data fields
• Custom fields do not render properly in the admin portal when creating a ticket on behalf of a customer
• Selected product displayed as ID instead of name in view ticket module
• Change customer option showed only the current customer ID instead of the full list
• Workflow didn't work when Fluent Community plugin was inactive
• Attachment access issue on symlinked servers using realpath
```

:::

## Fluent Support v1.9.0

*Released on May 28, 2025*

::: code-group

```markdown [✨ Newly Added]
• Integration with Fluent Community (Pro)
• Informational replies on admin ticket responses
• Help Scout, Freshdesk & Zendesk Ticket Migration Now Available in Free Version
```

```markdown [🚀 Improvements]
• Internal note functionality now works for closed tickets
• Responses in closed tickets can now be edited
```

```markdown [🐞 Bug fixes]
• Error message shown for the Priority field when the Product is required in the customer portal
• Fatal error triggered by the Share Essentials weekly cron job
• Customer responses not displaying in agent response stats within agent reports
• Incorrect ticket response count shown in today's stats
• Broken media upload CSS in the page editor caused by the [ fluent_support_admin_portal ] shortcode
• "Waiting For Reply" filter not working in advanced filtering
• Responsive issues in the Agent Portal
```

:::

## Fluent Support v1.8.8

*Released on April 22, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Ticket status was not displaying correctly on the ticket view page in the customer portal
• File types, quantity limits, and file sizes were not displaying correctly in the customer portal
• Missing translations in the customer portal
• Changes to ticket form configurations were not reflecting in the customer portal
• Removed unnecessary API call on the customer portal page
• Custom field not updating correctly via REST API
• Issue with Fluent Form and Fluent CRM integration
• Issues with updating actions in the workflow
• Issue with conflicting forms in the customer portal's registration and password reset process
```

:::

## Fluent Support v1.8.7

*Released on March 20, 2025*

::: code-group

```markdown [🚀 Improvements]
• Enhanced and refined the Customer Portal UI/UX
• New block editor for the updated Customer Portal layout
• Resume options for incomplete Freshdesk ticket migrations
```

```markdown [🐞 Bug fixes]
• Images pasted directly are deleted after some time
• Unable to edit customers with no name in the customer list
• Attachment issue when creating a ticket from Fluent Forms
• Issue with unchecking agent permissions
• Missing option to delete custom fields during creation
• Creating an action in a workflow also creates a duplicate action
• Advanced filter does not work when a multi-select option is selected
• Unable to assign users to a new business box if the current one is restricted to agents
• Product not displaying in WooCommerce widget
• Conditional logic for custom fields not working properly when creating a ticket from the admin portal
• Direct copy-paste of images was not functioning properly in multisite
```

:::

## Fluent Support v1.8.6

*Released on February 28, 2025*

::: code-group

```markdown [🚀 Improvements]
• Textdomain Consistency: Standardized all translation string textdomains across the plugin for better internationalization support
• Enhanced Security: Implemented proper data escaping and improve overall plugin security
• Media Protection: Reinforced security measures for attachment uploads by restricting direct access to image directories and implementing proper file path validation
```

:::

## Fluent Support v1.8.5

*Released on December 26, 2024*

::: code-group

```markdown [✨ Newly Added]
• Agent Time Tracking (Pro)
• Saved search (Pro)
• Keyboard Shortcuts
```

```markdown [🐞 Bug fixes]
• Issue where the Customer Portal's rich text editor reverted to a basic editor upon reload
• Recaptcha functionality issue in the Customer Portal
• WorkFlow action sequence title issue
• Issue where embedded content appeared in preformatted form in the reply message after reloading
• Compatibility issue with the Sequential Order Plugin
• 404 error page not showing when an incorrect ticket number is entered in the ticket view URL
• Error message displaying when the Customer Portal loads
• Notes within a closed ticket becoming non-editable
• Restricted agents being incorrectly assigned to a mailbox through the ticket dashboard's bulk action feature
• Email verification message translation and verification message hooks not functioning properly
```

:::

## Fluent Support v1.8.4

*Released on September 27, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Hotfix: Fixed issue with Activity logs cleanup
```

:::

## Fluent Support v1.8.2

*Released on September 25, 2024*

::: code-group

```markdown [✨ Newly Added]
• Workflow action sequence (Pro)
• Direct paste image in WP Editor
```

```markdown [🐞 Bug fixes]
• Required sign not visible for product options marked as required during ticket creation
• Reply button toggle option not working in the admin portal
• Issue with the route URL on the All Tickets page
• Filter not refreshing in the Customer Portal after clicking the (❌) icon in the search field
• OpenAI routing issue resolved
• CSS issue related to ticket filter theme in the Customer Portal
• Responsive issue on the view ticket page
• After importing tickets from another SaaS platform, the agent is imported but not synchronized with the system
```

:::

## Fluent Support v1.8.1

*Released on September 10, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Email verification vulnerability issue in signup
• Customer portal ticket fetching vulnerability issue
```

:::

## Fluent Support v1.8.0

*Released on August 15, 2024*

::: code-group

```markdown [✨ Newly Added]
• OpenAI integration
• Filters in the customer portal
• Email verification in the signup
• Two-factor authentication
• Ticket Preview on Side Pane
```

```markdown [🐞 Bug fixes]
• Freshdesk Ticket Migration Issue
• Response message saving error in auto-close setting
• Data existing issue in "Create Customer Form"
• Shortcode Paste Issue
• Permission error in "Delete Tickets"
• Issue with email condition in the workflow trigger
```

:::

## Fluent Support v1.7.90

*Released on May 28, 2024*

::: code-group

```markdown [✨ Newly Added]
• Activity Trends by Time of Day (Pro)
• Integration with Fluent Boards (Pro)
• Integrations Logs
• Upload ticket attachments to their respective ticket folders in Google Drive, organized accordingly (Pro)
• Duplicate or clone workflows (Pro)
• Required option in product field (Pro)
```

```markdown [🐞 Bug fixes]
• If the site language is not set to English, the workflow always defaults to manual mode
• Inbox identifier css issue in all tickets table
• If anyone choose View dashboard and draft_reply then it will not show any tickets
• Freshdesk ticket migration issue
• Zendesk ticket migration issue
• Clicking the "Import Tickets" button in the ticket migration module opens multiple modals simultaneously
• Issue with Bookmark
• When the file name is too long, the file will not upload during ticket creation or in responses
• If a restriction is applied to a specific business box, it still appears on the dashboard
• MemberPress integration to show separate lists for recurring and non-recurring subscriptions
• The WooCommerce widget is not shown on the 'View Customer' page
```

:::

## Fluent Support v1.7.80

*Released on April 3, 2024*

::: code-group

```markdown [✨ Newly Added]
• Restrict business boxes for specific agents
• Ticket search feature in customer portal
• MemberPress Integration
• Option to resume the migration process for the last incomplete ticket in Helpscout (Pro)
• Display the exact time of ticket or response creation upon hovering over it in the admin portal
```

```markdown [🐞 Bug fixes]
• Attachment download issue in email piping
• BetterDocs integration issue
• Agent Only field isn't displaying into the ticket
• Draft Reply approve button issue with attachment
• There is an issue with exporting the agent report time
• The Gravatar image link is causing a PHP 8.2 deprecated issue
• The issue with the "Enable Reply from Telegram" button in Telegram
• The Auto Close Settings are not saving
• Helpscout ticket migration issue
• When responding to emails in German, create a new ticket instead of replying
```

:::

## Fluent Support v1.7.72

*Released on January 10, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Notification integration settings issue
• Displaying an incorrect assigned agent name
• Links open in same tab issue
• Telegram reply issue
• Required functionality is not working in the conditional field
• Ticket status issue
```

:::

## Fluent Support v1.7.7

*Released on December 13, 2023*

::: code-group

```markdown [✨ Newly Added]
• Trigger Fluent CRM automation within workflow (Pro)
• Agent feedback in ticket response (Pro)
• Agent permission for save response as draft
• New shortcode for agent title signature in the inbox settings
• Custom registration field using hooks
```

```markdown [🐞 Bug fixes]
• Agent can assign ticket without permission
• The time duration displayed for ticket creation and response creation is inconsistent
• Open a new thread in email for every response created
• Translation issue
• MySQL orderby security issue
```

:::

## Fluent Support v1.7.6

*Released on November 7, 2023*

::: code-group

```markdown [🚀 Improvements]
• File Upload
• UI
```

:::

## Fluent Support v1.7.5

*Released on November 1, 2023*

::: code-group

```markdown [🐞 Bug fixes]
• Update and delete customer profile issue
• Reset avatar issue for customer and agent
• Ticket ID not included in outgoing webhook
• Update and delete issue in saved reply
• Ticket ID not included in outgoing webhook (Pro)
• Update and delete issue in saved reply (Pro)
• Time difference issue in saved reply (Pro)
```

:::

## Fluent Support v1.7.4

*Released on October 31, 2023*

::: code-group

```markdown [✨ Newly Added]
• Gutenberg block editor support for customer portal
• Option to set additional fields in register form
• Agent assigns permission for support staff
```

```markdown [🚀 Improvements]
• Ticket ordering in the customer portal
• Implemented 404 page for invalid ticket id
```

```markdown [🐞 Bug fixes]
• Added a few missing translations
• "not contain" condition does not work in the workflow
• Ticket delete button is only shown in the Pro version
• Freshdesk migrator issue fixing
• File upload and view issue for 3rd party
```

:::

## Fluent Support v1.7.3

*Released on August 23, 2023*

::: code-group

```markdown [✨ Newly Added]
• Option to delete ticket from inside view ticket
• Re-design permission page
• Report by Product (Pro)
• Report by Business Inbox (Pro)
• Support RTL email template
```

```markdown [🐞 Bug fixes]
• Hide agent performance report from dashboard if the user doesn't have permission
• Tickets page – search not working in some case
• Issue in Customer Fields required with conditions (Pro)
• Save as draft in reply ticket not working
• Manage Customer – upload avatar for customer not working
• Add media button is not working for wp-editor
• Attachment not working from email for 3rd party (Pro)
• The issues in inner sidebar while route changing
```

:::

## Fluent Support v1.7.2

*Released on July 17, 2023*

::: code-group

```markdown [🐞 Bug fixes]
• Create ticket issue for required fields
• Edit button in draft mode
• Add cc or Discard cc button not showing
```

:::

## Fluent Support v1.7.1

*Released on July 15, 2023*

::: code-group

```markdown [🐞 Bug fixes]
• File Attachment view issue
• Remove error_log for debugging
```

:::

## Fluent Support v1.7.0

*Released on July 14, 2023*

::: code-group

```markdown [✨ Newly Added]
• Effortless draft mode and auto save functionality
• Option to set maximum file upload limit
• Option to set dedicated business box for webhook (Pro)
• Option to set as default business box
• Option to set business box in the customer portal shortcode
• Option to upload file in the ticket create form
• Business box added in the workflow action and condition list (Pro)
• Option to merge multiple tickets at the same time
• Summary by agent report on the dashboard
• Email CC support (Pro)
• Support file attachment upload in third party (Google Drive and Dropbox) (Pro)
• Zendesk migrator (Pro)
```

```markdown [🚀 Improvements]
• More improvements
```

```markdown [🐞 Bug fixes]
• Exception handled in route issue
• Edit reply issue
• Workflow action ordering issue (Pro)
• Custom field required in conditional form (Pro)
• Conditional form rendering issue (Pro)
• Ticket create using API endpoint (Pro)
• Freshdesk migrator issue (Pro)
```

:::

## Fluent Support v1.6.9

*Released on March 16, 2023*

::: code-group

```markdown [✨ Newly Added]
• Google reCAPTCHA support
• Custom field required or optional (Pro)
• Custom field in the workflow condition (Pro)
• Saved replies templates in auto ticket close module (Pro)
• Saved replies templates in the workflow (Pro)
```

```markdown [🚀 Improvements]
• More improvements
```

```markdown [🐞 Bug fixes]
• Fluent CRM widget missing issue (Pro)
• Ticket merge popup issue (Pro)
• Delete action of manual workflow (Pro)
```

:::

## Fluent Support v1.6.8

*Released on February 14, 2023*

::: code-group

```markdown [✨ Newly Added]
• Notify user when agent create a ticket on behalf of them
• Migrate Tickets from Freshdesk (Pro)
• Toggle to stop auto close bookmarked tickets (Pro)
```

```markdown [🐞 Bug fixes]
• Custom fields issues while creating ticket from Fluent Forms
• Issue with Shortcode
• Issue on ticket close
• Issue with telegram reply (Pro)
• Support staff not assigned to ticket via workflow (Pro)
• Frontend agent portal issues (Pro)
• More Bug Fixes and Improvements
```

:::

## Fluent Support v1.6.7

*Released on November 24, 2022*

::: code-group

```markdown [✨ Newly Added]
• Dynamic Dashboard
• Agent assigned to Activity
• Export Agent Summary Report (Pro)
• JS HelpDesk Importer
• Help Scout Ticket Migrator (Pro)
```

```markdown [🚀 Improvements]
• WooCommerce purchase history design
```

```markdown [🐞 Bug fixes]
• Manual Workflow bug fixing
• Attachment does not send on the first response
• Block user's ticket not blocking issue
• Filters not staying in place
```

:::

## Fluent Support v1.6.6

*Released on October 19, 2022*

::: code-group

```markdown [✨ Newly Added]
• Activity Log Filters
• Active Tickets for Products
• Waiting Tickets stat on the Dashboard
• Hourly Reports for tickets activity
• New Trigger – Ticket Closed on Automation (Pro)
• Close Ticket Silently (without triggering emails)
• Migrate Tickets from Awesome Support
• Migrate Tickets from SupportCandy
```

```markdown [🐞 Bug fixes]
• Improvements of a few minor UI issues
```

:::

## Fluent Support v1.6.5

*Released on August 24, 2022*

::: code-group

```markdown [✨ Newly Added]
• Auto Close Ticket Module based on ticket inactivity days (Pro)
```

```markdown [🚀 Improvements]
• Saved Replies [you can add more replies] (Pro)
• Styling Improvements
```

```markdown [🐞 Bug fixes]
• A few minor issues on integrations
```

:::

## Fluent Support v1.6.2

*Released on August 22, 2022*

::: code-group

```markdown [✨ Newly Added]
• Auto Linking linkable contents
```

```markdown [🚀 Improvements]
• Create new ticket flow improved from the agent side
```

```markdown [🐞 Bug fixes]
• A few minor bugs regarding data sanitizations
• Saved Replies issues
• All external links are will open in a new tab
```

:::

## Fluent Support v1.6.1

*Released on August 19, 2022*

::: code-group

```markdown [✨ Newly Added]
• Ticket create action in FluentCRM
• FluentCRM list on ticket sidebar
• Fluent Support ticket summary in WP Dashboard toolbar
• Fluent Support summary WP Dashboard Widget
• Shortcode support in the workflow (Pro)
• LearnPress integration (Pro)
• Split reply to a new ticket (Pro)
• License status in EDD widget (Pro)
• Agent portal in frontend (Pro)
• Ticket closing feature from Slack and Telegram (Pro)
• Adding or removing ticket bookmark from the workflow (Pro)
```

```markdown [🚀 Improvements]
• Security
• Code Base
• Security (Pro)
• Code Base (Pro)
```

```markdown [🐞 Bug fixes]
• Customer ticket creation page disappear on page reload
• Email box setup issue on translated sites (Pro)
• WooCommerce customer guest purchase not displaying in WooCommerce widget (Pro)
```

:::

## Fluent Support v1.5.7

*Released on July 7, 2022*

::: code-group

```markdown [✨ Newly Added]
• Customer Logout Feature
• Customer Password Reset Feature
• Global Customer Searching on Ticket Creation on Behalf of Customer (Pro)
• Template for Ticket Creation on Behalf of Customer (Pro)
• Avatar Reset Feature
```

```markdown [🚀 Improvements]
• Code Base
```

```markdown [🐞 Bug fixes]
• WooCommerce Order Total Issue (Pro)
• Text Encoding Issue on Email Piping (Pro)
```

:::

## Fluent Support v1.5.6

*Released on May 26, 2022*

::: code-group

```markdown [✨ Newly Added]
• Ticket Merge System (Pro)
• Ticket Watcher System (Pro)
• Mailbox Check in Workflow (Pro)
• FluentCRM List & Tag Check in Workflow (Pro)
• FluentCRM List & Tag Attach & Detach in Workflow (Pro)
```

```markdown [🚀 Improvements]
• Code Base
```

```markdown [🐞 Bug fixes]
• Image alignment issue in email template
• Editor issue inside a modal popup
• Customer avatar doesn't display in the customer portal
• Customer WP Profile Update doesn't Reflect in Fluent Support Customer Profile
• WooCommerce Multi Currency Issue (Pro)
• WooCommerce Draft Product Display in Custom Fields (Pro)
```

:::

## Fluent Support v1.5.5

*Released on March 2, 2022*

::: code-group

```markdown [✨ Newly Added]
• GDPR compliance and WordPress Data-Export API
• Today's stats of tickets
• Attachment support in the email notification
• Ticket moving feature from one mailbox to another
• Whatsapp integration via Twilio (Pro)
• Outgoing Webhook Integration in the workflow (Pro)
• Agents report filtering by a specific agent (Pro)
• Today's stats of tickets (Pro)
• Send notification to 3rd party integrated notification system on agent assign (Pro)
• Ticket moving feature from one mailbox to another (Pro)
```

```markdown [🐞 Bug fixes]
• Conflict while creating a ticket from agent-end in some specific servers
• Ticket created email notification not sending when creating a ticket via incoming webhook (Pro)
```

:::

## Fluent Support v1.5.4

*Released on January 19, 2022*

::: code-group

```markdown [✨ Newly Added]
• Email notification on ticket assign
• Ticket priority selection in Fluent Forms integration
• Customer profile picture changing the option in agent area
• Customer registration on ticket creation from agent area
• WordPress user registration on ticket creation from agent area
• Plugin PHP API
• Ticket customer changing option from the agent dashboard
• Missing translations
• Ticket advanced filtering (Pro)
• Custom fields on Telegram integration (Pro)
• Incoming Webhook (Pro)
• Missing translations (Pro)
```

```markdown [🚀 Improvements]
• Authentication Improvements
```

```markdown [🐞 Bug fixes]
• Attachment issue
• Email notification not sent to the customer when an agent replies to a ticket
• Issues related to email piping (Pro)
• Email footer not sending to email notification (Pro)
• Discord Notification issues (Pro)
• Custom fields not saving when creating a ticket from the agent dashboard (Pro)
```

:::

## Fluent Support v1.5.3

*Released on November 22, 2021*

::: code-group

```markdown [✨ Newly Added]
• Support for Non-Latin chars
• Customer Delete Feature
```

```markdown [🐞 Bug fixes]
• Preview text issue
```

:::

## Fluent Support v1.5.2

*Released on November 17, 2021*

::: code-group

```markdown [🐞 Bug fixes]
• File upload bug issue
• Ticket priority display issue
```

:::

## Fluent Support v1.5.1

*Released on November 16, 2021*

::: code-group

```markdown [🐞 Bug fixes]
• Registration shortcode
```

:::

## Fluent Support v1.5.0

*Released on November 16, 2021*

::: code-group

```markdown [✨ Newly Added]
• The final release for the public launch
```

```markdown [🚀 Improvements]
• Save notifications
• Enforcing hook names convention
```

:::

## Fluent Support v1.4.6

*Released on November 15, 2021*

::: code-group

```markdown [✨ Newly Added]
• Signup and Login Form
• Fully Translation Ready
```

```markdown [🚀 Improvements]
• UI & UX Improvements
```

:::

## Fluent Support v1.4.2

*Released on November 14, 2021*

::: code-group

```markdown [🚀 Improvements]
• UI Improvements
```

```markdown [🐞 Bug fixes]
• Data Syncing Issue
```

:::

## Fluent Support v1.4.1

*Released on November 13, 2021*

::: code-group

```markdown [✨ Newly Added]
• Deep integration with FluentCRM
```

```markdown [🚀 Improvements]
• UI Improvements
```

```markdown [🐞 Bug fixes]
• Remove Fluent Forms Dependencies
```

:::

## Fluent Support v1.4.0

*Released on November 12, 2021*

::: code-group

```markdown [🎉 Initial Release]
• Hello World!
• The first release of Fluent Support is here!
```

:::
