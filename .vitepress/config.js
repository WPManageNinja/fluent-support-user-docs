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
      { text: 'Integrations', link: '/guide/integrations/woocommerce-integration' },
      { text: 'Changelog', link: '/guide/change-log/change-log' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Install & Activate Fluent Support', link: '/guide/getting-started/how-to-install-activate-fluent-support' },
          { text: 'Upgrade to Fluent Support PRO', link: '/guide/getting-started/upgrade-to-fluent-support-pro-add-on' },
          { text: 'Deactivate or Delete Plugin', link: '/guide/getting-started/how-to-deactivate-or-delete-the-fluent-support' },
        ]
      },
      {
        text: 'Business Management',
        collapsed: true,
        items: [
          { text: 'Create Business Inbox', link: '/guide/business-management/create-business-inbox-initially' },
          { text: 'Adding Multiple Business Inboxes', link: '/guide/business-management/adding-multiple-business-inboxes' },
          { text: 'Adding Support Staff Agents', link: '/guide/business-management/adding-support-staff-agents' },
          { text: 'Permission Management for Agents', link: '/guide/business-management/permission-management-for-agent' },
          { text: 'Customer Support Portal Setup', link: '/guide/business-management/customer-support-portal-setup' },
          { text: 'Customer Support Portal Dashboard', link: '/guide/business-management/customer-support-portal-dashboard' },
          { text: 'Creating Products to Categorize Tickets', link: '/guide/business-management/creating-products-to-categorize-tickets' },
          { text: 'Add Custom Ticket Submission Form', link: '/guide/business-management/add-custom-ticket-submission-form' },
          { text: 'Ticket Form Customization', link: '/guide/business-management/ticket-form-customization' },
          { text: 'View & Manage Ticket Entries', link: '/guide/business-management/view-manage-ticket-entries' },
          { text: 'Web and Email Settings in Business Inbox', link: '/guide/business-management/web-and-email-settings-in-business-inbox' },
          { text: 'Web-Based Settings in Business Inbox', link: '/guide/business-management/web-based-settings-in-business-inbox' },
          { text: 'Attachment Regulation', link: '/guide/business-management/attachment-regulation' },
          { text: 'File Upload Integrations', link: '/guide/business-management/file-upload-integrations' },
        ]
      },
      {
        text: 'Productivity',
        collapsed: true,
        items: [
          { text: 'Ticket Tags', link: '/guide/productivity/ticket-tags' },
          { text: 'Filtering, Sorting & Searching Tickets', link: '/guide/productivity/filtering-sorting-searching-tickets' },
          { text: 'Advanced Filter', link: '/guide/productivity/advanced-filter-fluent-support' },
          { text: 'Advanced Filter - Save Search Feature', link: '/guide/productivity/advanced-filter-save-search-feature' },
          { text: 'Templated Saved Replies', link: '/guide/productivity/templated-saved-replies' },
          { text: 'Internal Notes', link: '/guide/productivity/internal-notes' },
          { text: 'Agent Specific Tickets', link: '/guide/productivity/agent-specific-tickets' },
          { text: 'Agent Time Tracking', link: '/guide/productivity/agent-time-tracking' },
          { text: 'Creating Ticket on Behalf of Customer', link: '/guide/productivity/creating-ticket-on-behalf-of-customer' },
          { text: 'Merge Tickets', link: '/guide/productivity/merge-tickets' },
          { text: 'Split Reply in New Tickets', link: '/guide/productivity/split-reply-in-new-tickets' },
          { text: 'Bookmark Tickets', link: '/guide/productivity/bookmark-tickets' },
          { text: 'Bulk Action in Tickets', link: '/guide/productivity/bulk-action-in-tickets' },
          { text: 'Automatic Ticket Closing', link: '/guide/productivity/automatic-ticket-closing' },
          { text: 'Close Ticket Silently', link: '/guide/productivity/close-ticket-silently' },
          { text: 'Conditional Custom Fields', link: '/guide/productivity/conditional-custom-fields' },
          { text: 'Navigate with Keyboard Shortcut', link: '/guide/productivity/navigate-with-keyboard-shortcut' },
          { text: 'Add More Attachment Type', link: '/guide/productivity/add-more-attachment-type' },
          { text: 'Frontend Agent Portal', link: '/guide/productivity/forntend-agent-portal' },
          { text: 'Add & Customize Customer Portal (Gutenberg)', link: '/guide/productivity/add-and-customize-customer-portal-using-gutenberg-block' },
          { text: 'Shortcodes', link: '/guide/productivity/shortcodes' },
          { text: 'Outgoing Webhook', link: '/guide/productivity/outgoing-webhook' },
        ]
      },
      {
        text: 'Activities & Reports',
        collapsed: true,
        items: [
          { text: 'Dashboard Overview', link: '/guide/activities-reports/dashboard-overview' },
          { text: 'Dynamic Dashboard', link: '/guide/activities-reports/dynamic-dashboard' },
          { text: 'Overall Activities', link: '/guide/activities-reports/overall-activities' },
          { text: 'Reports and Stats', link: '/guide/activities-reports/reports-and-stats' },
        ]
      },
      {
        text: 'Email Management',
        collapsed: true,
        items: [
          { text: 'Managing Email Notifications', link: '/guide/email-management/managing-email-notifications' },
          { text: 'Email Piping - Email Based Support Ticket', link: '/guide/email-management/email-piping-email-based-support-ticket' },
          { text: 'Auto Forward from G Suite', link: '/guide/email-management/auto-forward-from-gsuite' },
          { text: 'Forward from Microsoft 365 (OWA)', link: '/guide/email-management/forward-from-microsoft365-owa' },
          { text: 'Changing Amazon Lambda Settings', link: '/guide/email-management/changing-amazon-lambda-settings' },
        ]
      },
      {
        text: 'Workflow & Automation',
        collapsed: true,
        items: [
          { text: 'Workflows & Automations Overview', link: '/guide/workflow-automation/workflows-automations' },
          { text: 'Automatic Workflow', link: '/guide/workflow-automation/automatic-workflow' },
          { text: 'Manual Workflow', link: '/guide/workflow-automation/manual-workflow' },
        ]
      },
      {
        text: 'Integrations',
        collapsed: true,
        items: [
          { text: 'WooCommerce Integration', link: '/guide/integrations/woocommerce-integration' },
          { text: 'FluentCRM Integration', link: '/guide/integrations/fluentcrm-integration' },
          { text: 'FluentForm Integration', link: '/guide/integrations/fluent-form-integration' },
          { text: 'FluentCart Integration', link: '/guide/integrations/fluentcart-integration' },
          { text: 'FluentBoards Integration', link: '/guide/integrations/fluentboards-integrations' },
          { text: 'Fluent Community Integration', link: '/guide/integrations/fluent-community-integration' },
          { text: 'BuddyBoss Integration', link: '/guide/integrations/buddyboss-integration' },
          { text: 'BetterDocs Integration', link: '/guide/integrations/betterdocs-integration' },
          { text: 'LearnDash Integration', link: '/guide/integrations/learndash-integration' },
          { text: 'LifterLMS Integration', link: '/guide/integrations/lifterlms-integration' },
          { text: 'LearnPress Integration', link: '/guide/integrations/learnpress-integration' },
          { text: 'TutorLMS Integration', link: '/guide/integrations/tutorlms-integration' },
          { text: 'MemberPress Integration', link: '/guide/integrations/memberpress-integration' },
          { text: 'Paid Membership Pro Integration', link: '/guide/integrations/paid-membership-pro-integration' },
          { text: 'Restrict Content Pro Integration', link: '/guide/integrations/restrict-content-pro-integration' },
          { text: 'WishList Member Integration', link: '/guide/integrations/wishlist-member-integration' },
          { text: 'Easy Digital Downloads Integration', link: '/guide/integrations/edd-integration' },
          { text: 'Google Drive Integration', link: '/guide/integrations/google-drive-integration' },
          { text: 'Dropbox Integration', link: '/guide/integrations/dropbox-integration' },
          { text: 'Google reCAPTCHA Integration', link: '/guide/integrations/google-recaptcha-integration' },
          { text: 'SureTriggers Integration', link: '/guide/integrations/suretriggers-integration' },
          { text: 'Incoming Webhook', link: '/guide/integrations/incoming-webhook' },
        ]
      },
      {
        text: 'AI-Powered Assistance',
        collapsed: true,
        items: [
          { text: 'OpenAI Integration with Fluent Support', link: '/guide/ai-powered-assistance/openai-integration-with-fluent-support' },
          { text: 'Features of OpenAI Integration', link: '/guide/ai-powered-assistance/features-of-openai-integration' },
        ]
      },
      {
        text: 'Ticket Importer',
        collapsed: true,
        items: [
          { text: 'Ticket Importer Overview', link: '/guide/ticket-importer/ticket-importer' },
          { text: 'Import from HelpScout', link: '/guide/ticket-importer/helpscout-ticket-importer' },
          { text: 'Import from Freshdesk', link: '/guide/ticket-importer/freshdesk-ticket-importer' },
          { text: 'Import from Zendesk', link: '/guide/ticket-importer/zendesk-ticket-importer' },
        ]
      },
      {
        text: 'Ticket Management via Third-Parties',
        collapsed: true,
        items: [
          { text: 'Managing Tickets using Slack', link: '/guide/ticket-management-using-third-parties/managing-tickets-using-slack' },
          { text: 'Managing Tickets using Telegram', link: '/guide/ticket-management-using-third-parties/managing-tickets-using-telegram' },
          { text: 'Managing Tickets using Discord', link: '/guide/ticket-management-using-third-parties/managing-tickets-using-discord' },
          { text: 'Managing Tickets using WhatsApp', link: '/guide/ticket-management-using-third-parties/managing-tickets-using-whatsapp' },
        ]
      },
      {
        text: 'Change Log',
        collapsed: true,
        items: [
          { text: 'Version History', link: '/guide/change-log/change-log' },
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
