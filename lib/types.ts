import { portfolioData } from "./projects-data/portfolio-data";
import { pageData, projectData } from "./data";

type PageName = (typeof pageData)[number]["name"];
type SectionName = (typeof portfolioData.links)[number]["name"];
type Theme = "light" | "dark";

type ProjectCardType = (typeof projectData)[number]

export type { SectionName, PageName, Theme }