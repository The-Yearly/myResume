"use client"
import { SkillI } from "@/app/themes/style1/components/skills"
import type React from "react"
import { useState } from "react"
import { Code, Database, Globe, Layout, Server, Smartphone,Plus,Edit,Trash2 } from "lucide-react"
import { Theme } from "../../themes/styles"
export default function SkillsEditor() {
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof Theme>("1");
  const [skills, setSkills] = useState<SkillI[]>([
    {
      category: "Frontend",
      icon: <Layout className="h-5 w-5 mb-2 text-primary" />,
      items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5 mb-2 text-primary" />,
      items: ["Node.js", "Express"],
    },
    {
      category: "Database",
      icon: <Database className="h-5 w-5 mb-2 text-primary" />,
      items: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5 mb-2 text-primary" />,
      items: ["React Native", "Flutter", "Lynx"],
    },
    {
      category: "Other",
      icon: <Code className="h-5 w-5 mb-2 text-primary" />,
      items: ["Git", "Docker", "Arduino"],
    },
    {
      category: "Languages",
      icon: <Globe className="h-5 w-5 mb-2 text-primary" />,
      items: ["Java", "C", "Python", "Go", "Haskell", "JavaScript", "TypeScript"],
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSkillName, setCurrentSkillName] = useState("")
  const [currentCategory, setCurrentCategory] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const SelectedSkills = Theme[selectedStyle]?.skills;
  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedStyle(e.target.value as keyof typeof Theme)
    }

  const openNewSkillModal = (category?: string) => {
    setCurrentSkillName("")
    setCurrentCategory(category || skills[0]?.category)
    setIsEditing(false)
    setIsModalOpen(true)
  }

  const openEditSkillModal = (category: string, skillName: string) => {
    setCurrentSkillName(skillName)
    setCurrentCategory(category)
    setIsEditing(true)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentSkillName("")
    setCurrentCategory("")
    setIsEditing(false)
  }

  const handleSaveSkill = () => {
    if (!currentSkillName.trim() || !currentCategory) return
    setSkills((prev) =>
      prev.map((group) => {
        if (group.category !== currentCategory) return group
        const updatedItems = isEditing
          ? group.items.map((item) => (item === currentSkillNameBeforeEdit ? currentSkillName : item))
          : [...group.items, currentSkillName]
        return { ...group, items: updatedItems }
      })
    )

    closeModal()
  }

  const handleDeleteSkill = (category: string, skillName: string) => {
    if (!confirm("Are you sure you want to delete this skill?")) return
    setSkills((prev) =>
      prev.map((group) =>
        group.category === category
          ? { ...group, items: group.items.filter((item) => item !== skillName) }
          : group
      )
    )
  }

  const [currentSkillNameBeforeEdit, setCurrentSkillNameBeforeEdit] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
      <div>
              <label className="block text-sm font-medium text-gray-700">Select Style</label>
              <select
                value={selectedStyle}
                onChange={handleStyleChange}
                className="mt-1 block w-full max-w-xs rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="1">Style 1</option>
                <option value="2">Style 2</option>
              </select>
            </div>
        <h1 className="text-2xl font-bold text-gray-800">Manage Skills</h1>
        <button
          onClick={() => openNewSkillModal()}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus size={16} className="mr-2" />
          Add Skill
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillcat, i) => (
          <div key={i} className="border rounded-lg shadow-sm bg-white">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium">{skillcat.category}</h2>
              {skillcat.icon}
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {skillcat.items?.map((skill) => (
                  <li key={skill} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                    <span>{skill}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          openEditSkillModal(skillcat.category, skill)
                          setCurrentSkillNameBeforeEdit(skill)
                        }}
                        className="p-1 text-gray-500 hover:text-gray-700"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteSkill(skillcat.category, skill)}
                        className="p-1 text-gray-500 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </li>
                ))}
                {(!skillcat.items || skillcat.items.length === 0) && (
                  <li className="p-2 text-gray-400 text-center">No skills added</li>
                )}
              </ul>
            </div>
            <div className="p-4 border-t">
              <button
                className="flex items-center justify-center w-full px-3 py-2 border border-gray-300 text-sm rounded hover:bg-gray-100"
                onClick={() => openNewSkillModal(skillcat.category)}
              >
                <Plus size={16} className="mr-2" />
                Add to {skillcat.category}
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center bg-opacity-40 ">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Skill" : "Add New Skill"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Skill Name</label>
                <input
                  value={currentSkillName}
                  onChange={(e) => setCurrentSkillName(e.target.value)}
                  placeholder="Enter skill name"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={currentCategory}
                  onChange={(e) => setCurrentCategory(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  {skills.map((category) => (
                    <option key={category.category} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
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
        {SelectedSkills?<SelectedSkills skills={skills}></SelectedSkills>:<p>Style Not Found</p>}
      </div>
    </div>
  )
}
