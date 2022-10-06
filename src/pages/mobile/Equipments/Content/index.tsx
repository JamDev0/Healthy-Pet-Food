import Project from '../../../../assets/Project.png'

import Arduino from '../../../../assets/Arduino.png'

import Protoboard from '../../../../assets/Protoboard.png'

import Ph from '../../../../assets/Ph.png'

import Color from '../../../../assets/Color.png'

import Tablet from '../../../../assets/Tablet.png'

import Caution from "../../../../assets/Caution.png"

import Atention from "../../../../assets/Atention.png"

import Liberated from "../../../../assets/Liberated.png"

export function Content() {
  return(
    <>
    <section className="flex flex-col gap-y-6 bg-surfaces-primary items-center px-6 py-12">
      <h2 className="font-bold text-3xl text-surfaces-text-headline text-center">
        Auxiliador na alimentação
      </h2>

    <p className="font-normal text-lg text-surfaces-text-paragraph text-center">
      Uma alimentação saudável começa a cada refeição
    </p>

    <img src={Project} alt="" className='w-full mb-10' />
  </section>

  <section className="flex flex-col items-center px-6 py-10 mb-8">
    <h2 className="font-bold text-4xl text-surfaces-text-headline text-center mb-20">
      Equipamentos
    </h2>

    <img src={Arduino} alt="" className='w-full mb-2' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-10'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Placa arduino
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph mb-4">
        Uma placa de prototipagem eletrônica que permite o desenvolvimento de projetos de automação. 
      </p>

      <p className="font-normal text-lg text-surfaces-text-paragraph">
        Fornecida pela escola custa entre R$ 115,00 a R$ 150,00. 
      </p>
    </section>

    <img src={Protoboard} alt="" className='w-full mb-2' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-10'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Protoboard
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph mb-4">
        É uma placa com furos de conexão condutoras para a montagem de circuitos, juntamente com a placa eletrônica. 
      </p>

      <p className="font-normal text-lg text-surfaces-text-paragraph">
        Fornecido pela escola, custa ente R$ 30,00 á R$  50,00. 
      </p>
    </section>

    <img src={Ph} alt="" className='w-full mb-2' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-10'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Medidor de ph
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph mb-4">
        O sensor de PH para arduino é um dispositivo de medição utilizados em vários setores, ele é capaz de medir a acidez de líquidos. 
      </p>

      <p className="font-normal text-lg text-surfaces-text-paragraph">
        Valor pago no produto R$ 150,00. 
      </p>
    </section>

    <img src={Color} alt="" className='w-full mb-2' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-10'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Sensor de cor
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph mb-4">
        O sensor é usado para detectar diversas cores variadas através do seu comprimento de onda. O seu sistema de analise RGB (Red, Green, Blue) pode-se determinar  variações de ondas, e então identificar a cor. 
      </p>

      <p className="font-normal text-lg text-surfaces-text-paragraph">
        Custa entre R$ 34,00 a R$ 70,00. 
      </p>
    </section>

    <img src={Tablet} alt="" className='w-full mb-2' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-10'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Tablet
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph">
        Tela para transmitir as informações necessários para o usuário  
      </p>
    </section>
  </section>

  <section className='flex flex-col items-center py-16 px-8 mb-16'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Funcionamento
      </h2>

      <p className="mb-20 mx-10 text-surfaces-text-paragraph text-xl text-justify">
        Através dos dados dos sensores presentes no projeto e um json com os parâmetros de comparação, é possível descobrir qual fruta o usuário possui e assim podemos dizer para ele se aquela fruta é saudável ou não para o pet. Como demonstrado a seguir
      </p>

      <section className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
        <img src={Caution} className="w-[42rem]" />

        <img src={Atention} className="w-[42rem]" />

        <img src={Liberated} className="w-[42rem]" />
      </section>
    </section>
  </>
  )
}