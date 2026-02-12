# ReactBits Component Catalog

Complete catalog of 135+ ReactBits components organized by category with descriptions, use cases, and implementation guidance.

## Text Animations

Text animation components for creating dynamic, eye-catching typography effects.

### BlurText
**Description:** Animated text that transitions from blurred to sharp
**Use Cases:**
- Hero headlines with dramatic reveal
- Section titles that appear on scroll
- Loading states for content
**Props:** `text`, `duration`, `delay`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/BlurText-TS-TW`

### TypingEffect
**Description:** Simulates typing animation character-by-character
**Use Cases:**
- Interactive terminals or code demos
- Marketing copy with emphasis
- Storytelling interfaces
**Props:** `text`, `speed`, `cursor`, `onComplete`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/TypingEffect-TS-TW`

### WavyText
**Description:** Text with smooth wave animation across characters
**Use Cases:**
- Playful headlines
- Feature section titles
- Brand taglines with personality
**Props:** `text`, `amplitude`, `frequency`, `speed`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/WavyText-TS-TW`

### GlitchText
**Description:** Cyberpunk-style glitch effect on text
**Use Cases:**
- Tech/gaming brand headers
- Error states with style
- Futuristic UI themes
**Props:** `text`, `intensity`, `duration`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/GlitchText-TS-TW`

### GradientText
**Description:** Animated gradient overlay on text
**Use Cases:**
- Premium/luxury brand headlines
- Call-to-action text
- Highlighted key messages
**Props:** `text`, `gradient`, `animate`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/GradientText-TS-TW`

### FlipText
**Description:** 3D flip animation for text transitions
**Use Cases:**
- Rotating testimonials
- Dynamic stat displays
- Interactive headers
**Props:** `text`, `axis`, `duration`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/FlipText-TS-TW`

### ScrambleText
**Description:** Text that scrambles before settling into final form
**Use Cases:**
- Decoding/hacking themes
- Technical documentation intros
- Loading state for data-heavy content
**Props:** `text`, `scrambleDuration`, `characters`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/ScrambleText-TS-TW`

### SplitText
**Description:** Text with per-character or per-word split animations
**Use Cases:**
- Staggered entrance effects
- Complex text choreography
- Emphasis on individual words
**Props:** `text`, `splitBy`, `delay`, `animation`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/SplitText-TS-TW`

## UI Components

Interactive interface elements with built-in animations and effects.

### AnimatedCard
**Description:** Card component with hover and interaction animations
**Use Cases:**
- Product showcases
- Feature highlights
- Portfolio project cards
**Props:** `variant`, `hoverEffect`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/AnimatedCard-TS-TW`

### HoverButton
**Description:** Button with advanced hover effects (shimmer, ripple, etc.)
**Use Cases:**
- Primary CTAs
- Interactive navigation
- Highlighted actions
**Props:** `effect`, `color`, `size`, `children`, `onClick`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/HoverButton-TS-TW`

### ParallaxScroll
**Description:** Parallax scrolling effect for content layers
**Use Cases:**
- Landing page depth effects
- Storytelling layouts
- Immersive hero sections
**Props:** `speed`, `direction`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/ParallaxScroll-TS-TW`

### RevealLinks
**Description:** Links with sophisticated reveal animations
**Use Cases:**
- Navigation menus
- Feature lists
- Footer links
**Props:** `links`, `variant`, `direction`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/RevealLinks-TS-TW`

### InfiniteScroll
**Description:** Seamless infinite scrolling for content
**Use Cases:**
- Logo clouds/partner showcases
- Testimonial carousels
- Image galleries
**Props:** `items`, `speed`, `direction`, `pauseOnHover`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/InfiniteScroll-TS-TW`

### MagneticButton
**Description:** Button that follows cursor with magnetic effect
**Use Cases:**
- Premium interactive CTAs
- Creative portfolio sites
- Unique navigation elements
**Props:** `strength`, `radius`, `children`, `onClick`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/MagneticButton-TS-TW`

### GlowingCard
**Description:** Card with animated glow effect on hover
**Use Cases:**
- Premium feature cards
- Pricing tiers
- Highlighted content sections
**Props:** `glowColor`, `intensity`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/GlowingCard-TS-TW`

### ExpandableCard
**Description:** Card that expands to show additional content
**Use Cases:**
- FAQ sections
- Feature deep-dives
- Progressive content disclosure
**Props:** `expandedHeight`, `trigger`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/ExpandableCard-TS-TW`

### FloatingDock
**Description:** macOS-style floating dock navigation
**Use Cases:**
- App navigation
- Tool palettes
- Quick actions menu
**Props:** `items`, `position`, `size`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/FloatingDock-TS-TW`

### BentoGrid
**Description:** Animated bento-box style grid layout
**Use Cases:**
- Dashboard layouts
- Feature showcases
- Portfolio grids
**Props:** `items`, `columns`, `gap`, `animateOnHover`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/BentoGrid-TS-TW`

## Backgrounds

Animated background effects for sections, heroes, and full-page layouts.

### ParticleBackground
**Description:** Animated particle system with customizable behavior
**Use Cases:**
- Hero section backgrounds
- Full-page immersive experiences
- Tech/innovation themes
**Props:** `particleCount`, `speed`, `color`, `connections`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/ParticleBackground-TS-TW`

### GradientMesh
**Description:** Animated gradient mesh with smooth color transitions
**Use Cases:**
- Modern hero backgrounds
- Section dividers
- Ambient page backgrounds
**Props:** `colors`, `speed`, `complexity`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/GradientMesh-TS-TW`

### AnimatedGrid
**Description:** Grid pattern with animation effects
**Use Cases:**
- Tech/SaaS landing pages
- Blueprint/architecture themes
- Structured backgrounds
**Props:** `gridSize`, `lineColor`, `animation`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/AnimatedGrid-TS-TW`

### WaveBackground
**Description:** Smooth wave animations for backgrounds
**Use Cases:**
- Water/ocean themes
- Fluid brand identities
- Organic/natural aesthetics
**Props:** `waveCount`, `amplitude`, `speed`, `colors`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/WaveBackground-TS-TW`

### StarField
**Description:** Animated starfield with depth parallax
**Use Cases:**
- Space/astronomy themes
- Night mode backgrounds
- Sci-fi aesthetics
**Props:** `starCount`, `speed`, `layers`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/StarField-TS-TW`

### DotPattern
**Description:** Animated dot grid pattern background
**Use Cases:**
- Minimal modern backgrounds
- Section separators
- Subtle texture overlays
**Props:** `dotSize`, `spacing`, `color`, `animation`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/DotPattern-TS-TW`

### NoiseTexture
**Description:** Animated noise/grain texture overlay
**Use Cases:**
- Film/retro aesthetics
- Texture depth
- Organic feel
**Props:** `intensity`, `scale`, `animate`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/NoiseTexture-TS-TW`

### Aurora
**Description:** Northern lights style gradient animation
**Use Cases:**
- Premium hero backgrounds
- Ethereal brand aesthetics
- Artistic layouts
**Props:** `colors`, `speed`, `intensity`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/Aurora-TS-TW`

## Animations

Motion-based components for entrance effects, transitions, and micro-interactions.

### FadeIn
**Description:** Smooth fade-in animation
**Use Cases:**
- Content reveals
- Scroll-triggered appearances
- Progressive disclosure
**Props:** `duration`, `delay`, `direction`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/FadeIn-TS-TW`

### SlideIn
**Description:** Slide animation from specified direction
**Use Cases:**
- Modal entrances
- Sidebar reveals
- Content transitions
**Props:** `direction`, `duration`, `delay`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/SlideIn-TS-TW`

### ScaleIn
**Description:** Scale/zoom entrance animation
**Use Cases:**
- Image reveals
- Card appearances
- Attention-grabbing elements
**Props:** `from`, `duration`, `delay`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/ScaleIn-TS-TW`

### RotateIn
**Description:** Rotation entrance effect
**Use Cases:**
- Playful reveals
- Badge/icon animations
- Creative transitions
**Props:** `degrees`, `duration`, `delay`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/RotateIn-TS-TW`

### BounceIn
**Description:** Bouncy spring animation entrance
**Use Cases:**
- Playful interfaces
- Notification appearances
- Fun micro-interactions
**Props:** `intensity`, `duration`, `delay`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/BounceIn-TS-TW`

### StaggerChildren
**Description:** Stagger animations across child elements
**Use Cases:**
- List reveals
- Grid animations
- Sequential content appearance
**Props:** `staggerDelay`, `animation`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/StaggerChildren-TS-TW`

### ScrollReveal
**Description:** Scroll-triggered reveal animations
**Use Cases:**
- Scroll-based storytelling
- Progressive content disclosure
- Engagement-driven reveals
**Props:** `threshold`, `animation`, `once`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/ScrollReveal-TS-TW`

### MorphTransition
**Description:** Smooth morphing transition between states
**Use Cases:**
- State changes
- Content swaps
- Dynamic layouts
**Props:** `duration`, `ease`, `children`, `className`
**Variants:** JS-CSS, JS-TW, TS-CSS, TS-TW
**Installation:** `npx shadcn@latest add @react-bits/MorphTransition-TS-TW`

## Component Combinations

Suggested combinations for common use cases.

### Landing Page Hero
```tsx
<ParticleBackground /> // Background layer
<BlurText /> // Headline
<GradientText /> // Subheadline
<HoverButton /> // CTA
```

### Feature Section
```tsx
<WavyText /> // Section title
<BentoGrid> // Feature grid
  <AnimatedCard /> // Each feature
</BentoGrid>
```

### Dashboard
```tsx
<GradientMesh /> // Subtle background
<StaggerChildren> // Animate metrics
  <GlowingCard /> // Each metric card
</StaggerChildren>
```

### Portfolio Grid
```tsx
<DotPattern /> // Background texture
<ScrollReveal> // Scroll-based reveal
  <BentoGrid> // Project grid
    <ExpandableCard /> // Each project
  </BentoGrid>
</ScrollReveal>
```

## Selection Guide

**For Headlines:**
- Dramatic: BlurText, GlitchText
- Playful: WavyText, FlipText
- Premium: GradientText
- Technical: TypingEffect, ScrambleText

**For Backgrounds:**
- Tech/Modern: ParticleBackground, AnimatedGrid
- Artistic: Aurora, GradientMesh
- Minimal: DotPattern, NoiseTexture
- Natural: WaveBackground

**For Interactions:**
- Hover Effects: AnimatedCard, HoverButton, MagneticButton
- Scroll Effects: ParallaxScroll, ScrollReveal
- Navigation: FloatingDock, RevealLinks

**For Layouts:**
- Grids: BentoGrid
- Cards: AnimatedCard, GlowingCard, ExpandableCard
- Carousels: InfiniteScroll

## Quick Reference: Component by Purpose

### Attention-Grabbing
BlurText, GlitchText, ParticleBackground, Aurora, MagneticButton

### Professional/Corporate
GradientText, AnimatedGrid, DotPattern, FadeIn, RevealLinks

### Playful/Creative
WavyText, BounceIn, FlipText, FloatingDock

### Technical/Developer
TypingEffect, ScrambleText, AnimatedGrid, GlitchText

### Premium/Luxury
GradientText, Aurora, GlowingCard, GradientMesh

### Minimal/Clean
DotPattern, NoiseTexture, FadeIn, SlideIn

## Getting Component Details

To get more information about any component:

1. Use MCP `search_components` with component name
2. Use MCP `get_component` to retrieve source code
3. Use MCP `get_component_example` for usage examples
4. Visit [reactbits.dev](https://reactbits.dev) for interactive demos

## Notes

- All components support the four variants: JS-CSS, JS-TW, TS-CSS, TS-TW
- Most components are optimized for 60fps performance
- Components are fully customizable via props or direct source editing
- Installation via shadcn CLI or manual copy-paste
- Tree-shakeable and lightweight implementations
- Active development with new components added weekly
