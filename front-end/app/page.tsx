import { Navbar} from "./components/navBar"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
export default function Home() {
  return (
    <>
          <Navbar />
    <div className="flex flex-col justify-center items-center min-h-screen">
    <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  );
}


