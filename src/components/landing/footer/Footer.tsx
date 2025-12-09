export const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto py-12">
      <div className="container flex flex-col items-center gap-6">
        <img src="src/assets/images/logo/logo-reactX.png" alt="ReactX" className="h-8 opacity-90" />

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="/terminos" className="hover:text-foreground transition">
            Términos y Condiciones
          </a>

          <a href="/privacidad" className="hover:text-foreground transition">
            Política de Privacidad
          </a>

          <a href="/cookies" className="hover:text-foreground transition">
            Cookies
          </a>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} ReactX. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
