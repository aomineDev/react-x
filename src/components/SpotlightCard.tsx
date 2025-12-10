import { Card, CardContent } from '@/components/ui/card'
import { useRef } from 'react'

interface SpotlightCardProps {
  icon: React.ReactNode
  title: string
  description?: string
  disabled?: boolean
  completed?: boolean
  onClick?: () => void
}

export const SpotlightCard = ({
  icon,
  title,
  description,
  disabled = false,
  completed = false,
  onClick,
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled) return
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty('--spot-x', `${x}px`)
    card.style.setProperty('--spot-y', `${y}px`)
  }

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={() => !disabled && onClick?.()}
      className={`
    relative overflow-hidden group rounded-2xl border transition-all duration-300
    ${disabled ? 'border-white/5 bg-black/10 opacity-40 pointer-events-none backdrop-blur-sm' : ''}
    ${
      completed
        ? 'border-white/10 bg-black/20 hover:border-white/30 cursor-pointer backdrop-blur-sm'
        : ''
    }
    ${
      !disabled && !completed
        ? 'border-white/10 bg-black/20 hover:border-white/30 cursor-pointer backdrop-blur-sm'
        : ''
    }
  `}
    >
      {!disabled && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `
              radial-gradient(
                200px circle at var(--spot-x) var(--spot-y),
                rgba(255,255,255,0.18),
                transparent 70%
              )
            `,
          }}
        />
      )}
      <CardContent className="p-6">
        <div className="p-3 bg-white/10 rounded-xl inline-flex mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  )
}
