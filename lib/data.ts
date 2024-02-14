

import { chebyshevData } from "./projects-data/chebyshev-data";
import { electroData } from "./projects-data/electro-data";
import { handaidData } from "./projects-data/handaid-data";
import { secureaiData } from "./projects-data/secureai-data";


// ##################################

const allProjectsData = [chebyshevData, electroData, handaidData, secureaiData] as const;


export { allProjectsData }