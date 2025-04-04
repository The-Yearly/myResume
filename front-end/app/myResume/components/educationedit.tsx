"use client"

import type React from "react"
import { useState } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"
import Education from "@/app/components/education"
import { EducationI } from "@/app/components/education"
export default function EducationEditor() {
  const [educations, setEducations] = useState<EducationI[]>([
    {
      institution: "University of Example",
      degree: "Bachelor of Science",
      startDate: "2016-09",
      endDate: "2020-05",
    },
  ])
  console.log(educations)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentEducation, setCurrentEducation] = useState<EducationI| null>(null)

  const openNewEducationModal = () => {
    setCurrentEducation({
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
    })
    setIsModalOpen(true)
  }

  const openEditEducationModal = (education: EducationI) => {
    setCurrentEducation(education)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentEducation(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!currentEducation) return

    const { name, value } = e.target
    setCurrentEducation((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  const handleSaveEducation = () => {
    if (!currentEducation || !currentEducation.institution.trim()) return

    const isNewEducation = !educations.some((e) => e.degree === currentEducation.degree)

    if (isNewEducation) {
      setEducations((prev) => [...prev, currentEducation])
    } else {
      setEducations((prev) => prev.map((e) => (e.degree === currentEducation.degree ? currentEducation : e)))
    }

    closeModal()
  }

  const handleDeleteEducation = (degree: string) => {
    if (confirm("Are you sure you want to delete this education entry?")) {
      setEducations((prev) => prev.filter((e) => e.degree !== degree))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Manage Education</h1>
        <button
          onClick={openNewEducationModal}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
        >
          <Plus size={16} className="mr-2" />
          Add Education
        </button>
      </div>

      <div className="space-y-4">
        {educations.map((education) => (
          <div key={education.degree} className="border rounded-lg shadow-sm p-6 bg-white">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold">{education.institution}</h3>
                <p className="text-gray-600">
                  {education.degree}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(education.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -
                  {education.endDate
                    ? new Date(education.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
                    : "Present"}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => openEditEducationModal(education)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDeleteEducation(education.degree)}
                  className="p-1 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {educations.length === 0 && (
          <div className="border rounded-lg shadow-sm p-12 text-center bg-white">
            <p className="text-gray-500 mb-4">No education entries added yet.</p>
            <button
              onClick={openNewEducationModal}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center mx-auto"
            >
              <Plus size={16} className="mr-2" />
              Add Your First Education Entry
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && currentEducation && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">
              {currentEducation.institution ? "Edit Education" : "Add New Education"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Institution</label>
                <input
                  type="text"
                  name="institution"
                  value={currentEducation.institution}
                  onChange={handleInputChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter institution name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={currentEducation.degree}
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
                    value={currentEducation.startDate}
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
                    value={currentEducation.endDate}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEducation}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                  disabled={!currentEducation.institution.trim()}
                >
                  Save Education
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
              <Education education={educations}/>
            </div>
    </div>
  )
}
