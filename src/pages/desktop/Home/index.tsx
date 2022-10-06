import { useEffect } from "react";
import { DesktopAbout } from "./About";
import { DesktopHomeHeader } from "./Header";
import { DesktopSeparator } from "./Separator";
import { DesktopTarget } from "./Target";

export function DesktopHome() {
  useEffect(() => {
    document.title = 'Healthy Pet Food'
  }, [])

  return (
    <main className="pb-20">
      <DesktopHomeHeader />

      <DesktopAbout />

      <DesktopSeparator />

      <DesktopTarget />
    </main>
  )
}