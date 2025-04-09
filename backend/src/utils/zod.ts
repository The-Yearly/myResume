import { link } from "fs"
import z, { number, string } from "zod"
  
export const User=z.object({
  uid:z.number().optional(),
  username:z.string(),
  password:z.string(),
})

export const Hero=z.object({
  hid:z.number().optional(),
  uid:z.number().optional(),
  style:z.string(),
  hero:z.string(),
  subhero:z.string(),
})

export const Project=z.object({
  pid:z.number().optional(),
  uid:z.number(),
  title:z.string(),
  image:z.string(),
  desc:z.string(),
  Link:z.string(),
  tags:z.array(z.string())
})
export const Experience=z.object({
  exid:z.number().optional(),
  title:z.string(),
  corp:z.string(),
  startdate:z.string(),
  enddate:z.string().nullable().optional(),
  desc:z.string(),
  uid:z.number(),
})

export const Education=z.object({
  edid:z.number().optional(),
  inst:z.string(),
  degree:z.string(),
  startdate:z.string(),
  enddate:z.string().nullable().optional(),
  uid:z.number(),
})

export const Skills=z.object({
  sid:z.number().optional(),
  uid:z.number(),
  skillname:z.string(),
  skills:z.array(z.string()),
  icon:z.string()
})

export const Contact=z.object({
  cid:z.number().optional(),
  uid:z.number().optional(),
  email:z.string(),
  phone:z.string(),
  location:z.string(),
  linkedin:z.string(),
})

export const About=z.object({
  aid:z.number().optional(),
  uid:z.number().optional(),
  image:z.string(),
  about:z.string(),
  style:z.string(),
}
)
export const userstyles=z.object({
  uid:z.number(),
  sstyle:z.string().optional(),
  pstyle:z.string().optional(),
  estyle:z.string().optional(),
  exstyle:z.string().optional(),
})