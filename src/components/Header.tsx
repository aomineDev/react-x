import NavItem from './NavItem'
import { House, Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '@/store'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-3 border-b border-gray-600 bg-background">
      <h1 className="text-brand dark:text-white font-bold uppercase text-xl">React X</h1>
      <div className="hidden gap-4 sm:flex">
        <NavItem title="Home" to="/" Icon={House} />
        <Button
          className="rounded-full cursor-pointer"
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
      </div>
    </nav>
  )
}

export default Header
