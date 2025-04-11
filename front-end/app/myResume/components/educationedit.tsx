"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { SelectedStyle } from "@/utils/types"
import { Plus, Edit, Trash2 } from "lucide-react"
import { EducationI } from "@/utils/types"
import { Theme } from "@/app/themes/styles"
import axios from "axios"
import { toast } from "react-toastify"
import { Session } from "@/middleware"
import Cookies from "js-cookie"
export default function EducationEditor() {
  const [educations, setEducations]=useState<EducationI[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentEducation, setCurrentEducation] = useState<EducationI| null>(null)
  const [selectedStyle,setSelectedStyle]=useState<keyof typeof Theme>("1")
  const [submitselectedStyle,setSubmitSelectedStyle]=useState<SelectedStyle|null>(null)
  const [gotResp,setGotResp]=useState(false)
  const [isEditing,setIsEditing]=useState(false)
  const [newEd,setNewEd]=useState<EducationI|null>(null)
  const [refresh,setRefresh]=useState(false)
  const [currentDelEducation,setCurrentDelEducation]=useState<number|null>(null)
  const [logged,setLogged]=useState<Session>({session:"dd",uid:0})
  const SelectedEd=Theme[selectedStyle].education
  

  useEffect(()=>{const getCookies=async()=>{
    const cookie=Cookies.get("creds")
    setLogged(JSON.parse(cookie??''))
  }
  getCookies()},[])

  useEffect(()=>{const fetchStyle=async()=>{
    setGotResp(true)
    if(logged.uid!=0){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles",{uid:logged.uid})
      setSelectedStyle(res.data.styles.estyle)
      setGotResp(false)
    }
  }
  fetchStyle()},[logged])

  useEffect(()=>{const getEd=async()=>{
    if(logged.uid!=0){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getEducations",{uid:logged.uid})
      setEducations(res.data.education)
  }}
  getEd()},[refresh,logged])

  useEffect(()=>{const setStyle=async()=>{
    setGotResp(true)
    if(submitselectedStyle!=null){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateEducationStyle",{style:submitselectedStyle,uid:logged.uid,session:logged.session})
      toast(res.data.message)
    }
    setGotResp(false)
  }
  setStyle()},[submitselectedStyle])

  useEffect(()=>{ const sendEd=async()=>{
    if(newEd!=null){ 
      console.log("In",newEd)
      setGotResp(true) 
      let res
      if(!isEditing){
        res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/addEducation",{ed:newEd,uid:logged.uid,session:logged.session})
        setNewEd(null)
        toast(res.data.mesage)
      }else{
        res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateEducation",{ed:newEd,uid:logged.uid,session:logged.session})
        setIsEditing(false)
        setNewEd(null)
        toast(res.data.mesage)
      }
      setRefresh(!refresh)
      setGotResp(false)
      }
    }
  sendEd()},[newEd])


  useEffect(()=>{ const sendEd=async()=>{
    if(currentDelEducation!=null){ 
      setGotResp(true) 
      console.log(currentEducation)
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/delEducation",{del:currentDelEducation,uid:logged.uid,session:logged.session})
      toast(res.data.message)
      setRefresh(!refresh)
      setGotResp(false)
      }
    }
  sendEd()},[currentDelEducation])


  const openNewEducationModal = () => {
    setCurrentEducation({
      inst: "",
      degree: "",
      startdate: "",
      enddate: null,
  
    })
    setIsModalOpen(true)
  }

    const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStyle(e.target.value as keyof typeof Theme)
    }
  const openEditEducationModal = (education: EducationI) => {
    setIsEditing(true)
    setCurrentEducation(education)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setCurrentEducation(null)
    setIsModalOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!currentEducation) return

    const { name, value } = e.target
    setCurrentEducation((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  const handleSaveEducation = () => {
    if (!currentEducation || !currentEducation.inst.trim()) return
    const isNewEducation = !educations.some((e) => e.degree === currentEducation.degree)
    console.log(currentEducation)
    if (isNewEducation) {
      setEducations((prev) => [...prev, currentEducation])
      setNewEd(currentEducation)
    } else {
      setEducations((prev) => prev.map((e) => (e.degree === currentEducation.degree ? currentEducation : e)))
      setNewEd(currentEducation)
    }

    closeModal()
  }

  const handleDeleteEducation = (edid:number) => {
    if (confirm("Are you sure you want to delete this education entry?")) {
      setEducations((prev) => prev.filter((e) => e.edid!== edid))
      setCurrentDelEducation(edid)
    }
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Manage Education</h1>

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
              <button disabled={gotResp} onClick={()=>{setSubmitSelectedStyle({estyle:selectedStyle})}} className={`ml-5 w-36 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors border-slate-300 text-black shadow-lg ${gotResp?'cursor-wait':'cursor-pointer'}`}>Save</button>
              </div>
            </div>
        <button
        disabled={gotResp}
          onClick={openNewEducationModal}
          className={`bg-blue-600 text-white px-4 py-2 rounded flex items-center ${gotResp?'cursor-wait':'cursor-pointer'}`}
        >
          <Plus size={16} className="mr-2" />
          Add Education
        </button>
      </div>

      <div className="space-y-4">
        {educations.map((education,i) => (
          <div key={i} className="border rounded-lg shadow-sm p-6 bg-white">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">{education.inst}</h3>
                <p className="text-gray-600">
                  {education.degree}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(education.startdate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -
                  {(education.enddate!=null)
                    ? new Date(education.enddate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
                    : " Present"}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                disabled={gotResp}
                  onClick={() => openEditEducationModal(education)}
                  className={`p-1 text-gray-500 hover:text-gray-700 ${gotResp?'cursor-wait':'cursor-pointer'}`}
                >
                  <Edit size={18} />
                </button>
                <button
                disabled={gotResp}
                  onClick={() => handleDeleteEducation(education.edid||0)}
                  className={`p-1 text-gray-500 hover:text-red-500 ${gotResp?'cursor-wait':'cursor-pointer'}`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {educations.length === 0 && (
          <div className="border rounded-lg shadow-sm p-12 text-center bg-white">
            <p className="text-gray-500 mb-4">No education entries added yet.</p>
            <button
            disabled={gotResp}
              onClick={openNewEducationModal}
              className={`bg-blue-600 text-white px-4 py-2 rounded flex items-center mx-auto ${gotResp?'cursor-wait':'cursor-pointer'}`}
            >
              <Plus size={16} className="mr-2" />
              Add Your First Education Entry
            </button>
          </div>
        )}
      </div>

      {isModalOpen && currentEducation && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">
              {currentEducation.inst ? "Edit Education" : "Add New Education"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Institution</label>
                <input
                  type="text"
                  name="inst"
                  value={currentEducation.inst}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter institution name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={currentEducation.degree}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                    placeholder="e.g. Bachelor of Science"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Start Date</label>
                  <input
                    type="month"
                    name="startdate"
                    value={currentEducation.startdate}
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
                    value={currentEducation.enddate?currentEducation.enddate:" Present"}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
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
                
                  onClick={handleSaveEducation}
                  className={`px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 ${gotResp?'cursor-wait':'cursor-pointer'}`}
                  disabled={!currentEducation.inst.trim()}
                >
                  Save Education
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
              {SelectedEd?<SelectedEd education={educations}/>:<p>Style Not Found</p>}
            </div>
    </div>
  )
}
