import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const SectionContact = () => {
  return (
    <section id="contacto" className="py-20 anchor-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Contáctanos</h2>

        <div className="max-w-md mx-auto">
          <Card className="rounded-2xl border border-white/10 bg-black/10 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre</label>
                <Input placeholder="Ingresa tu nombre" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="Ingresa tu email" type="email" />
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensaje</label>
                <Textarea placeholder="Ingresa tu mensaje" className="h-20 resize-none" />
              </div>

              {/* Botón */}
              <Button type="submit" form="form" className="w-full cursor-pointer">
                Submit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
