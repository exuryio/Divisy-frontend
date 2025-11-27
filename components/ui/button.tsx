import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-body-md font-medium transition-all duration-ui focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px]',
  {
    variants: {
      variant: {
        default:
          'bg-brand-primary text-white hover:bg-brand-primary-light active:bg-brand-primary-dark shadow-dds-1',
        secondary:
          'bg-surface border border-border-subtle text-text-primary hover:bg-surface/80 active:bg-surface/70',
        ghost: 'text-text-primary hover:bg-surface active:bg-surface/80',
        outline:
          'border border-border-strong bg-transparent text-text-primary hover:bg-surface active:bg-surface/80',
        link: 'text-brand-primary underline-offset-4 hover:underline p-0 min-h-0',
      },
      size: {
        sm: 'h-9 px-3 text-body-sm rounded-lg',
        md: 'h-10 px-4 text-body-md rounded-xl',
        lg: 'h-12 px-8 text-body-lg rounded-xl',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {children}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
