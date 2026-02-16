import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fluent Support',
  description: 'Complete documentation for Fluent Support - WordPress Support Ticket System',
  
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/brand/fluentsupport_primary_icon.png' }],
    ['meta', { name: 'theme-color', content: '#15BE7C' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Fluent Support | Documentation' }],
    ['meta', { property: 'og:site_name', content: 'Fluent Support' }],
  ],

  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/images/brand/fluentsupport_primary_logo.png',
      dark: '/images/brand/fluentsupport_secondary_logo.png'
    },

    nav: [
      { text: 'User Docs', link: '/docs/how-to-install-activate-fluent-support' },
      { text: 'Dev Docs', link: 'https://developers.fluentsupport.com/' },
      { text: 'Changelog', link: '/docs/change-log' },
      { text: 'Website', link: 'https://fluentsupport.com/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Install Fluent Support', link: '/docs/how-to-install-activate-fluent-support' },
          { text: 'Install Fluent Support Pro', link: '/docs/upgrade-to-fluent-support-pro-add-on' },
          { text: 'Fluent Support Onboarding', link: '/docs/fluent-support-onboarding' },
          { text: 'Fluent Support Glossary', link: '/docs/fluent-support-glossary' },
          { text: 'Dasboard Overview', link: '/docs/dashboard-overview' },
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
              { text: 'Business Inbox', link: '/docs/business-inbox' },
              { text: 'Adding Business Inboxes', link: '/docs/adding-multiple-business-inboxes' },
              { text: 'Web Only Settings', link: '/docs/web-based-settings-in-business-inbox' },
              { text: 'Web & Email Settings', link: '/docs/web-and-email-settings-in-business-inbox' },
              { text: 'Email Piping Setup', link: '/docs/email-piping-email-based-support-ticket' },
              { text: 'Products for Categories', link: '/docs/creating-products-to-categorize-tickets' },
            ]
          },
          {
            text: 'Agents & Permissions',
            collapsed: true,
            items: [
              { text: 'Add Support Agents', link: '/docs/adding-support-staff-agents' },
              { text: 'Agent Permissions', link: '/docs/permission-management-for-agent' },
            ]
          },
          {
            text: 'Customer Portal',
            collapsed: true,
            items: [
              { text: 'Portal Settings', link: '/docs/customer-support-portal-setup' },
              { text: 'Portal Dashboard', link: '/docs/customer-support-portal-dashboard' },
              { text: 'Gutenberg Blocks', link: '/docs/add-and-customize-customer-portal-using-gutenberg-block' },
            ]
          },
          {
            text: 'Ticket Forms & Fields',
            collapsed: true,
            items: [
              { text: 'Customize Forms', link: '/docs/ticket-form-customization' },
              { text: 'Custom Fields', link: '/docs/conditional-custom-fields' },
              { text: 'File Attachments', link: '/docs/attachment-regulation' },
              { text: 'Additional Attachment Types', link: '/docs/add-more-attachment-type' },
              { text: 'File Upload Services', link: '/docs/file-upload-integrations' },
              { text: 'Custom Submission Forms', link: '/docs/add-custom-ticket-submission-form' },
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
              { text: 'View & Manage Tickets', link: '/docs/view-manage-ticket-entries' },
              { text: 'Create for Customers', link: '/docs/creating-ticket-on-behalf-of-customer' },
              { text: 'Saved Replies', link: '/docs/templated-saved-replies' },
              { text: 'Internal Notes', link: '/docs/internal-notes' },
              { text: 'Custom Tags', link: '/docs/ticket-tags' },
              { text: 'My Tickets', link: '/docs/agent-specific-tickets' },
              { text: 'Ticket Display Settings', link: '/docs/ticket-display-settings' },
            ]
          },
          {
            text: 'Search & Filter',
            collapsed: true,
            items: [
              { text: 'Filter, Sort & Search', link: '/docs/filtering-sorting-searching-tickets' },
              { text: 'Advanced Filters', link: '/docs/advanced-filter-fluent-support' },
              { text: 'Save Searches', link: '/docs/advanced-filter-save-search-feature' },
            ]
          },
          {
            text: 'Productivity Tools',
            collapsed: true,
            items: [
              { text: 'Bulk Actions', link: '/docs/bulk-action-in-tickets' },
              { text: 'Merge Tickets', link: '/docs/merge-tickets' },
              { text: 'Split Replies', link: '/docs/split-reply-in-new-tickets' },
              { text: 'Bookmark Tickets', link: '/docs/bookmark-tickets' },
              { text: 'Agent Time Tracking', link: '/docs/agent-time-tracking' },
              { text: 'Keyboard Shortcuts', link: '/docs/navigate-with-keyboard-shortcut' },
              { text: 'Frontend Agent Portal', link: '/docs/forntend-agent-portal' },
            ]
          },
          {
            text: 'Automation in Tickets',
            collapsed: true,
            items: [
              { text: 'Auto-Close Tickets', link: '/docs/automatic-ticket-closing' },
              { text: 'Close Silently', link: '/docs/close-ticket-silently' },
              { text: 'Outgoing Webhooks', link: '/docs/outgoing-webhook' },
              { text: 'Shortcodes', link: '/docs/shortcodes' },
            ]
          },
        ]
      },
      {
        text: 'Email & Notifications',
        collapsed: true,
        items: [
          { text: 'Email Notifications', link: '/docs/managing-email-notifications' },
          { text: 'Google Workspace Forward', link: '/docs/auto-forward-from-gsuite' },
          { text: 'Microsoft 365 Forward', link: '/docs/forward-from-microsoft365-owa' },
          { text: 'Lambda Service', link: '/docs/changing-amazon-lambda-settings' },
        ]
      },
      {
        text: 'Workflows & Automation',
        collapsed: true,
        items: [
          { text: 'Workflows Overview', link: '/docs/workflows-automations' },
          { text: 'Manual Workflows', link: '/docs/manual-workflow' },
          { text: 'Automatic Workflows', link: '/docs/automatic-workflow' },
        ]
      },
      {
        text: 'Reports & Analytics',
        collapsed: true,
        items: [
          {
            text: 'Reports & Statistics Overview',
            link: '/docs/reports-and-stats',
            collapsed: true,
            items: [
              { text: 'Personal Reports', link: '/docs/personal-report' },
              { text: 'Agents Reports', link: '/docs/agents-report' },
              { text: 'Products Reports', link: '/docs/products-reports' },
              { text: 'Business Boxes Reports', link: '/docs/business-boxes-reports' },
              { text: 'Activity Reports', link: '/docs/activity-reports' },
              { text: 'Time Sheet', link: '/docs/time-sheet' },
            ]
          },
          { text: 'Overall Activities', link: '/docs/overall-activities' },
          { text: 'Dynamic Dashboard', link: '/docs/dynamic-dashboard' },

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
              { text: 'Slack', link: '/docs/managing-tickets-using-slack' },
              { text: 'Telegram', link: '/docs/managing-tickets-using-telegram' },
              { text: 'Discord', link: '/docs/managing-tickets-using-discord' },
              { text: 'WhatsApp', link: '/docs/managing-tickets-using-whatsapp' },
            ]
          },
          {
            text: 'Core Integrations',
            collapsed: true,
            items: [
              { text: 'FluentCRM', link: '/docs/fluentcrm-integration' },
              { text: 'WooCommerce', link: '/docs/woocommerce-integration' },
              { text: 'Easy Digital Downloads', link: '/docs/edd-integration' },
              { text: 'Fluent Forms', link: '/docs/fluent-form-integration' },
              { text: 'FluentBoards', link: '/docs/fluentboards-integrations' },
              { text: 'FluentCart', link: '/docs/fluentcart-integration' },
              { text: 'FluentCommunity', link: '/docs/fluent-community-integration' },
              { text: 'SureTriggers', link: '/docs/suretriggers-integration' },
              { text: 'Incoming Webhook', link: '/docs/incoming-webhook' },
              { text: 'Integration Status', link: '/docs/integration_statuses' },
            ]
          },
          {
            text: 'Learning & Membership',
            collapsed: true,
            items: [
              { text: 'LearnDash', link: '/docs/learndash-integration' },
              { text: 'LifterLMS', link: '/docs/lifterlms-integration' },
              { text: 'Tutor LMS', link: '/docs/tutorlms-integration' },
              { text: 'LearnPress', link: '/docs/learnpress-integration' },
              { text: 'BuddyBoss', link: '/docs/buddyboss-integration' },
              { text: 'MemberPress', link: '/docs/memberpress-integration' },
              { text: 'Paid Memberships Pro', link: '/docs/paid-membership-pro-integration' },
              { text: 'Restrict Content Pro', link: '/docs/restrict-content-pro-integration' },
              { text: 'WishList Member', link: '/docs/wishlist-member-integration' },
            ]
          },
          {
            text: 'Other',
        collapsed: true,
        items: [
              { text: 'BetterDocs', link: '/docs/betterdocs-integration' },
              { text: 'Google reCAPTCHA', link: '/docs/google-recaptcha-integration' },
              { text: 'Google Drive', link: '/docs/google-drive-integration' },
              { text: 'Dropbox', link: '/docs/dropbox-integration' },
            ]
          },
        ]
      },
      {
        text: 'AI Assistance',
        collapsed: true,
        items: [
          { text: 'OpenAI Setup', link: '/docs/openai-integration-with-fluent-support' },
          { text: 'OpenAI Features', link: '/docs/features-of-openai-integration' },
        ]
      },
      {
        text: 'Migration',
        collapsed: true,
        items: [
          { text: 'Ticket Importer', link: '/docs/ticket-importer' },
          { text: 'HelpScout', link: '/docs/helpscout-ticket-migrator' },
          { text: 'Freshdesk', link: '/docs/freshdesk-ticket-migrator' },
          { text: 'Zendesk', link: '/docs/zendesk-ticket-migrator' },
        ]
      },
      {
        text: 'Troubleshooting & Support',
        collapsed: true,
        items: [
          { text: 'Common Issues & FAQs', link: '/docs/common-issues-faqs' },
          { text: 'How to Get Support', link: '/docs/how-to-get-support' },
        ]
      },
      {
        text: 'Changelog',
        collapsed: true,
        items: [
          { text: 'Change Log', link: '/docs/change-log' },
        ]
      },
    ],

    socialLinks: [],

    search: {
      provider: 'local'
    },

    footer: {
      copyright: 'Copyright © 2026 Fluent Support'
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
  srcExclude: ['README.md', 'LICENSE', 'CONTRIBUTING.md', '.github/**'],
  outDir: './.vitepress/dist',
  cacheDir: './.vitepress/cache',

  // Vite configuration
  vite: {
    publicDir: './docs/public',
    server: {
      fs: {
        allow: ['..']
      }
    }
  },

  // Clean URLs
  cleanUrls: true,

  // Rewrites: hide section in URL so only slug shows (e.g. /docs/how-to-install-activate-fluent-support)
  rewrites: {
    'docs/:section/:slug': 'docs/:slug'
  },

  // Sitemap
  sitemap: {
    hostname: 'https://docs.fluentsupport.com'
  }
})
