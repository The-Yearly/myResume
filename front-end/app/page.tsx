"use client"
import { useState, useEffect } from "react"
import { Search, Navigation } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { getUsers } from "@/utils/types"
import axios from "axios"
import Image from "next/image"
import { Navbar } from "./components/navBar"

export default function PeopleDirectory() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<getUsers[] | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getUsers`)
      setUsers(res.data.users)
      setIsLoading(false)
    }
    fetchUsers()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen grid grid-cols-1">
    <div className=" mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl mt-5 md:text-5xl font-bold text-gray-900 mb-4">Resume Directory</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover talented professionals and explore their portfolios in our interactive resume directory.
        </p>
      </div>
    </div>
    <div className="flex justify-center">
    <div className="w-3/4  min-h-screen to-white px-6 py-10">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-5 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="flex space-x-2">
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : users && users.length > 0 ? (
        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
  variants={container}
  initial="hidden"
  animate="show"
>
  {users.map((person) => (
    <motion.div key={person.uid} variants={item}>
      <Link href={`/resume/${person.username}`}>
        <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200 hover:ring-2 hover:ring-indigo-100 cursor-pointer">
          <div className="bg-gradient-to-tr from-amber-500 to-orange-600 h-28"></div>

          <div className="absolute top-10  left-1/2 transform -translate-x-1/2">
            <Image
              src={person.About[0]?.image || "https://imgs.search.brave.com/OybWtIGSaTmsuMy37WubCkHuxtXsae6GY9U3bqW0RRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYwLzg5Lzg4/LzM2MF9GXzEyNjA4/OTg4NDBfcDhwRjNO/S2hjS3VzMHRzeHJC/OHE4ZG02aTVWclpJ/OWMuanBn"}
              alt={person.username}
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md object-cover h-28 w-28"
            />
          </div>

          <div className="pt-12 pb-6 px-5 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">{person.username}</h2>
            <div className="flex justify-center items-center text-sm text-gray-500 mb-2">
              <Navigation className="w-4 h-4 mr-1" />
              <span>{person.contact[0]?.location || "Unknown"}</span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3">{person.About[0]?.about || "No description provided."}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  ))}
</motion.div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We couldn&apos;t find any people matching your search criteria.
          </p>
        </div>
      )}
    </div>
    </div>
    </div>
    </>
  )
}
