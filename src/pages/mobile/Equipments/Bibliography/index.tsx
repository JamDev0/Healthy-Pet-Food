import MagGlass from '../../../../assets/MagGlass.svg'

import Cam from '../../../../assets/Cam.svg'

export function Bibliography() {
  return (
    <section className="w-full flex flex-col items-center py-6 px-9 pb-20 ">
      <h2 className="font-bold text-4xl mb-14">
        Bibliografia
      </h2>

      <section className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl mb-10">
        <img src={MagGlass} className="w-24 h-24 mb-1" />

        <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

        <p className='text-surfaces-text-paragraph text-center text-lg'>
          Site sobre alimentação exencial dos pets 
        </p>
      </section>

      <section className="flex flex-col items-center px-10 py-4 bg-white rounded-lg shadow-xl">
        <img src={Cam} className="w-24 h-24 mb-1" />

        <div className='bg-brand-green-500 w-full h-[2px] mb-4'></div>

        <p className='text-surfaces-text-paragraph text-center text-lg'>
          Site sobre alimentação exencial dos pets 
        </p>
      </section>
    </section>
  )
}