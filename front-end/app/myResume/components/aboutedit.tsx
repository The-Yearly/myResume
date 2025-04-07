"use client"
import { about } from "@/utils/types"
import type React from "react"
import Image from "next/image"
import { Theme } from "../../themes/styles"
import { useState,useEffect } from "react"
import pfp from "@/myPhoto.jpeg"
import axios from "axios"
import { toast } from "react-toastify"
export default function AboutEditor() {
  const [about, setAbout] = useState<about>(
    {
      uid:1,
      about:"I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create solutions that are not only functional but also provide exceptional user experiences. My journey in technology began with [your background] and I've since worked on various projects ranging from [types of projects]. I'm constantly learning and exploring new technologies to stay at the forefront of the industry. When I'm not coding, you can find me [your hobbies/interests].",
      image:"s",
      style:"1"
    })
  const [data,setData]=useState<about|null>(null)
  
  useEffect(()=>{const fetchData=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getAbout/1")
    
    const data=res.data.about
    setAbout({about:data.about,image:data.image,style:data.style,uid:1})
  }
  fetchData()},[])

  useEffect(()=>{const sendData=async()=>{
    if(data!=null){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/setAbout",data)
      toast(res.data.message)
    }
  }
  sendData()},[data])  
  function handleChange(e:React.ChangeEvent<HTMLTextAreaElement|HTMLSelectElement>){
    const {name,value}=e.target
    if(name!="style"){
      setAbout((prev)=>({...prev,[name]:value}))
    }else{
      setAbout((prev)=>({...prev,[name]:value as keyof typeof Theme}))
    }
    console.log("Changing")
  }

  function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    setData(about)
  }
  const SelectedAbout = Theme[about.style as keyof typeof Theme]?.about;
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Edit About Section</h1>
      </div>
      <div>
              <label className="block text-sm font-medium text-gray-700">Select Style</label>
              <select
                value={about.style}
                name="style"
                onChange={handleChange}
                className="mt-1 block w-full max-w-xs rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="1">Style 1</option>
                <option value="2">Style 2</option>
              </select>
            </div>
      <div className="bg-white rounded-lg border-gray-200 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium">About Me Content</h2>
            <p className="text-sm text-gray-500">Edit your about section content and profile image.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 shadow-sm "> 
            <div className="px-6 col-span-1 py-4 space-y-6">
                <Image alt="pfp" className="object-cover rounded-full"  src={pfp}/>
            </div>
            <textarea
                className= "rounded-md col-span-2 border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                name="about"
                value={about.about}
                onChange={handleChange}
                placeholder="Enter your bio"
                rows={4}
                />
        </div>
        <div className="flex px-6 py-4 border-t border-gray-200 justify-end space-x-4">
                <button type="button" className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none bg-transparent text-gray-700 hover:text-red-400">
                Cancel
                </button>
                <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-sky-500 hover:bg-sky-600 px-3 py-2 text-white" type="submit">Save Changes</button>
            </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Preview</h2>
        </div>
        {SelectedAbout ? <SelectedAbout content={{bio:about.about,image:"ss"}} />:<p>Style not found.</p>}
      </div>
    </div>
  )
}

