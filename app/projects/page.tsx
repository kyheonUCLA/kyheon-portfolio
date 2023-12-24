import { FC } from 'react';
import ProjectGrid from '@/components/blog/ProjectGrid'

const ProjectsPage: FC = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <ProjectGrid />
    </main>
  )
}

export default ProjectsPage;
