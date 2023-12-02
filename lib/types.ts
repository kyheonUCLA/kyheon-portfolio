import { mainLinks } from "./data";

type SectionName = (typeof mainLinks)[number]["name"];
type Theme = "light" | "dark";

export type { SectionName, Theme }