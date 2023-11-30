import Intro from '@/components/Intro'
import ProjectGrid from '@/components/ProjectGrid'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <ProjectGrid />
    </main>
  )
}
