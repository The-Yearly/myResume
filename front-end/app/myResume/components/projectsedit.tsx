"use client"
import type React from "react"
import{ useState,useEffect,useRef } from "react"
import Image from "next/image"
import{ Theme } from "@/app/themes/styles"
import axios from "axios"
import type{ Project } from "@/utils/types"
import{ toast } from "react-toastify"
import type{ SelectedStyle } from "@/utils/types"
import ImageKit from "imagekit"
import ProjectsEditorSkeleton from "@/app/themes/skeletons/admin/projectedit"
import { Session } from "@/middleware"
import Cookies from "js-cookie"
export default function ProjectsEditor(){
  const [logged,setLogged]=useState<Session>({session:"dd",uid:0})
  const [modalOpen,setModalOpen]=useState(false)
  const [isNew,setIsNew]=useState(false)
  const [editIndex,setEditIndex]=useState<number | null>(null)
  const [selectedStyle,setSelectedStyle]=useState<keyof typeof Theme>("1")
  const [submitselectedStyle,setSubmitSelectedStyle]=useState<SelectedStyle | null>(null)
  const [projects,setProjects]=useState<Project[]>([])
  const [gotResp,setGotResp]=useState(false)
  const [deleteProject,setDeleteProject]=useState<Project | null>(null)
  const [refresh,setRefresh]=useState(false)
  const [loading,setLoading]=useState(true)
  const [isUploading,setIsUploading]=useState(false)
  const [selectedFile,setSelectedFile]=useState<File | null>(null)
  const [previewImage,setPreviewImage]=useState<string | null>(null)
  const fileInputRef=useRef<HTMLInputElement>(null)

  const [newProject,setNewProject]=useState<Project>({
    pid: 0,
    title: "",
    desc: "",
    image: "",
    tags: [],
    github: "",
    Link: "",
 })

  const imagekit=new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY || "",
    urlEndpoint: "https://ik.imagekit.io/161vmuzvb",
 })

  const handleStyleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedStyle(e.target.value as keyof typeof Theme)
 }

  useEffect(()=>{const getCookies=async()=>{
    const cookie=Cookies.get("creds")
    setLogged(JSON.parse(cookie??''))
  }
  getCookies()},[])

  useEffect(()=>{
    const fetchStyle=async()=>{
      setGotResp(true)
      try{
        if(logged.uid!=0){
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles",{uid:logged.uid})
        setSelectedStyle(res.data.styles.pstyle)}
     } catch(error){
        console.error("Error fetching styles:",error)
        toast.error("Failed to load styles")
     } finally{
        setGotResp(false)
     }
   }
    fetchStyle()
 },[logged])

  useEffect(()=>{
    const setStyle=async()=>{
      setGotResp(true)
      if(submitselectedStyle != null){
        try{
          const res=await axios.post(
            process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateProjectStyle",{style:submitselectedStyle,uid:logged.uid,session:logged.session})
          toast(res.data.message)
       } catch(error){
          console.error("Error updating project style:",error)
          toast.error("Failed to update style")
       }
     }
      setGotResp(false)
   }
    setStyle()
 },[submitselectedStyle])

  useEffect(()=>{
    const fetchData=async()=>{
      setGotResp(true)
      if(modalOpen!=true){
        try{
          if(logged.uid!=0){
          const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getProjects",{uid:logged.uid})
          setProjects(res.data.project)}
          console.log(loading)
          setLoading(false)
       } catch(error){
          console.error("Error fetching projects:",error)
          toast.error("Failed to load projects")
       }
     }
      setGotResp(false)
   }
    fetchData()
 },[refresh,modalOpen,logged])

  useEffect(()=>{
    const sendData=async()=>{
      setGotResp(true)
      if(newProject.title.length != 0){
        try{
          if(editIndex == null && isNew==true){
            const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/addProject",{project:newProject,uid:logged.uid,session:logged.session})
            toast(res.data.message)
            setIsNew(false)
         } else{
            if(editIndex!=null){
            const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateProject",{project:newProject,uid:logged.uid,session:logged.session})
            toast(res.data.message)}
         }
          setNewProject({
            pid: 0,
            title: "",
            desc: "",
            image: "",
            tags: [],
            github: "",
            Link: "",
         })
          setEditIndex(null)
          setRefresh(!refresh)
       } catch(error){
          console.error("Error saving project:",error)
          toast.error("Failed to save project")
       }
        setModalOpen(false)
     }
      setGotResp(false)
   }
    sendData()
  },[projects])

  useEffect(()=>{
    const DeleteProject=async()=>{
      setGotResp(true)
      if(deleteProject!=null){
        try{
          const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/deleteProject",{del:deleteProject,uid:logged.uid,session:logged.session})
          toast(res.data.message)
          setRefresh(!refresh)
        } catch(error){
          console.error("Error deleting project:",error)
          toast.error("Failed to delete project")
        }
      }
      setGotResp(false)
    }
    DeleteProject()
  },[deleteProject])

  const SelectedProject=Theme[selectedStyle]?.projects

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const{name,value }=e.target
    setNewProject((prev)=>({...prev,[name]: value }))
  }

  const handleTagsChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const tags=e.target.value.split(",").map((tag)=> tag.trim())
    setNewProject((prev)=>({...prev,tags }))
  }
  const handleFileSelect=(e: React.ChangeEvent<HTMLInputElement>)=>{
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
  const uploadImageToImageKit=async()=>{
    if(!selectedFile)return null

    setIsUploading(true)
    try{
      const reader=new FileReader()
      const base64Promise=new Promise<string>((resolve)=>{
        reader.onload=()=>{
          const base64=reader.result?.toString().split(",")[1]
          if(base64)resolve(base64)
        }
        reader.readAsDataURL(selectedFile)
      })
      const base64=await base64Promise
      const result=await imagekit.upload({
        file: base64,
        fileName: `project_${Date.now()}.${selectedFile.name.split(".").pop()}`,
        folder: "/projects",
      })
      setNewProject((prev)=>({...prev,image: result.url }))
      return result.url
    } catch(error){
      console.error("Error uploading image:",error)
      toast.error("Failed to upload image")
      return null
    } finally{
      setIsUploading(false)
    }
  }

  const handleDelete=(i: number)=>{
    const updated=[...projects]
    updated.splice(i,1)
    setDeleteProject(projects[i])
    setProjects(updated)
  }

  const handleEdit=(i: number)=>{
    setNewProject(projects[i])
    setEditIndex(i)
    setPreviewImage(projects[i].image || null)
    setSelectedFile(null)
    setModalOpen(true)
  }

  const handleSubmit=async(e: React.FormEvent)=>{
    e.preventDefault()

    if(selectedFile){
      setIsUploading(true)
      const imageUrl=await uploadImageToImageKit()
      setIsUploading(false)

      if(!imageUrl){
        toast.error("Image upload failed. Please try again.")
        return
      }
    }

    if(editIndex !== null){
      const updatedProjects=[...projects]
      updatedProjects[editIndex]=newProject
      setProjects(updatedProjects)
      setIsNew(true)
    } else{
      setProjects((prev)=> [...prev,newProject])
    }
  }
  if(!loading){
  return(
    <div className="p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Style</label>
        <div className="flex">
          <select
            value={selectedStyle}
            onChange={handleStyleChange}
            className="mt-1 block w-full max-w-xs rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="1">Style 1</option>
            <option value="2">Style 2</option>
          </select>
          <button
            disabled={gotResp}
            onClick={()=>{
              setSubmitSelectedStyle({pstyle: selectedStyle })
            }}
            className={`ml-5 w-36 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors border-slate-300 text-black shadow-lg ${gotResp ? "cursor-wait" : "cursor-pointer"}`}
          >
            Save
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       {projects.map((project,i)=>(
          <div key={i} className="rounded-2xl shadow-md border p-4">
            <div className="relative w-full h-80 mb-2 overflow-hidden rounded-xl">
             {project.image ?(
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
            ):(
                <Image src={project.image|| "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
            )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
              <div className="flex flex-wrap gap-2 my-2">
               {project.tags.map((tag,i)=>(
                  <span key={i} className="bg-gray-100 text-sm px-2 py-1 rounded-full border">
                   {tag}
                  </span>
              ))}
              </div>
              <div className="flex justify-between mt-4">
                <div className="space-x-2">
                  <button
                    disabled={gotResp}
                    onClick={()=> handleEdit(i)}
                    className={`bg-sky-100 text-blue-400 border-slate-100 px-4 py-1 rounded-md hover:bg-sky-500 hover:text-white transition-all ${gotResp ? "cursor-wait" : "cursor-pointer"}`}
                  >
                    Edit
                  </button>
                  <button
                    disabled={gotResp}
                    onClick={()=> handleDelete(i)}
                    className={`bg-red-100 text-red-600 px-4 py-1 rounded-md hover:bg-red-200 transition-colors ${gotResp ? "cursor-wait" : "cursor-pointer"}`}
                  >
                    Delete
                  </button>
                </div>
               {project.github &&(
                  <a
                    href={project.github}
                    className="text-blue-600 underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
              )}
              </div>
            </div>
          </div>
      ))}
      </div>

      <button
        disabled={gotResp}
        onClick={()=>{
          setNewProject({
            pid: 0,
            title: "",
            desc: "",
            image: "",
            tags: [],
            github: "",
            Link: "",
          })
          setEditIndex(null)
          setSelectedFile(null)
          setPreviewImage(null)
          setModalOpen(true)
        }}
        className={`my-4 right-10 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${gotResp ? "cursor-wait" : "cursor-pointer"}`}
      >
        Add Project
      </button>

     {modalOpen &&(
        <form
          onSubmit={handleSubmit}
          className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center h-full justify-center z-50"
        >
          <div className="bg-white p-6 rounded-xl w-full max-w-lg space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold">{editIndex !== null ? "Edit Project" : "New Project"}</h3>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newProject.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />

            <textarea
              name="desc"
              placeholder="Description"
              value={newProject.desc}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />

            <input
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={newProject.github}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />

            <input
              type="text"
              name="Link"
              placeholder="Live URL"
              value={newProject.Link}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />

            <input
              type="text"
              placeholder="Tags(comma separated)"
              value={newProject.tags.join(",")}
              onChange={handleTagsChange}
              className="w-full border p-2 rounded-md"
              required
            />
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Project Image</label>
             {(previewImage || newProject.image)&&(
                <div className="relative w-full h-48 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={previewImage || newProject.image}
                    alt="Project preview"
                    className="w-full h-full object-cover"
                  />
                </div>
            )}

              <div className="flex flex-col space-y-2">
                <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileSelect} className="hidden" />

                <button
                  type="button"
                  onClick={()=> fileInputRef.current?.click()}
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-gray-100 hover:bg-gray-200 px-3 py-2 text-gray-700 text-sm"
                >
                 {previewImage || newProject.image ? "Change Image" : "Upload Image"}
                </button>

               {selectedFile && <p className="text-xs text-gray-500 truncate">Selected:{selectedFile.name}</p>}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                disabled={gotResp || isUploading}
                onClick={()=>{
                  setModalOpen(false)
                  setEditIndex(null)
                }}
                className={`px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 ${gotResp || isUploading ? "cursor-wait" : "cursor-pointer"}`}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={gotResp || isUploading}
                className={`px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 ${gotResp || isUploading ? "cursor-wait" : "cursor-pointer"}`}
              >
               {isUploading ? "Uploading..." : editIndex !== null ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </form>
    )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Preview</h2>
        </div>
       {SelectedProject ? <SelectedProject content={projects} /> : <p>Style not found.</p>}
      </div>
    </div>
)
  }else{
    return(<ProjectsEditorSkeleton/>)
  }
}
