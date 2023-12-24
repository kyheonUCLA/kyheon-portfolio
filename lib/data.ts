

import { chebyshevData } from "./projects-data/chebyshev-data";
import { electroData } from "./projects-data/electro-data";




// ##################################

const allProjectsData = [chebyshevData, electroData] as const;


export { allProjectsData }