<div align="center">
  <img src="https://raw.githubusercontent.com/WPManageNinja/fluent-support-user-docs/master/guide/public/images/brand/fluentsupport_primary_logo.png" alt="Fluent Support Logo" width="400">

  # Fluent Support Documentation

  **Official user documentation for Fluent Support - The WordPress Support Ticket System**

  [![WordPress Plugin](https://img.shields.io/wordpress/plugin/v/fluent-support.svg)](https://wordpress.org/plugins/fluent-support/)
  [![WordPress Plugin Downloads](https://img.shields.io/wordpress/plugin/dt/fluent-support.svg)](https://wordpress.org/plugins/fluent-support/)
  [![WordPress Plugin Rating](https://img.shields.io/wordpress/plugin/rating/fluent-support.svg)](https://wordpress.org/plugins/fluent-support/)
  [![WordPress Version](https://img.shields.io/wordpress/plugin/tested/fluent-support.svg)](https://wordpress.org/plugins/fluent-support/)

  [Website](https://fluentsupport.com) • [Documentation](https://fluentsupport.com/docs/) • [Developer Docs](https://developers.fluentsupport.com/) • [WordPress.org](https://wordpress.org/plugins/fluent-support/)
</div>

---

## 📖 About This Repository

This repository contains the **official user documentation** for [Fluent Support](https://fluentsupport.com), a comprehensive WordPress support ticket system. The documentation is built using [VitePress](https://vitepress.dev/) and provides guides, tutorials, and references for users and administrators.

## 🚀 About Fluent Support

**Fluent Support** is a powerful yet easy-to-use WordPress helpdesk plugin that helps you manage customer support tickets efficiently. Built with modern technology and designed for scalability, it's perfect for businesses of all sizes.

### Key Features

- **📧 Multi-Channel Support** - Email piping, web forms, and integrations with Slack, Telegram, Discord, WhatsApp
- **🎫 Advanced Ticket Management** - Tags, filters, bulk actions, merge tickets, split replies
- **👥 Team Collaboration** - Internal notes, agent assignments, permissions, and time tracking
- **🔄 Workflows & Automation** - Automate repetitive tasks with custom workflows
- **📊 Reports & Analytics** - Comprehensive reporting on team performance and ticket metrics
- **🤖 AI-Powered Assistance** - OpenAI integration for smart responses and automation
- **🔌 Rich Integrations** - WooCommerce, Easy Digital Downloads, FluentCRM, LearnDash, and 20+ more
- **🌐 Customer Portal** - Self-service portal with customizable branding
- **📱 Mobile Responsive** - Works seamlessly on all devices
- **🌍 Translation Ready** - Fully localized and RTL support

## 🛠️ Documentation Stack

- **Framework**: [VitePress](https://vitepress.dev/) v1.6.4
- **Build Tool**: Vite
- **Package Manager**: npm
- **Deployment**: Static site generation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## 🏃 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/WPManageNinja/fluent-support-user-docs.git
   cd fluent-support-user-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run docs:dev
   ```

   The documentation will be available at `http://localhost:5173`

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run docs:dev` | Start development server with hot reload |
| `npm run docs:build` | Build for production |
| `npm run docs:preview` | Preview production build locally |

## 📁 Project Structure

```
fluent-support-user-docs/
├── .vitepress/
│   ├── config.js          # VitePress configuration
│   ├── theme/             # Custom theme files
│   └── dist/              # Built output (generated)
├── guide/
│   ├── getting-started/   # Getting started guides
│   ├── setup-configuration/ # Setup and configuration docs
│   ├── ticket-management/ # Ticket management features
│   ├── email-notifications/ # Email settings
│   ├── workflows-automation/ # Automation guides
│   ├── reports-analytics/ # Reporting documentation
│   ├── integrations/      # Integration guides
│   ├── ai-assistance/     # AI features documentation
│   ├── migration/         # Migration guides
│   ├── troubleshooting-support/ # FAQs and support
│   ├── changelog/         # Version history
│   └── public/            # Static assets (images, icons)
├── index.md               # Homepage
├── package.json           # Project dependencies
└── README.md              # This file
```

## ✍️ Contributing

We welcome contributions to improve the Fluent Support documentation! Here's how you can help:

### Documentation Guidelines

1. **Clear and Concise**: Write in simple, easy-to-understand language
2. **User-Focused**: Think from the user's perspective
3. **Screenshots**: Include relevant screenshots to illustrate steps
4. **Code Examples**: Provide code snippets where applicable
5. **Links**: Cross-reference related documentation pages
6. **Up-to-Date**: Ensure content reflects the latest version

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b docs/improve-ticket-management
   ```

3. **Make your changes**
   - Edit existing `.md` files in the `guide/` directory
   - Add new documentation pages as needed
   - Update images in `guide/public/images/`

4. **Test locally**
   ```bash
   npm run docs:dev
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "docs: improve ticket management guide"
   ```

6. **Push to your fork**
   ```bash
   git push origin docs/improve-ticket-management
   ```

7. **Create a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues

### Commit Message Convention

We follow conventional commits:

- `docs:` - Documentation changes
- `fix:` - Bug fixes in documentation
- `feat:` - New documentation sections
- `style:` - Formatting changes
- `refactor:` - Restructuring documentation

Example: `docs: add guide for custom workflows`

## 🖼️ Adding Images

1. Place images in `guide/public/images/` following the existing folder structure
2. Reference images using absolute paths:
   ```markdown
   ![Alt text](/images/category/feature/screenshot.png)
   ```

## 📝 Writing Style Guide

- Use **active voice** and **present tense**
- Write in **second person** (you, your) when addressing users
- Use **headers** to organize content hierarchically
- Include **numbered lists** for sequential steps
- Use **bullet points** for non-sequential items
- Add **callouts** for important notes:
  ```markdown
  ::: tip
  This is a helpful tip!
  :::

  ::: warning
  This is a warning message.
  :::

  ::: danger
  This is a critical warning!
  :::
  ```

## 🔗 Useful Links

- **Product Website**: [fluentsupport.com](https://fluentsupport.com)
- **WordPress Plugin**: [wordpress.org/plugins/fluent-support](https://wordpress.org/plugins/fluent-support/)
- **User Documentation**: [fluentsupport.com/docs](https://fluentsupport.com/docs/)
- **Developer Documentation**: [developers.fluentsupport.com](https://developers.fluentsupport.com/)
- **Support**: [fluentsupport.com/support](https://fluentsupport.com/support/)
- **Community**: [Facebook Group](https://www.facebook.com/groups/fluentsupport/)

## 🐛 Found a Bug or Issue?

If you find a bug in the documentation or have suggestions:

1. Check if an [issue already exists](https://github.com/WPManageNinja/fluent-support-user-docs/issues)
2. If not, [create a new issue](https://github.com/WPManageNinja/fluent-support-user-docs/issues/new)
3. Provide clear details and screenshots if applicable

For plugin bugs, please report them on the [main plugin repository](https://github.com/WPManageNinja/fluent-support) or [WordPress.org support forum](https://wordpress.org/support/plugin/fluent-support/).

## 📄 License

This documentation is licensed under [MIT License](LICENSE).

The Fluent Support plugin itself has its own licensing - check the [plugin repository](https://wordpress.org/plugins/fluent-support/) for details.

## 🙏 Acknowledgments

- Built with [VitePress](https://vitepress.dev/)
- Icons and images © Fluent Support Team
- Community contributors who help improve this documentation

---

<div align="center">
  <p>Made with ❤️ by the <a href="https://fluentsupport.com">Fluent Support Team</a></p>
  <p>
    <a href="https://twitter.com/intent/follow?screen_name=FluentSupport">Follow us on Twitter</a> •
    <a href="https://www.facebook.com/groups/fluentsupport/">Join our Facebook Community</a>
  </p>
</div>
