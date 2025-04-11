import Image from "next/image"
export function About(props:{content:{bio:string,image:string}}){
    return (
    <section id="about" className="py-16 md:py-24 mx-10">
      <div className="container md:px-6">
        <div className="grid lg:grid-cols-5 items-center">
          <div className="lg:col-span-2">
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden rounded-full border-4 border-primary">
              <Image src={props.content.image||"https://imgs.search.brave.com/OybWtIGSaTmsuMy37WubCkHuxtXsae6GY9U3bqW0RRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYwLzg5Lzg4/LzM2MF9GXzEyNjA4/OTg4NDBfcDhwRjNO/S2hjS3VzMHRzeHJC/OHE4ZG02aTVWclpJ/OWMuanBn"} alt="Profile" fill className="object-cover" />
            </div>
          </div>
          </div>

          <div className="lg:col-span-3">
          <div className="s-y-4">
            <h2 className="text-3xl ml-5 font-bold tracking-tighter md:text-4xl py-3">About Me</h2>
            <p className="text-gray-500 ml-5 md:text-lg">
              {props.content.bio}
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

