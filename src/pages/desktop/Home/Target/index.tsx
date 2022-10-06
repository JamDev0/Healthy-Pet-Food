import Girl from '../../../../assets/Girl.png'

export function DesktopTarget() {
  return(
    <section className='flex flex-col items-center py-16 px-28 mb-20'>
      <h2 className='text-surfaces-text-headline font-bold text-4xl mb-28'>
        Público alvo
      </h2>

      <section className='flex justify-between items-center w-full'>
        <img src={Girl} alt="" className='w-[26rem]' />
        <section className='bg-white px-6 py-4 rounded-md shadow-lg h-fit max-w-xl'>
          <p className='text-surfaces-text-paragraph text-base'>
          Pessoas que tenham cachorros ou gatos. E se preocupam com seus amores de quatro patas. Não possuem o conhecimento sobre os alimentos que podem fazer mal ao animal de estimação. 
          </p>
        </section>
      </section>
    </section>
  )
}