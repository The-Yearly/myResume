"use client"

import { Home, User, Briefcase, Code, GraduationCap, Award, LogOut } from "lucide-react"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const menuItems = [
    { id: "hero", label: "Hero", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "projects", label: "Projects", icon: <Code size={20} /> },
    { id: "skills", label: "Skills", icon: <Award size={20} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={20} /> },
  ]

  return (
    <div className="w-64 bg-black text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Resume Admin</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left ${
                  activeTab === item.id ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center px-4 py-2 text-left text-gray-400 hover:bg-gray-800 hover:text-white rounded">
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  )
}

