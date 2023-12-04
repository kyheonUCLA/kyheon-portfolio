import { FC }  from 'react'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import FeaturedProjects from '@/components/FeaturedProjects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

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

