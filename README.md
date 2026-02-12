# ReactBits Frontend Design Skill

> Comprehensive skill for building stunning, production-grade React interfaces using ReactBits 135+ animated components.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![ReactBits](https://img.shields.io/badge/ReactBits-135%2B%20Components-blue)](https://reactbits.dev)
[![Agent Skill](https://img.shields.io/badge/Agent%20Skill-Anthropic%20Standard-green)](https://docs.anthropic.com)

## Overview

This skill teaches Claude Code and OpenClaw how to effectively use [ReactBits](https://reactbits.dev)—an open-source collection of 135+ animated, interactive React components. It provides comprehensive guidance on component selection, animation choreography, performance optimization, and accessibility best practices.

## Features

- 📖 **Core Skill** - Component selection strategies and integration patterns
- 📚 **Reference Guides** - Complete component catalog, animation patterns, best practices
- 💻 **Working Examples** - Copy-paste ready hero sections, cards, and backgrounds
- 🛠️ **Utility Scripts** - Interactive component installer
- ⚡ **Performance Optimized** - GPU acceleration, lazy loading, mobile optimization
- ♿ **Accessibility First** - WCAG AA compliance, prefers-reduced-motion support

## Installation

### Claude Code

```bash
# Install to plugins directory
cd ~/.claude/plugins
git clone https://github.com/unobtuse/reactbits-frontend-design-skill
cd reactbits-frontend-design-skill

# Make scripts executable
chmod +x scripts/*.sh
```

### OpenClaw

```bash
# Install to global skills directory
cd ~/.openclaw/skills
git clone https://github.com/unobtuse/reactbits-frontend-design-skill

# Make scripts executable
chmod +x reactbits-frontend-design-skill/scripts/*.sh
```

Or install via ClawHub:
```bash
npx clawhub@latest install reactbits-frontend-design-skill
```

## Usage

### Automatic Activation

The skill automatically triggers when you:
- "Build a frontend"
- "Create a React component"
- "Add animations"
- "Design a landing page"
- "Make it look modern"

### Manual Usage

Ask Claude Code or OpenClaw:
```
I need help building a hero section with animated backgrounds
```

Claude will automatically load this skill and provide expert guidance.

## What's Included

### Core Skill (SKILL.md)

~2,000 words of guidance on:
- When to use ReactBits vs standard components
- Component selection strategies
- Integration patterns
- Installation methods
- Project setup checklist

### Reference Guides

#### `references/component-catalog.md`
Complete catalog of all 135+ ReactBits components:
- Descriptions and use cases
- Installation commands
- Prop specifications
- Component combinations
- Selection guide by purpose

#### `references/animation-patterns.md`
Animation design guidance:
- The 12 principles of UI animation
- Duration standards and timing formulas
- Easing functions and decision trees
- Common animation patterns
- Choreography principles
- Performance optimization

#### `references/best-practices.md`
Production-ready best practices:
- Performance optimization (GPU acceleration, lazy loading)
- Accessibility implementation (WCAG compliance)
- Code organization strategies
- Maintenance and testing
- Common pitfalls and solutions
- Deployment checklist

### Working Examples

#### `examples/hero-section.tsx`
Complete hero section with:
- ParticleBackground for ambient effects
- BlurText for headline animation
- FadeIn for subtitle and CTA
- MagneticButton for interactive CTA
- Full accessibility support

#### `examples/animated-card.tsx`
Dashboard and feature cards:
- Metric cards with animated values
- Staggered grid animations
- Hover effects and interactions
- Feature and pricing card variants

#### `examples/background-demo.tsx`
All 8 background components:
- Interactive switcher
- Layered compositions
- Responsive configurations
- Use case recommendations

### Utility Scripts

#### `scripts/install-component.sh`
Interactive component installer:
- Category-based browsing
- Variant selection (JS/TS, CSS/Tailwind)
- Dependency checking
- Usage examples

## Quick Start

### 1. Install Components

```bash
# Use the helper script
bash scripts/install-component.sh

# Or directly via shadcn CLI
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/ParticleBackground-TS-TW
```

### 2. Copy Working Example

```bash
# Copy hero section to your project
cp examples/hero-section.tsx /your/project/components/
```

### 3. Customize

```tsx
import { BlurText } from '@/components/reactbits/BlurText-TS-TW'

<BlurText
  text="Build Something Stunning"
  duration={800}
  className="text-6xl font-bold"
/>
```

## Component Categories

### Text Animations (8 components)
BlurText, TypingEffect, WavyText, GlitchText, GradientText, FlipText, ScrambleText, SplitText

### UI Components (10+ components)
AnimatedCard, HoverButton, ParallaxScroll, RevealLinks, InfiniteScroll, MagneticButton, GlowingCard, ExpandableCard, FloatingDock, BentoGrid

### Backgrounds (8 components)
ParticleBackground, GradientMesh, AnimatedGrid, WaveBackground, StarField, DotPattern, NoiseTexture, Aurora

### Animations (8 components)
FadeIn, SlideIn, ScaleIn, RotateIn, BounceIn, StaggerChildren, ScrollReveal, MorphTransition

## Component Variants

All components available in 4 variants:

| Variant | Description | Recommended |
|---------|-------------|-------------|
| **JS-CSS** | JavaScript + CSS | |
| **JS-TW** | JavaScript + Tailwind | ✓ |
| **TS-CSS** | TypeScript + CSS | |
| **TS-TW** | TypeScript + Tailwind | ⭐ Best |

## Best Practices

### Performance
- ✅ Install only needed components (2-8KB each)
- ✅ Lazy load backgrounds (10-20KB)
- ✅ Reduce particles on mobile (30-50 vs 100-200)
- ✅ Limit concurrent animations (3-5 max)
- ✅ Animate only transform/opacity (GPU-accelerated)

### Accessibility
- ✅ Respect `prefers-reduced-motion`
- ✅ Provide keyboard navigation
- ✅ Include ARIA labels
- ✅ Maintain color contrast (WCAG AA)
- ✅ Don't rely solely on animation

### Code Organization
- ✅ Store in `src/components/reactbits/`
- ✅ Create composed patterns in `src/components/composed/`
- ✅ Use shadcn/ui for standard UI
- ✅ ReactBits for creative/animated elements

## Common Use Cases

### Landing Page Hero
```tsx
<ParticleBackground />
<BlurText text="Welcome" />
<FadeIn delay={1000}>
  <p>Subtitle</p>
</FadeIn>
<MagneticButton>Get Started</MagneticButton>
```

### Feature Section
```tsx
<WavyText text="Features" />
<BentoGrid>
  <AnimatedCard>Feature 1</AnimatedCard>
  <AnimatedCard>Feature 2</AnimatedCard>
</BentoGrid>
```

### Dashboard
```tsx
<GradientMesh />
<StaggerChildren staggerDelay={100}>
  <GlowingCard>Metric 1</GlowingCard>
  <GlowingCard>Metric 2</GlowingCard>
</StaggerChildren>
```

## Documentation

- **SKILL.md** - Core skill guidance
- **references/component-catalog.md** - All 135+ components
- **references/animation-patterns.md** - Timing and choreography
- **references/best-practices.md** - Performance and accessibility
- **examples/** - Working code examples

## Resources

- **ReactBits Website:** https://reactbits.dev
- **ReactBits GitHub:** https://github.com/DavidHDev/react-bits
- **MCP Server:** https://github.com/ceorkm/reactbits-mcp-server
- **Interactive Demos:** https://reactbits.dev/components

## Companion Projects

- **[ReactBits Design Assistant Agent](https://github.com/unobtuse/reactbits-design-assistant-agent)** - AI design consultant for expert guidance

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

### Areas for Improvement
- Additional example components
- More animation patterns
- Performance optimization guides
- Accessibility enhancements
- Testing strategies
- Video tutorials

## License

MIT License - see [LICENSE](LICENSE) for details

## Credits

- **ReactBits:** Created by [David Haz](https://github.com/DavidHDev)
- **Skill:** Created for Claude Code and OpenClaw
- **Agent Skill Standard:** [Anthropic](https://anthropic.com)

## Support

- **Issues:** [GitHub Issues](https://github.com/unobtuse/reactbits-frontend-design-skill/issues)
- **ReactBits Issues:** https://github.com/DavidHDev/react-bits/issues
- **Discord:** [Join the community](https://discord.gg/reactbits)

## Changelog

### v0.1.0 (2026-02-12)
- Initial release
- 135+ components catalog
- Complete reference guides
- Working examples
- Interactive installer

---

**Built with ❤️ for the Claude Code and OpenClaw communities**

⭐ Star this repo if you find it helpful!
