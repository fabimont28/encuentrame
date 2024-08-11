import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Header />
      <Hero />
    </main>
  )
}

export function Hero() {
  return (
    <section className='bg-pattern w-full py-16'>
      <Container>
        <div className='flex flex-col gap-2'>
          <h1 className='text-balance text-center text-6xl font-semibold text-black'>
            Encuentra todos los <span className='text-[#3036d2]'>servicios</span> que necesitas en
            un solo lugar
          </h1>
          <div className='flex w-full justify-center text-center'>
            <p className='w-[40ch] text-pretty'>
              Busca cualquier producto o servicio de tu tienda favorita, ¡Te daremos todos los
              detalles!
            </p>
          </div>
        </div>
        <div className='mb-12 mt-8 flex items-center justify-center'>
          <div className='flex justify-between gap-2'>
            <Input
              className='w-60 rounded-lg focus-visible:ring-[#e2652c]'
              type='search'
              placeholder='Producto, servicio, tienda,...'
            />
            <Button className='bg-[#e2652c] text-white'>Busca ahora</Button>
          </div>
        </div>
        <div className='flex justify-center'>
          <Carousel className='w-full'>
            <CarouselContent>
              <CarouselItem>
                <div className='flex w-full justify-center'>
                  <Image
                    className='rounded-2xl'
                    src='/ecommerce.webp'
                    alt='Ecommerce'
                    width={800}
                    height={400}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className='flex w-full justify-center'>
                  <Image
                    className='rounded-2xl'
                    src='/clinic.webp'
                    alt='Clinic'
                    width={800}
                    height={400}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='top-0' />
            <CarouselNext className='top-0' />
          </Carousel>
        </div>
      </Container>
    </section>
  )
}

export function Header() {
  return (
    <header className='w-full p-4'>
      <Container className='flex items-center justify-between text-sm'>
        <div>
          <h1 className='font-semibold text-black'>Logo</h1>
          <p></p>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a href='#'>Inicio</a>
            </li>
            <li>
              <a href='#'>Servicios</a>
            </li>
            <li>
              <a href='#'>Contacto</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
