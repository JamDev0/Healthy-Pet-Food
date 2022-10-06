import MagGlass from '../../../assets/MagGlass.svg'

import Cam from '../../../assets/Cam.svg'

export function MobileBibliography() {
  return (
    <section className="w-full flex flex-col items-center py-6 px-9 pb-20 gap-y-10">
      <h2 className="font-bold text-4xl mb-14">
        Bibliografia
      </h2>

      <a href='https://exame.com/brasil/intoxicacao-de-caes-governo-suspende-ingrediente-de-petisco-apos-48-mortes/' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl max-w-[290px]">
        <img src={MagGlass} className="w-24 h-24 mb-1" />

        <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

        <p className='text-surfaces-text-paragraph text-center text-lg'>
          Relato de intoxicação alimentar em um pet
        </p>
      </a>

      <a href='https://youtu.be/Fn0TlQIgfqk' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl max-w-[290px]">
        <img src={Cam} className="w-24 h-24 mb-1" />

        <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

        <p className='text-surfaces-text-paragraph text-center text-lg'>
          Video informativo sobre quais frutas são ruins aos pets
        </p>
      </a>

      <a href='https://www.petz.com.br/blog/cachorros/frutas-que-cachorro-nao-pode-comer/' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl max-w-[290px]">
        <img src={Cam} className="w-24 h-24 mb-1" />

        <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

        <p className='text-surfaces-text-paragraph text-center text-lg'>
          Lista com frutas proibidas para pets
        </p>
      </a>

      <a href='https://youtu.be/uplRH14P43I' className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl max-w-[290px]">
        <img src={Cam} className="w-24 h-24 mb-1" />

        <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

        <p className='text-surfaces-text-paragraph text-center text-lg'>
          Video informativo sobre quais frutas trazem benefícios aos pets
        </p>
      </a>
    </section>
  )
}