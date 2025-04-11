"use client"

import type React from "react"

import { useState,useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { Loader2,Save,Lock,Mail,Phone,MapPin,Linkedin } from "lucide-react"
import { ProfileData,PasswordData } from "@/utils/types"
import { Session } from "@/middleware"
import Cookies from "js-cookie"
export default function Profile() {
  const [isLoading,setIsLoading]=useState(false)
  const [logged,setLogged]=useState<Session>({session:"dd",uid:0})
  const [isPasswordLoading,setIsPasswordLoading]=useState(false)
  const [profileData,setProfileData]=useState<ProfileData>({
    email:"",
    phone:"",
    location:"",
    linkedin:"",
  })
  useEffect(()=>{const getCookies=async()=>{
    const cookie=Cookies.get("creds")
    setLogged(JSON.parse(cookie??''))
  }
  getCookies()},[])

  const [passwordData,setPasswordData]=useState<PasswordData>({
    currentPassword:"",
    newPassword:"",
    confirmPassword:"",
  })

  const [passwordErrors,setPasswordErrors]=useState({
    currentPassword:"",
    newPassword:"",
    confirmPassword:"",
  })

  useEffect(()=> {
    const fetchProfileData=async()=> {
        if(logged.uid!=0){
        setIsLoading(true)
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getContacts`,{uid:logged.uid})
        if(res.data.mesage){
            toast.warn(res.data.mesage)
        }else{
        const data=res.data.contact[0]
        setProfileData({
          email:data.email || "",
          phone:data.phone || "",
          location:data.location || "",
          linkedin:data.linkedin || "",
        })
        setIsLoading(false)}
    }}

    fetchProfileData()
  },[logged])

  const handleProfileChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
    const {name,value}=e.target
    setProfileData((prev)=> ({ ...prev,[name]:value }))
  }

  const handlePasswordChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
    const {name,value}=e.target
    setPasswordData((prev)=> ({ ...prev,[name]:value }))
    if (passwordErrors[name as keyof typeof passwordErrors]) {
      setPasswordErrors((prev)=> ({ ...prev,[name]:"" }))
    }
  }

  const validatePassword=()=> {
    let isValid=true
    const errors={ ...passwordErrors }

    if (!passwordData.currentPassword) {
      errors.currentPassword="Current password is required"
      isValid=false
    }

    if (!passwordData.newPassword) {
      errors.newPassword="New password is required"
      isValid=false
    } else if (passwordData.newPassword.length<8) {
      errors.newPassword="Password must be at least 8 characters"
      isValid=false
    }

    if (!passwordData.confirmPassword) {
      errors.confirmPassword="Please confirm your new password"
      isValid=false
    } else if (passwordData.newPassword!==passwordData.confirmPassword) {
      errors.confirmPassword="Passwords do not match"
      isValid=false
    }

    setPasswordErrors(errors)
    return isValid
  }

  const handleProfileSubmit=async(e:React.FormEvent)=> {
    e.preventDefault()
    setIsLoading(true)
    const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/updateContact`,{contact:profileData,uid:logged.uid,session:logged.session})
    toast(res.data.message)
    setIsLoading(false)
  }

  const handlePasswordSubmit=async(e:React.FormEvent)=> {
    e.preventDefault()

    if (!validatePassword()) {
      return
    }
      setIsPasswordLoading(true)
      const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/updatePassword`,{pass:passwordData,uid:logged.uid,session:logged.session})
      toast(res.data.message)
      setPasswordData({
        currentPassword:"",
        newPassword:"",
        confirmPassword:"",
      })
      setIsPasswordLoading(false)
    
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <form onSubmit={handleProfileSubmit}>
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">Personal Information</h2>
              <p className="text-sm text-gray-500">Update your contact information</p>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                      className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="City,Country"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn URL
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Linkedin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={profileData.linkedin}
                      onChange={handleProfileChange}
                      className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="https://linkedin.com/in/yourusername"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Saving...
                  </>
                ) :(
                  <>
                    <Save className="-ml-1 mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <form onSubmit={handlePasswordSubmit}>
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">Change Password</h2>
              <p className="text-sm text-gray-500">Update your password</p>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className={`block w-full pl-10 pr-3 py-2 rounded-md border ${
                        passwordErrors.currentPassword ? "border-red-300" :"border-gray-300"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="••••••••"
                    />
                  </div>
                  {passwordErrors.currentPassword && (
                    <p className="mt-1 text-sm text-red-600">{passwordErrors.currentPassword}</p>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className={`block w-full pl-10 pr-3 py-2 rounded-md border ${
                        passwordErrors.newPassword ? "border-red-300" :"border-gray-300"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="••••••••"
                    />
                  </div>
                  {passwordErrors.newPassword && (
                    <p className="mt-1 text-sm text-red-600">{passwordErrors.newPassword}</p>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className={`block w-full pl-10 pr-3 py-2 rounded-md border ${
                        passwordErrors.confirmPassword ? "border-red-300" :"border-gray-300"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="••••••••"
                    />
                  </div>
                  {passwordErrors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{passwordErrors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 -mx-6 px-6 py-3 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h3>
                <ul className="text-xs text-gray-500 list-disc pl-5 space-y-1">
                  <li>Minimum 8 characters long</li>
                  <li>Include at least one uppercase letter</li>
                  <li>Include at least one number</li>
                  <li>Include at least one special character</li>
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                disabled={isPasswordLoading}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                {isPasswordLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Updating...
                  </>
                ) :(
                  <>
                    <Lock className="-ml-1 mr-2 h-4 w-4" />
                    Update Password
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
