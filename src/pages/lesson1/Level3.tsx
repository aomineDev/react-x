import Lesson from '@/components/lesson/Lesson'

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

const Level3 = () => {
  return <Lesson {...props}></Lesson>
}

export default Level3
