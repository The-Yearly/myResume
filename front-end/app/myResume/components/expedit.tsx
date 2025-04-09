"use client"

import type React from "react"
import { useState,useEffect } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"
import { ExperienceI } from "@/utils/types"
import { SelectedStyle } from "@/utils/types"
import { Theme } from "@/app/themes/styles"
import axios from "axios"
import { toast } from "react-toastify"
export default function ExperienceEdit() {
  const [experience, setExp] = useState<ExperienceI[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentExp, setCurrentExp] = useState<ExperienceI| null>(null)
  const [selectedStyle,setSelectedStyle]=useState<keyof typeof Theme>("1")
  const [submitselectedStyle,setSubmitSelectedStyle]=useState<SelectedStyle|null>(null)
  const [gotResp,setGotResp]=useState(false)
  const [newExperience,setNewExperience]=useState<ExperienceI|null>(null)
  const [refresh,setRefresh]=useState(false)
  const [isEditing,setIsEditing]=useState(false)
  const [deleteId,setDeleteId]=useState<number|null>(null)
  const SelectedExp=Theme[selectedStyle].experience

  useEffect(()=>{const fetchStyle=async()=>{
    setGotResp(true)
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles/1")
    setSelectedStyle(res.data.styles.exstyle)
    setGotResp(false)
  }
  fetchStyle()},[])

  useEffect(()=>{const setStyle=async()=>{
    setGotResp(true)
    if(submitselectedStyle!=null){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateExperienceStyle",submitselectedStyle)
      toast(res.data.message)
    }
    setGotResp(false)
  }
  setStyle()},[submitselectedStyle])

  useEffect(()=>{ const sendEd=async()=>{
    if(deleteId!=null){ 
      setGotResp(true) 
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/deleteExperience",{deleteId})
      toast(res.data.message)
      setRefresh(!refresh)
      setGotResp(false)
      }
    }
  sendEd()},[deleteId])

  useEffect(()=>{const getData=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getExperience/1")
    setExp(res.data.experience)
  }
  getData()},[refresh])

  useEffect(()=>{ const sendEd=async()=>{
    if(newExperience!=null){ 
      console.log("In",newExperience)
      setGotResp(true) 
      let res
      if(!isEditing){
        res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/addExperience",newExperience)
        setNewExperience(null)
        toast(res.data.mesage)
      }else{
        res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateExperience",newExperience)
        setIsEditing(false)
        setNewExperience(null)
        toast(res.data.mesage)
      }
      setRefresh(!refresh)
      setGotResp(false)
      }
    }
  sendEd()},[newExperience])

  const openNewExpModal = () => {
    setCurrentExp({
      corp: "",
      title: "",
      startdate: "",
      enddate: null,
      desc:"",
      uid:1
    })
    setIsModalOpen(true)
  }

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStyle(e.target.value as keyof typeof Theme)
    }

  const openEditExpModal = (education: ExperienceI) => {
    setCurrentExp(education)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentExp(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!currentExp) return

    const { name, value } = e.target
    setCurrentExp((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  const handleSaveExp = () => {
    if (!currentExp || !currentExp.corp.trim()) return

    const isNewExp = !experience.some((e) => e.title=== currentExp.title)

    if (isNewExp) {
      setNewExperience(currentExp)
      setExp((prev) => [...prev, currentExp])
    } else {
      setExp((prev) => prev.map((e) => (e.exid === currentExp.exid ? currentExp : e)))
      setIsEditing(true)
      setNewExperience(currentExp)
    }

    closeModal()
  }

  const handleDeleteExp = (exid: number) => {
    if (confirm("Are you sure you want to delete this education entry?")) {
      setExp((prev) => prev.filter((e) => e.exid !== exid))
      setDeleteId(exid)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
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
              <button disabled={gotResp} onClick={()=>{setSubmitSelectedStyle({uid:1,exstyle:selectedStyle})}} className={`ml-5 w-36 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors border-slate-300 text-black shadow-lg ${gotResp?'cursor-wait':'cursor-pointer'}`}>Save</button>
              </div>
            </div>
        <h1 className="text-2xl font-bold text-gray-800">Manage Exp</h1>
        <button 
        disabled={gotResp}
          onClick={openNewExpModal}
          className={`bg-blue-600 text-white px-4 py-2 rounded flex items-center ${gotResp?'cursor-wait':'cursor-pointer'}`}
        >
          <Plus size={16} className="mr-2" />
          Add Exp
        </button>
      </div>

      <div className="space-y-4">
        {experience.map((education) => (
          <div key={education.title} className="border rounded-lg shadow-sm p-6 bg-white">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">{education.corp}</h3>
                <p className="text-gray-600">
                  {education.title}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(education.startdate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -
                  {education.enddate
                    ? new Date(education.enddate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
                    : " Present"}
                </p>
                <p className="text-gray-700">{education.desc}</p>
              </div>

              <div className="flex space-x-2">
                <button
                disabled={gotResp}
                  onClick={() => openEditExpModal(education)}
                  className={`p-1 text-gray-500 hover:text-gray-700 ${gotResp?'cursor-wait':'cursor-pointer'}`}
                >
                  <Edit size={18} />
                </button>
                <button
                disabled={gotResp}
                  onClick={() => handleDeleteExp(education.exid||0)}
                  className={`p-1 text-gray-500 hover:text-red-500 ${gotResp?'cursor-wait':'cursor-pointer'}`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {experience.length === 0 && (
          <div className="border rounded-lg shadow-sm p-12 text-center bg-white">
            <p className="text-gray-500 mb-4">No education entries added yet.</p>
            <button
            disabled={gotResp}
              onClick={openNewExpModal}
              className={`bg-blue-600 text-white px-4 py-2 rounded flex items-center mx-auto ${gotResp?'cursor-wait':'cursor-pointer'}`}
            >
              <Plus size={16} className="mr-2" />
              Add Your First Exp Entry
            </button>
          </div>
        )}
      </div>


      {isModalOpen && currentExp && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">
              {currentExp.corp ? "Edit Exp" : "Add New Exp"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Company</label>
                <input
                  type="text"
                  name="corp"
                  value={currentExp.corp}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={currentExp.title}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                    placeholder="e.g. Project Manager"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Start Date</label>
                  <input
                    type="month"
                    name="startdate"
                    value={currentExp.startdate}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">End Date (or leave blank if current)</label>
                  <input
                    type="month"
                    name="enddate"
                    value={currentExp.enddate?currentExp.enddate:" Present"}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div>
                  <label className="w-full mb-1">Description</label>
                  <textarea
                    name="desc"
                    value={currentExp.desc}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                disabled={gotResp}
                  onClick={closeModal}
                  className={`px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 ${gotResp?'cursor-wait':'cursor-pointer'}`}
                >
                  Cancel
                </button>
                <button
                
                  onClick={handleSaveExp}
                  className={`px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 ${gotResp?'cursor-wait':'cursor-pointer'}`}
                  disabled={!currentExp.corp.trim()}
                >
                  Save Exp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium">Preview</h2>
              </div>
                {SelectedExp?<SelectedExp experence={experience}/>:<p>Style Not Found</p> }
            </div>
    </div>
  )
}
