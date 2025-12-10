import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { AvatarMenu } from './AvatarMenu'
import { useTheme } from '@/store'
import { Link } from 'react-router-dom'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-3 border-b border-gray-600 bg-background">
      <Link to="/">
        <h1 className="text-brand dark:text-white font-bold uppercase text-xl">React X</h1>
      </Link>
      <div className="hidden gap-4 items-center sm:flex">
        <AvatarMenu />
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
