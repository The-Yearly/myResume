import { Theme } from "@/app/themes/styles"

export interface Hero{
    uid:number
    hero:string,
    subhero:string
    style:string
}

export interface About{
    uid:number,
    image:string,
    about:string,
    style:string
}

export interface Project{
    uid:number,
    pid?:number
    title:string,
    image:string,
    desc:string,
    tags:string[],
    github:string,
    Link:string,
}

export interface SelectedStyle{
    uid:number,
    sstyle?:keyof typeof Theme
    pstyle?:keyof typeof Theme
    estyle?:keyof typeof Theme
    exstyle?:keyof typeof Theme
}
export interface Skill{
    uid:number
    sid:number
    icon:String
    skillname:string
    skills:string[]
}