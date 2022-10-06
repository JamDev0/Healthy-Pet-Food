import { createContext, ReactNode, useContext, useState } from "react";

interface mobileMenuContextState {
  isOpen: boolean
  switchIsOpen: () => void
}

const mobileMenuContext = createContext<mobileMenuContextState>({} as mobileMenuContextState )

interface MobileMenuProviderProps {
  children: ReactNode
}

export function MobileMenuProvider({ children }: MobileMenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function switchIsOpen() {
    setIsOpen((state) => {
      return !state
    })
  }

  return(
    <mobileMenuContext.Provider value={{ isOpen, switchIsOpen }}>
      {children}
    </mobileMenuContext.Provider>
  )
}

export function useMobileMenu() {
  const context = useContext(mobileMenuContext)

  return context
}