import Project from '../../../../assets/Project.png'

export function DesktopEquipmentsHeader() {
  return(
    <header className='flex justify-between items-center px-24 bg-surfaces-primary'>
      <section className='flex flex-col gap-y-2'>
        <h1 className='text-surfaces-text-headline font-bold text-5xl leading-normal'>
          Auxiliador na alimentação 
        </h1>

        <h2 className='text-surfaces-text-paragraph text-lg'>
          Uma alimentação saudável começa a cada refeição
        </h2>
      </section>

      <img src={Project} alt="" className='h-[25rem]' />
    </header>
  )
}