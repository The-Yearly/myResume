"use client"

import { Clock } from "lucide-react"
import { ExperienceI } from "@/utils/types"
export default function Experience2(props: { experence:ExperienceI[]}) {
  return (
    <div className="col-span-2 w-full lg:col-span-2 mx-auto p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>

      <div className="relative">
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>

        {props.experence.map((experience, index) => (
          <div key={index} className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black z-10 mt-6"></div>

            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                <h4 className="text-lg font-semibold text-balck-600">{experience.corp}</h4>
                <div className="flex items-center gap-1 text-sm text-gray-500 my-2 justify-end">
                  <Clock className="h-3.5 w-3.5" />
                  <span>
                  {experience.startdate?experience.startdate:"Invalid Date"} - {experience.enddate?experience.enddate:"Present"}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{experience.desc}</p>
              </div>
            </div>
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
