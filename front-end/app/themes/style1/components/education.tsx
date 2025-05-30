"use client";
import { EducationI } from "@/utils/types";
export default function Education(props: { education: EducationI[] }) {
  return (
    <div className="col-span-2 w-3/4 mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <div className="relative border-l-4 border-black pl-6 space-y-6">
        {props.education.map((education, index) => (
          <div key={index} className="relative pb-6">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold">{education.inst}</h3>
              <p className="text-gray-600">{education.degree}</p>
              <p className="text-sm text-gray-500">
                {new Date(education.startdate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}{" "}
                -
                {education.enddate
                  ? new Date(education.enddate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : " Present"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
