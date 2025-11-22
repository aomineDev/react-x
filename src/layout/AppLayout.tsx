import { Outlet } from 'react-router'
import Header from '@/components/Header'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AppLayout
