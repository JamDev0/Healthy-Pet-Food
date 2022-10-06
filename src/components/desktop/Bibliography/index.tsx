import { Link } from 'react-router-dom'

import MagGlass from '../../../assets/MagGlass.svg'

export function DesktopBibliography() {
  return(
    <section className='flex flex-col items-center py-16 px-28 w-full'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Bibliografia
      </h2>

      <section className="flex flex-wrap justify-between gap-x-12 gap-y-12 w-full">
        <Link to='' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl mb-10 max-w-xs">
          <img src={MagGlass} className="w-24 h-24 mb-1" />

          <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

          <p className='text-surfaces-text-paragraph text-center text-lg'>
            Site sobre alimentação exencial dos pets 
          </p>
        </Link>

        <Link to='' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl mb-10 max-w-xs">
          <img src={MagGlass} className="w-24 h-24 mb-1" />

          <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

          <p className='text-surfaces-text-paragraph text-center text-lg'>
            Site sobre alimentação exencial dos pets 
          </p>
        </Link>
      </section>
    </section>
  )
}