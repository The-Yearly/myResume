"use client"

import type React from "react"
import { useState } from "react"
import { Theme } from "../../themes/styles"
export default function HeroEditor() {
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof Theme>("style1");
  const [heroData, setHeroData] = useState({
    title:"Hello, I'm ...",
    subtitle:"A passionate .......",
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value }=e.target
    setHeroData((prev)=>({ ...prev, [name]: value }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Hero section updated successfully!")
  }
  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStyle(e.target.value as keyof typeof Theme)
  }
  const SelectedHero = Theme[selectedStyle]?.hero;
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Edit Hero Section</h1>
      </div>
      <div>
              <label className="block text-sm font-medium text-gray-700">Select Style</label>
              <select
                value={selectedStyle}
                onChange={handleStyleChange}
                className="mt-1 block w-full max-w-xs rounded-md border border-gray-300 shadow-sm px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="style1">Style 1</option>
                <option value="style2">Style 2</option>
              </select>
            </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium">Hero Content</h2>
            <p className="text-sm text-gray-500">
              Edit your hero section content that appears at the top of your portfolio.
            </p>
          </div>
          <div className="grid space-y-4">
            <input
              name="title"
              value={heroData.title}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 mx-5 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your hero title"
            />
            <textarea
              name="subtitle"
              value={heroData.subtitle}
              onChange={handleChange}
              className="rounded-md border mx-5 border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your hero subtitle"
              rows={3}
            />
          </div>
          <div className="flex px-6 py-4 border-t border-gray-200 justify-end space-x-4">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer text-gray-700 focus:ring-gray-500 hover:text-red-400 ">
              Cancel
            </button>
            <button type="submit" className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 px-3 py-2 hover:text-white hover:bg-sky-600">Save Changes</button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Preview</h2>
        </div>
        {SelectedHero ? <SelectedHero content={heroData} /> : <p>Style not found.</p>}
      </div>
    </div>
  )
}

