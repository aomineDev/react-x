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
import { Link } from 'react-router-dom'
import { authService } from '@/services/auth'
import { useAuth, useTheme } from '@/store'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '@/components/landing/navbar/Navbar'
import { useEffect } from 'react'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z.string().email('Ingresa un email válido'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(32, 'La contraseña debe tener como máximo 32 caracteres'),
})

type FormData = z.infer<typeof formSchema>

const FormPage = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { setToken, setUser } = useAuth()
  const navigate = useNavigate()

  async function onSubmit(data: FormData) {
    try {
      const user = await authService.login(data)
      setToken(user.token)
      setUser(user.user)
      navigate('/')
      toast.success('Sesión iniciada correctamente')
    } catch (error) {
      form.resetField('password')
      toast.error('Error al iniciar sesión')
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
          <CardTitle>Login</CardTitle>
          <CardDescription>Ingresa tu email abajo para ingresar a tu cuenta.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} id="form">
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="email@example.com"
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
                      type="password"
                      placeholder="••••••••"
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
            Iniciar sesión
          </Button>

          <FieldDescription className="text-center">
            ¿Nuevo en ReactX?{' '}
            <Link className="underline" to="/signup">
              Crea una cuenta
            </Link>
          </FieldDescription>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FormPage
