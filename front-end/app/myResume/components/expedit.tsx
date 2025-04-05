"use client"

import type React from "react"
import { useState } from "react"
import Experience from "@/app/components/experience"
import { Plus, Edit, Trash2 } from "lucide-react"
import { ExpI } from "@/app/components/experience"
export default function ExperienceEdit() {
  const [experence, setExp] = useState<ExpI[]>([
    {
        company: 'Tech Corp',
        role: 'Software Engineer',
        startDate: 'Jan 2022',
        endDate:"July 2024",
        description: 'Developed and maintained web applications using modern technologies.',
      },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentExp, setCurrentExp] = useState<ExpI| null>(null)

  const openNewExpModal = () => {
    setCurrentExp({
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description:""
    })
    setIsModalOpen(true)
  }

  const openEditExpModal = (education: ExpI) => {
    setCurrentExp(education)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentExp(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!currentExp) return

    const { name, value } = e.target
    setCurrentExp((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  const handleSaveExp = () => {
    if (!currentExp || !currentExp.company.trim()) return

    const isNewExp = !experence.some((e) => e.role === currentExp.role)

    if (isNewExp) {
      setExp((prev) => [...prev, currentExp])
    } else {
      setExp((prev) => prev.map((e) => (e.role === currentExp.role ? currentExp : e)))
    }

    closeModal()
  }

  const handleDeleteExp = (role: string) => {
    if (confirm("Are you sure you want to delete this education entry?")) {
      setExp((prev) => prev.filter((e) => e.role !== role))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Manage Exp</h1>
        <button
          onClick={openNewExpModal}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
        >
          <Plus size={16} className="mr-2" />
          Add Exp
        </button>
      </div>

      <div className="space-y-4">
        {experence.map((education) => (
          <div key={education.role} className="border rounded-lg shadow-sm p-6 bg-white">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">{education.company}</h3>
                <p className="text-gray-600">
                  {education.role}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(education.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -
                  {education.endDate
                    ? new Date(education.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
                    : "Present"}
                </p>
                <p className="text-gray-700">{education.description}</p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => openEditExpModal(education)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDeleteExp(education.role)}
                  className="p-1 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {experence.length === 0 && (
          <div className="border rounded-lg shadow-sm p-12 text-center bg-white">
            <p className="text-gray-500 mb-4">No education entries added yet.</p>
            <button
              onClick={openNewExpModal}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center mx-auto"
            >
              <Plus size={16} className="mr-2" />
              Add Your First Exp Entry
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && currentExp && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">
              {currentExp.company ? "Edit Exp" : "Add New Exp"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Institution</label>
                <input
                  type="text"
                  name="company"
                  value={currentExp.company}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Degree</label>
                  <input
                    type="text"
                    name="role"
                    value={currentExp.role}
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
                    name="startDate"
                    value={currentExp.startDate}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">End Date (or leave blank if current)</label>
                  <input
                    type="month"
                    name="endDate"
                    value={currentExp.endDate}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>
              <div>
                  <label className="w-full mb-1">Description</label>
                  <textarea
                    name="description"
                    value={currentExp.description}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveExp}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                  disabled={!currentExp.company.trim()}
                >
                  Save Exp
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
                <Experience experence={experence}/>
            </div>
    </div>
  )
}
