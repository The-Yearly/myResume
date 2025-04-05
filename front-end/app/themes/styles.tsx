import { Hero } from "../components/hero"
import { About } from "../components/about"
import Hero2 from "./style2/components/hero2"
import { About2 } from "./style2/components/about2"
import { Projects2 } from "./style2/components/projects2"
import { Projects } from "../components/projects"
import { Skills } from "../components/skills"
import { Skills2 } from "./style2/skills2"
export const Theme={
    "style1":{
        "hero":Hero,
        "about":About,
        "projects":Projects,
        "skills":Skills
    },
    "style2":{
        "hero":Hero2,
        "about":About2,
        "projects":Projects2,
        "skills":Skills2
    }
}