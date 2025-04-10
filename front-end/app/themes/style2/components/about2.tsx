import Image from "next/image"
export function About2(props:{content:{bio:string,image:string}}) {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>
          <div className="w-16 h-1 mx-auto mt-4 mb-6 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-400 to-slate-300 rotate-6"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden -rotate-3">
                <Image src={props.content.image||"https://imgs.search.brave.com/OybWtIGSaTmsuMy37WubCkHuxtXsae6GY9U3bqW0RRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYwLzg5Lzg4/LzM2MF9GXzEyNjA4/OTg4NDBfcDhwRjNO/S2hjS3VzMHRzeHJC/OHE4ZG02aTVWclpJ/OWMuanBn"} alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">My Journey</h3>
              <p className="text-slate-600 leading-relaxed">
                {props.content.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

