import { useEffect } from 'react'
import { Content } from './Content'

export function MobileHome() {
  useEffect(() => {
    document.title = 'Healthy Pet Food'
  }, [])

  return (
    <main className="flex flex-col">
      <Content />
    </main>
  )
}