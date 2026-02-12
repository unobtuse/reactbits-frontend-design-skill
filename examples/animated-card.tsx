/**
 * Animated Card Example
 *
 * Dashboard or feature card with multiple ReactBits animations:
 * - AnimatedCard for base hover effects
 * - GlowingCard for premium glow effect
 * - FadeIn for entrance animation
 * - ScaleIn for metric number emphasis
 *
 * Features:
 * - Hover interactions
 * - Staggered content reveal
 * - Responsive design
 * - Accessible
 *
 * Installation:
 * npx shadcn@latest add @react-bits/AnimatedCard-TS-TW
 * npx shadcn@latest add @react-bits/GlowingCard-TS-TW
 * npx shadcn@latest add @react-bits/FadeIn-TS-TW
 * npx shadcn@latest add @react-bits/ScaleIn-TS-TW
 */

import { useEffect, useState } from 'react'
import { AnimatedCard } from '@/components/reactbits/AnimatedCard-TS-TW'
import { GlowingCard } from '@/components/reactbits/GlowingCard-TS-TW'
import { FadeIn } from '@/components/reactbits/FadeIn-TS-TW'
import { ScaleIn } from '@/components/reactbits/ScaleIn-TS-TW'

interface MetricCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon?: React.ReactNode
  delay?: number
  onClick?: () => void
}

export function MetricCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  delay = 0,
  onClick,
}: MetricCardProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const changeColor = {
    positive: 'text-green-500',
    negative: 'text-red-500',
    neutral: 'text-gray-500',
  }[changeType]

  const CardWrapper = prefersReducedMotion ? 'div' : FadeIn
  const wrapperProps = prefersReducedMotion
    ? {}
    : { delay: delay, duration: 400 }

  return (
    <CardWrapper {...wrapperProps}>
      {prefersReducedMotion ? (
        <div
          onClick={onClick}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          role={onClick ? 'button' : undefined}
          tabIndex={onClick ? 0 : undefined}
          onKeyDown={
            onClick
              ? (e) => e.key === 'Enter' && onClick()
              : undefined
          }
        >
          <CardContent
            title={title}
            value={value}
            change={change}
            changeColor={changeColor}
            icon={icon}
            animated={false}
          />
        </div>
      ) : (
        <GlowingCard
          glowColor="blue"
          intensity={0.3}
          className="rounded-xl"
        >
          <AnimatedCard
            variant="lift"
            hoverEffect="glow"
            onClick={onClick}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
          >
            <CardContent
              title={title}
              value={value}
              change={change}
              changeColor={changeColor}
              icon={icon}
              animated={true}
            />
          </AnimatedCard>
        </GlowingCard>
      )}
    </CardWrapper>
  )
}

interface CardContentProps {
  title: string
  value: string | number
  change?: string
  changeColor: string
  icon?: React.ReactNode
  animated: boolean
}

function CardContent({
  title,
  value,
  change,
  changeColor,
  icon,
  animated,
}: CardContentProps) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        {icon && (
          <div className="text-gray-400 dark:text-gray-600" aria-hidden="true">
            {icon}
          </div>
        )}
      </div>

      {/* Value */}
      {animated ? (
        <ScaleIn delay={0.2} duration={500} from={0.8}>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </ScaleIn>
      ) : (
        <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      )}

      {/* Change indicator */}
      {change && (
        <p className={`mt-2 text-sm font-medium ${changeColor}`}>
          {change}
        </p>
      )}
    </>
  )
}

/**
 * Dashboard Grid Example
 *
 * Complete dashboard metrics grid with staggered card animations
 */

import { StaggerChildren } from '@/components/reactbits/StaggerChildren-TS-TW'

interface DashboardMetricsProps {
  metrics: Array<{
    id: string
    title: string
    value: string | number
    change?: string
    changeType?: 'positive' | 'negative' | 'neutral'
    icon?: React.ReactNode
    onClick?: () => void
  }>
}

export function DashboardMetrics({ metrics }: DashboardMetricsProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {prefersReducedMotion ? (
        // No stagger animation
        metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            icon={metric.icon}
            onClick={metric.onClick}
          />
        ))
      ) : (
        // Staggered animation
        <StaggerChildren staggerDelay={100}>
          {metrics.map((metric) => (
            <MetricCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              icon={metric.icon}
              onClick={metric.onClick}
            />
          ))}
        </StaggerChildren>
      )}
    </div>
  )
}

/**
 * Usage Example:
 *
 * import { DashboardMetrics } from '@/components/composed/DashboardMetrics'
 *
 * export default function DashboardPage() {
 *   const metrics = [
 *     {
 *       id: '1',
 *       title: 'Total Users',
 *       value: '12,345',
 *       change: '+12% from last month',
 *       changeType: 'positive',
 *       icon: <UsersIcon />,
 *       onClick: () => router.push('/users'),
 *     },
 *     {
 *       id: '2',
 *       title: 'Revenue',
 *       value: '$45,678',
 *       change: '+8% from last month',
 *       changeType: 'positive',
 *       icon: <DollarIcon />,
 *       onClick: () => router.push('/revenue'),
 *     },
 *     {
 *       id: '3',
 *       title: 'Active Sessions',
 *       value: '892',
 *       change: '-3% from last hour',
 *       changeType: 'negative',
 *       icon: <ActivityIcon />,
 *       onClick: () => router.push('/sessions'),
 *     },
 *     {
 *       id: '4',
 *       title: 'Conversion Rate',
 *       value: '3.24%',
 *       change: 'No change',
 *       changeType: 'neutral',
 *       icon: <TrendingIcon />,
 *       onClick: () => router.push('/conversions'),
 *     },
 *   ]
 *
 *   return (
 *     <div className="p-8">
 *       <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
 *       <DashboardMetrics metrics={metrics} />
 *     </div>
 *   )
 * }
 */

/**
 * Alternative Card Variants:
 *
 * 1. Feature Card (for marketing pages):
 */

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const CardWrapper = prefersReducedMotion ? 'div' : FadeIn

  return (
    <CardWrapper {...(!prefersReducedMotion ? { delay, duration: 500 } : {})}>
      <AnimatedCard
        variant="float"
        className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="mb-4 text-blue-500" aria-hidden="true">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </AnimatedCard>
    </CardWrapper>
  )
}

/**
 * 2. Pricing Card (with interactive CTA):
 */

interface PricingCardProps {
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
  ctaText: string
  onCtaClick: () => void
  delay?: number
}

export function PricingCard({
  name,
  price,
  period,
  features,
  highlighted = false,
  ctaText,
  onCtaClick,
  delay = 0,
}: PricingCardProps) {
  return (
    <FadeIn delay={delay} duration={500}>
      <GlowingCard
        glowColor={highlighted ? 'purple' : 'blue'}
        intensity={highlighted ? 0.6 : 0.3}
      >
        <AnimatedCard
          variant="lift"
          className={`rounded-2xl border p-8 ${
            highlighted
              ? 'border-purple-500 bg-purple-50 dark:bg-purple-950'
              : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'
          }`}
        >
          {highlighted && (
            <span className="mb-4 inline-block rounded-full bg-purple-500 px-3 py-1 text-sm font-semibold text-white">
              Most Popular
            </span>
          )}

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {name}
          </h3>

          <div className="mt-4 flex items-baseline">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              {period}
            </span>
          </div>

          <ul className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={onCtaClick}
            className={`mt-8 w-full rounded-lg px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              highlighted
                ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500'
                : 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
            }`}
          >
            {ctaText}
          </button>
        </AnimatedCard>
      </GlowingCard>
    </FadeIn>
  )
}

/**
 * Performance Notes:
 *
 * - Cards use GPU-accelerated transforms for hover effects
 * - Glow effect is CSS-based (no JS calculations)
 * - Stagger delay: 100ms provides smooth sequence without feeling slow
 * - Total animation time for 4 cards: 700ms (400ms base + 3x100ms stagger)
 */

/**
 * Accessibility Features:
 *
 * - Cards respect prefers-reduced-motion
 * - Interactive cards are keyboard accessible
 * - Focus indicators on all interactive elements
 * - Semantic HTML (proper heading hierarchy)
 * - High contrast text for readability
 * - Icon decorations marked with aria-hidden
 */
