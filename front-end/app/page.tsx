"use client"

import { useState, useEffect } from "react"
import { FileText, Code, Briefcase, PenTool, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Script from "next/script"
export default function New() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const cards = [
    { icon: <Code className="h-8 w-8" />, title: "No Code", color: "from-cyan-500 to-blue-500" ,content:"Build Stunning Online Resumes Without Writting Any Code"},
    { icon: <PenTool className="h-8 w-8" />, title: "Top Notch Designs", color: "from-purple-500 to-pink-500",content:"Get Top Notch Designs For Free" },
    { icon: <Briefcase className="h-8 w-8" />, title: "Free Hosting", color: "from-amber-500 to-orange-500", content:"No More Hassle On Hosting"},
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Script defer src="http://localhost:3000/script.js" data-website-id="b597a3ff-3dac-4f91-aa1b-fb74c716f966"/>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-30" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] opacity-30" />

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-md">
              <FileText className="h-6 w-6 text-cyan-400" />
            </div>
            <span className="font-bold text-xl">myResume</span>
          </div>
        </motion.header>

        <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 py-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Get
              <div className="h-14 sm:h-16 md:h-20">
                <TypeAnimation
                  sequence={["Awesome Resumes",2000,"Top Notch Designs", 2000,"Free Hosting",2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block"
                />
              </div>
              in seconds
            </h1>

            <p className="text-lg text-white/70 max-w-xl">
            Build Amazing Resume In Minutes
            </p>

            <div className="pt-4">
              <Link href="/explore">
                <button    
                  className="flex bg-gradient-to-r h-12 items-center from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 rounded-full px-8 group"
                >
                  <span>Explore Resumes</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 grid grid-cols-1 gap-6 w-full max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`bg-gradient-to-r ${card.color} p-[1px] rounded-xl`}
              >
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">{card.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-white/60 text-sm">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
          
      </div>
    </div>
  )
}
