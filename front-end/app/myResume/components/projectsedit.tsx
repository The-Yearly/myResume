"use client"
import pfp from "@/myPhoto.jpeg"
import React, { useState,useEffect } from "react"
import Image from "next/image"
import { Theme } from "@/app/themes/styles"
import axios from "axios"
import { Project } from "@/utils/types"
import { toast } from "react-toastify"
import { SelectedStyle } from "@/utils/types"
export default function ProjectsEditor() {
  const [modalOpen, setModalOpen] = useState(false)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof Theme>("1");
  const [submitselectedStyle,setSubmitSelectedStyle]=useState<SelectedStyle|null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [gotResp,setGotResp]=useState(false)
  const [deleteProject,setDeleteProject]=useState<Project|null>(null)
  const [refresh,setRefresh]=useState(false)
  const [newProject, setNewProject] = useState<Project>({
    pid:0,
    title: "",
    desc: "",
    image: "",
    tags: [],
    github: "",
    Link: "",
    uid:0,
  })
  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedStyle(e.target.value as keyof typeof Theme)
  }
  useEffect(()=>{const fetchStyle=async()=>{
    setGotResp(true)
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles/1")
    setSelectedStyle(res.data.styles.pstyle)
    setGotResp(false)
  }
  fetchStyle()},[])
  useEffect(()=>{const setStyle=async()=>{
    setGotResp(true)
    if(submitselectedStyle!=null){
      
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateProjectStyle",submitselectedStyle)
      toast(res.data.message)
    }
    setGotResp(false)
  }
  setStyle()},[submitselectedStyle])

  useEffect(()=>{const fetchData=async()=>{
    setGotResp(true)
    if(modalOpen!=true){
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getProjects/1")
    setProjects(res.data.project)
    }
    setGotResp(false)
  }
  fetchData()},[refresh])

  useEffect(()=>{const sendData=async()=>{
    setGotResp(true)
    if(newProject.title.length!=0){
      if(editIndex==null){
        console.log(newProject)
          const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/addProject",newProject)
          toast(res.data.message)
        }else{
          const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateProject",newProject)
          toast(res.data.message)
        }
        setNewProject({
          pid:0,
          title: "",
          desc: "",
          image: "",
          tags: [],
          github: "",
          Link: "",
          uid:1
        })
        setEditIndex(null)
        setRefresh(!refresh)  
      }
      setModalOpen(false)
      setGotResp(false)
    }
  sendData()},[projects])

  useEffect(()=>{
    const DeleteProject=async()=>{
      setGotResp(true)
      if(deleteProject!=null){
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/deleteProject",deleteProject) 
        toast(res.data.message)
        setRefresh(!refresh)
      }
      setGotResp(false)
    }
    DeleteProject()},[deleteProject])
  const SelectedProject = Theme[selectedStyle]?.projects;
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewProject((prev) => ({ ...prev, [name]: value }))
  }
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim())
    setNewProject((prev) => ({ ...prev, tags }))
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewProject((prev) => ({ ...prev, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDelete = (i: number) => {
    const updated = [...projects]
    updated.splice(i, 1)
    setDeleteProject(projects[i])
    setProjects(updated)
  }

  const handleEdit = (i: number) => {
    setNewProject(projects[i])
    setEditIndex(i)
    setModalOpen(true)
  }

  return (
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
              <button disabled={gotResp} onClick={()=>{setSubmitSelectedStyle({uid:1,pstyle:selectedStyle})}} className="ml-5 w-36 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors border-slate-300 text-black shadow-lg">Save</button>
              </div>
            </div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div key={i} className="rounded-2xl shadow-md border p-4">
            <Image
              src={pfp}
              alt={project.title}
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
              <div className="flex flex-wrap gap-2 my-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm px-2 py-1 rounded-full border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <div className="space-x-2">
                  <button
                    disabled={gotResp}
                    onClick={() => handleEdit(i)}
                    className="bg-sky-100 text-blue-400 border-slate-100 px-4 py-1 rounded-md hover:bg-sky-500 hover:text-white transition-all"
                  >
                    Edit
                  </button>
                  <button
                  disabled={gotResp}
                    onClick={() => handleDelete(i)}
                    className="bg-red-100 text-red-600 px-4 py-1 rounded-md hover:bg-red-200 transition-colors"
                  >
                    Delete
                  </button>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    className="text-blue-600 underline text-sm"
                    target="_blank"
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
        onClick={() => {
          setNewProject({
            title: "",
            desc: "",
            image: "",
            tags: [],
            github: "",
            Link: "",
            uid:1
          })
          setEditIndex(null)
          setModalOpen(true)
        }}
        className="my-4 right-10 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Project
      </button>
      {modalOpen && (
        <form onSubmit={(e)=>{
          e.preventDefault()
          if (editIndex !== null) {
            const updatedProjects = [...projects]
            updatedProjects[editIndex] = newProject
            setProjects(updatedProjects)
          }else{
            setProjects((prev) => [...prev, newProject])
          }
        }} className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center h-full justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg space-y-4">
            <h3 className="text-xl font-semibold">
              {editIndex !== null ? "Edit Project" : "New Project"}
            </h3>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newProject.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
             required/>
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
              placeholder="Tags (comma separated)"
              value={newProject.tags.join(", ")}
              onChange={handleTagsChange}
              className="w-full border p-2 rounded-md"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
              required
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
              disabled={gotResp}
                onClick={() => {
                  setModalOpen(false)
                  setEditIndex(null)
                }}
                className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
              disabled={gotResp}
              type="submit"
                
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                {editIndex !== null ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </form>
      )}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Preview</h2>
        </div>
        {SelectedProject ? <SelectedProject content={projects}/>:<p>Style not found.</p>}
      </div>
    </div>
  )
}
