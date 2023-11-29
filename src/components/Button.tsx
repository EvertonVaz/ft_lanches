import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex gap-4 rounded bg-blue-500 text-white transition-colors',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white hover:bg-blue-800',
      secondary: 'bg-emerald-600 text-white hover:bg-emerald-900',
    },
    size: {
      sm: 'px-2 py-1 text-sm font-normal',
      md: 'px-4 py-2 text-base font-medium',
      lg: 'px-8 py-3 text-lg font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ className, size, color, ...props }: ButtonProps) => {
  return <button className={button({ size, color, className })} {...props} />
}
