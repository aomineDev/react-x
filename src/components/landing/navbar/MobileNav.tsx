import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

export const MobileNav = () => {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Lecciones', href: '#lecciones' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[260px] px-10">
          <nav className="flex flex-col gap-6 mt-10">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition"
              >
                {label}
              </a>
            ))}

            <div className="pt-4 border-t mt-4 flex flex-col gap-3">
              <Button variant="ghost">Iniciar Sesión</Button>
              <Button>Regístrate</Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
