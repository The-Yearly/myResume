'use client'
import { Navbar} from "./themes/style1/components/navBar"
import { Contact } from "./themes/style1/components/contact"
import Experience from "./themes/style1/components/experience"
import { EducationI } from "./themes/style1/components/education"
import Education from "./themes/style1/components/education"
import { ProjectsI } from "./themes/style1/components/projects"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import { Theme } from "./themes/styles"
import { useState,useEffect } from "react"
import axios from "axios"
import { about,hero } from "@/utils/types"
export default function Home() {
  const [hero,setHero]=useState<hero|null>(null)
  const [about,setAbout]=useState<about|null>(null)
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  useEffect(()=>{const getHero=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getHero/1")
    const data=res.data.hero
    setHero({uid:data.uid,hero:data.hero,subhero:data.subhero,style:data.style})
  }
  getHero()},[])

  useEffect(()=>{const getAbout=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getAbout/1")
    const data=res.data.about
    setAbout({about:data.about,image:data.image,style:data.style,uid:1})
  }
  getAbout()},[])
  
  const styles:(keyof typeof Theme)[]=["2","1"]
  const SelectedHero=Theme[hero?.style as keyof typeof Theme]?.hero
  const SelectedAbout=Theme[about?.style as keyof typeof Theme]?.about
  const SelectedSkills=Theme[styles[0]]?.skills
  const SelectedProjects=Theme[styles[1]]?.projects

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
      {SelectedHero?<SelectedHero content={{hero:hero?.hero||"Hello, I'm ...",subhero:hero?.subhero||"A passionate ......."}}/>:<p>Style Not Found</p>}
      {SelectedAbout?<SelectedAbout content={{bio:"I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create solutions that are not only functional but also provide exceptional user experiences. My journey in technology began with [your background] and I've since worked on various projects ranging from [types of projects]. I'm constantly learning and exploring new technologies to stay at the forefront of the industry. When I'm not coding, you can find me [your hobbies/interests].",image:"ss"}}/>:<p>Style Not Found</p>}
      {SelectedSkills?<SelectedSkills skills={skill}/>:<p>Style Not Found</p>}
      {SelectedProjects?<SelectedProjects content={projects}/>:<p>Style Not Found</p>}
      <div className="flex items-center">
        <Experience experence={exp}/>
        <Education education={education}/>
      </div>
      <Contact/>
    </div>
    </>
  );
}


