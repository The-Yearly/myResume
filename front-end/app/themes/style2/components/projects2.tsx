import Image from "next/image"
import Link from "next/link"
import { ProjectsI } from "@/app/themes/style1/components/projects"
import { ExternalLink, Github } from "lucide-react"
import pfp from "@/myPhoto.jpeg"
export function Projects2(props:{content:ProjectsI[]}){ 
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">My Projects</h2>
          <div className="w-16 h-1 mx-auto mt-4 mb-6 bg-slate-600 rounded-full"></div>
          <p className="text-slate-600">Here are some of the projects I&apos;ve worked on</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {props.content.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                <Image
                  src={pfp}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-slate-900 hover:bg-slate-100 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

