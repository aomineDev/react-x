import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { BlurBlob } from '@/components/ui/blur-blob'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/store'
import { authService } from '@/services/auth'
import { Navbar } from '@/components/landing/navbar/Navbar'

const formSchema = z.object({
  name: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(50, 'El nombre debe tener como máximo 50 caracteres'),
  surname: z
    .string()
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .max(50, 'El apellido debe tener como máximo 50 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(32, 'La contraseña debe tener como máximo 32 caracteres'),
})

type FormData = z.infer<typeof formSchema>

const FormPage = () => {
  const { setUser, setToken } = useAuth()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
  })
  const navigate = useNavigate()

  async function onSubmit(data: FormData) {
    try {
      await authService.register(data)
      const user = await authService.login({ email: data.email, password: data.password })
      setToken(user.token)
      setUser(user.user)
      navigate('/')
    } catch (error) {
      form.resetField('password')
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center relative h-screen max-h-screen overflow-hidden">
      <Navbar />
      <BlurBlob
        className="-translate-y-[calc(0%)]"
        colorFrom="rgba(0,150,255,0.25)"
        colorMid="rgba(30,143,255,0.18)"
        colorTo="rgba(15,23,42,0.08)"
        blur={220}
      />

      <Card className="w-full sm:w-md border border-white/10 bg-black/10 rounded-2xl">
        <CardHeader>
          <CardTitle>Registrarse</CardTitle>
          <CardDescription>Ingresa tu informacion abajo para crear tu cuenta.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} id="form">
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">Nombre</FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Jhordan"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
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
                    <FieldLabel htmlFor="surname">Apellidos</FieldLabel>
                    <Input
                      {...field}
                      id="surname"
                      placeholder="Calixto"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
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
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="m@example.com"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                    <Input
                      {...field}
                      id="password"
                      placeholder="••••••••"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                    {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button
            type="submit"
            form="form"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50 cursor-pointer"
          >
            Registrarse
          </Button>

          <FieldDescription className="text-center">
            ¿Ya tienes una cuenta?{' '}
            <Link className="underline" to="/login">
              Iniciar sesión
            </Link>
          </FieldDescription>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FormPage
