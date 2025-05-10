"use client"
import { heroColors } from "@/utils/types"
import { textColors } from "../../colors"
export function Hero(props:{content:{hero:string,subhero:string},herocolors:heroColors}) {
  const color=props.herocolors
  let temp=[]//I need this so that tailwind color remain in code
  temp=textColors
  temp.push("")
  return (
    <section id="hero" className={`z-0 py-24 md:py-32 w-full bg-${color.Background}`}>
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className={`text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-${color.Hero}`}>
              {props.content.hero}
            </h1>
            <p className={`mx-auto max-w-[700px] md:text-xl text-${color.Sub_Hero}`}>
              {props.content.subhero}
            </p>
          </div>
          <div className="space-x-4">
            <button className={`bg-${color.Button_1} p-3 rounded-lg text-md text-${color.Button_1_Text}`}  onClick={()=> document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>View My Work</button>
            <button className={`bg-${color.Button_2} border-2 border-gray-100 p-3 rounded-lg text-md text-${color.Button_2_Text}`}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

