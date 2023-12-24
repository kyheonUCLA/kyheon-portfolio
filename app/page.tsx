import { FC }  from 'react'
import About from '@/components/portfolio-components/About'
import Experience from '@/components/portfolio-components/Experience'
import Intro from '@/components/portfolio-components/Intro'
import FeaturedProjects from '@/components/portfolio-components/FeaturedProjects'
import Skills from '@/components/portfolio-components/Skills'
import Contact from '@/components/portfolio-components/Contact'

const HomePage: FC = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

export default HomePage;

