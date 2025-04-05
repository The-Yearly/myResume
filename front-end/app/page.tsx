import { Navbar} from "./components/navBar"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import Experience from "./components/experience"
import { EducationI } from "./components/education"
import Education from "./components/education"
import { ProjectsI } from "./components/projects"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
export default function Home() {
  const exp=[
    {
        company: 'Tech Corp',
        role: 'Software Engineer',
        startDate: 'Jan 2022',
        endDate:"July 2024",
        description: 'Developed and maintained web applications using modern technologies.',
      }]
  const skill=[
    {
      category: "Frontend",
      icon: <Layout className="h-5 w-5 mb-2 text-primary" />,
      items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5 mb-2 text-primary" />,
      items: ["Node.js", "Express"],
    },
    {
      category: "Database",
      icon: <Database className="h-5 w-5 mb-2 text-primary" />,
      items: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 mb-2 text-primary" />,
      items: ["React Native", "Flutter", "Lynx"],
    },
    {
      category: "Other",
      icon: <Code className="h-5 w-5 mb-2 text-primary" />,
      items: ["Git", "Docker", "Arduino"],
    },
    {
      category: "Languages",
      icon: <Globe className="h-5 w-5 mb-2 text-primary" />,
      items: ["Java", "C", "Python", "Go", "Haskell", "JavaScript", "TypeScript"],
    },
  ]
  const education: EducationI[] = [
    {
      institution: "University of Example",
      degree: "Bachelor of Science",
      startDate: "2016-09",
      endDate: "2020-05",
    },
  ];
  const projects:ProjectsI[] = [
    {
      title: "Project One",
      description: "A web application that allows users to track their daily habits and set goals.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Three",
      description: "A mobile app for finding and booking fitness classes in your area.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Google Maps API"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Four",
      description: "A dashboard for monitoring and visualizing data from IoT devices.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "D3.js", "Express"],
      link: "#",
      github: "#",
    },
  ]
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center min-h-screen">
       <Hero content={{title:"Hello, I'm John Yohan",subtitle:"A passionate developer creating innovative solutions and memorable experiences."}}/> 
      <About content={{bio:"I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create solutions that are not only functional but also provide exceptional user experiences. My journey in technology began with [your background] and I've since worked on various projects ranging from [types of projects]. I'm constantly learning and exploring new technologies to stay at the forefront of the industry. When I'm not coding, you can find me [your hobbies/interests].",image:"ss"}}/>
      <Skills skills={skill}/>
      <Projects content={projects}/>
      <div className="flex items-center">
        <Experience experence={exp}/>
        <Education education={education}/>
      </div>
      <Contact/>
    </div>
    </>
  );
}


