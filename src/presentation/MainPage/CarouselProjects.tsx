import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/common/carousel'

export const CarouselProjects = () => {
  return (
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
  )
}
