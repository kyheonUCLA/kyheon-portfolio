

import { chebyshevData } from "./projects-data/chebyshev-data";
import { electroData } from "./projects-data/electro-data";



const pageData = [
  {
    name: "main",
    link: "/"
  },
  {
    name: "projects",
    link: "/projects"
  },
  {
    name: chebyshevData.page,
    link: chebyshevData.card.pageURL
  },
  {
    name: electroData.page,
    link: electroData.card.pageURL
  }
] as const;



// ##################################

const allProjectsData = [chebyshevData, electroData] as const;

const projectsMap = {
  chebyshev: chebyshevData,
  electro: electroData,
  main: {toc: {}},
  projects: {toc: {}},
}

export { allProjectsData, pageData, projectsMap}