# Contributing to Fluent Support Documentation

Thank you for your interest in contributing to the Fluent Support documentation! This guide will help you get started.

## 🎯 Ways to Contribute

- **Fix typos and grammar** - Even small improvements matter!
- **Update outdated content** - Help keep docs current with the latest features
- **Add missing documentation** - Document undocumented features
- **Improve clarity** - Make complex topics easier to understand
- **Add examples** - Provide real-world use cases and scenarios
- **Create tutorials** - Step-by-step guides for specific tasks
- **Add screenshots** - Visual aids help users understand better
- **Translate documentation** - Help make docs accessible in other languages

## 🚀 Getting Started

### 1. Set Up Your Environment

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/fluent-support-user-docs.git
cd fluent-support-user-docs

# Install dependencies
npm install

# Start development server
npm run docs:dev
```

### 2. Find Something to Work On

- Check the [Issues](https://github.com/WPManageNinja/fluent-support-user-docs/issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Or improve any documentation you find unclear

### 3. Make Your Changes

- Create a new branch: `git checkout -b docs/your-improvement`
- Make your changes
- Test locally: `npm run docs:dev`
- Commit with clear messages

### 4. Submit Your Work

- Push to your fork
- Open a Pull Request
- Describe your changes clearly
- Wait for review

## 📝 Documentation Standards

### Writing Style

- **Be clear and concise** - Get to the point quickly
- **Use active voice** - "Click the button" not "The button should be clicked"
- **Write for beginners** - Don't assume prior knowledge
- **Be consistent** - Follow existing patterns in the docs
- **Use proper grammar** - Run spell check before submitting

### Formatting Guidelines

#### Headings

```markdown
# H1 - Page Title (only one per page)
## H2 - Major Sections
### H3 - Subsections
#### H4 - Minor Points
```

#### Lists

**Ordered lists** for sequential steps:
```markdown
1. First step
2. Second step
3. Third step
```

**Unordered lists** for non-sequential items:
```markdown
- Feature one
- Feature two
- Feature three
```

#### Code Blocks

Use syntax highlighting:

````markdown
```php
// PHP code
function example() {
    return true;
}
```

```javascript
// JavaScript code
const example = () => true;
```

```bash
# Terminal commands
npm install
```
````

#### Callouts

Use VitePress callouts for important information:

```markdown
::: tip
Helpful tips and best practices
:::

::: warning
Important warnings users should know
:::

::: danger
Critical warnings about potential issues
:::

::: info
Additional information or context
:::
```

#### Links

**Internal links** (within docs):
```markdown
[Link text](/docs/page-slug)
```

**External links**:
```markdown
[Link text](https://example.com)
```

#### Images

```markdown
![Descriptive alt text](/images/category/feature/screenshot.png)
```

**Image Guidelines:**
- Use descriptive file names: `ticket-creation-form.png` not `img1.png`
- Optimize images (keep file size under 500KB)
- Use PNG for screenshots, SVG for diagrams
- Place images in appropriate folders: `docs/public/images/[category]/[feature]/`

### Content Organization

#### Page Structure

```markdown
# Page Title

Brief introduction explaining what this page covers.

## Prerequisites

What users need before starting (if applicable).

## Main Content

Break into logical sections with H2 and H3 headings.

## Step-by-Step Guide

1. First step with clear instructions
2. Second step
3. Third step

## Examples

Provide practical examples.

## Troubleshooting

Common issues and solutions.

## Related Topics

- [Link to related doc 1]()
- [Link to related doc 2]()
```

#### Naming Conventions

- **Files**: Use kebab-case: `ticket-management-guide.md`
- **Folders**: Use kebab-case: `setup-configuration/`
- **Images**: Use descriptive kebab-case: `create-ticket-form.png`

## 🖼️ Working with Images

### Adding Screenshots

1. Take high-quality screenshots (at least 1920x1080)
2. Crop to relevant area
3. Optimize file size (use tools like TinyPNG)
4. Save with descriptive name
5. Place in appropriate folder:
   ```
   docs/public/images/[section]/[feature]/screenshot-name.png
   ```

### Image Best Practices

- **Highlight important areas** - Use arrows or boxes to draw attention
- **Keep UI clean** - Remove sensitive information
- **Use consistent styling** - Match the look of existing screenshots
- **Update when UI changes** - Replace outdated screenshots

## 🔍 Review Process

### Before Submitting

- [ ] Test locally with `npm run docs:dev`
- [ ] Check all links work
- [ ] Verify images display correctly
- [ ] Run spell check
- [ ] Read through for clarity
- [ ] Build successfully with `npm run docs:build`

### Pull Request Checklist

- [ ] Clear PR title and description
- [ ] Reference related issues (if any)
- [ ] Changes are focused and cohesive
- [ ] No unrelated changes included
- [ ] Commit messages are clear

### What Happens Next

1. **Automated checks** - Build and link validation
2. **Team review** - We'll review your changes
3. **Feedback** - We may request changes
4. **Approval** - Once approved, we'll merge
5. **Deploy** - Changes go live on the docs site

## 💡 Tips for Success

- **Start small** - Fix a typo or improve one page first
- **Ask questions** - Open an issue if you're unsure about something
- **Be patient** - Reviews may take a few days
- **Learn by example** - Look at existing docs for guidance
- **Stay focused** - One improvement per PR is ideal

## 🎨 Markdown Tips

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

### Emphasis

```markdown
**bold text**
*italic text*
***bold and italic***
`inline code`
```

### Blockquotes

```markdown
> This is a quote or important note
```

## 🚫 What Not to Do

- ❌ Don't copy content from other sources without attribution
- ❌ Don't include promotional content
- ❌ Don't make large changes without discussion first
- ❌ Don't include sensitive information in screenshots
- ❌ Don't commit directly to main branch
- ❌ Don't include build artifacts (dist/ folder)

## 📧 Need Help?

- **Questions**: Open an [issue](https://github.com/WPManageNinja/fluent-support-user-docs/issues)
- **Discussion**: Join our [Facebook community](https://www.facebook.com/groups/fluentsupport/)
- **Support**: Visit [fluentsupport.com/support](https://fluentsupport.com/support/)

## 📜 Code of Conduct

Be respectful, constructive, and professional in all interactions. We want this to be a welcoming community for everyone.

## 🏆 Recognition

Contributors will be acknowledged! Your GitHub profile will appear in the repository's contributors list.

---

**Thank you for contributing to Fluent Support documentation!** Every improvement helps thousands of users. 🎉
