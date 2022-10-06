import { useEffect } from "react";
import { DesktopEquipmentContent } from "./Content";
import { DesktopEquipmentsHeader } from "./Header";
import { Operation } from "./Operation";
import { EletronicsSeparator } from "./Separator";
import { Techs } from "./Tecs";

export function DesktopEquipment() {
  useEffect(() => {
    document.title = 'Healthy Pet Food - Equipamentos'
  }, [])

  return(
    <main className="pb-20">
      <DesktopEquipmentsHeader />

      <DesktopEquipmentContent />

      <EletronicsSeparator />

      <Operation />

      <Techs />
    </main>
  )
}