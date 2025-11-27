import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-lg border px-2.5 py-0.5 text-body-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-brand-primary text-white hover:bg-brand-primary-light',
        secondary:
          'border-transparent bg-border-subtle text-text-primary hover:bg-border-subtle/80',
        success:
          'border-transparent bg-success/10 text-success hover:bg-success/20',
        warn: 'border-transparent bg-warn/10 text-warn hover:bg-warn/20',
        error: 'border-transparent bg-error/10 text-error hover:bg-error/20',
        outline: 'border-border-strong text-text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
