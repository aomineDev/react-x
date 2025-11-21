# QUIZZ 2 – Ordena el código para que funcione el formulario

Instrucciones:

Ordena los bloques del 1 al 6 para formar un componente válido que maneja:

- un checkbox

- un select

- un input de texto

## Bloques desordenados

- A)

```jsx
<label>
  Acepto términos
  <input type="checkbox" checked={acepto} onChange={handleCheck} />
</label>
```

- B)

```jsx
export default function FormTipos() {
```

- C)

```jsx
function handleCheck(e) {
  setAcepto(e.target.checked);
}
```

- D)

```jsx
function handleChangePais(e) {
  setPais(e.target.value);
}
```

- E)

```jsx
const [acepto, setAcepto] = useState(false);
const [pais, setPais] = useState("pe");
const [nombre, setNombre] = useState("");
```

- F)

```jsx
return (
  <form>
    <input
      placeholder="Nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />

    <select value={pais} onChange={handleChangePais}>
      <option value="pe">Perú</option>
      <option value="mx">México</option>
      <option value="ar">Argentina</option>
    </select>

    {/* checkbox */}
    {/* A */}
  </form>
);
```
