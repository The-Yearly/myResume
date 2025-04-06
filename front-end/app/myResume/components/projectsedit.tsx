"use client"
import pfp from "@/myPhoto.jpeg"
import React, { useState } from "react"
import Image from "next/image"
import { Theme } from "@/app/themes/styles"
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  link: string
}
export default function ProjectsEditor() {
  const [modalOpen, setModalOpen] = useState(false)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof Theme>("1");
  const [newProject, setNewProject] = useState<Project>({
    title: "",
    description: "",
    image: "",
    tags: [],
    github: "",
    link: "",
  })
  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedStyle(e.target.value as keyof typeof Theme)
  }
  const SelectedProject = Theme[selectedStyle]?.projects;
  const [projects, setProjects] = useState<Project[]>([
    {
      title: "Project One",
      description:
        "A web application that allows users to track their daily habits and set goals.",
      image: "",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "An e-commerce platform with product management, cart functionality, and payment integration.",
      image: "",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      github: "#",
      link: "#",
    },
  ])
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewProject((prev) => ({ ...prev, [name]: value }))
  }
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim())
    setNewProject((prev) => ({ ...prev, tags }))
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewProject((prev) => ({ ...prev, image: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }
  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedProjects = [...projects]
      updatedProjects[editIndex] = newProject
      setProjects(updatedProjects)
    } else {
      setProjects((prev) => [...prev, newProject])
    }

    setNewProject({
      title: "",
      description: "",
      image: "",
      tags: [],
      github: "",
      link: "",
    })
    setEditIndex(null)
    setModalOpen(false)
  }

  const handleDelete = (index: number) => {
    const updated = [...projects]
    updated.splice(index, 1)
    setProjects(updated)
  }

  const handleEdit = (index: number) => {
    setNewProject(projects[index])
    setEditIndex(index)
    setModalOpen(true)
  }

  return (
    <div className="p-4">
      
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
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="rounded-2xl shadow-md border p-4">
            <Image
              src={pfp}
              alt={project.title}
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm px-2 py-1 rounded-full border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-md hover:bg-yellow-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-100 text-red-600 px-4 py-1 rounded-md hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    className="text-blue-600 underline text-sm"
                    target="_blank"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>


      <button
        onClick={() => {
          setNewProject({
            title: "",
            description: "",
            image: "",
            tags: [],
            github: "",
            link: "",
          })
          setEditIndex(null)
          setModalOpen(true)
        }}
        className="my-4 right-10 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Project
      </button>
      {modalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg space-y-4">
            <h3 className="text-xl font-semibold">
              {editIndex !== null ? "Edit Project" : "New Project"}
            </h3>

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newProject.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newProject.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
            <input
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={newProject.github}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
            <input
              type="text"
              name="link"
              placeholder="Live URL"
              value={newProject.link}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={newProject.tags.join(", ")}
              onChange={handleTagsChange}
              className="w-full border p-2 rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setModalOpen(false)
                  setEditIndex(null)
                }}
                className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                {editIndex !== null ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Preview</h2>
        </div>
        {SelectedProject ? <SelectedProject content={projects}/>:<p>Style not found.</p>}
      </div>
    </div>
  )
}
