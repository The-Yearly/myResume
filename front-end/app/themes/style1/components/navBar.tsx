"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
      <div className="flex fixed z-30 w-full backdrop-blur h-16 items-center justify-between border-b-1">
        <Link href={"/"} className="font-bold text-xl ml-5">
          myResume
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="mr-5 h-6 w-6" /> : <Menu className="mr-5 h-6 w-6" />}
          <div className="sr-only">Toggle menu</div>
        </button>
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-md hover:border-b-2 mr-5"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-md hover:border-b-2 mr-5"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-md hover:border-b-2 mr-5"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-md hover:border-b-2 mr-5"
          >
            Contact
          </button>
        </nav>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="relative left-1/12 py-2 text-lg hover:border-b-2 mr-5"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="relative left-1/12 py-2 text-lg hover:border-b-2 mr-5"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="relative left-1/12 py-2 text-lg hover:border-b-2 mr-5"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative left-1/12 py-2 text-lg hover:border-b-2 mr-5"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
  )
}

