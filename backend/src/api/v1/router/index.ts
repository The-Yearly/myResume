import e, { Router } from "express";
import { PrismaClient } from "../../../../prisma/app/generated/prisma/client";
export const router=Router()
const client=new PrismaClient()
router.get("/getHero/:uid",async(req,res)=>{
    const data=req.params.uid
    console.log(data)
    const response=await client.user.findFirst(
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
    const data=req.body
    const response=await client.user.update(
        {where:{
            uid:parseInt(data.uid)
        },
        data:{
            hero:data.hero,
            subhero:data.subhero,
            style:data.style
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
    const data=req.body
    console.log(data)
    const response=await client.about.update(
        {
            where:{
                uid:parseInt(data.uid)
            },
            data:{
                about:data.about,
                image:data.image,
                style:data.style,
            }
        }
    )
    if(!response){
        res.json({message:"Sorry Failed To Update"})
    }
    res.json({message:"Succefully Updated"})
})