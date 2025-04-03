import { Navbar} from "./components/navBar"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import WorkExperience from "./components/experience"
import Education from "./components/education"
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <div className="flex items-center">
        <WorkExperience/>
        <Education/>
      </div>
      <Contact/>
    </div>
    </>
  );
}


