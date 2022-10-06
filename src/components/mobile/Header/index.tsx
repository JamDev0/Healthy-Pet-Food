import { List, X } from 'phosphor-react'
import { useMobileMenu } from '../../../hooks/useMobileMenu'

export function MobileHeader() {
  const { switchIsOpen, isOpen } = useMobileMenu()
  
  return(
    <header className="relative z-10 flex items-center justify-end bg-surfaces-header px-6 py-6">
      <button onClick={() => switchIsOpen()} className={`${isOpen ? 'bg-brand-green-500' : ''}`}>
        {
          isOpen ?
            <X className='text-3xl text-surfaces-text-menu' />
          :
            <List className='text-3xl text-brand-green-500' /> 
        }
      </button>
    </header>
  )
}