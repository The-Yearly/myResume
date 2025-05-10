'use client'
import { ArrowDown } from "lucide-react"
import { heroColors } from "@/utils/types"
import { textColors } from "../../colors"
export default function Hero2(props:{content:{hero:string,subhero:string},herocolors:heroColors}){
    const colors=props.herocolors
    let temp=[]//I need this so that tailwind color remain in code
    temp=textColors
    temp.push("")
    return(
        <section id="hero" className={`min-h-screen w-full bg-${colors.Background}`}>
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
                <div className="absolute inset-0 overflow-hidden z-0">
                </div>
                <div className="z-10 max-w-4xl mx-auto space-y-6">
                <div className="mx-auto rounded-full overflow-hidden border-4 border-primary/20 w-32 h-32 mb-6">
                </div>
                <h1 className={`text-4xl text-${colors.Hero} md:text-6xl font-bold tracking-tight`}>
                    {props.content.hero}
                </h1>
                <p className={`text-xl md:text-2xl text-${colors.Sub_Hero} text-muted-foreground max-w-2xl mx-auto`}>
                    {props.content.subhero}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button className={`bg-${colors.Button_1} p-3 rounded-lg text-md text-${colors.Button_1_Text}`} onClick={()=> document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>View My Work</button>
                    <button className={`bg-${colors.Button_2} border-2 border-gray-100 p-3 rounded-lg text-md text-${colors.Button_2_Text}`} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </button>
                </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <button  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowDown className="h-8 w-8" />
                    <span className="sr-only">Scroll down</span>
                </button>
                </div>
            </section>
        </section>


    )
}