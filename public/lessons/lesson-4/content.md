
xx
# Challenge Final – Formulario de Registro Completo

### Introducción

¡Bienvenido al desafío de formularios en React! 
Vas a crear un formulario de registro completo donde los usuarios podrán:

- Ingresar información personal (nombre, email, contraseña)
- Seleccionar su país de origen
- Elegir sus intereses mediante checkboxes
- Indicar su nivel de experiencia con radio buttons
- Escribir una biografía corta
- Ver mensajes de error de validación en tiempo real
- Enviar el formulario solo si todas las validaciones pasan

Este challenge combinará **Inputs Controlados**, **Distintos tipos de inputs**, **Validación de formularios**, y **manejo de estado complejo**.

---

### Reglas del Desafío

#### ~1~ El título principal debe ser **"Formulario de Registro"** en un `<h1>`  
#### ~2~ Debes incluir los siguientes campos controlados:
- **Nombre** (input text) - mínimo 3 caracteres
- **Email** (input email) - debe contener @ y .
- **Contraseña** (input password) - mínimo 6 caracteres
- **País** (select) - opciones: Perú, Colombia, México, Argentina, Chile
- **Intereses** (checkboxes) - al menos 3 opciones: Tecnología, Deportes, Arte, Música
- **Nivel de experiencia** (radio buttons) - opciones: Principiante, Intermedio, Avanzado
- **Biografía** (textarea) - máximo 200 caracteres  

#### ~3~ Cada campo debe mostrar un mensaje de error específico si no cumple con la validación  
#### ~4~ Los mensajes de error deben mostrarse en color rojo debajo de cada campo  
#### ~5~ El botón de "Registrarse" debe estar deshabilitado si hay errores de validación  
#### ~6~ Al hacer submit, debe mostrar un mensaje de éxito con los datos ingresados  
#### ~7~ Usa un solo objeto de estado para manejar todos los valores del formulario  
#### ~8~ Usa otro objeto de estado para manejar todos los errores de validación  

---

### Datos de ejemplo

El estado inicial puede ser:
```jsx
const [formData, setFormData] = useState({
  nombre: '',
  email: '',
  password: '',
  pais: '',
  intereses: [],
  nivel: '',
  biografia: ''
});

const [errors, setErrors] = useState({
  nombre: '',
  email: '',
  password: '',
  pais: '',
  intereses: '',
  nivel: '',
  biografia: ''
});
```

---

### 💡 Pistas

#### ~1~ Input de texto controlado con validación
```jsx
<input
  type="text"
  value={formData.nombre}
  onChange={(e) => {
    setFormData(prev => ({ ...prev, nombre: e.target.value }));
    validateNombre(e.target.value);
  }}
/>
{errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}
```

#### ~2~ Select controlado
```jsx
<select 
  value={formData.pais} 
  onChange={(e) => setFormData(prev => ({ ...prev, pais: e.target.value }))}
>
  <option value="">Selecciona un país</option>
  <option value="peru">Perú</option>
  {/* más opciones... */}
</select>
```

#### ~3~ Checkbox para múltiples valores
```jsx
<input
  type="checkbox"
  value="tecnologia"
  checked={formData.intereses.includes('tecnologia')}
  onChange={(e) => {
    const valor = e.target.value;
    setFormData(prev => ({
      ...prev,
      intereses: e.target.checked 
        ? [...prev.intereses, valor]
        : prev.intereses.filter(i => i !== valor)
    }));
  }}
/>
```

#### ~4~ Radio buttons
```jsx
<input
  type="radio"
  name="nivel"
  value="principiante"
  checked={formData.nivel === 'principiante'}
  onChange={(e) => setFormData(prev => ({ ...prev, nivel: e.target.value }))}
/>
```

#### ~5~ Textarea controlado
```jsx
<textarea
  value={formData.biografia}
  onChange={(e) => setFormData(prev => ({ ...prev, biografia: e.target.value }))}
  maxLength={200}
/>
<p>{formData.biografia.length}/200 caracteres</p>
```

#### ~6~ Validación de email
```jsx
function validateEmail(email) {
  if (!email.includes('@') || !email.includes('.')) {
    setErrors(prev => ({ ...prev, email: 'Email inválido' }));
  } else {
    setErrors(prev => ({ ...prev, email: '' }));
  }
}
```

#### ~7~ Deshabilitar botón si hay errores
```jsx
const hasErrors = Object.values(errors).some(error => error !== '');
const isFormIncomplete = !formData.nombre || !formData.email || !formData.password;

<button disabled={hasErrors || isFormIncomplete}>Registrarse</button>
```

#### ~8~ Manejo del submit
```jsx
function handleSubmit(e) {
  e.preventDefault();
  if (!hasErrors && !isFormIncomplete) {
    alert(`Usuario registrado: ${formData.nombre}`);
  }
}
```

---

### Validaciones requeridas

- **Nombre**: Mínimo 3 caracteres → "El nombre debe tener al menos 3 caracteres"
- **Email**: Debe contener @ y . → "Email inválido"
- **Contraseña**: Mínimo 6 caracteres → "La contraseña debe tener al menos 6 caracteres"
- **País**: Debe seleccionar uno → "Debes seleccionar un país"
- **Intereses**: Debe seleccionar al menos uno → "Selecciona al menos un interés"
- **Nivel**: Debe seleccionar uno → "Debes seleccionar tu nivel de experiencia"
- **Biografía**: Máximo 200 caracteres (controlado por maxLength)

---

### Objetivo final

✅ Formulario con todos los tipos de inputs (text, email, password, select, checkbox, radio, textarea)  
✅ Todos los inputs controlados con estado  
✅ Validación en tiempo real para cada campo  
✅ Mensajes de error específicos en rojo  
✅ Botón deshabilitado cuando hay errores  
✅ Submit muestra mensaje de éxito  
✅ Contador de caracteres para biografía  

¡Manos a la obra! 🚀