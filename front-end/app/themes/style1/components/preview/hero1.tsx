"use client";
import { heroColors } from "@/utils/types";
import { textColors } from "@/app/themes/colors";
import { Pencil } from "lucide-react";
export function Hero1Preview(props: {
  content: { hero: string; subhero: string };
  herocolors: heroColors;
  edit:(para:string)=>void
}) {
  const color = props.herocolors;
  let temp = []; //I need this so that tailwind color remain in code
  temp = textColors;
  temp.push("");
  return (
    <section
      id="hero"
      className={`z-0 py-24 md:py-32 w-full bg-${color.Background}`}
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="relative inline-block space-y-2">
              <h1
                className={`relative inline-block text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-${color.Hero}`}
              >
                {props.content.hero}
                <Pencil
                  onClick={() => props.edit("Hero")}
                  className="absolute -top-2 -right-7 cursor-pointer text-gray-500 hover:text-black"
                />
              </h1>
            </div>

          <div className="relative inline-block space-y-2">
            <p
              className={`relative inline-block text-3xl mx-auto max-w-[700px] md:text-xl text-${color.Sub_Hero}`}
            >
              {props.content.subhero}
            </p>
            <Pencil
                  onClick={() => props.edit("Sub_Hero")}
                  className="absolute -top-3 right-5 w-5 h-5 cursor-pointer text-gray-500 hover:text-black"
                />
            </div>
          <div className="space-x-4">
            <div className="relative inline-block space-y-2">
            <button
              className={`relative inline-block bg-${color.Button_1} p-3 rounded-lg text-md text-${color.Button_1_Text}`}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              </button>
               <Pencil
                  onClick={() => props.edit("Button11")}
                  className="absolute -top-5 -right-4 w-5 h-5 cursor-pointer text-gray-500 hover:text-black"
                />
            </div> 
            <button
              className={`bg-${color.Button_2} border-2 border-gray-100 p-3 rounded-lg text-md text-${color.Button_2_Text}`}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
