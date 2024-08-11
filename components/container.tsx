import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

interface ContainerProps extends ComponentProps<'div'> {
  children: React.ReactNode
}

export function Container({ children, ...divProps }: ContainerProps) {
  return (
    <div
      {...divProps}
      className={cn('mx-auto px-4 xl:w-[1120px]', divProps.className)}
    >
      {children}
    </div>
  )
}
