import { Navbar } from '@/components/templates/navbar/Navbar'
import { Hero } from '@/components/templates/header/Hero'
import { SectionAbout } from '../../components/templates/features/SectionAbout'
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
