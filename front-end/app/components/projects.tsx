import Image from "next/image"
import pfp from "@/myPhoto.jpeg"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
export function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A web application that allows users to track their daily habits and set goals.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Three",
      description: "A mobile app for finding and booking fitness classes in your area.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Four",
      description: "A dashboard for monitoring and visualizing data from IoT devices.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "D3.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

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
          {projects.map((project, index) => (
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
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="flex items-center">
                {project.tags.map((tag,index)=><div key={index} className="bg-gray-100 px-3 mr-3 rounded-md">{tag}</div>)}
                </div>
                <div className="flex gap-4 mt-3">
                  <button>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </button>
                  <button>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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

