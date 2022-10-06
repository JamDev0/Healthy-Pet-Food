import { Link } from 'react-router-dom'
import Logo from '../../../assets/Logo.png'

import { useLocation } from 'react-router-dom'

export function DesktopHeader() {
  const { pathname } = useLocation()

  return(
    <header className="relative z-10 px-16 py-2 pb-4 bg-surfaces-header">
      <nav className="flex items-center justify-center gap-x-20 text-brand-green-500">
        <Link to='/'>
          <img src={Logo} alt="" className='w-64'/>
        </Link>

        <Link 
          to='/'
          className={`
            text-2xl text-center underline-offset-8 font-bold
            ${pathname === '/' ? '' : 'opacity-50'}
            hover:underline
          `}
        >

          Home
        </Link> 

        <Link
          to='/equipment'  
          className={`
            text-2xl text-center underline-offset-8 font-bold transition-[opacity] duration-300 ease-in-out 
            ${pathname === '/equipment' ? '' : 'opacity-50'}
            hover:underline
          `}
        >

          Equipamentos e funcionalidades
        </Link> 

        <Link
          to='/members'  
          className={`
            text-2xl text-center underline-offset-8 font-bold transition-[opacity] duration-300 ease-in-out 
            ${pathname === '/members' ? '' : 'opacity-50'}
            hover:underline
          `}
        >

          Integrantes
        </Link> 
      </nav>

      <div className='w-full h-[1px] bg-brand-green-500'></div>
    </header>
  )
}