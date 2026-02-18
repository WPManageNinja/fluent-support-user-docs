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
      { text: 'User Docs', link: '/how-to-install-activate-fluent-support' },
      { text: 'Dev Docs', link: 'https://developers.fluentsupport.com/' },
      { text: 'Changelog', link: '/change-log' },
      { text: 'Website', link: 'https://fluentsupport.com/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Install Fluent Support', link: '/how-to-install-activate-fluent-support' },
          { text: 'Install Fluent Support Pro', link: '/upgrade-to-fluent-support-pro-add-on' },
          { text: 'Fluent Support Onboarding', link: '/fluent-support-onboarding' },
          { text: 'Fluent Support Glossary', link: '/fluent-support-glossary' },
          { text: 'Dasboard Overview', link: '/dashboard-overview' },
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
              { text: 'Business Inbox', link: '/business-inbox' },
              { text: 'Adding Business Inboxes', link: '/adding-multiple-business-inboxes' },
              { text: 'Web Only Settings', link: '/web-based_settings_in_business_inbox' },
              { text: 'Web & Email Settings', link: '/web-and-email-settings-in-business-inbox' },
              { text: 'Email Piping Setup', link: '/email-piping-email-based-support-ticket' },
              { text: 'Products for Categories', link: '/creating-ticket-categories-products' },
            ]
          },
          {
            text: 'Agents & Permissions',
            collapsed: true,
            items: [
              { text: 'Add Support Agents', link: '/adding-support-staff-agents' },
              { text: 'Agent Permissions', link: '/permission-management-for-agents' },
            ]
          },
          {
            text: 'Customer Portal',
            collapsed: true,
            items: [
              { text: 'Portal Settings', link: '/customer-support-portal-setup' },
              { text: 'Portal Dashboard', link: '/customer-support-portal-dashboard' },
              { text: 'Gutenberg Blocks', link: '/customize-your-customer-portal' },
            ]
          },
          {
            text: 'Ticket Forms & Fields',
            collapsed: true,
            items: [
              { text: 'Customize Forms', link: '/ticket-form-customization' },
              { text: 'Custom Fields', link: '/conditional-custom-fields' },
              { text: 'File Attachments', link: '/attachment-regulation' },
              { text: 'Additional Attachment Types', link: '/add-more-attachments-type' },
              { text: 'File Upload Services', link: '/file-upload-integrations' },
              { text: 'Custom Submission Forms', link: '/adding-custom-ticket-submission-form' },
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
              { text: 'View & Manage Tickets', link: '/view-manage-ticket-entries' },
              { text: 'Create for Customers', link: '/creating-ticket-on-behalf-of-customer' },
              { text: 'Saved Replies', link: '/templated-saved-replies' },
              { text: 'Internal Notes', link: '/internal-notes' },
              { text: 'Custom Tags', link: '/ticket-tags-custom-tags' },
              { text: 'My Tickets', link: '/agent-specific-tickets-my-tickets' },
              { text: 'Ticket Display Settings', link: '/ticket-display-settings' },
            ]
          },
          {
            text: 'Search & Filter',
            collapsed: true,
            items: [
              { text: 'Filter, Sort & Search', link: '/filtering-sorting-searching-tickets' },
              { text: 'Advanced Filters', link: '/advanced-filter-fluent-support' },
              { text: 'Save Searches', link: '/advanced-filter-save-search-feature' },
            ]
          },
          {
            text: 'Productivity Tools',
            collapsed: true,
            items: [
              { text: 'Bulk Actions', link: '/bulk-action-in-tickets' },
              { text: 'Merge Tickets', link: '/merge-tickets' },
              { text: 'Split Replies', link: '/split-reply-in-new-tickets' },
              { text: 'Bookmark Tickets', link: '/bookmarks' },
              { text: 'Agent Time Tracking', link: '/agent-time-tracking' },
              { text: 'Keyboard Shortcuts', link: '/navigate-with-keyboard-shortcut' },
              { text: 'Frontend Agent Portal', link: '/forntend-agent-portal' },
            ]
          },
          {
            text: 'Automation in Tickets',
            collapsed: true,
            items: [
              { text: 'Auto-Close Tickets', link: '/automatic-ticket-closing' },
              { text: 'Close Silently', link: '/close-ticket-silently' },
              { text: 'Outgoing Webhooks', link: '/outgoing-webhook' },
              { text: 'Shortcodes', link: '/shortcodes' },
            ]
          },
        ]
      },
      {
        text: 'Email & Notifications',
        collapsed: true,
        items: [
          { text: 'Email Notifications', link: '/customize-email-notifications' },
          { text: 'Google Workspace Forward', link: '/auto-forward-from-google-workspace-to-fluent-support' },
          { text: 'Microsoft 365 Forward', link: '/forward-from-microsoft-365-outlook-web-access-owa' },
          { text: 'Lambda Service', link: '/change-amazon-lambda-cloud-processing-service-for-email-piping' },
        ]
      },
      {
        text: 'Workflows & Automation',
        collapsed: true,
        items: [
          { text: 'Workflows Overview', link: '/workflows-automations' },
          { text: 'Manual Workflows', link: '/manual-workflow' },
          { text: 'Automatic Workflows', link: '/automatic-workflow' },
        ]
      },
      {
        text: 'Reports & Analytics',
        collapsed: true,
        items: [
          {
            text: 'Reports & Statistics Overview',
            link: '/reports-and-stats',
            collapsed: true,
            items: [
              { text: 'Personal Reports', link: '/personal-report' },
              { text: 'Agents Reports', link: '/agents-report' },
              { text: 'Products Reports', link: '/products-reports' },
              { text: 'Business Boxes Reports', link: '/business-boxes-reports' },
              { text: 'Activity Reports', link: '/activity-reports' },
              { text: 'Time Sheet', link: '/time-sheet' },
            ]
          },
          { text: 'Overall Activities', link: '/overall-activities' },
          { text: 'Dynamic Dashboard', link: '/dynamic-dashboard' },

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
              { text: 'Slack', link: '/managing-tickets-using-slack' },
              { text: 'Telegram', link: '/managing-tickets-using-telegram' },
              { text: 'Discord', link: '/managing-tickets-using-discord' },
              { text: 'WhatsApp', link: '/whatsapp-integration-via-twilio' },
            ]
          },
          {
            text: 'Core Integrations',
            collapsed: true,
            items: [
              { text: 'FluentCRM', link: '/fluentcrm-integration' },
              { text: 'WooCommerce', link: '/woocommerce-integration' },
              { text: 'Easy Digital Downloads', link: '/edd-integration' },
              { text: 'Fluent Forms', link: '/fluent-form-integration' },
              { text: 'FluentBoards', link: '/fluentboards-integrations' },
              { text: 'FluentCart', link: '/fluentcart-integration' },
              { text: 'FluentCommunity', link: '/fluent-community-integration' },
              { text: 'SureTriggers', link: '/suretriggers-integration' },
              { text: 'Incoming Webhook', link: '/incoming-webhook' },
              { text: 'Integration Status', link: '/integration_statuses' },
            ]
          },
          {
            text: 'Learning & Membership',
            collapsed: true,
            items: [
              { text: 'LearnDash', link: '/learndash-integration' },
              { text: 'LifterLMS', link: '/lifterlms-integration' },
              { text: 'Tutor LMS', link: '/tutorlms-integration' },
              { text: 'LearnPress', link: '/learnpress-integration' },
              { text: 'BuddyBoss', link: '/buddyboss-integration' },
              { text: 'MemberPress', link: '/memberpress-integration' },
              { text: 'Paid Memberships Pro', link: '/paid-membership-pro-integration' },
              { text: 'Restrict Content Pro', link: '/restrict-content-pro-integration' },
              { text: 'WishList Member', link: '/wishlist-member-integration' },
            ]
          },
          {
            text: 'Other',
        collapsed: true,
        items: [
              { text: 'BetterDocs', link: '/betterdocs-integration' },
              { text: 'Google reCAPTCHA', link: '/google-recaptcha-integration' },
              { text: 'Google Drive', link: '/google-drive-integration' },
              { text: 'Dropbox', link: '/dropbox-integration' },
            ]
          },
        ]
      },
      {
        text: 'AI Assistance',
        collapsed: true,
        items: [
          { text: 'OpenAI Setup', link: '/openai-integration-with-fluent-support' },
          { text: 'OpenAI Features', link: '/features-of-openai-integration-in-fluent-support' },
        ]
      },
      {
        text: 'Migration',
        collapsed: true,
        items: [
          { text: 'Ticket Importer', link: '/ticket-importer' },
          { text: 'HelpScout', link: '/helpscout-ticket-migrator' },
          { text: 'Freshdesk', link: '/freshdesk-ticket-migrator' },
          { text: 'Zendesk', link: '/zendesk-ticket-migrator' },
        ]
      },
      {
        text: 'Troubleshooting & Support',
        collapsed: true,
        items: [
          { text: 'Common Issues & FAQs', link: '/common-issues-faqs' },
          { text: 'How to Get Support', link: '/how-to-get-support' },
        ]
      },
      {
        text: 'Changelog',
        collapsed: true,
        items: [
          { text: 'Change Log', link: '/change-log' },
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

  // Rewrites: hide folder structure so only slug shows (e.g. /how-to-install-activate-fluent-support)
  rewrites: {
    'docs/:slug': ':slug',
    'docs/:section/:slug': ':slug'
  },

  // Sitemap
  sitemap: {
    hostname: 'https://docs.fluentsupport.com'
  }
})
