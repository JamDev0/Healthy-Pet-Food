import VicDog from '../../../../assets/vic.png'

import Cat from '../../../../assets/Cat.png'

import DogApple from '../../../../assets/DogApple.png'

import DogIllustration from '../../../../assets/dogIllustration.svg'

import CatIllustration from '../../../../assets/catIllustration.svg'

import DogPal from '../../../../assets/petInfoIllustrations/dogPal.svg'

import CatPal from '../../../../assets/petInfoIllustrations/catPal.svg'

import DogNose from '../../../../assets/petInfoIllustrations/dogNose.svg'

import CatNose from '../../../../assets/petInfoIllustrations/catNose.svg'

import DogBite from '../../../../assets/petInfoIllustrations/dogBite.svg'

import CatBite from '../../../../assets/petInfoIllustrations/catBite.svg'

import DogInt from '../../../../assets/petInfoIllustrations/dogInt.svg'

import CatInt from '../../../../assets/petInfoIllustrations/catInt.svg'

import DogStomach from '../../../../assets/petInfoIllustrations/dogStomach.svg'

import CatStomach from '../../../../assets/petInfoIllustrations/catStomach.svg'

import Jose from '../../../../assets/Jose.svg'

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

      <section className='w-full mb-32'>
        <header className='flex items-center w-full mb-24'>
          <img src={DogIllustration} className="w-64" alt="Ilustração de um gato" />

          <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>
            Conheça um pouco do sitema dos pets
          </h2>
          
          <img src={CatIllustration} className="w-64" alt="Ilustração de um gato" />
        </header>

        <main className='grid grid-cols-5 items-center gap-y-16'>
          <img src={DogPal} />

          <p className='text-base text-surfaces-text-paragraph'>Os cães possuem um paladar muito diferenciado. Enquanto os seres humanos tem 9.000 papilas gustativas os cães tem apenas 1.700. Eles não escolhem as coisas pelo sabor mais sim pelo seu cheiro. </p>

          <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>Paladar</h2>

          <p className='text-end text-base text-surfaces-text-paragraph'>A língua dos gatinhos é muito ultil na hora da limpeza, porém não os ajuda a decifrar sabores. São muito diferentes comparado aos cachorros possuem apenas 400 papilas gustativas.</p> 
          
          <img src={CatPal} />


          <img src={DogNose} />

          <p className='text-base text-surfaces-text-paragraph'>Os cães possuem um ofalto muito sensível, mais do que os humanos e gatos.  conseguem sentir cheiros atraentes de longe.  </p>

          <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>Olfato</h2>

          <p className='text-end text-base text-surfaces-text-paragraph'>Os cheiros tem um papel muito importante na vida dos gatos, possuem cerca de 200 milhões de células olfativas. o que leva eles a escolherem a comida pelo cheiro. </p> 
          
          <img src={CatNose} />

          <img src={DogBite} />

          <p className='text-base text-surfaces-text-paragraph'>Os cães possuem mandíbulas e dentes fortes, desenvolvidos para rasgar e cortar o alimento.</p>

          <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>Mastigação</h2>

          <p className='text-end text-base text-surfaces-text-paragraph'>O gatos não mastigam muito, com um tempo curto já que sua dentição é voltada para a perfuração de alimentos.</p> 
          
          <img src={CatBite} />

          <img src={DogInt} />

          <p className='text-base text-surfaces-text-paragraph'>O processo no intestino dos cães é muito lento. Ele também é curto de 20 a 80 cm.</p>

          <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>Intestino</h2>

          <p className='text-end text-base text-surfaces-text-paragraph'>Assim como os cachorros os gatos possuem um intestino lento e curto de 9 á 72 cm em algumas raças. </p> 
          
          <img src={CatInt} />

          <img src={DogStomach} />

          <p className='text-base text-surfaces-text-paragraph'>Os cães possuem o volume estomacal muito grande em algumas raças pode variar de 6 á 8 litros. </p>

          <h2 className='text-surfaces-text-headline font-bold text-4xl mb-4 text-center'>Estomago</h2>

          <p className='text-end text-base text-surfaces-text-paragraph'>Os gatos por serem animais de porte menor possuem um estomago médio variando de 300 á 350 ml.</p> 
          
          <img src={CatStomach} />
        </main>
      </section>

      <section className='flex justify-between items-center w-full mb-32'>
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

      <section className="flex gap-x-4 items-center">
        <img className="" src={Jose} />

        <section>
          <h2 className="text-2xl text-surfaces-text-headline font-bold">Veterinário: José da Silva Fontes</h2>
          <p className="text-2xl text-surfaces-text-paragraph">Para a comprovação  e base de nosso projeto tivemos  o auxílio de um veterinário especializado em cães e gatos. Que nos ajudou a compreender melhor a necessidade de uma boa alimentação para a vida dos pets. </p>
        </section>
      </section>
    </section>
  )
}