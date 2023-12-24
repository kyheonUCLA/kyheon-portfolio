import { portfolioData } from "./projects-data/portfolio-data";
import { pageData, allProjectsData } from "./data";

type PageName = (typeof pageData)[number]["name"];
type SectionName = (typeof portfolioData.links)[number]["name"];
type Theme = "light" | "dark";

type ProjectDataType = (typeof allProjectsData)[number]

export type { SectionName, PageName, Theme, ProjectDataType }