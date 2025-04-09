"use client"

import { BookOpen, Calendar } from "lucide-react"
import { EducationI } from "@/utils/types"
export default function Education2(props: { education: EducationI[] }) {
  return (
    <div className="col-span-2 w-3/4 mx-auto p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

      <div className="relative">
        {props.education.map((education, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute top-0 left-0 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold z-10">
              {new Date(education.startdate).getFullYear()}
            </div>

            <div className="ml-24 bg-white border border-black rounded-lg p-6 shadow-md relative">
              <div className="absolute top-6 -left-3 w-6 h-6 bg-white border-l border-t border-black transform rotate-45"></div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-gray-500" />
                    <h3 className="text-xl font-bold text-gray-800">{education.inst}</h3>
                  </div>
                  <p className="text-gray-700 font-medium mt-2">{education.degree}</p>
                </div>

                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 flex items-center gap-1 whitespace-nowrap">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {new Date(education.startdate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} -
                    {education.enddate
                      ? new Date(education.enddate).toLocaleDateString("en-US", { year: "numeric", month: "short" })
                      : " Present"}
                  </span>
                </div>
              </div>
              {index < props.education.length - 1 && (
                <div className="absolute left-[-16px] top-16 w-0.5 h-[calc(100%+3rem)] bg-gray-600"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
