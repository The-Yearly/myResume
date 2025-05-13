"use client"
import { Home, User, Briefcase, Code, GraduationCap, Award, LogOut,User2Icon } from "lucide-react"
import Cookies from "js-cookie"
import axios, { AxiosError } from "axios"
import { useState,useEffect } from "react"
import { Session } from "@/middleware"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import Link from "next/link"
import { Menu,X } from "lucide-react"
interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const router=useRouter()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const menuItems = [
    { id: "hero", label: "Hero", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "projects", label: "Projects", icon: <Code size={20} /> },
    { id: "skills", label: "Skills", icon: <Award size={20} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={20} /> },
    { id: "myProfile", label: "myProfile", icon: <User2Icon size={20} /> },
  ]
   const [logged,setLogged]=useState<Session>({session:"dd",uid:0})
   const [isMenuOpen,setIsMenuOpen]=useState(false)
  const deleteCookie=async()=>{
    try{
    const res=await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/v1/deleteSession",{uid:logged.uid,session:logged.session})
    toast(res.data.message)
    router.push("/authentication")
    Cookies.remove("creds")
    }catch(e){
      const err=e as AxiosError
      console.log(err)
    }
  }
  useEffect(()=>{const getCookies=async()=>{
      const cookie=Cookies.get("creds")
      setLogged(JSON.parse(cookie??''))
  }
  getCookies()},[])
  return(
    <div>
     <div className="fixed w-full z-50 md:hidden bg-background border-b shadow-md">
  <div className="flex justify-between items-center px-4 py-5">
      <div className="flex"><button onClick={()=> setIsMenuOpen(!isMenuOpen)}>{isMenuOpen?<X/>:<Menu/>}</button><Link href={"/resume/"+logged.uid} className="text-xl mx-3 font-bold">myResume</Link></div>
      </div>
        {isMenuOpen && (
          <div className="bg-background border-t border-gray-700 transition-all duration-300">
            <div className="flex flex-col gap-4 py-4">
              <nav className="overflow-y-auto">
                <ul className="space-y-1">
                  {menuItems.map((item)=>(
                    <li key={item.id}>
                      <button onClick={()=>{setActiveTab(item.id);setIsMenuOpen(false);}} className={`w-full flex items-center px-4 py-3 rounded transition ${activeTab===item.id?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white"}`}><span className="mr-3">{item.icon}</span> {item.label}</button>
                    </li>
                  ))}
                <button onClick={deleteCookie} className="w-full flex py-3 items-center px-4 text-left text-gray-400 hover:bg-gray-800 hover:text-white rounded">
                  <LogOut size={20} className="mr-3"/>Logout</button>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex w-64 bg-black text-white flex-col h-full">
        <div className="p-4 border-b border-gray-800">
          <Link href={"/resume/"+logged.uid} className="text-xl font-bold">myResume</Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() =>setActiveTab(item.id)} className={`w-full flex items-center px-4 py-3 text-left ${activeTab===item.id?"bg-gray-800 text-white":"text-gray-400 hover:bg-gray-800 hover:text-white"}`}>
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button onClick={deleteCookie} className="w-full flex items-center px-4 py-2 text-left text-gray-400 hover:bg-gray-800 hover:text-white rounded">
            <LogOut size={20} className="mr-3"/>Logout
          </button>
        </div>
      </div>
  </div>
  )
}

