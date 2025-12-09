import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export const AvatarMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full focus:outline-none">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/src/assets/images/avatar-placeholder.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <div className="px-3 py-2">
          <div className="text-sm font-medium">Usuario</div>
          <div className="text-xs text-muted-foreground">Mi cuenta</div>
        </div>

        <DropdownMenuItem onSelect={() => console.log('Ir a Perfil')}>Perfil</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => console.log('Cerrar sesión')}>
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
