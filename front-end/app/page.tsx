'use client'
import { Navbar} from "./themes/style1/components/navBar"
import { Contact } from "./themes/style1/components/contact"
import { EducationI, ExperienceI } from "@/utils/types"
import { HeroSkeleton } from "./themes/skeletons/hero"
import { Project } from "@/utils/types"
import { AboutSkeleton } from "./themes/skeletons/resume/about"
import { SkillsSkeleton } from "./themes/skeletons/resume/skills"
import { EducationSkeleton } from "./themes/skeletons/resume/education"
import { ExperienceSkeleton } from "./themes/skeletons/resume/experience"
import { ContactSkeleton } from "./themes/skeletons/resume/contact"
import { Skill } from "@/utils/types"
import { Theme } from "./themes/styles"
import { useState,useEffect } from "react"
import axios from "axios"
import { ProjectsSkeleton } from "./themes/skeletons/resume/projects"
import { About,Hero } from "@/utils/types"
import { Session } from "@/middleware"
import Cookies from "js-cookie"
export default function Home() {
  const [logged,setLogged]=useState<Session>({session:"dd",uid:0})
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
  const [loading,setLoading]=useState(6)

    
  useEffect(()=>{const getCookies=async()=>{
    const cookie=Cookies.get("creds")
    setLogged(JSON.parse(cookie??''))
   }
  getCookies()},[])

  useEffect(()=>{const getEd=async()=>{
    if(logged.uid!=0){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getEducations",{uid:logged.uid,session:logged.session})
      setEducations(res.data.education)
      setLoading(loading+1)
  }}
  getEd()},[logged])


  useEffect(()=>{const fetchData=async()=>{
    if(logged.uid!=0){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getProjects",{uid:logged.uid,session:logged.session})
      setProjects(res.data.project)
      setLoading(loading+1)
  }}
  fetchData()},[logged])
  
  useEffect(()=>{const getStyles=async()=>{
    if(logged.uid!=0){
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles",{uid:logged.uid,session:logged.session})
    setProjectStyle(res.data.styles.pstyle)
    setSkillStyle(res.data.styles.sstyle)
    setEducationStyle(res.data.styles.estyle)
    setExpStyle(res.data.styles.exstyle)
    setLoading(loading+1)
    }
  }
  getStyles()},[logged])

  useEffect(()=>{const getData=async()=>{
    if(logged.uid!=0){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getExperience",{uid:logged.uid,session:logged.session})
      setExp(res.data.experience)
      setLoading(loading+1)
    }
  }
  getData()},[logged])


  useEffect(()=>{
    const fetchData=async()=>{
      if(logged.uid!=0){
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getSkills",{uid:logged.uid,session:logged.session})
        setSkills(res.data.skills)
      }
    }
    fetchData()},[logged])

  useEffect(()=>{const getHero=async()=>{
    if(logged.uid!=0){
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getHero",{uid:logged.uid,session:logged.session})
    const data=res.data.hero
    console.log(logged.uid)
    setHero({hero:data.hero,subhero:data.subhero,style:data.style})
    setLoading(loading+1)
  }}
  getHero()},[logged])

  useEffect(()=>{const getAbout=async()=>{
    if(logged.uid!=0){
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getAbout",{uid:logged.uid,session:logged.session})
    const data=res.data.about
    setAbout({about:data.about,image:data.image,style:data.style})
    setLoading(loading+1)
  }}
  getAbout()},[logged])
  

  const SelectedHero=Theme[hero?.style as keyof typeof Theme]?.hero
  const SelectedAbout=Theme[about?.style as keyof typeof Theme]?.about
  const SelectedSkills=Theme[skillStyle]?.skills
  const SelectedProjects=Theme[projectStyle]?.projects
  const SelectedEducation=Theme[educationStyle]?.education
  const SelectedExp=Theme[expStyle]?.experience
  if(loading==7){
  return(
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center min-h-screen">
      {SelectedHero?<SelectedHero content={{hero:hero?.hero||"Hello, I'm ...",subhero:hero?.subhero||"A passionate ......."}}/>:<p>Style Not Found</p>}
      {SelectedAbout?<SelectedAbout content={{bio:about?.about||"",image:about?.image||"http://placebeard.it/250/250"}}/>:<p>Style Not Found</p>}
      {SelectedSkills?<SelectedSkills skills={skills}/>:<p>Style Not Found</p>}
      {SelectedProjects?<SelectedProjects content={projects}/>:<p>Style Not Found</p>}
      <div className="grid w-full grid-cols-1 lg:grid-cols-4">
        {SelectedExp?<SelectedExp experence={exp}/>:<p>Style Not Found</p>}
        {SelectedEducation?<SelectedEducation education={education}/>:<p>Style Not Found</p>}
      </div>
      <Contact/>
    </div>
    </>
  )
  }
  else{
    return(
      <>  
        <div className="flex flex-col justify-center items-center min-h-screen">
          <HeroSkeleton/>
          <AboutSkeleton/>
          <SkillsSkeleton/>
          <ProjectsSkeleton/>
          <div className="grid w-full grid-cols-1 lg:grid-cols-4">
            <EducationSkeleton/>
            <ExperienceSkeleton/>
          </div>
          <ContactSkeleton/>
        </div>
      </>
    )
  }
  }


