import { HeaderMainPage } from '../presentation/MainPage/Header-MainPage'
import { HeroMainProject } from '../presentation/MainPage/Hero-MainProject'

export default function HomeMainPage() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <HeaderMainPage />
      <HeroMainProject />
    </main>
  )
}
