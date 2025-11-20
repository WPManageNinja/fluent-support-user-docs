import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fluent Support',
  description: 'Complete documentation for Fluent Support - WordPress Support Ticket System',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Fluent Support | Documentation' }],
    ['meta', { property: 'og:site_name', content: 'Fluent Support' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guide/getting-started/how-to-install-activate-fluent-support' },
      { text: 'Integrations', link: '/guide/integrations-channels/core-integrations/woocommerce-integration' },
      { text: 'Changelog', link: '/guide/changelog/change-log' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Install Fluent Support', link: '/guide/getting-started/how-to-install-activate-fluent-support' },
          { text: 'Install Fluent Support Pro', link: '/guide/getting-started/upgrade-to-fluent-support-pro-add-on' },
          { text: 'Deactivate or Delete Fluent Support', link: '/guide/getting-started/how-to-deactivate-or-delete-the-fluent-support' },
        ]
      },
      {
        text: 'Setup & Configuration',
        collapsed: true,
        items: [
          {
            text: 'Business Inboxes',
            collapsed: true,
            items: [
              { text: 'Create Your First Business Inbox', link: '/guide/setup-configuration/business-inboxes/create-business-inbox-initially' },
              { text: 'Add Multiple Business Inboxes', link: '/guide/setup-configuration/business-inboxes/adding-multiple-business-inboxes' },
              { text: 'Configure Inbox Settings (Web Only)', link: '/guide/setup-configuration/business-inboxes/web-based-settings-in-business-inbox' },
              { text: 'Configure Inbox Settings (Web + Email)', link: '/guide/setup-configuration/business-inboxes/web-and-email-settings-in-business-inbox' },
              { text: 'Create Products for Ticket Categories', link: '/guide/setup-configuration/business-inboxes/creating-products-to-categorize-tickets' },
            ]
          },
          {
            text: 'Agents & Permissions',
            collapsed: true,
            items: [
              { text: 'Add Support Agents', link: '/guide/setup-configuration/agents-permissions/adding-support-staff-agents' },
              { text: 'Manage Agent Permissions', link: '/guide/setup-configuration/agents-permissions/permission-management-for-agent' },
            ]
          },
          {
            text: 'Customer Portal',
            collapsed: true,
            items: [
              { text: 'Configure Global Portal Settings', link: '/guide/setup-configuration/customer-portal/customer-support-portal-setup' },
              { text: 'Customer Portal Dashboard', link: '/guide/setup-configuration/customer-portal/customer-support-portal-dashboard' },
              { text: 'Customize Portal with Gutenberg Blocks', link: '/guide/setup-configuration/customer-portal/add-and-customize-customer-portal-using-gutenberg-block' },
            ]
          },
          {
            text: 'Ticket Forms & Fields',
            collapsed: true,
            items: [
              { text: 'Create Custom Submission Forms', link: '/guide/setup-configuration/ticket-forms-fields/add-custom-ticket-submission-form' },
              { text: 'Customize Ticket Forms', link: '/guide/setup-configuration/ticket-forms-fields/ticket-form-customization' },
              { text: 'Add Custom Fields', link: '/guide/setup-configuration/ticket-forms-fields/conditional-custom-fields' },
              { text: 'Manage File Attachments & Uploads', link: '/guide/setup-configuration/ticket-forms-fields/attachment-regulation' },
              { text: 'Allow Additional Attachment Types', link: '/guide/setup-configuration/ticket-forms-fields/add-more-attachment-type' },
              { text: 'Integrate File Upload Services', link: '/guide/setup-configuration/ticket-forms-fields/file-upload-integrations' },
            ]
          },
        ]
      },
      {
        text: 'Ticket Management',
        collapsed: true,
        items: [
          {
            text: 'Daily Operations',
            collapsed: true,
            items: [
              { text: 'View & Manage Tickets', link: '/guide/ticket-management/daily-operations/view-manage-ticket-entries' },
              { text: 'Create Tickets for Customers', link: '/guide/ticket-management/daily-operations/creating-ticket-on-behalf-of-customer' },
              { text: 'Use Saved Replies', link: '/guide/ticket-management/daily-operations/templated-saved-replies' },
              { text: 'Add Internal Notes', link: '/guide/ticket-management/daily-operations/internal-notes' },
              { text: 'Apply Custom Tags', link: '/guide/ticket-management/daily-operations/ticket-tags' },
              { text: 'My Tickets View', link: '/guide/ticket-management/daily-operations/agent-specific-tickets' },
            ]
          },
          {
            text: 'Search & Filter',
            collapsed: true,
            items: [
              { text: 'Filter, Sort & Search Tickets', link: '/guide/ticket-management/search-filter/filtering-sorting-searching-tickets' },
              { text: 'Use Advanced Filters', link: '/guide/ticket-management/search-filter/advanced-filter-fluent-support' },
              { text: 'Save Filter Searches', link: '/guide/ticket-management/search-filter/advanced-filter-save-search-feature' },
            ]
          },
          {
            text: 'Productivity Tools',
            collapsed: true,
            items: [
              { text: 'Perform Bulk Actions', link: '/guide/ticket-management/productivity-tools/bulk-action-in-tickets' },
              { text: 'Merge Tickets', link: '/guide/ticket-management/productivity-tools/merge-tickets' },
              { text: 'Split Replies into New Tickets', link: '/guide/ticket-management/productivity-tools/split-reply-in-new-tickets' },
              { text: 'Bookmark Tickets', link: '/guide/ticket-management/productivity-tools/bookmark-tickets' },
              { text: 'Track Agent Time', link: '/guide/ticket-management/productivity-tools/agent-time-tracking' },
              { text: 'Use Keyboard Shortcuts', link: '/guide/ticket-management/productivity-tools/navigate-with-keyboard-shortcut' },
              { text: 'Frontend Agent Portal', link: '/guide/ticket-management/productivity-tools/forntend-agent-portal' },
            ]
          },
          {
            text: 'Automation in Tickets',
            collapsed: true,
            items: [
              { text: 'Close Tickets Automatically', link: '/guide/ticket-management/automation-in-tickets/automatic-ticket-closing' },
              { text: 'Close Tickets Silently', link: '/guide/ticket-management/automation-in-tickets/close-ticket-silently' },
              { text: 'Send Outgoing Webhooks', link: '/guide/ticket-management/automation-in-tickets/outgoing-webhook' },
              { text: 'Use Shortcodes', link: '/guide/ticket-management/automation-in-tickets/shortcodes' },
            ]
          },
        ]
      },
      {
        text: 'Email & Notifications',
        collapsed: true,
        items: [
          { text: 'Manage Email Notifications', link: '/guide/email-notifications/managing-email-notifications' },
          { text: 'Set Up Email Piping', link: '/guide/email-notifications/email-piping-email-based-support-ticket' },
          { text: 'Auto-Forward from Google Workspace', link: '/guide/email-notifications/auto-forward-from-gsuite' },
          { text: 'Forward from Microsoft 365 / Outlook', link: '/guide/email-notifications/forward-from-microsoft365-owa' },
          { text: 'Switch Lambda Service for Email Piping', link: '/guide/email-notifications/changing-amazon-lambda-settings' },
        ]
      },
      {
        text: 'Workflows & Automation',
        collapsed: true,
        items: [
          { text: 'Workflows Overview', link: '/guide/workflows-automation/workflows-automations' },
          { text: 'Create Manual Workflows', link: '/guide/workflows-automation/manual-workflow' },
          { text: 'Create Automatic Workflows', link: '/guide/workflows-automation/automatic-workflow' },
        ]
      },
      {
        text: 'Reports & Analytics',
        collapsed: true,
        items: [
          { text: 'Dashboard Overview', link: '/guide/reports-analytics/dashboard-overview' },
          { text: 'View Reports & Statistics', link: '/guide/reports-analytics/reports-and-stats' },
          { text: 'See Overall Activities', link: '/guide/reports-analytics/overall-activities' },
          { text: 'Use Dynamic Dashboard Widgets', link: '/guide/reports-analytics/dynamic-dashboard' },
        ]
      },
      {
        text: 'Integrations & Channels',
        collapsed: true,
        items: [
          {
            text: 'Messaging Apps',
            collapsed: true,
            items: [
              { text: 'Manage Tickets via Slack', link: '/guide/integrations-channels/messaging-apps/managing-tickets-using-slack' },
              { text: 'Manage Tickets via Telegram', link: '/guide/integrations-channels/messaging-apps/managing-tickets-using-telegram' },
              { text: 'Manage Tickets via Discord', link: '/guide/integrations-channels/messaging-apps/managing-tickets-using-discord' },
              { text: 'Manage Tickets via WhatsApp', link: '/guide/integrations-channels/messaging-apps/managing-tickets-using-whatsapp' },
            ]
          },
          {
            text: 'Core Integrations',
            collapsed: true,
            items: [
              { text: 'FluentCRM', link: '/guide/integrations-channels/core-integrations/fluentcrm-integration' },
              { text: 'WooCommerce', link: '/guide/integrations-channels/core-integrations/woocommerce-integration' },
              { text: 'Easy Digital Downloads', link: '/guide/integrations-channels/core-integrations/edd-integration' },
              { text: 'Fluent Forms', link: '/guide/integrations-channels/core-integrations/fluent-form-integration' },
              { text: 'FluentBoards', link: '/guide/integrations-channels/core-integrations/fluentboards-integrations' },
              { text: 'FluentCart', link: '/guide/integrations-channels/core-integrations/fluentcart-integration' },
              { text: 'FluentCommunity', link: '/guide/integrations-channels/core-integrations/fluent-community-integration' },
              { text: 'SureTriggers', link: '/guide/integrations-channels/core-integrations/suretriggers-integration' },
              { text: 'Incoming Webhook', link: '/guide/integrations-channels/core-integrations/incoming-webhook' },
              { text: 'Integration Status Page', link: '/guide/integrations-channels/core-integrations/integration_statuses' },
            ]
          },
          {
            text: 'Learning & Membership',
            collapsed: true,
            items: [
              { text: 'LearnDash', link: '/guide/integrations-channels/learning-membership/learndash-integration' },
              { text: 'LifterLMS', link: '/guide/integrations-channels/learning-membership/lifterlms-integration' },
              { text: 'Tutor LMS', link: '/guide/integrations-channels/learning-membership/tutorlms-integration' },
              { text: 'LearnPress', link: '/guide/integrations-channels/learning-membership/learnpress-integration' },
              { text: 'BuddyBoss', link: '/guide/integrations-channels/learning-membership/buddyboss-integration' },
              { text: 'MemberPress', link: '/guide/integrations-channels/learning-membership/memberpress-integration' },
              { text: 'Paid Memberships Pro', link: '/guide/integrations-channels/learning-membership/paid-membership-pro-integration' },
              { text: 'Restrict Content Pro', link: '/guide/integrations-channels/learning-membership/restrict-content-pro-integration' },
              { text: 'WishList Member', link: '/guide/integrations-channels/learning-membership/wishlist-member-integration' },
            ]
          },
          {
            text: 'Other',
            collapsed: true,
            items: [
              { text: 'BetterDocs', link: '/guide/integrations-channels/other/betterdocs-integration' },
              { text: 'Google reCAPTCHA', link: '/guide/integrations-channels/other/google-recaptcha-integration' },
              { text: 'Google Drive', link: '/guide/integrations-channels/other/google-drive-integration' },
              { text: 'Dropbox', link: '/guide/integrations-channels/other/dropbox-integration' },
            ]
          },
        ]
      },
      {
        text: 'AI Assistance',
        collapsed: true,
        items: [
          { text: 'Enable OpenAI Integration', link: '/guide/ai-assistance/openai-integration-with-fluent-support' },
          { text: 'OpenAI Features & Usage', link: '/guide/ai-assistance/features-of-openai-integration' },
        ]
      },
      {
        text: 'Migration',
        collapsed: true,
        items: [
          { text: 'General Ticket Importer', link: '/guide/migration/ticket-importer' },
          { text: 'Migrate from HelpScout', link: '/guide/migration/helpscout-ticket-migrator' },
          { text: 'Migrate from Freshdesk', link: '/guide/migration/freshdesk-ticket-migrator' },
          { text: 'Migrate from Zendesk', link: '/guide/migration/zendesk-ticket-migrator' },
        ]
      },
      {
        text: 'Changelog',
        collapsed: true,
        items: [
          { text: 'Version History', link: '/guide/changelog/change-log' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fluentsupport' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Fluent Support'
    },

    editLink: {
      pattern: 'https://github.com/fluentsupport/fluent-support-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },

  // Markdown configuration
  markdown: {
    lineNumbers: false,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // Build configuration
  srcDir: './',
  outDir: './.vitepress/dist',
  cacheDir: './.vitepress/cache',

  // Clean URLs
  cleanUrls: true,

  // Last updated timestamp
  lastUpdated: true,

  // Sitemap
  sitemap: {
    hostname: 'https://fluentsupport.com'
  }
})
