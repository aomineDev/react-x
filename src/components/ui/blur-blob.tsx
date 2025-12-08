import React from 'react'
import { cn } from '@/lib/utils'

interface BlurBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  colorFrom?: string
  colorMid?: string
  colorTo?: string
  blur?: number
}

export const BlurBlob: React.FC<BlurBlobProps> = ({
  size = 900,
  colorFrom = 'rgba(0,150,255,0.6)',
  colorMid = 'rgba(30,143,255,0.5)',
  colorTo = 'rgba(15,23,42,0.2)',
  blur = 180,
  className,
  ...props
}) => {
  return (
    <div
      aria-hidden
      className={cn(
        'absolute inset-0 flex justify-center items-center -z-10 pointer-events-none',
        className
      )}
      {...props}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle at center, ${colorFrom} 0%, ${colorMid} 40%, ${colorTo} 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />
    </div>
  )
}
