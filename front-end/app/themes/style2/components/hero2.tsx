'use client'
import { ArrowDown } from "lucide-react"
import Link from "next/link"
export default function Hero2(props:{content:{title:string,subtitle:string}}) {
    return(
        <div className="min-h-screen bg-background">
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
                <div className="absolute inset-0 overflow-hidden z-0">
                </div>
                <div className="z-10 max-w-4xl mx-auto space-y-6">
                <div className="mx-auto rounded-full overflow-hidden border-4 border-primary/20 w-32 h-32 mb-6">
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    {props.content.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                    {props.content.subtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className="bg-gray-800 p-3 rounded-lg text-md text-white" onClick={()=> document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>View My Work</button>
                    <button className="bg-white border-2 border-gray-100 p-3 rounded-lg text-md" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </button>
                </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowDown className="h-8 w-8" />
                    <span className="sr-only">Scroll down</span>
                </Link>
                </div>
            </section>
        </div>


    )
}