import { Link } from 'react-router-dom'

import MagGlass from '../../../assets/MagGlass.svg'

import Cam from '../../../assets/Cam.svg'


export function DesktopBibliography() {
  return(
    <section className='flex flex-col items-center py-16 px-28 w-full'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Bibliografia
      </h2>

      <section className="flex flex-wrap justify-between gap-x-12 gap-y-12 w-full">
        <a href='https://exame.com/brasil/intoxicacao-de-caes-governo-suspende-ingrediente-de-petisco-apos-48-mortes/' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl mb-10 max-w-xs">
          <img src={MagGlass} className="w-24 h-24 mb-1" />

          <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

          <p className='text-surfaces-text-paragraph text-center text-lg'>
            Relato de intoxicação alimentar em um pet
          </p>
        </a>

        <a href='https://youtu.be/Fn0TlQIgfqk' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl mb-10 max-w-xs">
          <img src={Cam} className="w-24 h-24 mb-1" />

          <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

          <p className='text-surfaces-text-paragraph text-center text-lg'>
           Video informativo sobre quais frutas são ruins aos pets
          </p>
        </a>

        <a  href='https://www.petz.com.br/blog/cachorros/frutas-que-cachorro-nao-pode-comer/' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl mb-10 max-w-xs">
          <img src={MagGlass} className="w-24 h-24 mb-1" />

          <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

          <p className='text-surfaces-text-paragraph text-center text-lg'>
            Lista com frutas proibidas para pets
          </p>
        </a>

        <a href='https://youtu.be/uplRH14P43I' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl mb-10 max-w-xs">
          <img src={Cam} className="w-24 h-24 mb-1" />

          <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

          <p className='text-surfaces-text-paragraph text-center text-lg'>
           Video informativo sobre quais frutas trazem benefícios aos pets
          </p>
        </a>
      </section>
    </section>
  )
}