# 🌕 Lunar-UI

A modern collection of ready-to-use Astro components. Copy, paste, and customize with zero dependencies.

![banner](https://github.com/JorgeRosbel/lunar-ui/raw/main/docs/AnimatedHero.png)

> ⚠️ **MVP Notice**: This library is currently in active development as a Minimum Viable Product. Features and APIs may change as we iterate toward a stable release.

## Why lunar-ui?

Building modern web applications shouldn't mean wrestling with heavy dependencies, complex configurations, or being locked into rigid design systems. lunar-ui solves the pain points that developers face daily:

**🚀 Rapid Prototyping**: Skip the tedious setup phase and jump straight into building. Need a hero section? Add it in seconds, not hours.

**🎨 Complete Design Control**: Unlike traditional component libraries that force you into their design decisions, lunar-ui gives you the raw source code. Want to change that button color or adjust spacing? Just edit the code directly.

**📦 Zero Dependency Hell**: Tired of installing dozens of packages just to get a simple component working? lunar-ui components are self-contained and dependency-free, eliminating version conflicts and reducing bundle size.

**⚡ Performance First**: No runtime overhead, no JavaScript bloat. Since you get the actual component code, you can optimize it specifically for your use case.

**🔧 Framework Alignment**: Built specifically for Astro's component model and philosophy. No more trying to adapt React or Vue components that don't quite fit.

Whether you're a solo developer building a landing page, a startup needing rapid iteration, or an agency handling multiple client projects, lunar-ui empowers you to move fast without sacrificing quality or control.

## Installation

### Global Installation (Recommended)

Install the CLI globally for easier access:

```bash
npm install -g @primarix/lunar-ui
```

Then use the shorter command:

```bash
lui add [component-name]
```

### Per-Project Usage

Use npx without global installation:

```bash
npx @primarix/lunar-ui add [component-name]
```

## Available Components

### 🎯 Hero Components

Components designed to make impactful first impressions and showcase your main content.

#### SimpleHero
A clean, minimalist hero section perfect for landing pages.
```bash
lui add SimpleHero
# or
npx @primarix/lunar-ui add SimpleHero
```

#### AnimatedHero
An engaging hero section with smooth animations and transitions.
```bash
lui add AnimatedHero
# or
npx @primarix/lunar-ui add AnimatedHero
```

#### DualColumnHero
A two-column hero layout ideal for content and media combinations.
```bash
lui add DualColumnHero
# or
npx @primarix/lunar-ui add DualColumnHero
```

### 📄 Content Sections

Versatile components for organizing and presenting your content effectively.

#### AboutSection
A structured section component for about pages and company information.
```bash
lui add AboutSection
# or
npx @primarix/lunar-ui add AboutSection
```

#### SectionDivider
A visual separator component to create clear divisions between content sections.
```bash
lui add SectionDivider
# or
npx @primarix/lunar-ui add SectionDivider
```

### 🏗️ Layout Components

Essential components for structuring your application's layout and navigation.

#### ResponsiveHeader
A mobile-friendly header component with navigation and responsive design.
```bash
lui add ResponsiveHeader
# or
npx @primarix/lunar-ui add ResponsiveHeader
```

#### Heading
Consistent heading components with proper typography hierarchy.
```bash
lui add Heading
# or
npx @primarix/lunar-ui add Heading
```

### 🎨 Display Components

Components for showcasing information, statistics, and visual content.

#### StatsCards
Card components perfect for displaying key metrics and statistics.
```bash
lui add StatsCards
# or
npx @primarix/lunar-ui add StatsCards
```

#### GlowStatsCards
Enhanced stats cards with glowing effects and modern styling.
```bash
lui add GlowStatsCards
# or
npx @primarix/lunar-ui add GlowStatsCards
```

#### PricingCards
Professional pricing table components for subscription services.
```bash
lui add PricingCards
# or
npx @primarix/lunar-ui add PricingCards
```

### 🗂️ Grid Components

Organized layouts for showcasing projects, services, and content collections.

#### ProjectsGrid
A responsive grid layout for displaying project portfolios.
```bash
lui add ProjectsGrid
# or
npx @primarix/lunar-ui add ProjectsGrid
```

#### ServicesGrid
Grid component specifically designed for service offerings and features.
```bash
lui add ServicesGrid
# or
npx @primarix/lunar-ui add ServicesGrid
```

### 🔍 SEO Components

Components to enhance your site's search engine optimization and metadata.

#### SEOHead
Essential meta tags and SEO optimization for your Astro pages.
```bash
lui add SEOHead
# or
npx @primarix/lunar-ui add SEOHead
```

## How It Works

1. **Choose a Component**: Browse the available components above
2. **Run the Command**: Use either `lui add [component-name]` or the npx version
3. **Generated Folder**: Components are automatically created in a `.generated/` folder in your project
4. **Customize**: The component source code will be added to your project, ready for customization
5. **Style**: Modify the component to match your design requirements

## Component Philosophy

Each lunar-ui component is designed with these principles:

- **Minimal**: Clean, focused functionality without bloat
- **Customizable**: Full source code access for unlimited modifications  
- **Modern**: Built with current web standards and best practices
- **Accessible**: Following accessibility guidelines where applicable
- **Responsive**: Mobile-first design approach

## Contributing

As this is an MVP in active development, we welcome feedback and contributions. Please check our GitHub repository for contribution guidelines and issue reporting.

## Roadmap

- 🔄 Additional component variants
- 📱 Mobile-specific components  
- 📚 Interactive documentation site
- 🔧 Advanced CLI features

## Disclaimer

> **⚠️ Important Notice**  
> lunar-ui is an independent project and is not affiliated with the official Astro team.