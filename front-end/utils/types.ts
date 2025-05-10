import { Theme } from "@/app/themes/styles"

export interface Hero{
    hero:string,
    subhero:string
    style:string
}

export interface About{
    image:string,
    about:string,
    style:string
}

export interface Project{
    pid?:number
    title:string,
    image:string,
    desc:string,
    tags:string[],
    github:string,
    Link:string,
}

export interface SelectedStyle{
    sstyle?:keyof typeof Theme
    pstyle?:keyof typeof Theme
    estyle?:keyof typeof Theme
    exstyle?:keyof typeof Theme
}
export interface Skill{
    sid:number
    icon:String
    skillname:string
    skills:string[]
}

export interface ExperienceI{
    exid?:number
    title:string
    corp:string
    startdate:string
    enddate:string|null
    desc:string
}

export interface EducationI{
    edid?:number
    inst:string
    degree:string
    startdate:string
    enddate:string|null
}

export interface User{
    username: string
    password: string
    email?:string
}


export interface ProfileData {
  email: string
  phone: string
  location: string
  linkedin: string
}

export interface PasswordData {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}


export interface getUsers {
    username: string,
    uid:number
    contact:[
      {
        email: string,
        phone: string,
        location: string,
        linkedin: string
      }]
    ,
    About:[
      {
        image: string,
        about: string,
        style: string
      }]
  }

export interface heroColors{
      Background:string
      Hero:string
      Sub_Hero:string
      Button_1:string
      Button_1_Text:string
      Button_2:string
      Button_2_Text:string
}