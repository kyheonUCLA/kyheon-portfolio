import { portfolioData } from "./projects-data/portfolio-data";
import { allProjectsData } from "./data";

type Theme = "light" | "dark";
type ProjectDataType = (typeof allProjectsData)[number]
type HeaderSectionName = (typeof portfolioData.links)[number]["name"];
type NavbarSectionHash = typeof allProjectsData[number]['toc'][number]["hash"];

export type { HeaderSectionName, NavbarSectionHash, Theme, ProjectDataType }