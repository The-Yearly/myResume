import e, { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export const router=Router()
router.get("/test",(req,res)=>{
    res.json("H")
})