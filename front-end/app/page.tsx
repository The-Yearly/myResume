'use client'
import { Navbar} from "./themes/style1/components/navBar"
import { Contact } from "./themes/style1/components/contact"
import { EducationI, ExperienceI } from "@/utils/types"
import { Project } from "@/utils/types"
import { Skill } from "@/utils/types"
import { Theme } from "./themes/styles"
import { useState,useEffect } from "react"
import axios from "axios"
import { About,Hero } from "@/utils/types"
export default function Home() {
  const [hero,setHero]=useState<Hero|null>(null)
  const [about,setAbout]=useState<About|null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [skills,setSkills]=useState<Skill[]>([])
  const [projectStyle,setProjectStyle]=useState<keyof typeof Theme>("1")
  const [skillStyle,setSkillStyle]=useState<keyof typeof Theme>("1")
  const [educationStyle,setEducationStyle]=useState<keyof typeof Theme>("1")
  const [expStyle,setExpStyle]=useState<keyof typeof Theme>("1")
  const [education,setEducations]=useState<EducationI[]>([])
  const [exp,setExp]=useState<ExperienceI[]>([])

  useEffect(()=>{const getData=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getExperience/1")
    setExp(res.data.experience)
  }
  getData()},[])


  useEffect(()=>{const fetchData=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getProjects/1")
    setProjects(res.data.project)
  }
  fetchData()},[])
  
  useEffect(()=>{const getStyles=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles/1")
    setProjectStyle(res.data.styles.pstyle)
    setSkillStyle(res.data.styles.sstyle)
    setEducationStyle(res.data.styles.estyle)
    setExpStyle(res.data.styles.exstyle)
  }
  getStyles()},[])

  

  useEffect(()=>{const getHero=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getHero/1")
    const data=res.data.hero
    console.log(data)
    setHero({uid:data.uid,hero:data.hero,subhero:data.subhero,style:data.style})
  }
  getHero()},[])

  useEffect(()=>{const getAbout=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getAbout/1")
    const data=res.data.about
    setAbout({about:data.about,image:data.image,style:data.style,uid:1})
  }
  getAbout()},[])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getSkills/1")
        setSkills(res.data.skills)
      } catch (error) {
        console.error("Error fetching skills:", error)
      }
    }
    fetchData()
  }, [])

  useEffect(()=>{const getEd=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getEducations/1")
    setEducations(res.data.education)
  }
  getEd()},[])
  const SelectedHero=Theme[hero?.style as keyof typeof Theme]?.hero
  const SelectedAbout=Theme[about?.style as keyof typeof Theme]?.about
  const SelectedSkills=Theme[skillStyle]?.skills
  const SelectedProjects=Theme[projectStyle]?.projects
  const SelectedEducation=Theme[educationStyle]?.education
  const SelectedExp=Theme[expStyle]?.experience
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center min-h-screen">
      {SelectedHero?<SelectedHero content={{hero:hero?.hero||"Hello, I'm ...",subhero:hero?.subhero||"A passionate ......."}}/>:<p>Style Not Found</p>}
      {SelectedAbout?<SelectedAbout content={{bio:"I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create solutions that are not only functional but also provide exceptional user experiences. My journey in technology began with [your background] and I've since worked on various projects ranging from [types of projects]. I'm constantly learning and exploring new technologies to stay at the forefront of the industry. When I'm not coding, you can find me [your hobbies/interests].",image:"ss"}}/>:<p>Style Not Found</p>}
      {SelectedSkills?<SelectedSkills skills={skills}/>:<p>Style Not Found</p>}
      {SelectedProjects?<SelectedProjects content={projects}/>:<p>Style Not Found</p>}
      <div className="grid w-full grid-cols-1 lg:grid-cols-4">
        {SelectedExp?<SelectedExp experence={exp}/>:<p>Style Not Found</p>}
        {SelectedEducation?<SelectedEducation education={education}/>:<p>Style Not Found</p>}
      </div>
      <Contact/>
    </div>
    </>
  );
}


