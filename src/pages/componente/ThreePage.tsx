import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/componente/Nivel3.md',
  files: {
    '/App.js': `export default function TarjetaProducto() {
  const nombre = "Laptop HP";
 
  return (
    <div>
      <h2>{nombre}</h2>
    </div>
  );
}
`,
  },
}

const ThreePage = () => {
  return <Lesson {...props}></Lesson>
}

export default ThreePage
