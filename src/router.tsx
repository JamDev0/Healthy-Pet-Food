import { Route, Routes } from "react-router-dom";

import { useMediaQuery } from 'react-responsive'

import { DesktopLayout } from "./layouts/default/desktop";

import { MobileLayout } from "./layouts/default/mobile";

import { MobileHome } from "./pages/mobile/Home";

import { MobileEquipment } from "./pages/mobile/Equipments";
import { DesktopHome } from "./pages/desktop/Home";
import { DesktopEquipment } from "./pages/desktop/Equipments";
import { Members } from "./pages/members";

export function Router() {
  const isDesktop = useMediaQuery({query: '(min-width: 768px)'})

  return(
    <Routes>
      <Route path="/" element={isDesktop ? <DesktopLayout /> : <MobileLayout /> }>
        <Route path="/" element={isDesktop ? <DesktopHome /> : <MobileHome /> } />

        <Route path="/equipment" element={isDesktop ? <DesktopEquipment/> : <MobileEquipment /> } />

        <Route path="/members" element={<Members/>} />
      </Route>
    </Routes>
  )
}