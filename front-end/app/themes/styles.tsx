import { Hero } from "./style1/components/hero";
import { About } from "./style1/components/about";
import Hero2 from "./style2/components/hero2";
import { About2 } from "./style2/components/about2";
import { Projects2 } from "./style2/components/projects2";
import { Projects } from "./style1/components/projects";
import { Skills } from "./style1/components/skills";
import { Skills2 } from "./style2/components/skills2";
import Education from "./style1/components/education";
import Education2 from "./style2/components/education2";
import Experience1 from "./style1/components/experience";
import Experience2 from "./style2/components/experience2";
import { Hero1Preview } from "./style1/components/preview/hero1";
export const Theme = {
  "1": {
    hero: Hero,
    about: About,
    projects: Projects,
    skills: Skills,
    education: Education,
    experience: Experience1,
    heropreview: Hero1Preview,
  },
  "2": {
    hero: Hero2,
    about: About2,
    projects: Projects2,
    skills: Skills2,
    education: Education2,
    experience: Experience2,
    heropreview: Hero1Preview,
  },
};
