import { Navbar } from '@/components/landing/navbar/Navbar'
import { Hero } from '@/components/landing/header/Hero'
import { SectionAbout } from '../../components/landing/features/SectionAbout'
import { SectionCharacteristics } from '@/components/landing/features/SectionCharacteristics'
import { SectionCarousel } from '@/components/landing/features/SectionCarousel'
import { SectionContact } from '@/components/landing/features/SectionContact'
import { Footer } from '@/components/landing/footer/Footer'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionAbout />
      <SectionCharacteristics />
      <SectionCarousel />
      <SectionContact />

      <Footer />
    </>
  )
}
