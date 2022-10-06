import CatDogImage from '../../../../assets/CatDog.png'

import DogImage from '../../../../assets/Dog.png'

import CatImage from '../../../../assets/Cat.png'

import GirlImage from '../../../../assets/Girl.png'

import DogApple from '../../../../assets/DogApple.png'

export function Content() {
  return(
    <>
    <section className="flex flex-col gap-y-6 bg-surfaces-primary items-center px-6 py-12">
    <h2 className="font-bold text-3xl text-surfaces-text-headline text-center">
      O melhor para a alimentação do seu pet
    </h2>

    <p className="font-normal text-lg text-surfaces-text-paragraph text-center mb-4">
      Cuidados com a saúde de cães e gatos.
    </p>

    <img src={CatDogImage} alt="" className='w-full' />
  </section>

  <section className="flex flex-col items-center px-6 py-10">
    <h2 className="font-bold text-4xl text-surfaces-text-headline text-center mb-20">
      Sobre 
    </h2>

    <img src={DogImage} alt="" className='w-full mb-2' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-10'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Ideia inicial
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph">
      Uma participante do nosso grupo sempre teve muita dificuldade em pesquisar quais alimentos poderiam ou não fazer bem para sua pet. Sempre tinha que pesquisar em vários sites, que diziam informações diferentes e aumentavam cada vez mais sua insegurança na hora de alimenta-la com produtos naturais. Nossa ideia foi fazer um projeto que desse mais segurança e diminuísse a preocupação não só dela mas de outros donos que amam seus bichinhos.
      </p>
    </section>

    <img src={CatImage} alt="" className='w-full mb-2' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-10'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Importância
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph">
        Acreditamos que nosso TCC pode salvar a vida de muitos animais, já que muitos tutores dão alimentos que nos fazem bem, mas para os animais se tornam prejudiciais ou mortais. Precisamos combater a desinformação.
      </p>
    </section>

    <img src={DogApple} alt="" className='w-full' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-16'>
      <h3 className="font-bold text-2xl text-surfaces-text-headline mb-4">
        Benefícios
      </h3>

      <p className="font-normal text-lg text-surfaces-text-paragraph mb-10">
        A nutrição do animal é extremamente importante, alimentando-os corretamente é possível melhorar sua saúde e sua longevidade. Alguns benefícios de  uma  alimentação adequada:
      </p>

      <ul className='font-bold text-lg text-surfaces-text-headline list-disc list-inside'>
            <li>Redução de alergias</li>
            <li>Pelagem saudável</li>
            <li>Peso adequado</li>
            <li>Qualidade de vida</li>
          </ul>

        
    </section>

    <h2 className="font-bold text-4xl text-surfaces-text-headline text-center mb-20">
      Público alvo 
    </h2>

    <img src={GirlImage} alt='' className='w-full mb-4' />

    <section className='bg-white px-6 py-4 rounded-md shadow-sm mb-16'>
      <p className="font-normal text-lg text-surfaces-text-paragraph">
        Pessoas que tenham cachorros ou gatos. E se preocupam com seus amores de quatro patas.
      </p>
    </section>

  </section>
  </>
  )
}