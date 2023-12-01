import About from '@/components/About'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import FeaturedProjects from '@/components/FeaturedProjects'
import SectionDivider from '@/components/SectionDivider'
import Skills from '@/components/Skills'
import MainHeader from '@/components/MainHeader'

function HomePage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
    </main>
  )
}

export default HomePage

