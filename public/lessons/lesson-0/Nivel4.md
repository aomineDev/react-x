#  Creación de un proyecto en React

## ¿Cómo empezar a desarrollar en React?

Para iniciar un proyecto en React necesitamos una herramienta que genere la estructura base y configure el entorno de desarrollo. Estas herramientas crean automáticamente todos los archivos y configuraciones necesarias para que puedas empezar a programar de inmediato.

Actualmente, existen dos opciones principales: una moderna y rápida, y otra antigua que ya está quedando obsoleta.

## Herramientas disponibles

### ~1~ Vite (Recomendado)

**La herramienta más rápida y moderna para crear proyectos con React.**

Vite es la opción actual que todos los desarrolladores profesionales están usando. Ofrece:

- **Velocidad**: El servidor de desarrollo inicia en menos de 1 segundo
- **Hot Module Replacement (HMR)**: Los cambios se reflejan instantáneamente sin recargar la página
- **Optimización automática**: Compila y optimiza tu código para producción
- **Configuración mínima**: Funciona perfectamente desde el primer momento

#### Crear un proyecto con Vite
```bash
npm create vite
```

Después de ejecutar el comando, Vite te preguntará:
1. **Nombre del proyecto**: Por ejemplo, `mi-app-react`
2. **Framework**: Selecciona `React`
3. **Variante**: Selecciona `JavaScript` (o `TypeScript` si ya lo conoces)

Luego, lo corres con el siguiente comando:
```bash
npm run dev
```

¡Y listo! Tu aplicación estará corriendo en `http://localhost:5173`

### ~2~ Create React App (CRA) (Obsoleto)

**Herramienta oficial de React, pero ya no se recomienda su uso.**

Create React App fue durante años la forma estándar de crear proyectos React, pero actualmente está quedando obsoleto debido a:

- **Lentitud**: Tarda varios segundos (o minutos) en iniciar el servidor
- **Sin mantenimiento activo**: El equipo de React ya no lo recomienda
- **Configuración pesada**: Muchas dependencias innecesarias

#### Crear un proyecto con CRA (no recomendado)
```bash
npx create-react-app nombre-de-tu-app
```

---