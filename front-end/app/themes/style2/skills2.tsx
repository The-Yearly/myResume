import { SkillI } from "@/app/components/skills"
export function Skills2(props:{skills:SkillI[]}) {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-50">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">My Skills</h2>
          <div className="w-16 h-1 mx-auto mt-4 mb-6 bg-slate-600 rounded-full"></div>
          <p className="text-slate-600">Here are some of the technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="px-3 py-2 flex justify-center items-center bg-indigo-50 rounded-full mb-2">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skill.category}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

