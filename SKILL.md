---
name: frontend-design
description: This skill should be used when the user asks to "build a frontend", "create a React component", "add animations", "design a landing page", "make it look modern", "add animated backgrounds", "create hero section", "design dashboard UI", or wants to use ReactBits components for stunning visual interfaces.
version: 0.1.0
---

# Frontend Design with ReactBits

## Purpose

This skill provides comprehensive guidance for building distinctive, production-grade frontend interfaces using ReactBits—an open-source collection of 135+ animated, interactive React components. ReactBits specializes in creative UI elements that help applications stand out visually, including text animations, animated backgrounds, and interactive components.

Use this skill when building modern React frontends that require visual impact, smooth animations, and memorable user experiences. ReactBits complements traditional component libraries (like shadcn/ui for forms and buttons) by providing the creative, animated elements that make interfaces memorable.

## When to Use ReactBits

**Use ReactBits components for:**
- Hero sections with animated text or backgrounds
- Landing pages requiring visual impact
- Interactive dashboards with animated metrics
- Portfolio sites with creative transitions
- Marketing pages with eye-catching animations
- Creative UI elements that need to stand out
- Background effects and ambient animations

**Don't use ReactBits for:**
- Basic form inputs and buttons (use shadcn/ui, Radix, etc.)
- Standard CRUD interfaces
- Simple admin panels without creative requirements
- Projects with strict accessibility-first requirements (verify component compatibility first)

## Installation Methods

### Method 1: CLI Installation (Recommended)

ReactBits integrates with shadcn CLI for seamless installation:

```bash
npx shadcn@latest add @react-bits/ComponentName-TS-TW
```

Replace `ComponentName` with the specific component and choose your variant:
- `JS-CSS` - JavaScript with CSS
- `JS-TW` - JavaScript with Tailwind CSS
- `TS-CSS` - TypeScript with CSS
- `TS-TW` - TypeScript with Tailwind CSS (most common)

**Example:**
```bash
npx shadcn@latest add @react-bits/BlurText-TS-TW
```

Use the provided `scripts/install-component.sh` helper for interactive installation.

### Method 2: Manual Copy-Paste

1. Browse components at [reactbits.dev](https://reactbits.dev)
2. Select your technology stack (JS/TS, CSS/Tailwind)
3. Copy the component code directly
4. Paste into your components directory
5. Customize as needed

### Method 3: MCP Tools (Claude Integration)

When this plugin is active, use the ReactBits MCP server tools directly:
- `list_components` - Browse all available components
- `search_components` - Find components by name/description
- `get_component` - Retrieve component source code
- `get_component_example` - Get usage examples and demos
- `list_categories` - View component categories

## Component Selection Strategy

### 1. Understand the Four Categories

**Text Animations** - Dynamic text effects:
- BlurText, TypingEffect, WavyText, GlitchText
- Use for: Headlines, hero titles, attention-grabbing text
- When: Landing pages, headers, marketing content

**UI Components** - Interactive interface elements:
- AnimatedCard, HoverButton, ParallaxScroll, RevealLinks
- Use for: Interactive sections, content cards, navigation
- When: Product showcases, feature sections, portfolios

**Backgrounds** - Animated background effects:
- ParticleBackground, GradientMesh, AnimatedGrid, WaveBackground
- Use for: Section backgrounds, hero backgrounds, ambient effects
- When: Full-page sections, landing page heroes, creative layouts

**Animations** - Motion-based components:
- FadeIn, SlideIn, ScaleIn, RotateIn, BounceIn
- Use for: Enter animations, scroll-triggered effects, micro-interactions
- When: Progressive disclosure, scroll experiences, transitions

### 2. Component Selection Workflow

To choose the right component:

1. **Identify the UI goal** - What impression or interaction do you want?
2. **Match to category** - Which category fits the use case?
3. **Search available components** - Use MCP tools or browse reactbits.dev
4. **Check variants** - Ensure your stack (TS/JS, TW/CSS) is supported
5. **Review examples** - Use `get_component_example` to see usage patterns
6. **Install and customize** - Add via CLI or copy-paste, then customize props

### 3. Design Principles

**Performance:**
- ReactBits components are lightweight and tree-shakeable
- Only install components you actually use
- Each component is self-contained with minimal dependencies
- Animation performance is optimized for 60fps

**Customization:**
- All components accept props for customization
- Source code can be edited directly after installation
- Tailwind variants are easily themeable
- CSS variants provide full style control

**Composition:**
- Combine multiple ReactBits components for complex effects
- Layer background animations behind content components
- Use text animations within UI components
- Nest animations for progressive reveals

## Integration Patterns

### Pattern 1: Hero Section with Animated Background

```tsx
import { ParticleBackground } from '@/components/reactbits/ParticleBackground-TS-TW'
import { BlurText } from '@/components/reactbits/BlurText-TS-TW'

export function Hero() {
  return (
    <section className="relative h-screen">
      <ParticleBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <BlurText text="Build Something Stunning" className="text-6xl font-bold" />
      </div>
    </section>
  )
}
```

### Pattern 2: Animated Dashboard Cards

```tsx
import { AnimatedCard } from '@/components/reactbits/AnimatedCard-TS-TW'
import { FadeIn } from '@/components/reactbits/FadeIn-TS-TW'

export function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {metrics.map((metric, i) => (
        <FadeIn key={metric.id} delay={i * 0.1}>
          <AnimatedCard>
            <h3>{metric.title}</h3>
            <p>{metric.value}</p>
          </AnimatedCard>
        </FadeIn>
      ))}
    </div>
  )
}
```

### Pattern 3: Feature Section with Text Animation

```tsx
import { WavyText } from '@/components/reactbits/WavyText-TS-TW'
import { RevealLinks } from '@/components/reactbits/RevealLinks-TS-TW'

export function Features() {
  return (
    <section>
      <WavyText text="Our Features" className="text-4xl mb-8" />
      <RevealLinks links={featureLinks} />
    </section>
  )
}
```

## Using MCP Tools

When this plugin is active, use ReactBits MCP tools to discover and implement components:

**List all components:**
```
Use the list_components tool to see all available ReactBits components
```

**Search for specific needs:**
```
Use search_components with query "animated button" or "text effect"
```

**Get component code:**
```
Use get_component with name "BlurText-TS-TW" to retrieve source code
```

**View usage examples:**
```
Use get_component_example with name "ParticleBackground-TS-TW"
```

## Project Setup Checklist

Before using ReactBits components, ensure:

- [ ] React project is set up (Next.js, Vite, CRA, etc.)
- [ ] TypeScript configured (if using TS variants)
- [ ] Tailwind CSS installed and configured (if using TW variants)
- [ ] Component directory exists (typically `src/components/` or `app/components/`)
- [ ] Dependencies installed: `react`, `framer-motion` (common for animations)

## Customization Best Practices

**Props Customization:**
- Check component props using TypeScript IntelliSense
- Common props: `className`, `delay`, `duration`, `variant`, `color`
- Pass custom props for dynamic behavior

**Direct Source Editing:**
- ReactBits components are installed as source code, not npm packages
- Edit component files directly for deep customization
- Modify animations, colors, behaviors as needed
- No need to fork or eject—it's your code

**Theming:**
- Tailwind variants automatically respect your Tailwind theme
- Customize colors via `tailwind.config.js`
- Override component classes with custom utilities
- Use CSS variables for consistent theming

## Additional Resources

### Reference Files

For detailed information, consult these reference files as needed:

- **`references/component-catalog.md`** - Complete catalog of all 135+ components with descriptions and use cases
- **`references/animation-patterns.md`** - Common animation patterns, timing guidelines, and composition strategies
- **`references/best-practices.md`** - Performance optimization, accessibility considerations, and production tips

### Example Files

Working examples in `examples/`:

- **`hero-section.tsx`** - Complete hero section with animated background and text
- **`animated-card.tsx`** - Dashboard card with hover effects and animations
- **`background-demo.tsx`** - Multiple background component examples

### Utility Scripts

Helper scripts in `scripts/`:

- **`install-component.sh`** - Interactive component installation wizard

### Commands

Plugin commands available:

- `/browse-components` - Interactive component browser
- `/add-component` - Quick component installer with variant selection

### Design Assistant Agent

For complex design decisions, architectural guidance, or creative consultation, use the design-assistant agent. This specialized agent helps with:
- Component selection for specific use cases
- Animation timing and choreography
- Layout composition strategies
- Accessibility and performance considerations

## Common Workflows

### Workflow 1: Building a Landing Page

1. Start with hero section (background + animated text)
2. Add feature sections (UI components + text animations)
3. Include CTA sections (animated buttons or cards)
4. Add footer with ambient background animation
5. Test animations on scroll (use scroll-triggered components)

### Workflow 2: Creating a Portfolio

1. Hero with particle background and wavy text
2. Project grid with animated cards
3. About section with reveal animations
4. Contact section with interactive elements
5. Smooth scroll transitions between sections

### Workflow 3: Dashboard Interface

1. Keep standard UI elements standard (shadcn/ui)
2. Add ReactBits for metric cards (animated numbers)
3. Use subtle background effects (gradient mesh)
4. Add animated charts/visualizations (if available)
5. Implement smooth transitions between views

## Tips for Success

**Start Simple:**
- Begin with one or two components
- Master basics before complex compositions
- Test animations in isolation first
- Build complexity progressively

**Performance Matters:**
- Limit number of active animations
- Use `will-change` CSS property sparingly
- Prefer CSS/GPU-accelerated animations
- Test on lower-end devices

**Accessibility:**
- Respect `prefers-reduced-motion`
- Provide animation opt-outs
- Ensure text remains readable
- Don't rely solely on animation for information

**Composition Over Quantity:**
- A few well-placed animations > many scattered effects
- Use animations to guide attention
- Create visual hierarchy with motion
- Maintain consistency in animation style

## Next Steps

1. Browse available components using MCP tools or [reactbits.dev](https://reactbits.dev)
2. Identify components that fit your design needs
3. Install using CLI or copy-paste method
4. Customize via props or direct source editing
5. Compose multiple components for complex effects
6. Refer to reference files for detailed guidance
7. Use example files as starting points

Remember: ReactBits components are about making your interface memorable. Use them strategically where visual impact matters most, and combine them with traditional component libraries for a complete design system.
