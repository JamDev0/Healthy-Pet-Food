import CanvaIcon from '../../../../assets/CanvaIcon.png'

import FigmaIcon from '../../../../assets/FigmaIcon.png'

import PsIcon from '../../../../assets/PsIcon.png'

import VsCodeIcon from '../../../../assets/VsCodeIcon.png'

import ReactLogo from '../../../../assets/ReactLogo.png'

import TailwindLogo from '../../../../assets/TailwindLogo.png'

import ViteLogo from '../../../../assets/ViteLogo.png'

import ArduinoLogo from '../../../../assets/ArduinoLogo.png'

export function Techs() {
  return(
    <section className='flex flex-col items-center py-16 px-48 bg-surfaces-primary'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Tecnologias utilizadas
      </h2>

      <section className='flex flex-wrap justify-center gap-x-60 gap-y-14'>
        <section className='flex flex-col items-center max-w-[14rem]'>
          <img src={CanvaIcon} className="w-32 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Usamos o canva para o desenvolvimento de design
          </p>
        </section>

        <section className='flex flex-col items-center max-w-[14rem]'>
          <img src={FigmaIcon} className="w-32 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Figma, usado para a prototipagem e desenvolvimento do site 
          </p>
        </section>

        <section className='flex flex-col items-center max-w-[14rem]'>
          <img src={PsIcon} className="w-32 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Photoshop, usado para a edição de algumas imagens 
          </p>
        </section>

        <section className='flex flex-col items-center max-w-[14rem]'>
          <img src={VsCodeIcon} className="w-32 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Visual studio code, usado para a produção do site
          </p>
        </section>
      </section>

      <div className='w-full h-[5px] bg-brand-green-500 my-20'></div>

      <section className='flex flex-wrap justify-center gap-x-60 gap-y-14'>
        <section className='flex flex-col items-center max-w-[18rem]'>
          <img src={ReactLogo} className="w-72 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Usamos o canva para o desenvolvimento de design
          </p>
        </section>

        <section className='flex flex-col items-center max-w-[18rem]'>
          <img src={TailwindLogo} className="w-72 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Figma, usado para a prototipagem e desenvolvimento do site 
          </p>
        </section>

        <section className='flex flex-col items-center max-w-[18rem]'>
          <img src={ViteLogo} className="w-72 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Photoshop, usado para a edição de algumas imagens 
          </p>
        </section>

        <section className='flex flex-col items-center max-w-[18rem]'>
          <img src={ArduinoLogo} className="w-72 mb-4" />

          <p className='text-base text-surfaces-text-paragraph text-center'>
            Visual studio code, usado para a produção do site
          </p>
        </section>
      </section>
    </section>
  )
}