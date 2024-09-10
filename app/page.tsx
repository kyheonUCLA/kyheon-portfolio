import { FC }  from 'react'
import About from '@/components/portfolio/About'
import Experience from '@/components/portfolio/Experience'
import Intro from '@/components/portfolio/Intro'
import FeaturedProjects from '@/components/portfolio/FeaturedProjects'
import Skills from '@/components/portfolio/Skills'
import Contact from '@/components/portfolio/Contact'
import MainHeader from '@/components/MainHeader'

const HomePage: FC = () => {
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

export default HomePage;

