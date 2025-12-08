export const NavLinks = () => {
  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Lecciones', href: '#lecciones' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="text-sm text-muted-foreground hover:text-foreground transition"
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
