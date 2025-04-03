import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
export function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 mb-2 text-primary" />,
      items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 mb-2 text-primary" />,
      items: ["Node.js", "Express"]
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 mb-2 text-primary" />,
      items: ["PostgreSQL", "MySQL", "SQLite", "Prisma"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-8 w-8 mb-2 text-primary" />,
      items: ["React Native", "Flutter","Lynx"],
    },
    {
      category: "Other",
      icon: <Code className="h-8 w-8 mb-2 text-primary" />,
      items: ["Git", "Docker", "Arduino"],
    },
    {
      category: "Languages",
      icon: <Globe className="h-8 w-8 mb-2 text-primary" />,
      items: ["Java","C","Python","Go","Haskel","JavaScript","TypeScript"],
    },
  ]

  return (
    <div className="bg-gray-50 w-full">
    <div id="skills" className="py-16 md:py-24 relative w-full">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Skills</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              Here are some of the technologies and tools I work with
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-10">
          {skills.map((skill, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  {skill.icon}
                  <h3 className="text-xl font-bold mb-3">{skill.category}</h3>
                  <ul className="space-y-1">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

