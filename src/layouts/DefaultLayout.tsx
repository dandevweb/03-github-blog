import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <main>
      <Header />
      <div className='w-full max-w-[864px] mx-auto'>
        <Outlet />
      </div>
    </main>
  )
}
