'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'relative flex flex-col justify-between w-full p-8 overflow-hidden rounded-2xl border border-void/8 transition-shadow duration-300 ease-in-out group hover:shadow-lg',
  {
    variants: {
      variant: {
        cream: 'bg-cream text-void',
        warm: 'bg-cream-warm text-void',
        white: 'bg-white text-void',
        saffron: 'bg-saffron text-void',
      },
    },
    defaultVariants: {
      variant: 'cream',
    },
  }
)

export interface ServiceCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'>,
    VariantProps<typeof cardVariants> {
  title: string
  description: string
  href: string
  imgSrc: string
  imgAlt: string
  eyebrow?: string
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, description, href, imgSrc, imgAlt, eyebrow, ...props }, ref) => {
    const cardAnimation = {
      hover: { scale: 1.02, transition: { duration: 0.3 } },
    }
    const imageAnimation = {
      hover: {
        scale: 1.1,
        rotate: 3,
        x: 10,
        transition: { duration: 0.4, ease: 'easeInOut' },
      },
    }
    const arrowAnimation = {
      hover: {
        x: 5,
        transition: { duration: 0.3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' as const },
      },
    }

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        <div className="relative z-10 flex flex-col h-full gap-4">
          {eyebrow && (
            <span className="eyebrow">{eyebrow}</span>
          )}
          <h3 className="font-display text-display-md text-void leading-tight">{title}</h3>
          <p className="font-sans text-sm text-stone-editorial leading-relaxed max-w-[260px]">
            {description}
          </p>
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-void border-b border-saffron pb-0.5 hover:text-saffron transition-colors duration-200 w-fit"
          >
            Learn more
            <motion.div variants={arrowAnimation}>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>
          </a>
        </div>

        <motion.img
          src={imgSrc}
          alt={imgAlt}
          className="absolute -right-4 -bottom-4 w-36 h-36 object-contain opacity-80 group-hover:opacity-100"
          variants={imageAnimation}
        />
      </motion.div>
    )
  }
)
ServiceCard.displayName = 'ServiceCard'

export { ServiceCard }
