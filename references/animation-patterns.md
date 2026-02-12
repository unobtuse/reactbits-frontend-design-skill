# Animation Patterns and Timing Guidelines

Comprehensive guide to animation patterns, timing, choreography, and composition strategies for ReactBits components.

## Animation Fundamentals

### The 12 Principles of Animation (Applied to UI)

1. **Timing** - Duration affects perceived weight and personality
2. **Easing** - Natural motion uses acceleration/deceleration
3. **Staging** - Direct attention through motion hierarchy
4. **Follow-through** - Secondary animations after primary motion
5. **Anticipation** - Subtle pre-animation hints at coming motion
6. **Exaggeration** - Strategic emphasis for impact
7. **Arcs** - Natural curved motion paths
8. **Secondary Action** - Supporting animations enhance primary
9. **Solid Drawing** - Maintain visual weight through motion
10. **Appeal** - Animations should feel satisfying
11. **Squash and Stretch** - Convey material properties
12. **Straight Ahead vs Pose-to-Pose** - Different motion qualities

### UI Animation Categories

**Entrance Animations** - Elements appearing on screen
- Purpose: Introduce content smoothly
- Duration: 300-500ms
- Easing: ease-out or spring

**Exit Animations** - Elements leaving screen
- Purpose: Clear spatial understanding
- Duration: 200-300ms
- Easing: ease-in

**State Transitions** - Changes between states
- Purpose: Show relationship between states
- Duration: 200-400ms
- Easing: ease-in-out

**Ambient Animations** - Continuous subtle motion
- Purpose: Add life without distraction
- Duration: 2000-5000ms (looping)
- Easing: ease-in-out or linear

**Interaction Feedback** - Response to user input
- Purpose: Confirm action received
- Duration: 150-300ms
- Easing: ease-out or bounce

## Timing Guidelines

### Duration Standards

**Micro-interactions (100-300ms)**
- Button hover effects
- Tooltip appearances
- Icon state changes
- Focus indicators

**Standard UI (300-500ms)**
- Card reveals
- Modal openings
- Dropdown expansions
- Tab switching

**Emphasized Motion (500-800ms)**
- Page transitions
- Hero animations
- Feature reveals
- Complex choreography

**Ambient Background (2000-8000ms)**
- Particle systems
- Gradient meshes
- Wave backgrounds
- Atmospheric effects

### Timing Formula

For staggered animations:
```
Total Duration = Base Duration + (Item Count × Stagger Delay)
Stagger Delay = 50-100ms for fast, 100-200ms for medium, 200-400ms for slow
```

Example:
```tsx
// 5 items, 100ms stagger, 300ms base
// Total: 300ms + (5 × 100ms) = 800ms
<StaggerChildren staggerDelay={100}>
  {items.map((item) => (
    <FadeIn duration={300} key={item.id}>
      {item.content}
    </FadeIn>
  ))}
</StaggerChildren>
```

## Easing Functions

### Standard Easing Curves

**ease-in** - Slow start, fast end
- Use for: Exit animations, elements leaving attention
- Feel: Accelerating away
- CSS: `cubic-bezier(0.4, 0, 1, 1)`

**ease-out** - Fast start, slow end
- Use for: Entrance animations, elements entering attention
- Feel: Settling into place
- CSS: `cubic-bezier(0, 0, 0.2, 1)`

**ease-in-out** - Slow start and end, fast middle
- Use for: State transitions, symmetrical motion
- Feel: Smooth throughout
- CSS: `cubic-bezier(0.4, 0, 0.2, 1)`

**linear** - Constant speed
- Use for: Continuous motion, ambient animations
- Feel: Mechanical, predictable
- CSS: `linear`

### Custom Easing for Impact

**Bounce**
- Use for: Playful interactions, attention-grabbing
- CSS: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

**Anticipation**
- Use for: Emphasized actions, dramatic reveals
- CSS: `cubic-bezier(0.6, -0.28, 0.74, 0.05)`

**Spring**
- Use for: Natural, physics-based motion
- Framer Motion: `{ type: "spring", stiffness: 300, damping: 20 }`

**Elastic**
- Use for: Fun, bouncy interactions
- CSS: Custom keyframes or JS library

### Easing Decision Tree

```
Is it entering view?
  └─ Yes → ease-out
  └─ No → Is it exiting view?
      └─ Yes → ease-in
      └─ No → Is it changing state?
          └─ Yes → ease-in-out
          └─ No → Is it continuous/ambient?
              └─ Yes → linear or custom loop
```

## Animation Patterns

### Pattern 1: Sequential Reveal

**Use Case:** Landing page sections loading in order

```tsx
<div>
  <FadeIn delay={0}>
    <BlurText text="Welcome" />
  </FadeIn>
  <FadeIn delay={0.3}>
    <p>Subtitle content</p>
  </FadeIn>
  <FadeIn delay={0.6}>
    <HoverButton>Get Started</HoverButton>
  </FadeIn>
</div>
```

**Timing:**
- Base delay increment: 300ms
- Total sequence: 900ms + animation duration
- Easing: ease-out

### Pattern 2: Staggered Grid

**Use Case:** Portfolio or feature grid

```tsx
<StaggerChildren staggerDelay={100}>
  {projects.map((project) => (
    <ScaleIn key={project.id}>
      <AnimatedCard>{project.content}</AnimatedCard>
    </ScaleIn>
  ))}
</StaggerChildren>
```

**Timing:**
- Stagger: 100ms per item
- Base animation: 400ms
- Easing: ease-out with slight spring

### Pattern 3: Scroll-Triggered Cascade

**Use Case:** Content reveals as user scrolls

```tsx
<ScrollReveal threshold={0.3}>
  <StaggerChildren staggerDelay={150}>
    {features.map((feature) => (
      <SlideIn direction="up" key={feature.id}>
        <FeatureCard>{feature.content}</FeatureCard>
      </SlideIn>
    ))}
  </StaggerChildren>
</ScrollReveal>
```

**Timing:**
- Scroll threshold: 30% visible
- Stagger: 150ms
- Slide duration: 500ms
- Easing: ease-out

### Pattern 4: Hero Composition

**Use Case:** Landing page hero with multiple layers

```tsx
<div className="relative">
  {/* Background - loads first, subtle */}
  <ParticleBackground speed={0.5} />

  {/* Main headline - dramatic entrance */}
  <BlurText
    text="Build Something Stunning"
    duration={1000}
    delay={300}
  />

  {/* Subheadline - follows headline */}
  <FadeIn delay={1000} duration={600}>
    <GradientText text="With ReactBits" />
  </FadeIn>

  {/* CTA - appears last */}
  <ScaleIn delay={1400} duration={400}>
    <MagneticButton>Get Started</MagneticButton>
  </ScaleIn>
</div>
```

**Timing:**
- Background: Loads immediately (ambient)
- Headline: 300ms delay, 1000ms duration
- Subheadline: 1000ms delay, 600ms duration
- CTA: 1400ms delay, 400ms duration
- Total sequence: ~1800ms

### Pattern 5: Interactive Card Hover

**Use Case:** Card grid with coordinated hover effects

```tsx
<AnimatedCard
  hoverEffect="lift"
  className="transition-all duration-300"
>
  <GlowingCard glowColor="blue" intensity={0.5}>
    <h3 className="transition-transform group-hover:scale-105">
      {title}
    </h3>
    <p>{description}</p>
  </GlowingCard>
</AnimatedCard>
```

**Timing:**
- Card lift: 300ms ease-out
- Glow appearance: 200ms ease-in
- Title scale: 300ms ease-out
- Combined duration: 300ms (overlapping)

### Pattern 6: Attention Direction

**Use Case:** Guide user focus through animation sequence

```tsx
// First: Draw attention with motion
<BounceIn delay={0}>
  <Badge>New Feature</Badge>
</BounceIn>

// Second: Reveal context
<SlideIn direction="right" delay={400}>
  <FeatureHighlight />
</SlideIn>

// Third: Show action
<FadeIn delay={800}>
  <CallToAction />
</FadeIn>
```

**Timing:**
- Badge bounce: Immediate, 600ms
- Feature slide: 400ms delay, 500ms duration
- CTA fade: 800ms delay, 400ms duration
- Total attention sequence: 1200ms

### Pattern 7: Ambient Background Layers

**Use Case:** Depth through layered background motion

```tsx
<div className="relative">
  {/* Slowest layer - furthest back */}
  <GradientMesh speed={0.3} />

  {/* Medium layer */}
  <DotPattern animate speed={0.6} />

  {/* Fastest layer - closest */}
  <NoiseTexture animate speed={1.0} />

  {/* Content on top */}
  <Content />
</div>
```

**Timing:**
- Gradient: 8000ms loop
- Dots: 5000ms loop
- Noise: 3000ms loop
- Speed ratio creates parallax depth effect

### Pattern 8: Loading Skeleton to Content

**Use Case:** Smooth transition from loading state

```tsx
{isLoading ? (
  <BlurText text="Loading..." className="animate-pulse" />
) : (
  <FadeIn duration={500}>
    <StaggerChildren staggerDelay={80}>
      {content.map((item) => (
        <ContentCard key={item.id}>{item}</ContentCard>
      ))}
    </StaggerChildren>
  </FadeIn>
)}
```

**Timing:**
- Loading blur: Continuous pulse
- Content fade: 500ms ease-in
- Card stagger: 80ms increments
- Smooth transition with no jarring jump

## Animation Choreography

### Choreography Principles

**1. Establish Hierarchy**
- Most important elements animate first or with more emphasis
- Support elements follow or use subtler animation
- Background elements are ambient or slowest

**2. Create Flow**
- Animations should guide eye naturally through content
- Use direction to create reading path
- Maintain spatial relationships through motion

**3. Respect Timing**
- Don't overwhelm with simultaneous motion
- Allow animations to complete before starting unrelated motion
- Use stagger for related elements, delay for unrelated

**4. Maintain Consistency**
- Similar elements use similar animations
- Establish motion vocabulary for your app
- Consistent easing creates cohesive feel

### Choreography Examples

**Dashboard Metrics Load**
```
Timeline:
0ms:    Background gradient starts
200ms:  Header fades in
500ms:  Metric cards stagger (100ms each)
1200ms: Chart animates in
1600ms: Footer links reveal

Hierarchy: Background → Header → Metrics → Chart → Footer
```

**Feature Section Scroll**
```
Trigger: Section 50% visible
0ms:    Section title slides up
400ms:  Feature grid items stagger (120ms each)
1200ms: CTA button scales in

Hierarchy: Title → Features → Action
```

**Modal Open**
```
0ms:    Backdrop fades in (200ms)
100ms:  Modal scales + fades in (300ms)
400ms:  Content stagger reveals (80ms each)

Hierarchy: Context → Container → Content
```

## Performance Optimization

### GPU-Accelerated Properties

**Prefer animating:**
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (with caution)

**Avoid animating:**
- `width`, `height` (triggers layout)
- `top`, `left`, `margin`, `padding` (triggers layout)
- `color`, `background-color` (can trigger paint)

### Optimization Techniques

**1. Use `will-change` Sparingly**
```css
/* Good: Before animation starts */
.animating {
  will-change: transform, opacity;
}

/* Bad: Always on */
.always {
  will-change: transform; /* Creates unnecessary layers */
}
```

**2. Limit Concurrent Animations**
- Max 3-5 active animations simultaneously
- Stagger instead of simultaneous when possible
- Defer non-critical animations

**3. Use `requestAnimationFrame`**
```tsx
// Let browser optimize timing
const animate = () => {
  // Animation logic
  requestAnimationFrame(animate)
}
```

**4. Reduce Particle Counts**
```tsx
// Mobile: fewer particles
<ParticleBackground
  particleCount={isMobile ? 30 : 100}
/>
```

## Accessibility Considerations

### Respecting User Preferences

```tsx
// Check prefers-reduced-motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Conditionally apply animations
<AnimatedCard
  hoverEffect={prefersReducedMotion ? 'none' : 'lift'}
/>
```

### Animation Alternatives

**High motion (default):**
```tsx
<BlurText text="Welcome" duration={1000} />
```

**Reduced motion:**
```tsx
{prefersReducedMotion ? (
  <h1>Welcome</h1> // No animation
) : (
  <BlurText text="Welcome" duration={1000} />
)}
```

### WCAG Guidelines

- Animations should not flash more than 3 times per second
- Provide controls to pause/stop animations
- Ensure content is accessible without animation
- Don't convey information solely through animation

## Testing Animations

### Performance Testing

1. **Chrome DevTools**
   - FPS meter in Performance monitor
   - Frame rendering in Performance tab
   - Layer visualization

2. **Test on Target Devices**
   - Desktop: Check on lower-end machines
   - Mobile: Test on mid-range devices
   - Tablet: Verify touch interactions

3. **Network Throttling**
   - Slow 3G: Test loading sequences
   - Offline: Ensure graceful degradation

### Visual Testing

1. **Recording & Playback**
   - Record interactions at 60fps
   - Review frame-by-frame
   - Identify janky sections

2. **A/B Comparison**
   - Test with/without animations
   - Compare timing variations
   - Gather user feedback

3. **Cross-browser Testing**
   - Safari: Webkit differences
   - Firefox: Gecko rendering
   - Edge: Chromium consistency

## Common Timing Mistakes

### Mistake 1: Too Fast
```tsx
// ❌ Too fast, feels abrupt
<FadeIn duration={100}>

// ✅ Comfortable pace
<FadeIn duration={400}>
```

### Mistake 2: Too Slow
```tsx
// ❌ Too slow, feels sluggish
<SlideIn duration={1500}>

// ✅ Snappy but smooth
<SlideIn duration={500}>
```

### Mistake 3: No Stagger
```tsx
// ❌ All at once, overwhelming
{items.map((item) => (
  <FadeIn delay={0}>{item}</FadeIn>
))}

// ✅ Staggered, readable
<StaggerChildren staggerDelay={100}>
  {items.map((item) => <div>{item}</div>)}
</StaggerChildren>
```

### Mistake 4: Wrong Easing
```tsx
// ❌ Ease-in for entrance (feels backward)
<FadeIn ease="ease-in">

// ✅ Ease-out for entrance
<FadeIn ease="ease-out">
```

### Mistake 5: Too Many Simultaneous
```tsx
// ❌ Everything moving at once
<ParticleBackground />
<WavyText text="..." />
<AnimatedGrid />
<FloatingDock />
// User: "What do I look at?!"

// ✅ Focused attention
<GradientMesh /> // Subtle background only
<BlurText text="Focus Here" />
```

## Animation Decision Flowchart

```
Start
  │
  ├─ Is this user-initiated?
  │   ├─ Yes → Fast feedback (150-300ms)
  │   └─ No → Is it entrance/exit?
  │       ├─ Entrance → Ease-out (300-500ms)
  │       ├─ Exit → Ease-in (200-300ms)
  │       └─ Neither → Is it ambient?
  │           ├─ Yes → Long loop (2000-8000ms)
  │           └─ No → Standard transition (300-500ms)
  │
  └─ Multiple elements?
      ├─ Yes → Stagger (50-200ms between)
      └─ No → Single animation
```

## Quick Reference: Pattern Recipes

**Landing Hero:** Background (ambient) → Headline (800ms) → Subhead (600ms) → CTA (400ms)

**Feature Grid:** Title (500ms) → Cards (stagger 100ms × count)

**Dashboard Load:** Background (ambient) → Header (400ms) → Widgets (stagger 120ms × count)

**Modal Open:** Backdrop (200ms) → Modal (300ms) → Content (stagger 80ms × count)

**Scroll Section:** Trigger @ 30-50% visible → Title (500ms) → Content (stagger 150ms × count)

**Hover Card:** Lift (300ms) + Glow (200ms) + Content scale (300ms) - overlapping

## Summary

**Golden Rules:**
1. Entrance: 300-500ms, ease-out
2. Exit: 200-300ms, ease-in
3. Stagger: 50-150ms increments
4. Ambient: 2000ms+, subtle
5. Max 3-5 concurrent animations
6. Respect `prefers-reduced-motion`
7. Test on target devices
8. GPU properties only

**When in Doubt:**
- Duration: 400ms
- Easing: ease-out
- Stagger: 100ms
- Test and adjust based on feel
