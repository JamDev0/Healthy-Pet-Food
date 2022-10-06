import Arduino from '../../../../assets/Arduino.png'

import Protoboard from '../../../../assets/Protoboard.png'

import Ph from '../../../../assets/Ph.png'

import Color from '../../../../assets/Color.png'

import Tablet from '../../../../assets/Tablet.png'

export function DesktopEquipmentContent() {
  return (
    <section className='flex flex-col items-center py-16 px-28'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Equipamentos
      </h2>

      <section className='flex justify-between items-center w-full mb-16'>
        <img src={Arduino} alt="" className='w-[20rem]' />

        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Placa arduino
          </h2>

          <p className='text-surfaces-text-paragraph text-base mb-8'>
            Uma placa de prototipagem eletrônica que permite o desenvolvimento de projetos de automação. 
          </p>

          <p className='text-surfaces-text-paragraph text-base'>
            Fornecida pela escola custa entre R$ 115,00 a R$ 150,00. 
          </p>
        </section>
      </section>

      <section className='flex justify-between items-center w-full mb-16'>
        <img src={Protoboard} alt="" className='w-[20rem]' />

        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Protoboard
          </h2>

          <p className='text-surfaces-text-paragraph text-base mb-8'>
            É uma placa com furos de conexão condutoras para a montagem de circuitos, juntamente com a placa eletrônica.  
          </p>

          <p className='text-surfaces-text-paragraph text-base'>
            Fornecido pela escola, custa ente R$ 30,00 á R$  50,00. 
          </p>
        </section>
      </section>

      <section className='flex justify-between items-center w-full mb-16'>
        <img src={Ph} alt="" className='w-[20rem]' />

        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Medidor de PH
          </h2>

          <p className='text-surfaces-text-paragraph text-base mb-8'>
            O sensor de PH para arduino é um dispositivo de medição utilizados em vários setores, ele é capaz de medir a acidez de líquidos. 
          </p>

          <p className='text-surfaces-text-paragraph text-base'>
            Valor pago no produto R$ 150,00. 
          </p>
        </section>
      </section>

      <section className='flex justify-between items-center w-full mb-16'>
        <img src={Color} alt="" className='w-[20rem]' />

        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Sensor de cor
          </h2>

          <p className='text-surfaces-text-paragraph text-base mb-8'>
            O sensor é usado para detectar diversas cores variadas através do seu comprimento de onda. O seu sistema de analise RGB (Red, Green, Blue) pode-se determinar  variações de ondas, e então identificar a cor. 
          </p>

          <p className='text-surfaces-text-paragraph text-base'>
            Custa entre R$ 34,00 a R$ 70,00. 
          </p>
        </section>
      </section>

      <section className='flex justify-between items-center w-full mb-16'>
        <img src={Tablet} alt="" className='w-[20rem]' />

        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Tablet
          </h2>

          <p className='text-surfaces-text-paragraph text-base mb-8'>
            Tela para transmitir as informações necessárias para o urnário.
          </p>
        </section>
      </section>
    </section>
  )
}