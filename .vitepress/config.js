import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fluent Support',
  description: 'Complete documentation for Fluent Support - WordPress Support Ticket System',
  
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/guide/public/images/brand/fluentsupport_primary_icon.png' }],
    ['meta', { name: 'theme-color', content: '#15BE7C' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Fluent Support | Documentation' }],
    ['meta', { property: 'og:site_name', content: 'Fluent Support' }],
  ],

  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/guide/public/images/brand/fluentsupport_primary_logo.png',
      dark: '/guide/public/images/brand/fluentsupport_secondary_logo.png'
    },
    
    nav: [
      { text: 'User Docs', link: '/guide/getting-started/how-to-install-activate-fluent-support' },
      { text: 'Dev Docs', link: 'https://developers.fluentsupport.com/' },
      { text: 'Changelog', link: '/guide/changelog/change-log' },
      { text: 'Website', link: 'https://fluentsupport.com/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Install Fluent Support', link: '/guide/getting-started/how-to-install-activate-fluent-support' },
          { text: 'Install Fluent Support Pro', link: '/guide/getting-started/upgrade-to-fluent-support-pro-add-on' },
          { text: 'Fluent Support Onboarding', link: '/guide/getting-started/fluent-support-onboarding' },
          { text: 'Fluent Support Glossary', link: '/guide/getting-started/fluent-support-glossary' },
          { text: 'Dasboard Overview', link: '/guide/getting-started/dashboard-overview' },
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
              { text: 'Business Inbox', link: '/guide/setup-configuration/business-inbox' },
              { text: 'Adding Business Inboxes', link: '/guide/setup-configuration/adding-multiple-business-inboxes' },
              { text: 'Web Only Settings', link: '/guide/setup-configuration/web-based-settings-in-business-inbox' },
              { text: 'Web & Email Settings', link: '/guide/setup-configuration/web-and-email-settings-in-business-inbox' },
              { text: 'Products for Categories', link: '/guide/setup-configuration/creating-products-to-categorize-tickets' },
            ]
          },
          {
            text: 'Agents & Permissions',
            collapsed: true,
            items: [
              { text: 'Add Support Agents', link: '/guide/setup-configuration/adding-support-staff-agents' },
              { text: 'Agent Permissions', link: '/guide/setup-configuration/permission-management-for-agent' },
            ]
          },
          {
            text: 'Customer Portal',
            collapsed: true,
            items: [
              { text: 'Portal Settings', link: '/guide/setup-configuration/customer-support-portal-setup' },
              { text: 'Portal Dashboard', link: '/guide/setup-configuration/customer-support-portal-dashboard' },
              { text: 'Gutenberg Blocks', link: '/guide/setup-configuration/add-and-customize-customer-portal-using-gutenberg-block' },
            ]
          },
          {
            text: 'Ticket Forms & Fields',
            collapsed: true,
            items: [
              { text: 'Custom Submission Forms', link: '/guide/setup-configuration/add-custom-ticket-submission-form' },
              { text: 'Customize Forms', link: '/guide/setup-configuration/ticket-form-customization' },
              { text: 'Custom Fields', link: '/guide/setup-configuration/conditional-custom-fields' },
              { text: 'File Attachments', link: '/guide/setup-configuration/attachment-regulation' },
              { text: 'Additional Attachment Types', link: '/guide/setup-configuration/add-more-attachment-type' },
              { text: 'File Upload Services', link: '/guide/setup-configuration/file-upload-integrations' },
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
              { text: 'View & Manage Tickets', link: '/guide/ticket-management/view-manage-ticket-entries' },
              { text: 'Create for Customers', link: '/guide/ticket-management/creating-ticket-on-behalf-of-customer' },
              { text: 'Saved Replies', link: '/guide/ticket-management/templated-saved-replies' },
              { text: 'Internal Notes', link: '/guide/ticket-management/internal-notes' },
              { text: 'Custom Tags', link: '/guide/ticket-management/ticket-tags' },
              { text: 'My Tickets', link: '/guide/ticket-management/agent-specific-tickets' },
            ]
          },
          {
            text: 'Search & Filter',
            collapsed: true,
            items: [
              { text: 'Filter, Sort & Search', link: '/guide/ticket-management/filtering-sorting-searching-tickets' },
              { text: 'Advanced Filters', link: '/guide/ticket-management/advanced-filter-fluent-support' },
              { text: 'Save Searches', link: '/guide/ticket-management/advanced-filter-save-search-feature' },
            ]
          },
          {
            text: 'Productivity Tools',
            collapsed: true,
            items: [
              { text: 'Bulk Actions', link: '/guide/ticket-management/bulk-action-in-tickets' },
              { text: 'Merge Tickets', link: '/guide/ticket-management/merge-tickets' },
              { text: 'Split Replies', link: '/guide/ticket-management/split-reply-in-new-tickets' },
              { text: 'Bookmark Tickets', link: '/guide/ticket-management/bookmark-tickets' },
              { text: 'Agent Time Tracking', link: '/guide/ticket-management/agent-time-tracking' },
              { text: 'Keyboard Shortcuts', link: '/guide/ticket-management/navigate-with-keyboard-shortcut' },
              { text: 'Frontend Agent Portal', link: '/guide/ticket-management/forntend-agent-portal' },
            ]
          },
          {
            text: 'Automation in Tickets',
            collapsed: true,
            items: [
              { text: 'Auto-Close Tickets', link: '/guide/ticket-management/automatic-ticket-closing' },
              { text: 'Close Silently', link: '/guide/ticket-management/close-ticket-silently' },
              { text: 'Outgoing Webhooks', link: '/guide/ticket-management/outgoing-webhook' },
              { text: 'Shortcodes', link: '/guide/ticket-management/shortcodes' },
            ]
          },
        ]
      },
      {
        text: 'Email & Notifications',
        collapsed: true,
        items: [
          { text: 'Email Notifications', link: '/guide/email-notifications/managing-email-notifications' },
          { text: 'Email Piping Setup', link: '/guide/email-notifications/email-piping-email-based-support-ticket' },
          { text: 'Google Workspace Forward', link: '/guide/email-notifications/auto-forward-from-gsuite' },
          { text: 'Microsoft 365 Forward', link: '/guide/email-notifications/forward-from-microsoft365-owa' },
          { text: 'Lambda Service', link: '/guide/email-notifications/changing-amazon-lambda-settings' },
        ]
      },
      {
        text: 'Workflows & Automation',
        collapsed: true,
        items: [
          { text: 'Workflows Overview', link: '/guide/workflows-automation/workflows-automations' },
          { text: 'Manual Workflows', link: '/guide/workflows-automation/manual-workflow' },
          { text: 'Automatic Workflows', link: '/guide/workflows-automation/automatic-workflow' },
        ]
      },
      {
        text: 'Reports & Analytics',
        collapsed: true,
        items: [
          { text: 'Reports & Statistics', link: '/guide/reports-analytics/reports-and-stats' },
          { text: 'Personal Reports', link: '/guide/reports-analytics/personal-report' },
          { text: 'Agents Reports', link: '/guide/reports-analytics/agents-report' },
          { text: 'Products Reports', link: '/guide/reports-analytics/products-reports' },
          { text: 'Overall Activities', link: '/guide/reports-analytics/overall-activities' },
          { text: 'Dynamic Dashboard', link: '/guide/reports-analytics/dynamic-dashboard' },
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
              { text: 'Slack', link: '/guide/integrations/managing-tickets-using-slack' },
              { text: 'Telegram', link: '/guide/integrations/managing-tickets-using-telegram' },
              { text: 'Discord', link: '/guide/integrations/managing-tickets-using-discord' },
              { text: 'WhatsApp', link: '/guide/integrations/managing-tickets-using-whatsapp' },
            ]
          },
          {
            text: 'Core Integrations',
            collapsed: true,
            items: [
              { text: 'FluentCRM', link: '/guide/integrations/fluentcrm-integration' },
              { text: 'WooCommerce', link: '/guide/integrations/woocommerce-integration' },
              { text: 'Easy Digital Downloads', link: '/guide/integrations/edd-integration' },
              { text: 'Fluent Forms', link: '/guide/integrations/fluent-form-integration' },
              { text: 'FluentBoards', link: '/guide/integrations/fluentboards-integrations' },
              { text: 'FluentCart', link: '/guide/integrations/fluentcart-integration' },
              { text: 'FluentCommunity', link: '/guide/integrations/fluent-community-integration' },
              { text: 'SureTriggers', link: '/guide/integrations/suretriggers-integration' },
              { text: 'Incoming Webhook', link: '/guide/integrations/incoming-webhook' },
              { text: 'Integration Status', link: '/guide/integrations/integration_statuses' },
            ]
          },
          {
            text: 'Learning & Membership',
            collapsed: true,
            items: [
              { text: 'LearnDash', link: '/guide/integrations/learndash-integration' },
              { text: 'LifterLMS', link: '/guide/integrations/lifterlms-integration' },
              { text: 'Tutor LMS', link: '/guide/integrations/tutorlms-integration' },
              { text: 'LearnPress', link: '/guide/integrations/learnpress-integration' },
              { text: 'BuddyBoss', link: '/guide/integrations/buddyboss-integration' },
              { text: 'MemberPress', link: '/guide/integrations/memberpress-integration' },
              { text: 'Paid Memberships Pro', link: '/guide/integrations/paid-membership-pro-integration' },
              { text: 'Restrict Content Pro', link: '/guide/integrations/restrict-content-pro-integration' },
              { text: 'WishList Member', link: '/guide/integrations/wishlist-member-integration' },
            ]
          },
          {
            text: 'Other',
        collapsed: true,
        items: [
              { text: 'BetterDocs', link: '/guide/integrations/betterdocs-integration' },
              { text: 'Google reCAPTCHA', link: '/guide/integrations/google-recaptcha-integration' },
              { text: 'Google Drive', link: '/guide/integrations/google-drive-integration' },
              { text: 'Dropbox', link: '/guide/integrations/dropbox-integration' },
            ]
          },
        ]
      },
      {
        text: 'AI Assistance',
        collapsed: true,
        items: [
          { text: 'OpenAI Setup', link: '/guide/ai-assistance/openai-integration-with-fluent-support' },
          { text: 'OpenAI Features', link: '/guide/ai-assistance/features-of-openai-integration' },
        ]
      },
      {
        text: 'Migration',
        collapsed: true,
        items: [
          { text: 'Ticket Importer', link: '/guide/migration/ticket-importer' },
          { text: 'HelpScout', link: '/guide/migration/helpscout-ticket-migrator' },
          { text: 'Freshdesk', link: '/guide/migration/freshdesk-ticket-migrator' },
          { text: 'Zendesk', link: '/guide/migration/zendesk-ticket-migrator' },
        ]
      },
      {
        text: 'Troubleshooting & Support',
        collapsed: true,
        items: [
          { text: 'Common Issues & FAQs', link: '/guide/troubleshooting-support/common-issues-faqs' },
          { text: 'How to Get Support', link: '/guide/troubleshooting-support/how-to-get-support' },
        ]
      },
      {
        text: 'Changelog',
        collapsed: true,
        items: [
          { text: 'Change Log', link: '/guide/changelog/change-log' },
        ]
      },
    ],

    socialLinks: [],

    search: {
      provider: 'local'
    },

    footer: {
      copyright: 'Copyright © 2025 Fluent Support'
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

  // Vite configuration
  vite: {
    publicDir: './guide',
    server: {
      fs: {
        allow: ['..']
      }
    }
  },

  // Clean URLs
  cleanUrls: true,

  // Sitemap
  sitemap: {
    hostname: 'https://fluentsupport.com'
  }
})
