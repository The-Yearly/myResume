'use client'
import { Navbar } from "../../themes/style1/components/navBar"
import { Contact } from "../../themes/style1/components/contact"
import { HeroSkeleton } from "../../themes/skeletons/resume/hero"
import { AboutSkeleton } from "../../themes/skeletons/resume/about"
import { SkillsSkeleton } from "../../themes/skeletons/resume/skills"
import { EducationSkeleton } from "../../themes/skeletons/resume/education"
import { ExperienceSkeleton } from "../../themes/skeletons/resume/experience"
import { ContactSkeleton } from "../../themes/skeletons/resume/contact"
import { Theme } from "../../themes/styles"
import { useState,useEffect,use } from "react"
import axios from "axios"
import { ProjectsSkeleton } from "../../themes/skeletons/resume/projects"
import { defaultColors } from "@/app/themes/defaultColors"
import { resumeData } from "@/utils/types"
export default function Home({params}:{params:Promise<{id:number}>}){

  const [resume,setResume]=useState<resumeData>({
    uid:0,
    hero:null,
    heroColors:defaultColors["1"],
    heroloaded:false,
    about:null,
    aboutloaded:false,
    projects:[],
    projectStyle:"1",
    skills:[],
    skillStyle:"1",
    education:[],
    exp:[],
    contactLoaded:false,
    educationLoaded:false,
    educationStyle:"1",
    experienceLoaded:false,
    expStyle:"1",
    projectsLoaded:false,
    skillsLoaded:false,
    stylesLoaded:false,
    profileData:{
      email:"",
      phone:"",
      location:"",
      linkedin:"",
    }
  })
  const username=use(params).id
  useEffect(()=>{const fetchId=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getId/"+username)
    setResume(prev=>({
      ...prev,
      uid:res.data.uid
    }))
    
  }
  fetchId()},[])

  useEffect(()=>{const getEd=async()=>{
    if(resume.uid!=0){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getEducations",{uid:resume.uid})
      setResume(prev => ({
        ...prev,
        education:res.data.education,
        educationLoaded:true
      }));
  }}
  getEd()},[resume.uid])


  useEffect(()=>{const fetchData=async()=>{
    if(resume.uid!=0){  
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getProjects",{uid:resume.uid})
      setResume(prev=>({
        ...prev,
        projects:res.data.project,
        projectsLoaded:true
      }))
  }}
  fetchData()},[resume.uid])
  
  useEffect(()=>{const getStyles=async()=>{
    if(resume.uid!=0){ 
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles",{uid:resume.uid})
    setResume(prev=>({
      ...prev,
      projectStyle:res.data.styles.pstyle,
      skillStyle:res.data.styles.sstyle,
      educationStyle:res.data.styles.estyle,
      expStyle:res.data.styles.exstyle,
      stylesLoaded:true
    }))
  }}
  getStyles()},[resume.uid])

  useEffect(()=>{const getData=async()=>{
    if(resume.uid!=0){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getExperience",{uid:resume.uid})
      setResume(prev=>({
        ...prev,
        exp:res.data.experience,
        experienceLoaded:true
      }))
  }}
  getData()},[resume.uid])


  useEffect(()=>{
    const fetchData=async()=>{
      if(resume.uid!=0){
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getSkills",{uid:resume.uid})
        setResume(prev=>({
          ...prev,
          skills:res.data.skills,
          skillsLoaded:true
        }))
    }}
    fetchData()},[resume.uid])

  useEffect(()=>{const getHero=async()=>{
    if(resume.uid!=0){
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getHero",{uid:resume.uid})
    const data=res.data.hero
    setResume(prev=>({
      ...prev,
      hero:{hero:data.hero,subhero:data.subhero,style:data.style},
      heroloaded:true,
      heroColors:defaultColors[data.style as keyof typeof defaultColors]
    }))
  }}
  getHero()},[resume.uid])

  useEffect(()=>{const getAbout=async()=>{
    if(resume.uid!=0){
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getAbout",{uid:resume.uid})
    const data=res.data.about
    setResume(prev=>({
      ...prev,
      about:{about:data.about,image:data.image,style:data.style},
      aboutloaded:true
    }))
  }}
  getAbout()},[resume.uid])
  

  useEffect(()=> {
    if(resume.uid!=0){
    const fetchProfileData=async()=> {
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getContacts`,{uid:resume.uid})
        const data=res.data.contact[0]
    setResume(prev=>({
      ...prev,
      profileData:{
        email:data.email || "",
        phone:data.phone || "",
        location:data.location || "",
        linkedin:data.linkedin || "",
      },
      contactLoaded:true
    }))
    }
    fetchProfileData()
  }},[resume.uid])

  const SelectedHero=Theme[resume.hero?.style as keyof typeof Theme]?.hero
  const SelectedAbout=Theme[resume.about?.style as keyof typeof Theme]?.about
  const SelectedSkills=Theme[resume.skillStyle]?.skills
  const SelectedProjects=Theme[resume.projectStyle]?.projects
  const SelectedEducation=Theme[resume.educationStyle]?.education
  const SelectedExp=Theme[resume.expStyle]?.experience
  if(resume.heroloaded && resume.aboutloaded && resume.projectsLoaded && resume.skillsLoaded && resume.experienceLoaded && resume.educationLoaded && resume.stylesLoaded && resume.contactLoaded){
  return(
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center min-h-screen">
      {SelectedHero?<SelectedHero content={{hero:resume.hero?.hero||"Hello, I'm ...",subhero:resume.hero?.subhero||"A passionate ......."}} herocolors={resume.heroColors}/>:<p>Style Not Found</p>}
      {SelectedAbout?<SelectedAbout content={{bio:resume.about?.about||"",image:resume.about?.image||"http://placebeard.it/250/250"}}/>:<p>Style Not Found</p>}
      {SelectedSkills?<SelectedSkills skills={resume.skills}/>:<p>Style Not Found</p>}
      {SelectedProjects?<SelectedProjects content={resume.projects}/>:<p>Style Not Found</p>}
      <div className="grid w-full grid-cols-1 lg:grid-cols-4">
        {SelectedExp?<SelectedExp experence={resume.exp}/>:<p>Style Not Found</p>}
        {SelectedEducation?<SelectedEducation education={resume.education}/>:<p>Style Not Found</p>}
      </div>
      <Contact contact={resume.profileData}/>
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