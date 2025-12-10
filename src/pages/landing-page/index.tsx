import { Navbar } from '@/components/landing/navbar/Navbar'
import { Hero } from '@/components/landing/header/Hero'
import { SectionAbout } from '../../components/landing/features/SectionAbout'
import { SectionCharacteristics } from '@/components/landing/features/SectionCharacteristics'
import { SectionCarousel } from '@/components/landing/features/SectionCarousel'
import { SectionContact } from '@/components/landing/features/SectionContact'
import { Footer } from '@/components/landing/footer/Footer'
import { useTheme } from '@/store'
import { useEffect } from 'react'

export default function LandingPage() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

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
