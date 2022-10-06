import CatDog from '../../../../assets/CatDog.png'

export function DesktopHomeHeader() {
  return(
    <header className='flex justify-between items-center px-24 bg-surfaces-primary'>
      <section className='flex flex-col gap-y-2'>
        <h1 className='text-surfaces-text-headline font-bold text-5xl leading-normal'>
          O melhor para a alimentação do seu pet
        </h1>

        <h2 className='text-surfaces-text-paragraph text-lg'>
          Cuidados com a saúde de cães e gatos
        </h2>
      </section>

      <img src={CatDog} alt="" className='h-[32.5rem]' />
    </header>
  )
}