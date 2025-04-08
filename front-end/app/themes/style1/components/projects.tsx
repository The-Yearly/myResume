import Image from "next/image"
import pfp from "@/myPhoto.jpeg"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Project } from "@/utils/types"
export function Projects(props:{content:Project[]}) {
  return (
    <section id="projects" className="relative w-full py-16 md:py-24">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              Here are some of the projects I&apos;ve worked on
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-10">
          {props.content.map((project, index) => (
            <div key={index} className="overflow-hidden border-gray-100 border-2 ">
              <div className="relative aspect-video">
                <Image
                  src={pfp}
                  alt={project.title}
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.desc}</p>
                <div className="flex items-center">
                {project.tags.map((tag,index)=><div key={index} className="bg-gray-100 px-3 mr-3 rounded-md">{tag}</div>)}
                </div>
                <div className="flex gap-4 mt-3">
                  <button>
                    <Link href={project.Link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </button>
                  <button>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

