import { Outlet } from "react-router-dom";
import { DesktopBibliography } from "../../components/desktop/Bibliography";
import { DesktopHeader } from "../../components/desktop/Header";

export function DesktopLayout() {
  return (
    <>
      <DesktopHeader />
      <Outlet />
      <DesktopBibliography />
    </>
  )
}