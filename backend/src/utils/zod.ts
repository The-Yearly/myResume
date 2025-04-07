import z from "zod"
  
export const User=z.object({
    uid:z.number().optional(),
    username:z.string(),
    password:z.string(),
    style:z.string(),
    hero:z.string(),
    subhero:z.string(),
  }
  
export const Project=z.object({
    pid          Int            @id @default(autoincrement())
    title        String
    image        String
    desc         String
    tags         String[]
    github       String
    Link         String
    style        String
    user_project user_project[]
  }
  
  model user_project {
    pid     Int
    uid     Int
    project project @relation(fields: [pid], references: [pid])
    user    user    @relation(fields: [uid], references: [uid])
  
    @@id([pid, uid])
  }
  
  model experience {
    eid             Int               @id @default(autoincrement())
    title           String
    corp            String
    style           String
    startdate       DateTime
    enddate         DateTime
    desc            String
    user_experience user_experience[]
  }
  
  model user_experience {
    eid        Int
    uid        Int
    experience experience @relation(fields: [eid], references: [eid])
    user       user       @relation(fields: [uid], references: [uid])
  
    @@id([eid, uid])
  }
  
  model education {
    edid           Int              @id @default(autoincrement())
    inst           String
    degree         String
    startdate      DateTime
    enddate        DateTime
    style          String
    user_education user_education[]
  }
  
  model user_education {
    edid      Int
    uid       Int
    education education @relation(fields: [edid], references: [edid])
    user      user      @relation(fields: [uid], references: [uid])
  
    @@id([edid, uid])
  }
  
  model skills {
    uid       Int      @id @unique
    frontend  String[]
    style     String
    backend   String[]
    database  String[]
    mobile    String[]
    other     String[]
    languages String[]
    user      user     @relation(fields: [uid], references: [uid])
  }
  
  model contact {
    uid      Int    @id
    email    String
    phone    String
    location String
    linkedin String
    user     user   @relation(fields: [uid], references: [uid])
  }
  
  model About {
    uid   Int    @id
    image String
    about String
    style String
    user  user   @relation(fields: [uid], references: [uid])
  }
  