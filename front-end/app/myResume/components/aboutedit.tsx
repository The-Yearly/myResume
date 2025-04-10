"use client"

import type { About } from "@/utils/types"
import type React from "react"
import Image from "next/image"
import { Theme } from "../../themes/styles"
import { useState,useEffect,useRef } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import ImageKit from "imagekit"

export default function AboutEditor(){
  const [about,setAbout]=useState<About>({
    uid: 1,
    about:
      "I'm a passionate developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies,I create solutions that are not only functional but also provide exceptional user experiences. My journey in technology began with [your background] and I've since worked on various projects ranging from [types of projects]. I'm constantly learning and exploring new technologies to stay at the forefront of the industry. When I'm not coding,you can find me [your hobbies/interests].",
    image: "",
    style: "1",
  })
  const [data,setData]=useState<About | null>(null)
  const [isUploading,setIsUploading]=useState(false)
  const [selectedFile,setSelectedFile]=useState<File | null>(null)
  const [previewImage,setPreviewImage]=useState<string | null>(null)
  const fileInputRef=useRef<HTMLInputElement>(null)

  const imagekit=new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY || "",
    urlEndpoint: "https://ik.imagekit.io/161vmuzvb",
  })

  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/getAbout/1")
        const data=res.data.about
        setAbout({ about: data.about,image: data.image,style: data.style,uid: 1 })
        if(data.image && data.image!=="s"){
          setPreviewImage(data.image)
        }
      } catch(error){
        console.error("Error fetching about data:",error)
        toast.error("Failed to load about data")
      }
    }
    fetchData()
  },[])

  useEffect(()=>{
    const sendData=async()=>{
      if(data!=null){
        try {
          const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/setAbout",data)
          toast(res.data.message)
        } catch(error){
          console.error("Error saving about data:",error)
          toast.error("Failed to save changes")
        }
      }
    }
    sendData()
  },[data])

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>){
    const { name,value }=e.target
    if(name!="style"){
      setAbout((prev)=>({ ...prev,[name]: value }))
    } else {
      setAbout((prev)=>({ ...prev,[name]: value as keyof typeof Theme }))
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>){
    const file=e.target.files?.[0] || null
    setSelectedFile(file)

    if(file){
      const reader=new FileReader()
      reader.onloadend=()=>{
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  async function uploadImage(){
    if(!selectedFile) return null

    setIsUploading(true)
    try {
      const reader=new FileReader()
      const base64Promise=new Promise<string>((resolve)=>{
        reader.onload=()=>{
          const base64=reader.result?.toString().split(",")[1]
          if(base64) resolve(base64)
        }
        reader.readAsDataURL(selectedFile)
      })

      const base64=await base64Promise
      const result=await imagekit.upload({
        file: base64,
        fileName: `profile_${Date.now()}.${selectedFile.name.split(".").pop()}`,
        folder: "/profiles",
      })

      return result.url
    } catch(error){
      console.error("Error uploading image:",error)
      toast.error("Failed to upload image")
      return null
    } finally {
      setIsUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    let imageUrl=about.image

    if(selectedFile){
      const uploadedUrl=await uploadImage()
      if(uploadedUrl){
        imageUrl=uploadedUrl
      }
    }

    const updatedAbout={
      ...about,
      image: imageUrl,
    }

    setAbout(updatedAbout)
    setData(updatedAbout)
  }

  const SelectedAbout=Theme[about.style as keyof typeof Theme]?.about

  return(
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
            <div className="px-6 col-span-1 py-4 space-y-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-full">
                <Image alt="Profile" className="object-cover" src={previewImage||"https://imgs.search.brave.com/OybWtIGSaTmsuMy37WubCkHuxtXsae6GY9U3bqW0RRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYwLzg5Lzg4/LzM2MF9GXzEyNjA4/OTg4NDBfcDhwRjNO/S2hjS3VzMHRzeHJC/OHE4ZG02aTVWclpJ/OWMuanBn"} fill />
              </div>
              <div className="flex flex-col space-y-2">
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                <button
                  type="button"
                  onClick={()=>fileInputRef.current?.click()}
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-gray-100 hover:bg-gray-200 px-3 py-2 text-gray-700 text-sm"
                >
                  {selectedFile ? "Change Image" : "Upload Image"}
                </button>
                {selectedFile && <p className="text-xs text-gray-500 truncate">{selectedFile.name}</p>}
              </div>
            </div>
            <textarea
              className="rounded-md col-span-2 border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              name="about"
              value={about.about}
              onChange={handleChange}
              placeholder="Enter your bio"
              rows={8}
            />
          </div>
          <div className="flex px-6 py-4 border-t border-gray-200 justify-end space-x-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none bg-transparent text-gray-700 hover:text-red-400"
            >
              Cancel
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-sky-500 hover:bg-sky-600 px-3 py-2 text-white disabled:bg-sky-300 disabled:cursor-not-allowed"
              type="submit"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Preview</h2>
        </div>
        {SelectedAbout ?(
          <SelectedAbout content={{ bio: about.about,image: previewImage || about.image }} />
        ) :(
          <p>Style not found.</p>
        )}
      </div>
    </div>
  )
}
