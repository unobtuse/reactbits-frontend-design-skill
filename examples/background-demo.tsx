/**
 * Background Components Demo
 *
 * Comprehensive examples of all ReactBits background components:
 * - ParticleBackground
 * - GradientMesh
 * - AnimatedGrid
 * - WaveBackground
 * - StarField
 * - DotPattern
 * - Aurora
 *
 * Features:
 * - Switchable background demos
 * - Performance optimized
 * - Responsive configurations
 * - Accessibility support
 *
 * Installation (install backgrounds as needed):
 * npx shadcn@latest add @react-bits/ParticleBackground-TS-TW
 * npx shadcn@latest add @react-bits/GradientMesh-TS-TW
 * npx shadcn@latest add @react-bits/AnimatedGrid-TS-TW
 * npx shadcn@latest add @react-bits/WaveBackground-TS-TW
 * npx shadcn@latest add @react-bits/StarField-TS-TW
 * npx shadcn@latest add @react-bits/DotPattern-TS-TW
 * npx shadcn@latest add @react-bits/Aurora-TS-TW
 */

import { useState, useEffect } from 'react'
import { ParticleBackground } from '@/components/reactbits/ParticleBackground-TS-TW'
import { GradientMesh } from '@/components/reactbits/GradientMesh-TS-TW'
import { AnimatedGrid } from '@/components/reactbits/AnimatedGrid-TS-TW'
import { WaveBackground } from '@/components/reactbits/WaveBackground-TS-TW'
import { StarField } from '@/components/reactbits/StarField-TS-TW'
import { DotPattern } from '@/components/reactbits/DotPattern-TS-TW'
import { Aurora } from '@/components/reactbits/Aurora-TS-TW'

/**
 * Background Selection Demo
 *
 * Interactive demo to switch between different background types
 */

type BackgroundType =
  | 'particles'
  | 'gradient'
  | 'grid'
  | 'waves'
  | 'stars'
  | 'dots'
  | 'aurora'
  | 'none'

export function BackgroundDemo() {
  const [activeBackground, setActiveBackground] = useState<BackgroundType>('gradient')
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    const mobileQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mobileQuery.matches)
    const handleMobileChange = () => setIsMobile(mobileQuery.matches)
    mobileQuery.addEventListener('change', handleMobileChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      mobileQuery.removeEventListener('change', handleMobileChange)
    }
  }, [])

  const backgrounds = [
    { id: 'particles', name: 'Particles', description: 'Animated particle system' },
    { id: 'gradient', name: 'Gradient Mesh', description: 'Flowing gradient colors' },
    { id: 'grid', name: 'Animated Grid', description: 'Tech grid pattern' },
    { id: 'waves', name: 'Waves', description: 'Fluid wave motion' },
    { id: 'stars', name: 'Starfield', description: 'Space parallax stars' },
    { id: 'dots', name: 'Dot Pattern', description: 'Minimal dot grid' },
    { id: 'aurora', name: 'Aurora', description: 'Northern lights effect' },
    { id: 'none', name: 'None', description: 'Solid color only' },
  ] as const

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-gray-900">
        {!prefersReducedMotion && (
          <>
            {activeBackground === 'particles' && (
              <ParticleBackground
                particleCount={isMobile ? 30 : 100}
                speed={0.5}
                color="#3b82f6"
                connections={true}
              />
            )}
            {activeBackground === 'gradient' && (
              <GradientMesh
                colors={['#3b82f6', '#8b5cf6', '#ec4899']}
                speed={0.3}
                complexity={3}
              />
            )}
            {activeBackground === 'grid' && (
              <AnimatedGrid
                gridSize={50}
                lineColor="rgba(59, 130, 246, 0.3)"
                animation="pulse"
              />
            )}
            {activeBackground === 'waves' && (
              <WaveBackground
                waveCount={3}
                amplitude={50}
                speed={0.5}
                colors={['#3b82f6', '#8b5cf6', '#ec4899']}
              />
            )}
            {activeBackground === 'stars' && (
              <StarField
                starCount={isMobile ? 100 : 300}
                speed={0.5}
                layers={3}
              />
            )}
            {activeBackground === 'dots' && (
              <DotPattern
                dotSize={2}
                spacing={30}
                color="rgba(59, 130, 246, 0.5)"
                animation="fade"
              />
            )}
            {activeBackground === 'aurora' && (
              <Aurora
                colors={['#3b82f6', '#8b5cf6', '#ec4899', '#10b981']}
                speed={0.4}
                intensity={0.7}
              />
            )}
          </>
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            ReactBits Backgrounds
          </h1>
          <p className="mb-12 text-xl text-gray-300">
            Choose a background style to see it in action
          </p>

          {/* Background Selector */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {backgrounds.map((bg) => (
              <button
                key={bg.id}
                onClick={() => setActiveBackground(bg.id as BackgroundType)}
                className={`rounded-lg border-2 p-4 text-left transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                  activeBackground === bg.id
                    ? 'border-white bg-white/10 shadow-lg'
                    : 'border-white/30 bg-white/5 hover:border-white/50 hover:bg-white/10'
                }`}
              >
                <h3 className="font-semibold text-white">{bg.name}</h3>
                <p className="text-sm text-gray-300">{bg.description}</p>
              </button>
            ))}
          </div>

          {prefersReducedMotion && (
            <p className="mt-8 rounded-lg bg-yellow-500/20 p-4 text-yellow-200">
              Animations are disabled based on your system preferences
              (prefers-reduced-motion)
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Individual Background Examples
 *
 * Ready-to-use configurations for specific use cases
 */

// 1. Tech/SaaS Landing Page
export function TechHeroBackground() {
  return (
    <div className="relative h-screen">
      <AnimatedGrid
        gridSize={40}
        lineColor="rgba(59, 130, 246, 0.2)"
        animation="pulse"
        className="absolute inset-0"
      />
      <DotPattern
        dotSize={1}
        spacing={20}
        color="rgba(139, 92, 246, 0.3)"
        animation="fade"
        className="absolute inset-0"
      />
      {/* Your content */}
    </div>
  )
}

// 2. Creative Agency / Portfolio
export function CreativeHeroBackground() {
  return (
    <div className="relative h-screen">
      <GradientMesh
        colors={['#ec4899', '#8b5cf6', '#3b82f6', '#10b981']}
        speed={0.4}
        complexity={4}
        className="absolute inset-0"
      />
      {/* Your content */}
    </div>
  )
}

// 3. Space / Sci-Fi Theme
export function SpaceBackground() {
  return (
    <div className="relative h-screen">
      <StarField
        starCount={500}
        speed={0.3}
        layers={4}
        className="absolute inset-0"
      />
      <ParticleBackground
        particleCount={50}
        speed={0.2}
        color="#ffffff"
        connections={false}
        className="absolute inset-0"
      />
      {/* Your content */}
    </div>
  )
}

// 4. Water / Ocean Theme
export function OceanBackground() {
  return (
    <div className="relative h-screen">
      <WaveBackground
        waveCount={4}
        amplitude={60}
        speed={0.6}
        colors={['#3b82f6', '#06b6d4', '#0ea5e9', '#0284c7']}
        className="absolute inset-0"
      />
      {/* Your content */}
    </div>
  )
}

// 5. Premium / Luxury Brand
export function LuxuryBackground() {
  return (
    <div className="relative h-screen">
      <Aurora
        colors={['#8b5cf6', '#ec4899', '#f59e0b', '#3b82f6']}
        speed={0.3}
        intensity={0.8}
        className="absolute inset-0"
      />
      {/* Your content */}
    </div>
  )
}

// 6. Minimal / Clean Design
export function MinimalBackground() {
  return (
    <div className="relative h-screen bg-white dark:bg-gray-900">
      <DotPattern
        dotSize={2}
        spacing={40}
        color="rgba(0, 0, 0, 0.05)"
        animation="none"
        className="absolute inset-0 dark:opacity-20"
      />
      {/* Your content */}
    </div>
  )
}

/**
 * Layered Background Example
 *
 * Combine multiple backgrounds for depth
 */

export function LayeredBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px)')
    setIsMobile(query.matches)
    const handler = () => setIsMobile(query.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return (
    <div className="relative h-screen">
      {/* Background layer - slowest */}
      <GradientMesh
        colors={['#1e293b', '#312e81', '#1e3a8a']}
        speed={0.2}
        complexity={2}
        className="absolute inset-0"
      />

      {/* Middle layer - medium speed */}
      <DotPattern
        dotSize={1}
        spacing={30}
        color="rgba(255, 255, 255, 0.1)"
        animation="fade"
        className="absolute inset-0"
      />

      {/* Foreground layer - fastest (creates parallax) */}
      {!isMobile && (
        <ParticleBackground
          particleCount={50}
          speed={0.8}
          color="#ffffff"
          connections={true}
          className="absolute inset-0"
        />
      )}

      {/* Your content */}
    </div>
  )
}

/**
 * Responsive Background Configuration
 *
 * Adapts to device capability
 */

export function ResponsiveBackground() {
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mobileQuery.matches)
    const handleMobile = () => setIsMobile(mobileQuery.matches)
    mobileQuery.addEventListener('change', handleMobile)

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(motionQuery.matches)
    const handleMotion = () => setPrefersReducedMotion(motionQuery.matches)
    motionQuery.addEventListener('change', handleMotion)

    return () => {
      mobileQuery.removeEventListener('change', handleMobile)
      motionQuery.removeEventListener('change', handleMotion)
    }
  }, [])

  if (prefersReducedMotion) {
    // Static gradient for reduced motion
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900" />
    )
  }

  if (isMobile) {
    // Lighter animation for mobile
    return (
      <GradientMesh
        colors={['#3b82f6', '#8b5cf6']}
        speed={0.2}
        complexity={2}
        className="absolute inset-0"
      />
    )
  }

  // Full animation for desktop
  return (
    <div className="absolute inset-0">
      <GradientMesh
        colors={['#3b82f6', '#8b5cf6', '#ec4899']}
        speed={0.4}
        complexity={4}
      />
      <ParticleBackground
        particleCount={100}
        speed={0.5}
        color="#ffffff"
        connections={true}
      />
    </div>
  )
}

/**
 * Performance Best Practices:
 *
 * 1. Reduce particle counts on mobile (30-50 vs 100-200)
 * 2. Lower complexity on gradient mesh for mobile
 * 3. Disable heavy backgrounds for prefers-reduced-motion
 * 4. Use single background instead of layering on low-end devices
 * 5. Test FPS and throttle if drops below 30fps
 */

/**
 * Customization Guide:
 *
 * ParticleBackground:
 * - particleCount: More = denser (30-50 mobile, 100-200 desktop)
 * - speed: 0.1-1.0 (0.5 is good default)
 * - color: Hex color string
 * - connections: Boolean, draws lines between particles
 *
 * GradientMesh:
 * - colors: Array of hex colors (3-5 recommended)
 * - speed: 0.1-0.5 (slower is more subtle)
 * - complexity: 1-5 (2-3 is good default)
 *
 * AnimatedGrid:
 * - gridSize: Pixels between grid lines (30-60)
 * - lineColor: RGBA color with alpha for transparency
 * - animation: 'pulse' | 'fade' | 'none'
 *
 * WaveBackground:
 * - waveCount: Number of wave layers (2-4)
 * - amplitude: Wave height in pixels (30-80)
 * - speed: Animation speed (0.3-0.8)
 * - colors: Array of colors for wave layers
 *
 * StarField:
 * - starCount: Number of stars (100-500)
 * - speed: Parallax speed (0.2-0.6)
 * - layers: Depth layers for parallax (2-4)
 *
 * DotPattern:
 * - dotSize: Dot radius in pixels (1-3)
 * - spacing: Space between dots (20-50)
 * - color: RGBA with low alpha (0.1-0.3)
 * - animation: 'fade' | 'pulse' | 'none'
 *
 * Aurora:
 * - colors: Array of 3-5 colors
 * - speed: 0.2-0.5 (slower = more graceful)
 * - intensity: 0.5-1.0 (brightness/saturation)
 */

/**
 * Use Case Recommendations:
 *
 * SaaS/Tech: AnimatedGrid + DotPattern
 * Creative/Agency: GradientMesh or Aurora
 * Portfolio: GradientMesh + ParticleBackground (light)
 * E-commerce: Minimal DotPattern or solid gradient
 * Gaming: ParticleBackground or StarField
 * Finance: Subtle DotPattern or AnimatedGrid
 * Health/Wellness: WaveBackground with calm colors
 * Education: Clean DotPattern or light GradientMesh
 */
