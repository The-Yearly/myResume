"use client"

import { useState } from "react"
import HeroEditor from "./components/heroedit"
import AdminSidebar from "./components/adminsidebar"
import AboutEditor from "./components/aboutedit"
import ProjectsEditor from "./components/projectsedit"
import SkillsEditor from "./components/skillsedit"
import EducationEditor from "./components/educationedit"
import ExperienceEdit from "./components/expedit"
import { ToastContainer } from "react-toastify"
import Profile from "./components/profile"
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("hero")
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ToastContainer/>
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {activeTab=== "hero" && <HeroEditor />}
          {activeTab==="about" && <AboutEditor/>}
          {activeTab==="projects" && <ProjectsEditor/>}
          {activeTab==="skills" && <SkillsEditor/>}
          {activeTab==="education" && <EducationEditor/>}
          {activeTab==="experience" && <ExperienceEdit/>}
          {activeTab==="myProfile" && <Profile/>}
        </main>
      </div>
    </div>
  )
}

