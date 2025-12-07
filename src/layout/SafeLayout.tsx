interface SafeLayoutProps {
  full?: boolean
  children: React.ReactNode
}

const SafeLayout = ({ full = false, children }: SafeLayoutProps) => {
  if (full)
    return (
      <div className="safe-area mt-nav-h h-screen-safe overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    )
  return <div className="safe-area pt-nav-h">{children}</div>
}

export default SafeLayout
