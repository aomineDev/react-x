import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/Header' // Header general
import { Navbar } from '@/components/home/navbar/Navbar'

const AppLayout = () => {
  const location = useLocation()

  const showHomeNavbar = location.pathname === '/' || location.pathname.startsWith('/modulo/')

  return (
    <>
      {showHomeNavbar ? <Navbar /> : <Header />}
      <Outlet />
    </>
  )
}

export default AppLayout
