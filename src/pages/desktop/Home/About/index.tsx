import VicDog from '../../../../assets/vic.png'

import Cat from '../../../../assets/Cat.png'

import DogApple from '../../../../assets/DogApple.png'

import DogIllustration from '../../../../assets/dogIllustration.svg'

import CatIllustration from '../../../../assets/catIllustration.svg'


export function DesktopAbout() {
  return(
    <section className='flex flex-col items-center py-16 px-28'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Sobre
      </h2>

      <section className='flex justify-between items-center w-full mb-32'>
        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Ideia inicial
          </h2>

          <p className='text-surfaces-text-paragraph text-base'>
            Uma participante do nosso grupo sempre teve muita dificuldade em pesquisar quais alimentos poderiam ou não fazer bem para sua pet. Sempre tinha que pesquisar em vários sites, que diziam informações diferentes e aumentavam cada vez mais sua insegurança na hora de alimenta-la com produtos naturais. Nossa ideia foi fazer um projeto que desse mais segurança e diminuísse a preocupação não só dela mas de outros donos que amam seus bichinhos.
          </p>
        </section>

        <img src={VicDog} alt="" className='w-[26rem]' />
      </section>

      <section className='flex justify-between items-center w-full mb-32'>
        <img src={Cat} alt="" className='w-[26rem]' />

        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Importância   
          </h2>

          <p className='text-surfaces-text-paragraph text-base'>
            Acreditamos que nosso TCC pode salvar a vida de muitos animais, já que muitos tutores dão alimentos que nos fazem bem, mas para os animais se tornam prejudiciais ou mortais. Precisamos combater a desinformação.
          </p>
        </section>
      </section>

      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>
        Apesar de alguns alimentos, principalmente frutas parecerem inofensivas para os eles podem ser péssimos para a saúde
      </h2>

      <h3 className='text-surfaces-text-paragraph text-xl mb-28 text-center mx-20'>
        Alguns alimentos são benéficos para a saúde dos humanos, porém para a vida dos animais podem ser extremamente tóxicos, isso poruque o sitema dos bichinhos é totalmente diferente do nosso. 
      </h3>

      <section className='w-full'>
        <header className='flex items-center w-full mb-24'>
          <img src={DogIllustration} className="w-64" alt="Ilustração de um gato" />

          <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>
            Conheça um pouco do sitema dos pets
          </h2>
          
          <img src={CatIllustration} className="w-64" alt="Ilustração de um gato" />
        </header>

        <main className='flex flex-col gap-y-24'>
          <section>
            
          </section>
        </main>
      </section>

      <section className='flex justify-between items-center w-full'>
        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <h2 className='font-bold text-surfaces-text-headline text-2xl mb-6'>
            Benefícios  
          </h2>

          <p className='text-surfaces-text-paragraph text-base mb-4'>
            A nutrição do animal é extremamente importante, alimentando-os corretamente é possível melhorar sua saúde e sua longevidade. Alguns benefícios de  uma  alimentação adequada:
          </p>

          <ul className='font-bold text-surfaces-text-headline list-disc list-inside'>
            <li>Redução de alergias</li>
            <li>Pelagem saudável</li>
            <li>Peso adequado</li>
            <li>Qualidade de vida</li>
          </ul>
        </section>

        <img src={DogApple} alt="" className='w-[26rem]' />
      </section>
    </section>
  )
}