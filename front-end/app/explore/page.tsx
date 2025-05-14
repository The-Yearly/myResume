"use client"

import { useState, useEffect } from "react"
import { Search, Navigation, Linkedin, Github, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import type { getUsers } from "@/utils/types"
import axios from "axios"
import Image from "next/image"
import { Navbar } from "../components/navBar"
export default function PeopleDirectory() {
  const [isLoading,setIsLoading]=useState(true)
  const [users,setUsers]=useState<getUsers[] | null>(null)
  const [searchQuery,setSearchQuery]=useState("")
  const [activeFilter,setActiveFilter]=useState("all")
  
  useEffect(()=>{
    const fetchUsers=async()=>{
      try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getUsers`)
        setUsers(res.data.users)
      }catch (error){
        console.error("Error fetching users:",error)
      }finally{
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])
  const filteredUsers=users?.filter((user)=>{
    const matchesSearch=user.username.toLowerCase().includes(searchQuery.toLowerCase())||(user.About[0]?.about || "").toLowerCase().includes(searchQuery.toLowerCase())||(user.contact[0]?.location||"").toLowerCase().includes(searchQuery.toLowerCase())
    if (activeFilter=="all") return matchesSearch
    if (activeFilter=="designers")
      return matchesSearch && (user.About[0]?.about || "").toLowerCase().includes("design")
    if (activeFilter=="developers")
      return matchesSearch && (user.About[0]?.about || "").toLowerCase().includes("develop")
    return matchesSearch
  })
  const container={
    hidden:{opacity:0},
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.05,
      },
    },
  }

  const item={
    hidden:{y:20,opacity:0},
    show:{
      y:0,
      opacity:1,
      transition:{
        type:"tween",
        duration:0.3,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black z-0"/>
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Resume Directory
            </h1> 
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">Connect with extraordinary professionals</p>

            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-purple-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-3 border-0 rounded-xl focus:ring-2 focus:ring-purple-500 
                           bg-gray-900 text-white placeholder-gray-400 shadow-lg"
                placeholder="Search by name, location, or description..."
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={()=>setSearchQuery("")}
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["all", "designers", "developers"].map((filter)=>(
                <button
                  key={filter}
                  onClick={()=>setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter==filter
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {filter.charAt(0).toUpperCase()+filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index)=>(
                <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <div className="h-28 bg-gradient-to-r from-purple-900 to-pink-900"></div>
                  <div className="p-5 space-y-3">
                    <div className="flex justify-center -mt-14 mb-3">
                      <div className="h-24 w-24 rounded-full bg-gray-800 border-4 border-gray-900"></div>
                    </div>
                    <div className="h-5 bg-gray-800 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
                    <div className="h-4 bg-gray-800 rounded w-full"></div>
                    <div className="flex justify-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                      <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ):filteredUsers&&filteredUsers.length>0?(
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredUsers.map((person)=>(
                <motion.div key={person.uid} variants={item} className="h-full">
                 <div className="h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-200 shadow-lg hover:shadow-purple-900/20 hover:translate-y-[-4px]">
                  <Link href={`/resume/${person.username}`} className="block h-full">
                      <div className="h-28 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                      </div>
                      <div className="relative px-5 pb-6">
                        <div className="flex justify-center">
                          <div className="absolute -top-14 rounded-full border-4 border-gray-900 shadow-lg overflow-hidden">
                            <div className="relative h-28 w-28">
                              <Image src={person.About[0]?.image||"https://imgs.search.brave.com/OybWtIGSaTmsuMy37WubCkHuxtXsae6GY9U3bqW0RRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYwLzg5Lzg4/LzM2MF9GXzEyNjA4/OTg4NDBfcDhwRjNO/S2hjS3VzMHRzeHJC/OHE4ZG02aTVWclpJ/OWMuanBn"||"/placeholder.svg" } alt={person.username} fill className="object-cover"/>
                            </div>
                          </div>
                        </div>
                        <div className="pt-16 text-center">
                          <h2 className="text-xl font-bold text-white mb-1">{person.username}</h2>

                          <div className="flex justify-center items-center text-sm text-gray-400 mb-3">
                            <Navigation className="w-4 h-4 mr-1 text-purple-400" />
                            <span>{person.contact[0]?.location || "Unknown location"}</span>
                          </div>

                          <p className="text-sm text-gray-400 line-clamp-3 mb-4">
                            {person.About[0]?.about || "No description provided."}
                          </p>

                          
                        </div>
                      </div>
                  </Link>
                  <div className="relative -top-1/4 flex justify-center space-x-3 mt-4">
                    <Link href={person.contact[0].linkedin} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200">
                      <Linkedin className="w-4 h-4"/>
                    </Link>
                    <Link href={person.contact[0].github} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200">
                      <Github className="w-4 h-4"/>
                    </Link>
                  </div>
                </div>
                </motion.div>
              ))}
            </motion.div>
          ):(
            <div className="text-center py-16 bg-gray-900 rounded-xl border border-gray-800">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 mb-6">
                <Search className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">No results found</h3>
              <p className="text-gray-400 max-w-md mx-auto mb-6">
                We couldn&apos;t find any people matching your search criteria. Try adjusting your search terms.
              </p>
              {searchQuery && (
                <button
                  className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium"
                  onClick={()=>{setSearchQuery("");setActiveFilter("all")}}
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
