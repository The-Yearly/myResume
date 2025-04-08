import e, { Router } from "express";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";
import { Hero,About, Project, userstyles, Skills } from "../../../utils/zod";
export const router=Router()
const client=new PrismaClient()
router.get("/getHero/:uid",async(req,res)=>{
    const data=req.params.uid
    console.log(data)
    const response=await client.hero.findFirst(
        {
            where:{
                uid:parseInt(data)
            }
        }
    )
    console.log(response)
    res.json({hero:response})
})

router.post("/setHero",async(req,res)=>{
    const parsedResponse=Hero.safeParse(req.body)
    if(!parsedResponse){
        res.json({message:"Sorry Failed To Update"})
    }
    const response=await client.hero.updateMany(
        {
            where:{
            uid:parsedResponse.data?.uid
        },
        data:{
            hero:parsedResponse.data?.hero,
            subhero:parsedResponse.data?.subhero,
            style:parsedResponse.data?.style
        }
    }
    )
    if(!response){
        res.json({message:"Sorry Failed To Update"})
    }
    res.json({message:"Succefully Updated"})
})

router.get("/getAbout/:uid",async(req,res)=>{
    const data=req.params.uid
    console.log(data)
    const response=await client.about.findFirst(
        {
            where:{
                uid:parseInt(data)
            }
        }
    )
    res.json({about:response})
})

router.post("/setAbout",async(req,res)=>{
    const parsedResponse=About.safeParse(req.body)
    if(!parsedResponse){
        res.json({message:"Sorry Failed To Update"})
    }
    const response=await client.about.updateMany(
        {
            where:{
                uid:parsedResponse.data?.uid
            },
            data:{
                about:parsedResponse.data?.about,
                image:parsedResponse.data?.image,
                style:parsedResponse.data?.style,
            }
        }
    )
    if(!response){
        res.json({message:"Sorry Failed To Update"})
    }
    res.json({message:"Succefully Updated"})
})

router.get("/getProjects/:id",async(req,res)=>{
    const uid=req.params.id
    const response=await client.project.findMany({
        where:{
            uid:parseInt(uid)
        }
    })
    res.json({project:response})
})

router.get("/getStyles/:id",async(req,res)=>{
    const uid=req.params.id
    const response=await client.userstyle.findUnique({
        where:{
            uid:parseInt(uid)
        }
    })
    res.json({styles:response})
})

router.post("/updateProjectStyle",async(req,res)=>{
    console.log(req.body)    
    const parsedResponse=userstyles.safeParse(req.body)
    console.log(parsedResponse)
    if(!parsedResponse){
       res.json({message:"Sorry Failed To Update"})
    }
    const response=await client.userstyle.update({
        where:{
            uid:parsedResponse.data?.uid
        },
        data:{
            pstyle:parsedResponse.data?.pstyle
        }
    })
    if(!response){
        res.json({message:"Sorry Failed To Update"})
    }
    res.json({message:"Succefully Updated"})
})

router.post("/addProject",async(req,res)=>{
    const parsedResponse=Project.safeParse(req.body)
    console.log(parsedResponse)
    if(!parsedResponse.success){
        res.json({message:"Sorry Failed To Update"})
        return
    }
    const response=await client.project.create(
        {
            data:{
                github:parsedResponse.data?.desc,
                desc:parsedResponse.data?.desc,
                image:parsedResponse.data?.image,
                Link:parsedResponse.data.Link,
                title:parsedResponse.data.title,
                tags:parsedResponse.data.tags,
                uid:parsedResponse.data.uid
            }
        }
    )
    console.log(response)
    if(!response){
        res.json({message:"Sorry Failed To Update"})
    }
    res.json({message:"Succefully Updated"})
})

router.post("/updateProject",async(req,res)=>{
    const parsedResponse=Project.safeParse(req.body)
    console.log(parsedResponse)
    if(!parsedResponse.success){
        res.json({message:"Sorry Failed To Update"})
        return
    }
    const response=await client.project.update(
        {
            where:{
                pid:parsedResponse.data.pid
            },
            data:{
                github:parsedResponse.data?.desc,
                desc:parsedResponse.data?.desc,
                image:parsedResponse.data?.image,
                Link:parsedResponse.data.Link,
                title:parsedResponse.data.title,
                tags:parsedResponse.data.tags,
            }
        }
    )
    console.log(response)
    if(!response){
        res.json({message:"Sorry Failed To Update"})
    }
    res.json({message:"Succefully Updated"})
})

router.post("/deleteProject",async(req,res)=>{
    const response=await client.project.delete(
        {
            where:{
                pid:req.body.pid
            }
        }
    )
    if(!response){
        res.json({message:"Sorry Failed To Delete"})
    }
    res.json({message:"Succefully Deleted"})
})

router.get("/getSkills/:id",async(req,res)=>{
    const uid=req.params.id
    const response=await client.skills.findMany(
        {where:{
            uid:parseInt(uid)
        },orderBy:{
            sid:"asc"
        }
    }
    )
    res.json({skills:response})
})

router.post("/addSkills",async(req,res)=>{
    const parsedResponse=Skills.safeParse(req.body)
    if(!parsedResponse.success){
        res.json({message:"Couldnt Add Skill"})
        return
    }
    const response=await client.skills.create({
        data:{
            icon:parsedResponse.data?.icon,
            uid:parsedResponse.data?.uid,
            skills:parsedResponse.data?.skills,
            skillname:parsedResponse.data?.skillname
        }
    })
    if(!response){
        res.json({message:"Couldnt Add Skill"})
    }
    res.json({message:"Skiill Has Been Added"})
})

router.get("/deleteSkill/:id",async(req,res)=>{
    const response=await client.skills.delete(
        {
            where:{
                sid:parseInt(req.params.id)
            }
        }
    )
    if(!response){
        res.json({message:"Sorry Failed To Delete"})
    }
    res.json({message:"Succefully Deleted"})
})

router.post("/updateSkillCat",async(req,res)=>{
    const data=req.body
    const response=await client.skills.update(
        {
            where:{
                sid:data.sid
            },
            data:{
                icon:req.body.icon,
                skillname:req.body.skillname,
            }
        }
    )
    if(!response){
        res.json({message:"Sorry Failed To Update Category"})
    }
    res.json({message:"Succefully Updated"})
})

router.post("/addSkill",async(req,res)=>{
    const data=req.body
    console.log(data)
    const response=await client.skills.update(
        {
            where:{
                sid:data.sid
            },
            data:{
                skills:data.list,
                
            }
        }
    )
    if(!response){
        res.json({message:"Sorry Failed To Update Category"})
    }
    res.json({message:"Succefully Updated"})
})

router.post("/updateSkillStyle",async(req,res)=>{
    console.log(req.body)    
    const parsedResponse=userstyles.safeParse(req.body)
    console.log(parsedResponse)
    if(!parsedResponse){
       res.json({message:"Sorry Failed To Update"})
    }
    const response=await client.userstyle.update({
        where:{
            uid:parsedResponse.data?.uid
        },
        data:{
            sstyle:parsedResponse.data?.sstyle
        }
    })
    if(!response){
        res.json({message:"Sorry Failed To Update"})
    }
    res.json({message:"Succefully Updated"})
})
