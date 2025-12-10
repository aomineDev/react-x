import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/store'
import NavItem from '@/components/NavItem'
import { House } from 'lucide-react'

export const AvatarMenu: React.FC = () => {
  const { user, clear } = useAuth()
  const navigate = useNavigate()

  function logout() {
    clear()
    navigate('/login')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full focus:outline-none">
          <Avatar className="w-8 h-8">
            <AvatarImage src="src/assets/images/avatar-placeholder.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <div className="px-3 py-2">
          <div className="text-sm font-medium">{user?.name}</div>
          <div className="text-xs text-muted-foreground">Mi cuenta</div>
        </div>

        <DropdownMenuItem>
          <NavItem title="Home" to="/" Icon={House} />
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={logout}>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
