import { ArrowRight } from 'lucide-react'
import { Button } from '../components/common/button'
import { Container } from '../components/common/container'
import { CarouselProjects } from './CarouselProjects'

export const HeroMainProject = () => {
  return (
    <section className='bg-pattern w-full py-16'>
      <Container>
        <div className='flex flex-col gap-2'>
          <h1 className='text-balance text-center text-6xl font-semibold text-black'>
            Encuentra todos los <span className='text-[#3036d2]'>servicios</span> en un solo lugar
          </h1>
          <div className='flex w-full justify-center text-center'>
            <p className='w-[60ch] text-pretty pt-2 text-lg text-zinc-600'>
              Encuentrame ofrece multiples servicios que te ayudan a conectar con personas o
              productos para cualquiera de tus necesidades.
            </p>
          </div>
        </div>
        <section className='flex items-center justify-center pt-10'>
          <Button className='mr-4 rounded-2xl bg-first py-8 text-white transition hover:scale-105 hover:bg-first/90'>
            Registrate Gratis <ArrowRight className='h-4.5 w-4.5 ml-2'></ArrowRight>
          </Button>
          <Button
            variant={'link'}
            className='transition hover:scale-105'
          >
            Se parte de Nosotros <ArrowRight className='h-4.5 w-4.5 ml-2'></ArrowRight>
          </Button>
        </section>
        {/* <div className='mb-12 mt-8 flex items-center justify-center'>
        <div className='flex justify-between gap-2'>
          <Input
            className='w-60 rounded-lg focus-visible:ring-[#e2652c]'
            type='search'
            placeholder='Producto, servicio, tienda,...'
          />
          <Button className='bg-[#e2652c] text-white'>Busca ahora</Button>
        </div>
      </div> */}
      </Container>
      {/* <CarouselProjects /> */}
    </section>
  )
}
