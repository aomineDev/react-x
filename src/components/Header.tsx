import NavItem from './NavItem'
import { Book, House, Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '@/store/theme'

const Header = () => {
  const theme = useTheme((state) => state.theme)
  const toggletheme = useTheme((state) => state.toggleTheme)

  function handleSwithTheme() {
    toggletheme()
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="flex items-center justify-between px-10 py-3 border-b border-gray-600">
      <h1 className="text-brand dark:text-white font-bold uppercase text-xl">Header</h1>
      <div className="hidden gap-4 sm:flex">
        <NavItem title="Home" to="/" Icon={House} />
        <NavItem title="Challengue" to="/challenge" />
        <NavItem title="Form" to="/form" Icon={Book} />
        <NavItem title="Markdown" to="/markdown" />
        <Button
          className="rounded-full cursor-pointer"
          variant="ghost"
          size="icon"
          onClick={handleSwithTheme}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
      </div>
    </nav>
  )
}

export default Header
