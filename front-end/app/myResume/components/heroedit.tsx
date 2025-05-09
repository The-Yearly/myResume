"use client"
import axios from "axios"
import { Hero } from "@/utils/types"
import type React from "react"
import { useState,useEffect } from "react"
import { Theme } from "../../themes/styles"
import { toast } from "react-toastify"
import HeroEditorSkeleton from "@/app/themes/skeletons/admin/heroedit"
import { Session } from "@/middleware"
import Cookies from "js-cookie"
import { colors } from "@/app/themes/colors"
console.log(colors.length)
export default function HeroEditor() {
  const [data,setData]=useState<Hero|null>(null)
  const [loading,setLoading]=useState(false)
  const [logged,setLogged]=useState<Session>({session:"dd",uid:0})
  const [heroData, setHeroData] = useState<Hero>({
    hero:"Hello, I'm ...",
    subhero:"A passionate .......",
    style:"1"
  })
  const [selectedColor,setSelectedColor]=useState("bg-gray-50")
  const [colorPickerModel,setColorPickerModel]=useState(false)
  useEffect(()=>{const fetchHero=async()=>{
    if(logged.uid!=0){
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/getHero",{uid:logged.uid})
    const data=res.data.hero
    setHeroData({hero:data.hero,subhero:data.subhero,style:data.style})
    setLoading(true)
    }
  }
  
  fetchHero()},[logged])
  
  useEffect(()=>{const getCookies=async()=>{
    const cookie=Cookies.get("creds")
    setLogged(JSON.parse(cookie??''))
}
getCookies()},[])

  useEffect(()=>{const setData=async()=>{
    if(data!=null){
      const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/setHero",{hero:data,uid:logged.uid,session:logged.session})
      toast(res.data.message)
    }
    }
  setData()},[data])
  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    const { name, value }=e.target
    if(name!="style"){
      setHeroData((prev)=>({ ...prev, [name]: value }))
    }else{
      console.log("sss")
      setHeroData((prev)=>({...prev,[name]:value  as keyof typeof Theme}))
      console.log(heroData)
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setData(heroData)
  }
  const SelectedHero = Theme[heroData.style as keyof typeof Theme]?.hero;
  if(loading){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Edit Hero Section</h1>
      </div>
      <div className="flex">
              <div className="w-50">
              <label className="block text-sm font-medium text-gray-700">Select Style</label>
              <select
              name="style"
                value={heroData.style}
                onChange={handleChange}
                className="mt-1 block w-full max-w-xs rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="1">Style 1</option>
                <option value="2">Style 2</option>
              </select>
            </div>
              <div className="ml-10 flex items-center justify-center">
                <label className="text-sm  font-medium text-gray-700">Select Color</label>
                <button className={`${selectedColor} w-4 h-4 ml-2 border-2`} onClick={()=>{setColorPickerModel(true)}}/>
              </div>
      </div>  
      {colorPickerModel &&(
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white border-1 max-w-[50vh] max-h-[50vh] p-6 rounded-xl w-full h-full overflow-y-auto">
                Pick A Color
                <div className="grid grid-cols-10 md:grid-cols-16">
                  {colors.map((color)=><button key={color} onClick={()=>{setSelectedColor(color);setColorPickerModel(false)}} className={`w-4 mt-3 h-4 ml-3 border-2 ${color}`}></button>)}
                </div>
            </div>
        </div>
      )
      }

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium">Hero Content</h2>
            <p className="text-sm text-gray-500">
              Edit your hero section content that appears at the top of your portfolio.
            </p>
          </div>
          <div className="grid space-y-4">
            <input
              name="hero"
              value={heroData.hero}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 mx-5 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your hero title"
            />
            <textarea
              name="subhero"
              value={heroData.subhero}
              onChange={handleChange}
              className="rounded-md border mx-5 border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your hero subtitle"
              rows={3}
            />
          </div>
          <div className="flex px-6 py-4 border-t border-gray-200 justify-end space-x-4">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer text-gray-700 focus:ring-gray-500 hover:text-red-400 ">
              Cancel
            </button>
            <button type="submit" className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 px-3 py-2 hover:text-white hover:bg-sky-600">Save Changes</button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Preview</h2>
        </div>
        {SelectedHero ? <SelectedHero content={heroData} color={selectedColor}/> : <p>Style not found.</p>}
      </div>
    </div>
  )
}else{
  return(<HeroEditorSkeleton/>)
}
}