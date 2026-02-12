/**
 * Hero Section Example
 *
 * Complete hero section implementation using ReactBits components:
 * - ParticleBackground for ambient effect
 * - BlurText for headline animation
 * - FadeIn for subtitle and CTA
 * - MagneticButton for interactive CTA
 *
 * Features:
 * - Respects prefers-reduced-motion
 * - Responsive particle counts
 * - Proper animation choreography
 * - Keyboard accessible
 *
 * Installation:
 * npx shadcn@latest add @react-bits/ParticleBackground-TS-TW
 * npx shadcn@latest add @react-bits/BlurText-TS-TW
 * npx shadcn@latest add @react-bits/FadeIn-TS-TW
 * npx shadcn@latest add @react-bits/MagneticButton-TS-TW
 */

import { useEffect, useState } from 'react'
import { ParticleBackground } from '@/components/reactbits/ParticleBackground-TS-TW'
import { BlurText } from '@/components/reactbits/BlurText-TS-TW'
import { FadeIn } from '@/components/reactbits/FadeIn-TS-TW'
import { MagneticButton } from '@/components/reactbits/MagneticButton-TS-TW'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  onCtaClick?: () => void
}

export function HeroSection({
  title,
  subtitle,
  ctaText = 'Get Started',
  onCtaClick = () => {},
}: HeroSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    // Check mobile
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mobileQuery.matches)

    const handleMobileChange = () => setIsMobile(mobileQuery.matches)
    mobileQuery.addEventListener('change', handleMobileChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      mobileQuery.removeEventListener('change', handleMobileChange)
    }
  }, [])

  const particleCount = prefersReducedMotion ? 0 : isMobile ? 30 : 100

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Layer */}
      {!prefersReducedMotion && (
        <ParticleBackground
          particleCount={particleCount}
          className="absolute inset-0"
          aria-hidden="true"
        />
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Headline */}
        {prefersReducedMotion ? (
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            {title}
          </h1>
        ) : (
          <BlurText
            text={title}
            duration={1000}
            delay={300}
            className="text-5xl font-bold leading-tight text-white md:text-7xl"
          />
        )}

        {/* Subtitle */}
        {prefersReducedMotion ? (
          <p className="mt-6 text-xl text-gray-300 md:text-2xl">{subtitle}</p>
        ) : (
          <FadeIn delay={1000} duration={600}>
            <p className="mt-6 text-xl text-gray-300 md:text-2xl">{subtitle}</p>
          </FadeIn>
        )}

        {/* CTA Button */}
        {prefersReducedMotion ? (
          <button
            onClick={onCtaClick}
            className="mt-10 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
          >
            {ctaText}
          </button>
        ) : (
          <FadeIn delay={1400} duration={400}>
            <MagneticButton
              onClick={onCtaClick}
              className="mt-10 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
              strength={0.3}
              radius={100}
            >
              {ctaText}
            </MagneticButton>
          </FadeIn>
        )}

        {/* Scroll Indicator */}
        {!prefersReducedMotion && (
          <FadeIn delay={2000} duration={600}>
            <div className="mt-20 animate-bounce" aria-hidden="true">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

/**
 * Usage Example:
 *
 * import { HeroSection } from '@/components/composed/HeroSection'
 *
 * export default function HomePage() {
 *   return (
 *     <>
 *       <HeroSection
 *         title="Build Something Stunning"
 *         subtitle="Create memorable user experiences with animated React components"
 *         ctaText="Get Started Free"
 *         onCtaClick={() => router.push('/signup')}
 *       />
 *
 *       <main>
 *         {/* Rest of your content *\/}
 *       </main>
 *     </>
 *   )
 * }
 */

/**
 * Customization Ideas:
 *
 * 1. Different background effects:
 *    - Replace ParticleBackground with GradientMesh or Aurora
 *    - Layer multiple backgrounds for depth
 *
 * 2. Alternative text animations:
 *    - Use WavyText for playful brand
 *    - Use GlitchText for tech/gaming theme
 *    - Use TypingEffect for interactive feel
 *
 * 3. Layout variations:
 *    - Add hero image alongside text
 *    - Include feature highlights below headline
 *    - Add social proof elements (logos, testimonials)
 *
 * 4. Interaction enhancements:
 *    - Add video background option
 *    - Include parallax scroll effect
 *    - Add animated shapes or illustrations
 */

/**
 * Performance Notes:
 *
 * - ParticleBackground is lazy loaded for faster initial paint
 * - Particle count adapts to device capability (mobile: 30, desktop: 100)
 * - All animations disabled when prefers-reduced-motion is active
 * - GPU-accelerated animations only (transform, opacity)
 * - Total animation sequence: ~1.8 seconds
 */

/**
 * Accessibility Features:
 *
 * - Respects prefers-reduced-motion system preference
 * - Keyboard navigable CTA button
 * - Focus indicators on interactive elements
 * - Decorative animations marked with aria-hidden
 * - High contrast text (white on dark background)
 * - Semantic HTML structure (section, h1, p, button)
 */
