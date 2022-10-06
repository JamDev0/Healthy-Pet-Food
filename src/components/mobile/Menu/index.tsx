import { Link } from "react-router-dom";
import { useMobileMenu } from "../../../hooks/useMobileMenu";

export function MobileMenu() {
  const { isOpen } = useMobileMenu();

  return (
    <section className={`
      absolute flex flex-col items-center gap-y-28 bg-surfaces-menu font-DmSans font-bold px-14 py-12 text-surfaces-text-menu transition-transform
      ${isOpen ? '' : '-translate-y-full'}
    `}>

      <Link to={"/"} className="text-2xl">
        Home
      </Link>

      <Link to={"/equipment"} className="text-2xl text-center">
        Equipamentos e funcionalidade 
      </Link>

      <Link to={"/members"} className="text-2xl text-center">
        Integrantes
      </Link>
    </section>
  )
}