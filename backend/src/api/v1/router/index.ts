import e, { Router } from "express";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";
import { Hero,About, Project, userstyles, Skills, Education, Experience, User, Contact } from "../../../utils/zod";
export const router=Router()
const client=new PrismaClient()
router.post("/getHero",async(req,res)=>{
    const uid=req.body.uid
    const response=await client.hero.findFirst(
        {
            where:{
                uid:parseInt(uid)
            }
        }
    )
    console.log(response)
    res.json({hero:response})
})

router.post("/setHero",async(req,res)=>{
    const parsedResponse=Hero.safeParse(req.body.hero)
    const session=req.body.session
    const uid=req.body.uid
    console.log(parsedResponse.error?.message)
    if(!parsedResponse.success){
        res.json({message:"Sorry Failed To Update"})
    }
    const sessions=await client.user.findFirst({
        where:{
            uid:uid
        },
        select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        console.log(parsedResponse.data?.hero)
        const response=await client.hero.updateMany(
            {
                where:{
                uid:uid
            },
            data:{
                hero:parsedResponse.data?.hero,
                subhero:parsedResponse.data?.subhero,
                style:parsedResponse.data?.style
            }
        }
        )
        console.log(response)
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }else{
        res.json({message:"Sessions Dont Match"})
    }

})

router.post("/getAbout",async(req,res)=>{
    const uid=req.body.uid
    const response=await client.about.findFirst(
        {
            where:{
                uid:parseInt(uid)
            }
        }
    )
    res.json({about:response})
})

router.post("/setAbout",async(req,res)=>{
    const session=req.body.session
    const uid=req.body.uid
    const parsedResponse=About.safeParse(req.body.about)
    if(!parsedResponse){
        res.json({message:"Sorry Failed To Update"})
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.about.updateMany(
            {
                where:{
                    uid:uid
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
    }
    else{
        res.json({message:"Sessions Dont Match"})
    }})

router.post("/getProjects",async(req,res)=>{
    const uid=req.body.uid
    const response=await client.project.findMany({
        where:{
            uid:parseInt(uid)
        }
        ,orderBy:{
            pid:"asc"
        }
    })
    res.json({project:response})
})

router.post("/getStyles",async(req,res)=>{
const uid=req.body.uid
    const response=await client.userstyle.findUnique({
        where:{
            uid:parseInt(uid)
        }
    })
    res.json({styles:response})
})

router.post("/updateProjectStyle",async(req,res)=>{    
    const uid=req.body.uid
    const session=req.body.session
    const parsedResponse=userstyles.safeParse(req.body.style)
    console.log(parsedResponse)
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        if(!parsedResponse){
        res.json({message:"Sorry Failed To Update"})
        }
        const response=await client.userstyle.update({
            where:{
                uid:uid
            },
            data:{
                pstyle:parsedResponse.data?.pstyle
            }
        })
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }else{
        res.json({message:"Sessions Dont Match"})
    } 
})

router.post("/addProject",async(req,res)=>{
    const parsedResponse=Project.safeParse(req.body.project)
    const uid=req.body.uid
    const session=req.body.session
    if(!parsedResponse.success){
        res.json({message:"Sorry Failed To Update"})
        return
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.project.create(
            {
                data:{
                    github:parsedResponse.data.github,
                    desc:parsedResponse.data?.desc,
                    image:parsedResponse.data?.image,
                    Link:parsedResponse.data.Link,
                    title:parsedResponse.data.title,
                    tags:parsedResponse.data.tags,
                    uid:uid
                }
            }
        )
        console.log(response)
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})

router.post("/updateProject",async(req,res)=>{
    const parsedResponse=Project.safeParse(req.body.project)
    const uid=req.body.uid
    const session=req.body.session
    if(!parsedResponse.success){
        res.json({message:"Sorry Failed To Update"})
        return
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.project.update(
            {
                where:{
                    pid:parsedResponse.data.pid
                },
                data:{
                    github:parsedResponse.data?.github,
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
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})

router.post("/deleteProject",async(req,res)=>{
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.project.delete(
            {
                where:{
                    pid:req.body.del.pid
                }
            }
        )
        if(!response){
            res.json({message:"Sorry Failed To Delete"})
        }
        res.json({message:"Succefully Deleted"})
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})

router.post("/getSkills",async(req,res)=>{
    const uid=req.body.uid
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
    const parsedResponse=Skills.safeParse(req.body.skills)
    const uid=req.body.uid
    const session=req.body.session
    if(!parsedResponse.success){
        res.json({message:"Couldnt Add Skill"})
        return
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.skills.create({
            data:{
                icon:parsedResponse.data?.icon,
                uid:uid,
                skills:parsedResponse.data?.skills,
                skillname:parsedResponse.data?.skillname
            }
        })
        if(!response){
            res.json({message:"Couldnt Add Skill"})
        }
        res.json({message:"Skiill Has Been Added"})
    }
})

router.post("/deleteSkill",async(req,res)=>{
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.skills.delete(
            {
                where:{
                    sid:parseInt(req.body.del)
                }
            }
        )
        if(!response){
            res.json({message:"Sorry Failed To Delete"})
        }
        res.json({message:"Succefully Deleted"})
    }else{
        res.json({message:"Skiill Has Been Added"})
    }
})

router.post("/updateSkillCat",async(req,res)=>{
    const data=req.body.skill
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log(sessions)
    if(sessions?.sessions.includes(session||"abc")){
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
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})

router.post("/addSkill",async(req,res)=>{
    const data=req.body
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    
    if(sessions?.sessions.includes(session||"abc")){
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
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})

router.post("/updateSkillStyle",async(req,res)=>{
    const uid=req.body.uid
    const session=req.body.session
    const parsedResponse=userstyles.safeParse(req.body.style)
    console.log(parsedResponse)
    if(!parsedResponse){
       res.json({message:"Sorry Failed To Update"})
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log()
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.userstyle.update({
            where:{
                uid:uid
            },
            data:{
                sstyle:parsedResponse.data?.sstyle
            }
        })
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
        }else{
            res.json({message:"Sessions Dont Match"})
        }
})



router.post("/getEducations",async(req,res)=>{
    const uid=req.body.uid
    const response=await client.education.findMany(
        {where:{
            uid:parseInt(uid)
        },orderBy:{
            edid:"asc"
        }
    }
    )
    res.json({education:response})
})

router.post("/addEducation",async(req,res)=>{
    const uid=req.body.uid
    const session=req.body.session
    const parsedResponse=Education.safeParse(req.body.ed)
    console.log(parsedResponse.error?.message)
    if(!parsedResponse.success){
        res.json({message:"Sorry Failed To Update"})
        return
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log()
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.education.create(
            {
                data:{
                    uid:uid,
                    inst:parsedResponse.data.inst,
                    degree:parsedResponse.data.degree,
                    startdate:parsedResponse.data.startdate,
                    enddate:parsedResponse.data.enddate
                }
            }
        )
        console.log(response)
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})   
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})

router.post("/delEducation",async(req,res)=>{
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log()
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.education.delete(
            { 
                where:{
                    edid:req.body.del
                }
            }
        )
        console.log(response)
        if(!response){
            res.json({message:"Sorry Failed To Delete"})
        }
        res.json({message:"Succefully Deleted"})
    }else{
         res.json({message:"Sessions Dont Match"})
    }
})

router.post("/updateEducation",async(req,res)=>{
    const parsedResponse=Education.safeParse(req.body.ed)
    const uid=req.body.uid
    const session=req.body.session
    if(!parsedResponse.success){
        res.json({message:"Sorry Failed To Update"})
        return
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log()
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.education.update(
            {
                where:{
                    edid:parsedResponse.data.edid
                },
                data:{
                    inst:parsedResponse.data.inst,
                    degree:parsedResponse.data.degree,
                    startdate:parsedResponse.data.startdate,
                    enddate:parsedResponse.data.enddate
                }
            }
        )
        console.log(response)
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})


router.post("/updateEducationStyle",async(req,res)=>{
    const uid=req.body.uid
    const session=req.body.session
    const parsedResponse=userstyles.safeParse(req.body.style)
    console.log(req.body)
    if(!parsedResponse){
       res.json({message:"Sorry Failed To Update"})
    }
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log()
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.userstyle.update({
            where:{
                uid:uid
            },
            data:{
                estyle:parsedResponse.data?.estyle
            }
        })
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }else{
        res.json({message:"Sessions Dont Match"})
    }
})

router.post("/getExperience",async(req,res)=>{
    const uid=req.body.uid
    const response=await client.experience.findMany({
        where:{
            uid:parseInt(uid)
        },
        orderBy:{
            exid:"asc"
        }
    })
    res.json({experience:response})
})


router.post("/addExperience",async(req,res)=>{
    const parsedResponse=Experience.safeParse(req.body.exp)
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        if(!parsedResponse.success){
            res.json({message:"Sorry Failed To Update"})
            return
        }
        const response=await client.experience.create(
            {
                data:{
                uid:uid,
                corp:parsedResponse.data.corp,
                title:parsedResponse.data.title,
                desc:parsedResponse.data.desc,
                enddate:parsedResponse.data.enddate,
                startdate:parsedResponse.data.startdate,
                }
            }
        )
        console.log(response)
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})}
    else{
        res.json({message:"Session Dont Match"})
    }
})

router.post("/updateExperience",async(req,res)=>{
    console.log(req.body)
    const parsedResponse=Experience.safeParse(req.body.exp)
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        if(!parsedResponse.success){
            res.json({message:"Sorry Failed To Update"})
            return
        }
        const response=await client.experience.update(
            {
                where:{
                    exid:parsedResponse.data.exid
                },
                data:{
                    corp:parsedResponse.data.corp,
                    title:parsedResponse.data.title,
                    desc:parsedResponse.data.desc,
                    startdate:parsedResponse.data.startdate,
                    enddate:parsedResponse.data.enddate!=null?parsedResponse.data.enddate:null
                }
            }
        )
        console.log(response)
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }else{
        res.json({message:"Session Dont Match"})
    }
})


router.post("/deleteExperience",async(req,res)=>{
    const uid=req.body.uid
    console.log(req.body)
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    if(sessions?.sessions.includes(session||"abc")){
        const response=await client.experience.delete(
            {
                where:{
                    exid:req.body.del
                }
            }
        )
        if(!response){
            res.json({message:"Sorry Failed To Delete"})
        }
        res.json({message:"Succefully Deleted"})
    }else{
        res.json({message:"Session Dont Match"})
    }
})


router.post("/updateExperienceStyle",async(req,res)=>{
    const parsedResponse=userstyles.safeParse(req.body.style)
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log(req.body)
    if(sessions?.sessions.includes(session||"abc")){
        if(!parsedResponse){
        res.json({message:"Sorry Failed To Update"})
        }
        console.log(parsedResponse.data)
        const response=await client.userstyle.update({
            where:{
                uid:uid
            },
            data:{
                exstyle:parsedResponse.data?.exstyle
            }
        })
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }
    else{
        res.json({message:"Session Dont Match"})
    }
})

router.post("/signUp",async(req,res)=>{
    console.log(req.body)
    const parsedResponse=User.safeParse(req.body)
    if(!parsedResponse.success){
        res.status(500).json({message:"Failed To Create User"})
        return
    }
    const datetime=new Date()
    const session=parsedResponse.data?.username+String(Math.floor(Math.random()*1000))+datetime
    let bufferObj = Buffer.from(session,"utf8");
    let base64String = bufferObj.toString("base64");
    const sessions=[base64String]
    const bufferpasObj = Buffer.from(parsedResponse.data.password,"utf8");
    const base64Pass = bufferpasObj.toString("base64");
    try{
        const response=await client.user.create({
            data:{
                username:parsedResponse.data?.username,
                email:parsedResponse.data?.email,
                password:base64Pass,
                sessions:sessions
            } 
    })
    await client.about.create({
        data:{
            about:"I am a ....",
            image:"https://imgs.search.brave.com/OybWtIGSaTmsuMy37WubCkHuxtXsae6GY9U3bqW0RRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYwLzg5Lzg4/LzM2MF9GXzEyNjA4/OTg4NDBfcDhwRjNO/S2hjS3VzMHRzeHJC/OHE4ZG02aTVWclpJ/OWMuanBn",
            style:"1",
            uid:response.uid
        }
    })
    await client.contact.create({
        data:{
            email:"johndoe@gmail.com",
            linkedin:"johndoe@linkedIn.com",
            location:"xyzLocation",
            phone:"+91 2255",
            uid:response.uid
        }
    })
    await client.hero.create({
        data:{
            hero:"I Am A ...",
            style:"1",
            subhero:"A Passonate ...",
            uid:response.uid,
        }
    })

    await client.education.create({
        data:{
            degree:"XYZ Institue",
            inst:"XYZ",
            startdate:"2007-06",
            uid:response.uid
        }
    })

    await client.experience.create({
        data:{
            corp:"ABC Institute",
            desc:"Project Lead",
            startdate:"2007-07",
            title:"Project Lead",
            uid:response.uid
        }
    })

    await client.project.create({
        data:{
            uid:response.uid,
            title:"A Calculator App",
            desc:"A Calculator App made using ...",
            github:"#",
            image:"https://imgs.search.brave.com/qFUuEh8DOR-oN8lV8Ju89PCx2JaKiE8l55FZ0tvWVjc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/ODI0NTI1MTk1L2Ez/OWFkMjk5LTg3M2Yt/NDY0Zi1iOWMwLTk2/OTllNGFlMWE4ZA",
            Link:"#",
            tags:["Flutter"]
        }
    })

    await client.skills.create({
        data:{
            icon:"Layout",
            skillname:"Mobile",
            uid:response.uid,
            skills:["flutter","react-native"]
        }
    })

    await client.userstyle.create({
        data:{
            estyle:"1",
            exstyle:"1",
            pstyle:"1",
            sstyle:"1",
            uid:response.uid
        }
    })
    if(!response){
        res.status(200).json({message:"Failed To Create User"})
    }else{
        res.status(200).json({message:"Succesfully Created User",uid:response.uid,session:base64String})
    }        
    }catch(e:any){
        if(e.code === 'P2002' && e.meta?.target?.includes('username')){
            res.status(500).json({message:"Username Already Exists"})
        }
    }
})


router.post("/login",async(req,res)=>{
    console.log(req.body)
    const parsedResponse=User.safeParse(req.body)
    if(!parsedResponse.success){
        res.json("Failed To Login User")
        return
    }
    const datetime=new Date()
    const session=parsedResponse.data?.username+String(Math.floor(Math.random()*1000))+datetime
    const bufferObj = Buffer.from(session,"utf8");
    const base64String = bufferObj.toString("base64");

    
    const log=await client.user.findFirst({
        where:{
            username:parsedResponse.data.username
        },
        select:{
            password:true,
            sessions:true,
            uid:true,
        }
    })
    const bufferpasObj = Buffer.from(parsedResponse.data.password,"utf8");
    const base64Pass = bufferpasObj.toString("base64");
    if(base64Pass==log?.password){
        log.sessions=[...log.sessions,base64String]
        const response=await client.user.update({
            where:{
                username:parsedResponse.data.username
            },
            data:{
                sessions:log.sessions
            }
        })
        if(!response){
            res.status(500).json({message:"Failed To Login"})    
        }
        res.status(200).json({message:"Succesfully Logged In",session:base64String,uid:response.uid})
    }
    else{
        res.status(500).json({message:"Incorrect Password"})
    }
})  

router.post("/deleteSession",async(req,res)=>{
    const session=req.body.session
    const uid=req.body.uid
    const sessions=await client.user.findFirst({
        where:{
            uid:uid
        },
        select:{
            sessions:true
        }
    })
    const newSessions=sessions?.sessions.filter((prev)=>prev!=session)
    const response=await client.user.update({
        where:{
            uid:uid
        },
        data:{
            sessions:newSessions
        }
    })
    if(!response){
        res.status(500).json({message:"Failed To LogOut"})
    }else{
        res.status(200).json({message:"Logged Out Succesfully"})
    }   

    
})

router.post("/getContacts",async(req,res)=>{
    const uid=req.body.uid
        const response=await client.contact.findMany({
            where:{
                uid:parseInt(uid)
            }
        })
        if(!response){
            res.json({message:"Failed to load profile data"})
        }
        res.json({contact:response})
})
    

router.post("/updateContact",async(req,res)=>{
    const parsedResponse=Contact.safeParse(req.body.contact)
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log(req.body)
    if(sessions?.sessions.includes(session||"abc")){
        if(!parsedResponse){
        res.json({message:"Sorry Failed To Update"})
        }
        console.log(parsedResponse.data)
        const response=await client.contact.updateMany({
            where:{
                uid:uid
            },
            data:{
                email:parsedResponse.data?.email,
                linkedin:parsedResponse.data?.linkedin,
                phone:parsedResponse.data?.phone,
                location:parsedResponse.data?.location,
                
            }
        })
        if(!response){
            res.json({message:"Sorry Failed To Update"})
        }
        res.json({message:"Succefully Updated"})
    }
    else{
        res.json({message:"Session Dont Match"})
    }
})


router.post("/updatePassword",async(req,res)=>{
    const parsedResponse=Contact.safeParse(req.body.contact)
    const uid=req.body.uid
    const session=req.body.session
    const sessions=await client.user.findUnique({
        where:{
            uid:uid
        },select:{
            sessions:true
        }
    })
    console.log(req.body)
    if(sessions?.sessions.includes(session||"abc")){
        console.log(req.body)
        if(!parsedResponse){
        res.json({message:"Sorry Failed To Update"})
        }
        console.log(parsedResponse.data)
        const currentPassword=await client.user.findFirst({
            where:{
                uid:parseInt(uid)
            },
            select:{
                password:true
            }

        })
        let bufferObj = Buffer.from(req.body.pass.currentPassword,"utf8");
        let base64Pass = bufferObj.toString("base64");
        let buffer2Obj = Buffer.from(req.body.pass.newPassword,"utf8");
        let base64newPass = buffer2Obj.toString("base64");
        console.log(base64Pass==currentPassword?.password)
        if(base64Pass==currentPassword?.password){
            console.log("in")
            const response=await client.user.updateMany({
                where:{
                    uid:uid
                },
                data:{
                    password:base64newPass
                    
                }
            })
            if(!response){
                res.json({message:"Sorry Failed To Update"})
            }
            res.json({message:"Succefully Updated"})
        }else{
            res.json({message:"Incorrect Password"})
        }
    }
    else{
        res.json({message:"Session Dont Match"})
    }
})


router.get("/getUsers",async(req,res)=>{
    const response=await client.user.findMany({
        select:{
            username:true,
            uid:true,
            contact:{
                omit:{
                    uid:true,
                    cid:true
                }
            },
            About:{
                omit:{
                    uid:true,
                    aid:true
                }
            },
        },
        orderBy:{
            uid:"asc"
        }
    })
    res.json({users:response})
})