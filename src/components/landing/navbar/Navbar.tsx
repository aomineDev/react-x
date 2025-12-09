import { Button } from '@/components/ui/button'
import { NavLinks } from './NavLinks'
import { MobileNav } from './MobileNav'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img src="src/assets/images/logo/logo-reactX.png" alt="ReactX" className="h-7" />
        </div>

        <NavLinks />

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-sm">
            <Link to="/login">Iniciar Sesión</Link>
          </Button>
          <Button className="text-sm">
            <Link to="/signup">Regístrate</Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
