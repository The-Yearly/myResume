"use client"
export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="z-0 py-24 md:py-32 w-full bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hello, I&apos;m <span className="text-primary">John Yohan</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              A passionate developer creating innovative solutions and memorable experiences.
            </p>
          </div>
          <div className="space-x-4">
            <button className="bg-gray-800 p-3 rounded-lg text-md text-white" onClick={scrollToProjects}>View My Work</button>
            <button className="bg-white border-2 border-gray-100 p-3 rounded-lg text-md"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

