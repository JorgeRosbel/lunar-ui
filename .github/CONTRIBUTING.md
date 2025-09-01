# Contributing to lunar-ui

Thank you for considering contributing to **lunar-ui**! 🌕

We're excited to have you help us build a modern collection of ready-to-use Astro components. This guide will help you understand our contribution process and standards.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Component Standards](#component-standards)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Requirements](#testing-requirements)
- [Submitting Changes](#submitting-changes)
- [Component Guidelines](#component-guidelines)

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your forked repository** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/lunar-ui.git
   cd lunar-ui
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feat/your-component-name
   ```
5. **Create a new component** in the `./src/ui` directory with a descriptive name

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm
- Basic knowledge of Astro, TypeScript, and TailwindCSS

### Local Testing
```bash
# Build and create local CLI link for testing
npm run build:dev

# This creates a local link to test the CLI functionality
# Use this to verify your component works correctly before submitting
```

## Component Standards

### File Structure
All new components must be created in the `./src/ui` directory:

```
src/ui/
└── YourDescriptiveComponentName.astro
```

### Component Requirements

#### ✅ Required
- **TailwindCSS** as the primary styling method (preferred over custom CSS)
- **TypeScript interface** for props
- **Consistent component style** that matches existing lunar-ui components
- **Responsive design** (mobile-first approach)
- **Dark mode support** using Tailwind's dark mode utilities
- **Accessibility compliance** (ARIA labels, keyboard navigation, semantic HTML)
- **Descriptive component name** that clearly indicates its purpose
- **Default values** for all optional props

#### 🎯 Best Practices
- **Maintain visual consistency** with existing components
- Use **TailwindCSS utilities** whenever possible
- Keep components **focused** and **reusable**
- Use **semantic HTML** elements
- Support **custom CSS classes** through props
- Follow **Astro conventions**
- Use **descriptive prop names**

## Code Style Guidelines

### TypeScript
```typescript
interface YourComponentProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  class?: string;
}
```

### Astro Component Structure
```astro
---
interface Props {
  // Define your props here
}

const { 
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  class: className = '',
  ...rest 
} = Astro.props;
---

<element 
  class={`base-classes ${variant} ${size} ${className}`}
  aria-disabled={disabled}
  {...rest}
>
  {title}
</element>

<style>
  /* Component-specific styles */
</style>
```

### CSS/TailwindCSS Guidelines
- **TailwindCSS is preferred** over custom CSS
- Use **Tailwind's dark mode utilities** (`dark:` prefix)
- Maintain **consistent spacing and sizing** with existing components
- Use **Tailwind's responsive prefixes** for mobile-first design
- Leverage **Tailwind's color palette** for consistency

```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

const { 
  variant = 'primary',
  size = 'md',
  class: className = '',
  ...rest 
} = Astro.props;

// Use Tailwind classes for styling variants
const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};
---

<button 
  class={`
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    rounded-lg font-medium transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `}
  {...rest}
>
  <slot />
</button>
```

## Testing Requirements

### Before Submitting
1. **Visual testing** - Test your component in different:
   - Screen sizes (mobile, tablet, desktop) using Tailwind responsive breakpoints
   - Themes (light, dark) using `dark:` utilities
   - States (hover, focus, disabled)

2. **CLI functionality testing**:
   ```bash
   npm run build:dev
   ```
   This command creates a local link to test the CLI. Verify that:
   - Your component can be installed via the CLI
   - It renders correctly in different contexts
   - All Tailwind classes work properly

3. **Consistency check**:
   - Ensure your component matches the visual style of existing lunar-ui components
   - Use similar color schemes, spacing, and typography
   - Follow established patterns for props and component structure

4. **Accessibility testing**:
   - Screen reader compatibility
   - Keyboard navigation
   - Color contrast ratios (use Tailwind's accessible color combinations)
   - ARIA attributes

### Test Checklist
- [ ] Component renders without errors
- [ ] All props work as expected
- [ ] Responsive design works using Tailwind breakpoints
- [ ] Dark mode works with `dark:` utilities
- [ ] Component style matches existing lunar-ui components
- [ ] CLI installation works correctly (`npm run build:dev`)
- [ ] Keyboard navigation functions properly
- [ ] Screen readers can access content
- [ ] No console errors or warnings
- [ ] TailwindCSS classes are being applied correctly

## Submitting Changes

### Pull Request Process

1. **Test thoroughly** following our [Testing Requirements](#testing-requirements)

2. **Create semantic commit** describing what you've created/modified:
   ```bash
   # For new components
   git commit -m "feat: add Button component with primary, secondary and ghost variants"
   git commit -m "feat: create Card component with hover effects and dark mode support"
   
   # For modifications
   git commit -m "fix: resolve focus state issue in Modal component"
   git commit -m "style: update Button component spacing to match design system"
   git commit -m "docs: add usage examples for Input component"
   ```

3. **Semantic commit format**:
   - `feat:` - New component or major feature
   - `fix:` - Bug fixes
   - `style:` - Visual/styling changes
   - `docs:` - Documentation updates
   - `refactor:` - Code improvements without functionality changes
   - `test:` - Adding or updating tests

4. **Submit your pull request**:
   - Use a clear, descriptive title
   - Reference any related issues
   - Include screenshots/GIFs for UI changes
   - Mention that you've tested with `npm run build:dev`

### PR Requirements
- [ ] Component created in `./src/ui` directory
- [ ] Uses TailwindCSS as primary styling method
- [ ] Maintains visual consistency with existing components
- [ ] Follows code style guidelines
- [ ] Has been tested with `npm run build:dev`
- [ ] Uses semantic commit messages
- [ ] Includes dark mode support with Tailwind utilities
- [ ] Responsive design implemented with Tailwind breakpoints
- [ ] Maintains backward compatibility (unless breaking change is necessary)

## Component Guidelines

### Naming Conventions
- Use **PascalCase** for component names
- Be **descriptive** but **concise**
- Avoid abbreviations unless widely understood

### Props Design
- Use **TypeScript interfaces**
- Provide **sensible defaults**
- Support **common variants** (size, color, state)
- Include **className** prop for custom styling
- Use **rest props** for HTML attributes

### Documentation Template
Each component should have a README.md:

```markdown
# ComponentName

Brief description of what the component does.

## Usage

```astro
---
import { ComponentName } from '@primarix/lunar-ui';
---

<ComponentName title="Hello World" variant="primary" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | The component title |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual variant |

## Examples

[Include multiple examples showing different use cases]
```

## Questions?

Feel free to open an issue or start a discussion if you have any questions about contributing!

---

**Happy coding!** 🚀

Made with ❤️ by the lunar-ui community