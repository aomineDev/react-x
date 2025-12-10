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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import { toast } from 'sonner'

import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { userService } from '@/services/api/userService'

// Schema de validación
const profileSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  surname: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.email('Ingresa un email válido'),
})

type ProfileData = z.infer<typeof profileSchema>

export const AvatarMenu: React.FC = () => {
  const { user, clear, setUser } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false)

  const form = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      surname: user?.surname || '',
      email: user?.email || '',
    },
  })

  function logout() {
    clear()
    navigate('/login')
    toast.success('Sesión cerrada correctamente')
  }

  const onSubmit = async (data: ProfileData) => {
    try {
      if (!user?.id) return

      await userService.updateProfile(user.id, {
        name: data.name,
        surname: data.surname,
        email: data.email,
      })

      setUser({ ...user, ...data })

      setIsOpen(false)
      toast.success('Perfil actualizado exitosamente')
    } catch (error) {
      console.error('Error al actualizar perfil:', error)
      toast.error('Error al actualizar perfil')
    }
  }

  return (
    <>
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
          <DropdownMenuItem onSelect={() => setIsOpen(true)}>Editar perfil</DropdownMenuItem>
          <DropdownMenuItem onSelect={logout}>Cerrar sesión</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar perfil</DialogTitle>
            <DialogDescription>
              Haz cambios en tu perfil aquí. Click en guardar cuando termines.
            </DialogDescription>
          </DialogHeader>

          <form id="avatar-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Nombre</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Ingresa tu nombre"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />

              <Controller
                name="surname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Apellido</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Ingresa tu apellido"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Ingresa tu email"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button className="cursor-pointer" type="submit" form="avatar-form">
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
