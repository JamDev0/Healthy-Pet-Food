import { useEffect } from 'react'
import { Content } from './Content'
import { TechsMobile } from './Techs'

export function MobileEquipment() {
  useEffect(() => {
    document.title = 'Healthy Pet Food - Equipamentos'
  }, [])

  return (
    <main className="flex flex-col">
      <Content />

      <TechsMobile />
    </main>
  )
}