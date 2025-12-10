import { useAuth } from '@/store'
import { Button } from '@/components/ui/button'
import { NavLinks } from './NavLinks'
import { MobileNav } from './MobileNav'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const { user } = useAuth()

  const location = useLocation()

  const minimalNavbar = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <header className="w-full fixed top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        <Link to="/landing">
          <img src="src/assets/images/logo/logo-reactX.png" alt="ReactX" className="h-7" />
        </Link>

        {!minimalNavbar && (
          <>
            <NavLinks />

            <div className="hidden md:flex items-center gap-3">
              {!user ? (
                <>
                  <Button variant="ghost" className="text-sm">
                    <Link to="/login">Iniciar Sesión</Link>
                  </Button>
                  <Button className="text-sm">
                    <Link to="/signup">Regístrate</Link>
                  </Button>
                </>
              ) : (
                <Button className="text-sm">
                  <Link to="/app">Ir a la Aplicación</Link>
                </Button>
              )}
            </div>

            <MobileNav />
          </>
        )}
      </div>
    </header>
  )
}
