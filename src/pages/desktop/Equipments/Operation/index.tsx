import Caution from "../../../../assets/Caution.png"

import Atention from "../../../../assets/Atention.png"

import Liberated from "../../../../assets/Liberated.png"

export function Operation() {
  return(
    <section className='flex flex-col items-center py-16 px-28'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Funcionamento
      </h2>

      <p className="mb-20 mx-44 text-surfaces-text-paragraph text-xl text-justify">
        Através dos dados dos sensores presentes no projeto e um json com os perímetros de comparação, é possível descobrir qual fruta o usuário possui e assim podemos dizer para ele se aquela fruta é saudável ou não para o pet. Como demonstrado a seguir
      </p>

      <section className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
        <img src={Caution} className="w-[42rem]" />

        <img src={Atention} className="w-[42rem]" />

        <img src={Liberated} className="w-[42rem]" />
      </section>
    </section>
  )
}