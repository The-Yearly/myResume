"use client"
import React from "react"
import{ useState, useEffect } from "react"
import{ Activity, AlertCircle, Anchor, Archive, ArrowRight, Award, Bookmark, BookOpen, Box, Briefcase, Calendar, Camera, ChevronRight, Clipboard, Clock, Cloud, Code, Compass, Cpu, CreditCard, Database, FileText, Film, Flag, Folder, Gift, GitBranch, Globe, Headphones, Heart, Home, Image, Key, Layers, Layout, LifeBuoy, Link, Mail, Map, MessageCircle, Monitor, Moon, Music, Package, Pencil, Phone, PieChart, Play, Printer, Radio, Save, Search, Server, Settings, Shield, ShoppingBag, ShoppingCart, Sliders, Smartphone, Star, Sun, Tag, Terminal, Truck, User, Video, Zap, Book, Brain, Coffee, Flame, Lightbulb, Languages, Mic, Network, Palette, PenTool, Shuffle, Sparkles, Wind, ClipboardList, CheckCircle2, MoveRight, HeartHandshake, Plus, Edit, Trash2 } from "lucide-react"
import{ Theme } from "../../themes/styles"
import axios from "axios"
import type{ Skill } from "@/utils/types"
import{ toast } from "react-toastify"
export const iconMap={ Activity, AlertCircle, Anchor, Archive, ArrowRight, Award, Bookmark, BookOpen, Box, Briefcase, Calendar, Camera, ChevronRight, Clipboard, Clock, Cloud, Code, Plus, Compass, Cpu, CreditCard, Database, FileText, Film, Flag, Folder, Gift, GitBranch, Globe, Headphones, Heart, Home, Image, Key, Layers, Layout, LifeBuoy, Link, Mail, Map, MessageCircle, Monitor, Moon, Music, Package, Pencil, Phone, PieChart, Play, Printer, Radio, Save, Search, Server, Settings, Shield, ShoppingBag, ShoppingCart, Sliders, Smartphone, Star, Sun, Tag, Terminal, Truck, User, Video, Zap, Book, Brain, Coffee, Flame, Lightbulb, Languages, Mic, Network, Palette, PenTool, Shuffle, Sparkles, Wind, ClipboardList, CheckCircle2, MoveRight, HeartHandshake, Edit, Trash2 }
export type IconName=keyof typeof iconMap

interface updatedCatgory{
  sid:number,
  skillname:string,
  icon:keyof typeof iconMap
}

export const renderIcon=(iconName: string)=>{
  const IconComponent=iconMap[iconName as IconName] || Code
  return <IconComponent className="h-5 w-5 mb-2 text-primary" />
}

export default function SkillsEditor(){
  const [selectedStyle, setSelectedStyle]=useState<keyof typeof Theme>("1")
  const [skills,setSkills]=useState<Skill[]>([])
  const [refresh,setRefresh]=useState(false)
  const [isCategoryModalOpen, setIsCategoryModalOpen]=useState(false)
  const [currentCategoryName, setCurrentCategoryName]=useState("")
  const [updatedCatgory,setUpdatedCatgory]=useState<updatedCatgory|null>(null)
  const [selectedIcon, setSelectedIcon]=useState<IconName>("Layout")
  const [isIconSelectorOpen, setIsIconSelectorOpen]=useState(false)
  const [iconSearchTerm, setIconSearchTerm]=useState("")
  const [isEditingCategory, setIsEditingCategory]=useState(false)
  const [currentCategoryId, setCurrentCategoryId]=useState<number | null>(null)
  const [isSkillModalOpen, setIsSkillModalOpen]=useState(false)
  const [currentSkillName, setCurrentSkillName]=useState("")
  const [currentCategory, setCurrentCategory]=useState("")
  const [newSkill,setSelectedSkill]=useState<Skill|null>(null)
  const [isEditingSkill, setIsEditingSkill]=useState(false)
  const [deleteSkill,setDeleteSkill]=useState(0)
  const [currentSkillNameBeforeEdit, setCurrentSkillNameBeforeEdit]=useState("")
  const [currentSkillCat,setCurrentSkillCat]=useState(0)
  const [newsSkillsList,setNewsSkillsList]=useState<string[]>([])
  const [submitselectedStyle,setSubmitSelectedStyle]=useState<{uid:number,sstyle:keyof typeof Theme}|null>(null)
  useEffect(()=>{const fetchStyle=async()=>{
    const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getStyles/1")
    setSelectedStyle(res.data.styles.sstyle)
  }
  fetchStyle()},[])

  useEffect(()=>{const setStyle=async()=>{
    if(submitselectedStyle!=null){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateSkillStyle",submitselectedStyle)
      toast(res.data.message)
    }
  }
  setStyle()},[submitselectedStyle])

  useEffect(()=>{
    const addSkills=async()=>{
      if(newsSkillsList.length!=0 && currentSkillCat!=0){
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/addSkill",{list:newsSkillsList,sid:currentSkillCat})
        toast(res.data.message)
      }
    }
  addSkills()
  },[newsSkillsList])
  useEffect(()=>{
    const sendupdatedCatgory=async()=>{
      if(updatedCatgory!=null){
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/updateSkillCat",updatedCatgory)
        toast(res.data.message)
        setCurrentSkillCat(0)
      }
    }
  sendupdatedCatgory()},[updatedCatgory])

  useEffect(()=>{
  const fetchData=async()=>{
      const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getSkills/1")
      setSkills(res.data.skills)
  }
  fetchData()},[refresh])

  useEffect(()=>{
    const deleteData=async()=>{
      if(deleteSkill!=0){
        const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/deleteSkill/"+deleteSkill)
        toast(res.data.message)
        setDeleteSkill(0)
    }
  }
    deleteData()},[deleteSkill])
  
  
  useEffect(()=>{
    const fetchData=async()=>{
      if(newSkill!=null){
        const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/addSkills",newSkill)
        toast(res.data.message)
        setSelectedSkill(null)
        setRefresh(!refresh)
      }
    }
    fetchData()},[newSkill])
  const SelectedSkills=Theme[selectedStyle]?.skills

  const handleStyleChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedStyle(e.target.value as keyof typeof Theme)
  }

  const openNewCategoryModal=()=>{
    setCurrentCategoryName("")
    setSelectedIcon("Layout")
    setIsEditingCategory(false)
    setCurrentCategoryId(null)
    setIsCategoryModalOpen(true)
  }

  const openEditCategoryModal=(category: string, sid: number)=>{
    setCurrentCategoryName(category)
    setCurrentCategoryId(sid)
    setIsEditingCategory(true)
    const categoryData=skills.find((s)=>s.skillname==category)
    if (categoryData){
      setSelectedIcon(categoryData.icon as IconName)
    }else{
      setSelectedIcon("Code")
    }
    setIsCategoryModalOpen(true)
    
  }

  const closeCategoryModal=()=>{
    setIsCategoryModalOpen(false)
    setIsEditingCategory(false)
    setCurrentCategoryName("")
    setIsIconSelectorOpen(false)
    setIconSearchTerm("")
    setCurrentCategoryId(null)
  }

  const handleSaveCategory=()=>{
    if (!currentCategoryName.trim()) return
    if (isEditingCategory && currentCategoryId!=null){
      setSkills((prev)=>
        prev.map((skill)=>
          skill.sid==currentCategoryId ?{ ...skill, skillname: currentCategoryName, icon: selectedIcon } : skill,
        ),
      )
      setUpdatedCatgory({sid:currentCategoryId,skillname: currentCategoryName, icon: selectedIcon })
    } else{
      const newId=skills.length+1
      setSkills((prev)=>[
        ...prev,
       {
          uid: 1,
          sid: newId, 
          skillname: currentCategoryName,
          icon: selectedIcon,
          skills: [],
        },
      ])
     setSelectedSkill(
     { uid: 1,
        sid: newId, 
        skillname: currentCategoryName,
        icon: selectedIcon,
        skills: [],}
     )
    }

    closeCategoryModal()
  }

  const handleDeleteCategory=(category: string, sid: number)=>{
    if (!confirm(`Are you sure you want to delete the "${category}" category and all its skills?`)) return
    setSkills((prev)=>prev.filter((skill)=>skill.sid!=sid))
    setDeleteSkill(sid)
  }

  const openNewSkillModal=(category: string,id:number)=>{
    setCurrentSkillName("")
    setCurrentCategory(category)
    setCurrentSkillCat(id)
    setIsEditingSkill(false)
    setIsSkillModalOpen(true)
  }

  const openEditSkillModal=(category: string, skillName: string,id:number)=>{
    setCurrentSkillName(skillName)
    setCurrentCategory(category)
    setCurrentSkillCat(id)
    setCurrentSkillNameBeforeEdit(skillName)
    setIsEditingSkill(true)
    setIsSkillModalOpen(true)
  }

  const closeSkillModal=()=>{
    setIsSkillModalOpen(false)
    setCurrentSkillName("")
    setCurrentCategory("")
    setIsEditingSkill(false)
  }

  const handleSaveSkill=()=>{
    if (!currentSkillName.trim() ||!currentCategory) return
    setSkills((prev)=>
      prev.map((skill)=>{
        if (skill.skillname!==currentCategory) return skill
        if (isEditingSkill){
          setNewsSkillsList(skill.skills.map((item)=>(item==currentSkillNameBeforeEdit ? currentSkillName : item)))
          return{
            ...skill,
            skills: skill.skills.map((item)=>(item==currentSkillNameBeforeEdit ? currentSkillName : item)),
          }
        } else{
          setNewsSkillsList([...skill.skills, currentSkillName])
          return{
            ...skill,
            skills: [...skill.skills, currentSkillName],
          }
        }
      }),
    )
    closeSkillModal()
  }

  const handleDeleteSkill=(category: string, skillName: string,sid:number)=>{
    if (!confirm(`Are you sure you want to delete "${skillName}" from ${category}?`)) return
    setCurrentSkillCat(sid)
    setSkills((prev)=>
      prev.map((skill)=>
        skill.skillname==category ?{ ...skill, skills: skill.skills.filter((item)=>item!=skillName) } : skill,
      ),
    )
    setNewsSkillsList(skills.filter((skillcat)=>skillcat.skillname==category).map((skill)=>skill.skills.filter((item)=>item!=skillName)[0]))
  }

  const toggleIconSelector=()=>{
    setIsIconSelectorOpen(!isIconSelectorOpen)
  }

  const selectIcon=(iconName: IconName)=>{
    setSelectedIcon(iconName)
    setIsIconSelectorOpen(false)
    setIconSearchTerm("")
  }

  const filteredIcons=Object.keys(iconMap).filter((iconName)=>
    iconName.toLowerCase().includes(iconSearchTerm.toLowerCase()),
  ) as IconName[]

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
          <button onClick={()=>{setSubmitSelectedStyle({uid:1,sstyle:selectedStyle})}} className="ml-5 w-36 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors border-slate-300 text-black shadow-lg">Save</button>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Manage Skills</h1>
        <button
          onClick={openNewCategoryModal}
          className="flex items-center px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-700 transition-colors">
          <Plus size={16} className="mr-2" />
          Add Category
          
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillcat)=>(
          <div key={skillcat.sid} className="border rounded-lg shadow-sm bg-white">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-50 p-2 rounded-md">{renderIcon(skillcat.icon as string)}</div>
                <h2 className="text-lg font-medium">{skillcat.skillname}</h2>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={()=>openEditCategoryModal(skillcat.skillname, skillcat.sid)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={()=>handleDeleteCategory(skillcat.skillname, skillcat.sid)}
                  className="p-1 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
              {skillcat.skills?.map((skill,i)=>(
                  <li key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                    <span>{skill}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={()=>openEditSkillModal(skillcat.skillname,skill,skillcat.sid)}
                        className="p-1 text-gray-500 hover:text-gray-700"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={()=>handleDeleteSkill(skillcat.skillname, skill,skillcat.sid)}
                        className="p-1 text-gray-500 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </li>
                ))}
              {(!skillcat.skills || skillcat.skills.length==0) && (
                  <li className="p-2 text-gray-400 text-center">No skills added</li>
                )}
              </ul>
            </div>
            <div className="p-4 border-t">
              <button
                className="flex items-center justify-center w-full px-3 py-2 border border-gray-300 text-sm rounded hover:bg-gray-100"
                onClick={()=>openNewSkillModal(skillcat.skillname,skillcat.sid)}
              >
                <Plus size={16} className="mr-2" />
                Add Skill to{skillcat.skillname}
              </button>
            </div>
          </div>
        ))}
      </div>

     {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">{isEditingCategory ? "Edit Category" : "Add New Category"}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category Name</label>
                <input
                  value={currentCategoryName}
                  onChange={(e)=>setCurrentCategoryName(e.target.value)}
                  placeholder="Enter category name"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Icon</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleIconSelector}
                    className="w-full flex items-center justify-between border rounded px-3 py-2 bg-white hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                     {React.createElement(iconMap[selectedIcon],{ className: "h-5 w-5 mr-2" })}
                      <span>{selectedIcon}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isIconSelectorOpen ? "rotate-90" : ""}`} />
                  </button>

                 {isIconSelectorOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
                      <div className="p-2 border-b">
                        <input
                          type="text"
                          placeholder="Search icons..."
                          value={iconSearchTerm}
                          onChange={(e)=>setIconSearchTerm(e.target.value)}
                          className="w-full border rounded px-3 py-2 text-sm"
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto p-2 grid grid-cols-4 gap-2">
                       {filteredIcons.map((iconName)=>{
                          const IconComp=iconMap[iconName]
                          return (
                            <button
                              key={iconName}
                              onClick={()=>selectIcon(iconName)}
                              className={`flex flex-col items-center justify-center p-2 rounded hover:bg-gray-100 ${
                                selectedIcon==iconName ? "bg-gray-100 ring-2 ring-blue-500" : ""
                              }`}
                            >
                              <IconComp className="h-5 w-5 mb-1" />
                              <span className="text-xs truncate w-full text-center">{iconName}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeCategoryModal}
                  className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveCategory}
                  disabled={!currentCategoryName.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  Save Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


     {isSkillModalOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">{isEditingSkill ? "Edit Skill" : "Add New Skill"}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Skill Name</label>
                <input
                  value={currentSkillName}
                  onChange={(e)=>setCurrentSkillName(e.target.value)}
                  placeholder="Enter skill name"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeSkillModal}
                  className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveSkill}
                  disabled={!currentSkillName.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  Save Skill
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
       {SelectedSkills ? <SelectedSkills skills={skills}></SelectedSkills>: <p>Style Not Found</p>}
      </div>
    </div>
  )
}
