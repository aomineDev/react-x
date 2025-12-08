import { Navbar } from '@/components/landing/navbar/Navbar'
import { Hero } from '@/components/landing/header/Hero'
import { SectionAbout } from '../../components/landing/features/SectionAbout'
import { SectionWrapper } from '@/components/atoms/SectionWrapper'

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <SectionWrapper>
        <Hero />
        <SectionAbout />
      </SectionWrapper>
    </>
  )
}
