import { Outlet } from "react-router-dom";
import { MobileHeader } from "../../components/mobile/Header";
import { MobileMenuProvider } from "../../hooks/useMobileMenu";
import { MobileMenu } from "../../components/mobile/Menu";
import { MobileBibliography } from "../../components/mobile/Bibliography";

export function MobileLayout() {
  return (
    <MobileMenuProvider>
      <div className="relative">
        <MobileHeader />
        <MobileMenu />
        <Outlet />
        <MobileBibliography />
      </div>
    </MobileMenuProvider>
  )
}