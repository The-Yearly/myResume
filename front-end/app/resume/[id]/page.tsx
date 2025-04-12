'use client'
import { Navbar } from "../../themes/style1/components/navBar"
import { Contact } from "../../themes/style1/components/contact"
import { EducationI, ExperienceI } from "@/utils/types"
import { HeroSkeleton } from "../../themes/skeletons/resume/hero"
import { Project } from "@/utils/types"
import { AboutSkeleton } from "../../themes/skeletons/resume/about"
import { SkillsSkeleton } from "../../themes/skeletons/resume/skills"
import { EducationSkeleton } from "../../themes/skeletons/resume/education"
import { ExperienceSkeleton } from "../../themes/skeletons/resume/experience"
import { ContactSkeleton } from "../../themes/skeletons/resume/contact"
import { Skill } from "@/utils/types"
import { Theme } from "../../themes/styles"
import { useState,useEffect,use } from "react"
import axios from "axios"
import { ProjectsSkeleton } from "../../themes/skeletons/resume/projects"
import { About,Hero } from "@/utils/types"
import { ProfileData } from "@/utils/types"
export default function Home({params}:{params:Promise<{id:number}>}) {
  const [profileData,setProfileData]=useState<ProfileData>({email:"",
    phone:"",
    location:"",
    linkedin:"",
  })
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
  const [heroloaded,setHeroLoaded]=useState(false)
  const [aboutloaded,setAboutLoaded]=useState(false)
  const [skillsLoaded,setSkillsLoaded]=useState(false)
  const [projectsLoaded,setProjectsLoaded]=useState(false)
  const [educationLoaded,setEducationLoaded]=useState(false)
  const [experienceLoaded,setExperienceLoaded]=useState(false)
  const [contactLoaded,setContactLoaded]=useState(false)
  const [stylesLoaded,setStylesLoaded]=useState(false)
  const uid=use(params).id

  useEffect(()=>{const getEd=async()=>{
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getEducations",{uid:uid})
      setEducations(res.data.education)
      setEducationLoaded(true)
  }
  getEd()},[])


  useEffect(()=>{const fetchData=async()=>{
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getProjects",{uid:uid})
      setProjects(res.data.project)
      setProjectsLoaded(true)
  }
  fetchData()},[])
  
  useEffect(()=>{const getStyles=async()=>{
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles",{uid:uid})
    setProjectStyle(res.data.styles.pstyle)
    setSkillStyle(res.data.styles.sstyle)
    setEducationStyle(res.data.styles.estyle)
    setExpStyle(res.data.styles.exstyle)
    setStylesLoaded(true)
  }
  getStyles()},[])

  useEffect(()=>{const getData=async()=>{
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getExperience",{uid:uid})
      setExp(res.data.experience)
      setExperienceLoaded(true)
  }
  getData()},[])


  useEffect(()=>{
    const fetchData=async()=>{
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getSkills",{uid:uid})
        setSkills(res.data.skills)
        setSkillsLoaded(true)
    }
    fetchData()},[])

  useEffect(()=>{const getHero=async()=>{
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getHero",{uid:uid})
    const data=res.data.hero
    setHero({hero:data.hero,subhero:data.subhero,style:data.style})
    setHeroLoaded(true)
  }
  getHero()},[])

  useEffect(()=>{const getAbout=async()=>{
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getAbout",{uid:uid})
    const data=res.data.about
    setAbout({about:data.about,image:data.image,style:data.style})
    setAboutLoaded(true)
  }
  getAbout()},[])
  

  useEffect(()=> {
    const fetchProfileData=async()=> {
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getContacts`,{uid:uid})
        const data=res.data.contact[0]
        setProfileData({
          email:data.email || "",
          phone:data.phone || "",
          location:data.location || "",
          linkedin:data.linkedin || "",
    })
    setContactLoaded(true)
    }
    fetchProfileData()
  },[])

  const SelectedHero=Theme[hero?.style as keyof typeof Theme]?.hero
  const SelectedAbout=Theme[about?.style as keyof typeof Theme]?.about
  const SelectedSkills=Theme[skillStyle]?.skills
  const SelectedProjects=Theme[projectStyle]?.projects
  const SelectedEducation=Theme[educationStyle]?.education
  const SelectedExp=Theme[expStyle]?.experience
  if(heroloaded && aboutloaded && projectsLoaded && skillsLoaded && experienceLoaded && educationLoaded && stylesLoaded &&contactLoaded){
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
      <Contact contact={profileData}/>
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