import { Button } from '../components/common/button'
import { Container } from '../components/common/container'

export const HeaderMainPage = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-backgroundSecondary p-4 text-white'>
      <Container className='grid grid-cols-3 items-center justify-center text-sm'>
        <div>
          <h1 className='font-semibold'>Logo</h1>
          <p></p>
        </div>
        <nav className='flex items-center justify-center'>
          <ul className='flex space-x-7 font-bold hover:[&>li]:text-first hover:[&>li]:transition'>
            <li className='transition-colors duration-300 ease-in-out'>
              <a href='#'>Inicio</a>
            </li>
            <li className='transition-colors duration-300 ease-in-out'>
              <a href='#'>Servicios</a>
            </li>
            <li className='transition-colors duration-300 ease-in-out'>
              <a href='#'>Contacto</a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center justify-end'>
          <Button
            variant={'secondary'}
            className='rounded-xl text-base font-bold'
          >
            Comenzar
          </Button>
        </div>
      </Container>
    </header>
  )
}
