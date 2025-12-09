import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import Confetti from 'react-confetti-boom'

const contactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(200, 'Máximo 200 caracteres'),
})

type ContactData = z.infer<typeof contactSchema>

export const SectionContact = () => {
  const [successSubmit, setSuccessSubmit] = useState(false)

  const form = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (data: ContactData) => {
    console.log(data)
    setSuccessSubmit(true)
  }

  return (
    <>
      {successSubmit && (
        <>
          <Confetti mode="fall" colors={['#4e3aeb', '#45f282', '#ff8383', '#fff9b0']} />
          <Confetti mode="boom" colors={['#4e3aeb', '#45f282', '#ff8383', '#fff9b0']} />
        </>
      )}
      <section id="contacto" className="py-20 anchor-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Contáctanos</h2>

          <div className="max-w-md mx-auto">
            <Card className="rounded-2xl border border-white/10 bg-black/10 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
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
                            autoComplete="off"
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
                            autoComplete="off"
                            aria-invalid={fieldState.invalid}
                          />
                          {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                        </Field>
                      )}
                    />

                    <Controller
                      name="message"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel>Mensaje</FieldLabel>
                          <Textarea
                            {...field}
                            placeholder="Ingresa tu mensaje"
                            className="h-20 resize-none"
                            autoComplete="off"
                            aria-invalid={fieldState.invalid}
                          />
                          {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </form>

                <Button type="submit" form="form" className="w-full cursor-pointer">
                  Enviar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
