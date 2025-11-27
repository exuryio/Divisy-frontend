'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingUp, DollarSign, Users } from 'lucide-react'

interface KPIStatProps {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  index: number
}

function KPIStat({ icon: Icon, value, label, index }: KPIStatProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10">
          <Icon className="h-8 w-8 text-brand-accent" />
        </div>
      </div>
      <div className="mb-2 text-display-2 font-semibold text-brand-primary">{value}</div>
      <div className="text-body-md text-text-muted">{label}</div>
    </motion.div>
  )
}

interface KPIStatsProps {
  stats: Array<{
    icon: React.ComponentType<{ className?: string }>
    value: string
    label: string
  }>
}

export function KPIStats({ stats }: KPIStatsProps) {
  return (
    <section id="impact" className="py-20">
      <div className="container-content">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-heading-1 text-text-primary lg:text-display-2">
            Measurable Impact
          </h2>
          <p className="mx-auto max-w-2xl text-body-lg text-text-muted">Results that matter</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <KPIStat key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export const defaultKPIs = [
  { icon: Clock, value: '35%', label: 'Faster Time-to-Market' },
  { icon: TrendingUp, value: '99.95%', label: 'Uptime' },
  { icon: DollarSign, value: '22%', label: 'Lower Infrastructure Costs' },
  { icon: Users, value: '4.8/5', label: 'Client NPS' },
]

