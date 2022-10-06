import Victoria from '../../assets/Victoria.png'

import Juan from '../../assets/Juan.png'

import Marina from '../../assets/Marina.png'

import Victor from '../../assets/Victor.png'
import { useEffect } from 'react'


export function Members() {
  useEffect(() => {
    document.title = 'Healthy Pet Food - Integrantes'
  }, [])

  return(
    <main className='flex flex-col items-center px-20 py-24 bg-surfaces-primary'>
      <section className="flex flex-wrap justify-center gap-x-16 gap-y-14 mb-10">
        <a href='https://www.instagram.com/victoria_.ester/' className="flex flex-col items-center gap-y-2">
          <img src={Victoria} className="w-48 mb-4" />

          <h2 className="text-xl text-surfaces-text-paragraph">
            @victoria_.ester
          </h2>

          <p className="text-xl text-surfaces-text-paragraph">Victoria</p>
        </a>

        <a href='https://www.instagram.com/jamdev0/' className="flex flex-col items-center gap-y-2">
          <img src={Juan} className="w-48 mb-4" />

          <h2 className="text-xl text-surfaces-text-paragraph">
            @jamdev0
          </h2>

          <p className="text-xl text-surfaces-text-paragraph">Juan</p>
        </a>

        <a href='https://www.instagram.com/mari_vieiraaf/' className="flex flex-col items-center gap-y-2">
          <img src={Marina} className="w-48 mb-4" />

          <h2 className="text-xl text-surfaces-text-paragraph">
            @mari_vieiraaf
          </h2> 

          <p className="text-xl text-surfaces-text-paragraph">Marina</p>
        </a>

        <a href='https://www.instagram.com/uvicx._zx/' className="flex flex-col items-center gap-y-2">
          <img src={Victor} className="w-48 mb-4" />

          <h2 className="text-xl text-surfaces-text-paragraph">
            @uvicx._zx
          </h2>

          <p className="text-xl text-surfaces-text-paragraph">Victor</p>
        </a>
      </section>

      <div className='w-full h-[5px] bg-brand-green-500'></div>
    </main>
  )
}