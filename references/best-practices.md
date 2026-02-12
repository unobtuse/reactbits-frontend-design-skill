# ReactBits Best Practices

Production-ready guidance for performance, accessibility, maintainability, and optimization when using ReactBits components.

## Performance Best Practices

### 1. Component Installation Strategy

**Install Only What You Need**
```bash
# ❌ Don't install entire categories
# There's no "install all" - by design!

# ✅ Install specific components
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/ParticleBackground-TS-TW
```

**Why:** ReactBits is tree-shakeable. Only installed components affect bundle size.

### 2. Lazy Loading Components

**Code-Split Heavy Components**
```tsx
// Heavy animated background
const ParticleBackground = lazy(() =>
  import('@/components/reactbits/ParticleBackground-TS-TW')
)

export function Hero() {
  return (
    <Suspense fallback={<div className="bg-gradient-to-br from-blue-500 to-purple-600" />}>
      <ParticleBackground />
    </Suspense>
  )
}
```

**When to Lazy Load:**
- Background components (ParticleBackground, GradientMesh, etc.)
- Below-the-fold components
- Modal/dialog contents
- Components with heavy dependencies

**When NOT to Lazy Load:**
- Above-the-fold critical components
- Small, lightweight components
- Components needed immediately

### 3. Animation Performance

**GPU Acceleration**
```tsx
// ✅ Animate transform and opacity (GPU)
<AnimatedCard className="transition-transform duration-300" />

// ❌ Animate width/height (CPU, triggers layout)
<AnimatedCard className="transition-all duration-300" /> // 'all' includes layout properties
```

**Limit Active Animations**
```tsx
// ❌ Too many simultaneous
<ParticleBackground particleCount={500} />
<WavyText text="..." />
<AnimatedGrid />
<FloatingDock items={20} />

// ✅ Strategic placement
<GradientMesh /> // Single subtle background
<BlurText text="Focus" />
```

**Use will-change Strategically**
```tsx
// ✅ Add before animation starts, remove after
const [isAnimating, setIsAnimating] = useState(false)

<div
  className={isAnimating ? 'will-change-transform' : ''}
  onMouseEnter={() => setIsAnimating(true)}
  onAnimationEnd={() => setIsAnimating(false)}
/>

// ❌ Always on (creates unnecessary layers)
<div className="will-change-transform" /> // Never remove
```

### 4. Particle System Optimization

**Adaptive Particle Counts**
```tsx
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function OptimizedParticles() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isLowPower = useMediaQuery('(prefers-reduced-motion: reduce)')

  const particleCount = isLowPower ? 0 : isMobile ? 30 : 100

  return <ParticleBackground particleCount={particleCount} />
}
```

**Performance Monitoring**
```tsx
useEffect(() => {
  let frameCount = 0
  let lastTime = performance.now()

  const measureFPS = () => {
    frameCount++
    const currentTime = performance.now()

    if (currentTime >= lastTime + 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))

      // Reduce particles if FPS drops below 30
      if (fps < 30) {
        setParticleCount((count) => Math.max(20, count - 10))
      }

      frameCount = 0
      lastTime = currentTime
    }

    requestAnimationFrame(measureFPS)
  }

  measureFPS()
}, [])
```

### 5. Bundle Size Management

**Check Bundle Impact**
```bash
# Build and analyze
npm run build
npx vite-bundle-visualizer # or webpack-bundle-analyzer
```

**Component Size Estimates:**
- Text animations: 2-5KB
- Simple UI components: 3-8KB
- Complex backgrounds: 10-20KB
- Animation utilities: 1-3KB

**Target bundle increase:** <50KB for typical ReactBits usage

## Accessibility Best Practices

### 1. Respect prefers-reduced-motion

**Implement Global Check**
```tsx
// hooks/useReducedMotion.ts
import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}
```

**Apply Conditionally**
```tsx
export function AccessibleHero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {prefersReducedMotion ? (
        <h1 className="text-6xl font-bold">Build Something Stunning</h1>
      ) : (
        <BlurText text="Build Something Stunning" className="text-6xl font-bold" />
      )}
    </>
  )
}
```

**Background Alternatives**
```tsx
{prefersReducedMotion ? (
  <div className="bg-gradient-to-br from-blue-500 to-purple-600" />
) : (
  <ParticleBackground />
)}
```

### 2. Keyboard Navigation

**Ensure Interactive Elements Are Accessible**
```tsx
<HoverButton
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
  role="button"
  aria-label="Get started"
>
  Get Started
</HoverButton>
```

**Focus Indicators**
```tsx
<AnimatedCard
  className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
  tabIndex={0}
>
  {content}
</AnimatedCard>
```

### 3. Screen Reader Compatibility

**Announce Dynamic Content**
```tsx
<div role="status" aria-live="polite" aria-atomic="true">
  <TypingEffect
    text="Loading complete"
    onComplete={() => {
      // Screen readers will announce when complete
    }}
  />
</div>
```

**Hide Decorative Animations**
```tsx
<ParticleBackground aria-hidden="true" />
```

**Provide Text Alternatives**
```tsx
// If animation conveys information, provide alternative
<BlurText text="50% Off Sale" />
<span className="sr-only">Sale: 50% off all items</span>
```

### 4. Color Contrast

**Ensure Readable Text**
```tsx
// ❌ Low contrast
<GradientText
  text="Read me"
  gradient="from-gray-300 to-gray-400" // Light gray text
  className="text-sm"
/>

// ✅ High contrast
<GradientText
  text="Read me"
  gradient="from-white to-gray-100" // On dark background
  className="text-lg font-semibold"
/>
```

**Test Contrast Ratios:**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Use tools: WebAIM Contrast Checker, Chrome DevTools

### 5. WCAG Compliance Checklist

- [ ] No flashing content >3 times/second
- [ ] Animations can be paused/stopped
- [ ] Content accessible without animation
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets ratios
- [ ] ARIA labels on interactive elements
- [ ] Screen reader announcements for dynamic content

## Code Organization

### 1. Component Structure

**Organized Directory**
```
src/
├── components/
│   ├── reactbits/           # All ReactBits components
│   │   ├── BlurText-TS-TW.tsx
│   │   ├── ParticleBackground-TS-TW.tsx
│   │   └── AnimatedCard-TS-TW.tsx
│   ├── composed/            # Composed ReactBits patterns
│   │   ├── HeroSection.tsx  # Uses multiple ReactBits
│   │   ├── FeatureGrid.tsx
│   │   └── AnimatedDashboard.tsx
│   └── ui/                  # Standard UI (shadcn, etc.)
│       ├── button.tsx
│       └── input.tsx
└── lib/
    └── animation-utils.ts   # Shared animation logic
```

### 2. Reusable Composition Patterns

**Extract Common Patterns**
```tsx
// components/composed/HeroSection.tsx
import { ParticleBackground } from '@/components/reactbits/ParticleBackground-TS-TW'
import { BlurText } from '@/components/reactbits/BlurText-TS-TW'
import { FadeIn } from '@/components/reactbits/FadeIn-TS-TW'

export function HeroSection({ title, subtitle, cta }) {
  return (
    <section className="relative h-screen">
      <ParticleBackground className="absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <BlurText text={title} className="text-6xl font-bold" />
        <FadeIn delay={0.8}>
          <p className="mt-4 text-xl text-gray-300">{subtitle}</p>
        </FadeIn>
        <FadeIn delay={1.2}>
          {cta}
        </FadeIn>
      </div>
    </section>
  )
}
```

**Use Across Pages**
```tsx
// pages/index.tsx
<HeroSection
  title="Build Something Stunning"
  subtitle="With ReactBits animated components"
  cta={<HoverButton>Get Started</HoverButton>}
/>
```

### 3. Configuration Management

**Centralize Animation Config**
```tsx
// lib/animation-config.ts
export const animationConfig = {
  durations: {
    fast: 200,
    normal: 400,
    slow: 600,
  },
  delays: {
    stagger: 100,
    sequence: 300,
  },
  easing: {
    entrance: 'ease-out',
    exit: 'ease-in',
    transition: 'ease-in-out',
  },
}

// Use in components
import { animationConfig } from '@/lib/animation-config'

<FadeIn duration={animationConfig.durations.normal} />
```

### 4. TypeScript Best Practices

**Type Component Props**
```tsx
import { BlurText } from '@/components/reactbits/BlurText-TS-TW'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundVariant?: 'particles' | 'gradient' | 'waves'
}

export function Hero({ title, subtitle, backgroundVariant = 'particles' }: HeroProps) {
  return (
    <div className="relative">
      {/* Background based on variant */}
      <BlurText text={title} />
      {/* ... */}
    </div>
  )
}
```

**Extract Common Types**
```tsx
// types/animation.ts
export interface AnimationProps {
  duration?: number
  delay?: number
  ease?: 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
}

export interface ComponentWithAnimation extends AnimationProps {
  className?: string
  children?: React.ReactNode
}
```

## Maintenance Best Practices

### 1. Version Management

**Track ReactBits Updates**
```bash
# Check for component updates
# ReactBits components are source code, not npm packages
# Updates require manual replacement or git tracking
```

**Use Git for Components**
```bash
git add src/components/reactbits/
git commit -m "chore: add BlurText component from ReactBits"

# Later, when updating:
git diff src/components/reactbits/BlurText-TS-TW.tsx
# Review changes before accepting update
```

### 2. Documentation

**Document Custom Modifications**
```tsx
// components/reactbits/BlurText-TS-TW.tsx

/**
 * ReactBits BlurText Component
 * Original: https://reactbits.dev
 *
 * Customizations:
 * - Added custom blur radius control (line 45)
 * - Modified easing curve for slower effect (line 62)
 * - Added support for custom font families (line 30)
 *
 * Last updated: 2024-01-15
 */
```

### 3. Testing Strategy

**Visual Regression Tests**
```tsx
// Use Storybook or similar
export const HeroVariants = {
  args: {
    title: 'Test Title',
  },
  play: async ({ canvasElement }) => {
    // Test animations complete
    await waitFor(() => expect(canvasElement.querySelector('.blur-text')).toBeVisible())
  },
}
```

**Performance Tests**
```tsx
import { render } from '@testing-library/react'

test('ParticleBackground renders without performance issues', () => {
  const { container } = render(<ParticleBackground particleCount={100} />)

  // Measure render time
  const start = performance.now()
  container.querySelector('canvas')
  const end = performance.now()

  expect(end - start).toBeLessThan(50) // 50ms threshold
})
```

### 4. Code Reviews

**Review Checklist:**
- [ ] Only necessary components installed
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No more than 3-5 concurrent animations
- [ ] GPU-accelerated properties used
- [ ] Lazy loading for heavy components
- [ ] Keyboard navigation works
- [ ] Focus indicators present
- [ ] ARIA labels on interactive elements
- [ ] Performance tested on target devices
- [ ] Bundle size impact acceptable

## Common Pitfalls and Solutions

### Pitfall 1: Animation Overload

**Problem:**
```tsx
// Too many animations on one page
<ParticleBackground />
<WavyText />
<AnimatedGrid />
<GradientMesh />
<FloatingDock items={[...]} />
// User is overwhelmed, performance suffers
```

**Solution:**
```tsx
// Choose ONE dominant animation
<GradientMesh /> // Subtle background
<BlurText text="Focus Here" /> // Single animated element
// Rest is static or subtle
```

### Pitfall 2: Blocking Render

**Problem:**
```tsx
// Heavy animation blocks initial render
export default function Page() {
  return <ParticleBackground particleCount={500} /> // Blocks paint
}
```

**Solution:**
```tsx
// Lazy load and show fallback
const ParticleBackground = lazy(() => import('@/components/reactbits/ParticleBackground-TS-TW'))

export default function Page() {
  return (
    <Suspense fallback={<div className="bg-gradient-to-br from-blue-500 to-purple-600" />}>
      <ParticleBackground particleCount={500} />
    </Suspense>
  )
}
```

### Pitfall 3: Ignoring Mobile

**Problem:**
```tsx
// Same heavy animations on mobile
<ParticleBackground particleCount={300} />
```

**Solution:**
```tsx
const isMobile = useMediaQuery('(max-width: 768px)')

<ParticleBackground
  particleCount={isMobile ? 30 : 150}
  speed={isMobile ? 0.3 : 0.6}
/>
```

### Pitfall 4: Inaccessible Animations

**Problem:**
```tsx
// No reduced motion support
<BlurText text="Important Info" />
```

**Solution:**
```tsx
const prefersReducedMotion = useReducedMotion()

{prefersReducedMotion ? (
  <h1>Important Info</h1>
) : (
  <BlurText text="Important Info" />
)}
```

### Pitfall 5: Poor Timing

**Problem:**
```tsx
// All animate at once
{items.map((item) => (
  <FadeIn delay={0}>{item}</FadeIn> // No stagger
))}
```

**Solution:**
```tsx
<StaggerChildren staggerDelay={100}>
  {items.map((item) => (
    <FadeIn>{item}</FadeIn>
  ))}
</StaggerChildren>
```

## Deployment Checklist

Before deploying to production:

**Performance:**
- [ ] Bundle size increase <50KB
- [ ] Lazy loading for heavy components
- [ ] Performance tested on 3G network
- [ ] 60fps maintained on target devices
- [ ] No layout shifts from animations

**Accessibility:**
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible

**Code Quality:**
- [ ] TypeScript types complete
- [ ] Components organized logically
- [ ] Custom modifications documented
- [ ] No console warnings
- [ ] Code reviewed

**Testing:**
- [ ] Visual regression tests pass
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Mobile tested (iOS, Android)
- [ ] Performance metrics logged
- [ ] Error boundaries in place

**Documentation:**
- [ ] Component usage documented
- [ ] Animation patterns recorded
- [ ] Customizations noted
- [ ] Team trained on ReactBits

## Monitoring in Production

### Performance Monitoring

```tsx
// Track animation performance
useEffect(() => {
  if (typeof window !== 'undefined' && window.performance) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'measure') {
          // Log to analytics
          analytics.track('animation_performance', {
            name: entry.name,
            duration: entry.duration,
          })
        }
      })
    })

    observer.observe({ entryTypes: ['measure'] })
  }
}, [])
```

### Error Tracking

```tsx
import * as Sentry from '@sentry/react'

function AnimatedHero() {
  return (
    <Sentry.ErrorBoundary fallback={<StaticHero />}>
      <ParticleBackground />
      <BlurText text="Welcome" />
    </Sentry.ErrorBoundary>
  )
}
```

### User Metrics

Track:
- Animation completion rates
- User engagement with animated elements
- Performance metrics (FPS, load time)
- Error rates for animated components
- `prefers-reduced-motion` usage

## Resources

**Official:**
- ReactBits: https://reactbits.dev
- GitHub: https://github.com/DavidHDev/react-bits
- Discord: Community support

**Tools:**
- Chrome DevTools Performance
- Lighthouse Performance Audits
- WebAIM Contrast Checker
- axe DevTools (Accessibility)

**Related Libraries:**
- Framer Motion: https://www.framer.com/motion/
- React Spring: https://www.react-spring.dev/
- GSAP: https://greensock.com/gsap/

**Learning:**
- UI Animation Principles: https://material.io/design/motion
- Web Animation Best Practices: https://web.dev/animations/
- Accessibility Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

## Summary

**Top 10 Best Practices:**

1. **Install only needed components** - Keep bundle size minimal
2. **Respect prefers-reduced-motion** - Accessibility first
3. **Lazy load heavy components** - Improve initial load
4. **Limit concurrent animations** - Max 3-5 at once
5. **Use GPU-accelerated properties** - Transform and opacity only
6. **Test on target devices** - Especially mobile
7. **Stagger related elements** - 50-150ms increments
8. **Provide keyboard navigation** - All interactive elements
9. **Monitor performance** - Track FPS and load times
10. **Document customizations** - Help future maintainers

Remember: ReactBits components should enhance the user experience, not distract from it. Use animations strategically where they add value, and always prioritize performance and accessibility.
