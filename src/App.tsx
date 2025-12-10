import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import { Toaster } from 'sonner'

const App = () => (
  <>
    <Toaster position="bottom-right" duration={3000} />

    <RouterProvider router={routes} />
  </>
)

export default App
