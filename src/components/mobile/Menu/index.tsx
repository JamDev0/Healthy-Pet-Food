import { Link, useLocation } from "react-router-dom";
import { useMobileMenu } from "../../../hooks/useMobileMenu";

export function MobileMenu() {
  const { isOpen } = useMobileMenu()

  const { pathname } = useLocation()

  return (
    <section className={`
      absolute flex flex-col items-center gap-y-28 bg-surfaces-menu font-DmSans font-bold px-14 py-12 text-surfaces-text-menu transition-transform
      ${isOpen ? '' : '-translate-y-full'}
    `}>

      <Link
        to={"/"}
        className={`
          text-2xl text-center
          ${pathname === '/' ? '' : 'opacity-50'}
        `}
      >
        Home
      </Link>

      <Link 
        to={"/equipment"}
        className={`
          text-2xl text-center
          ${pathname === '/equipment' ? '' : 'opacity-50'}
        `}
      >
        Equipamentos e funcionalidade 
      </Link>

      <Link to={"/members"} 
        className={`  
          text-2xl text-center
          ${pathname === '/members' ? '' : 'opacity-50'}
        `}
      >

        Integrantes
      </Link>
    </section>
  )
}