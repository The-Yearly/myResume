import Image from "next/image"
import pfp from "@/myPhoto.jpeg"
export function About() {
  return (
    <div className="py-16 md:py-24 mx-10">
      <div className="container md:px-6">
        <div className="grid lg:grid-cols-5 items-center">
          <div className="lg:col-span-2">
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden rounded-full border-4 border-primary">
              <Image src={pfp} alt="Profile" fill className="object-cover" />
            </div>
          </div>
          </div>

          <div className="lg:col-span-3">
          <div className="s-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl py-3">About Me</h2>
            <p className="text-gray-500 md:text-lg">
              I&apos;m a passionate developer with expertise in building modern web applications. With a strong foundation in
              both frontend and backend technologies, I create solutions that are not only functional but also provide
              exceptional user experiences.
            </p>
            <p className="text-gray-500 md:text-lg">
              My journey in technology began with [your background] and I&apos;ve since worked on various projects ranging
              from [types of projects]. I&apos;m constantly learning and exploring new technologies to stay at the forefront
              of the industry.
            </p>
            <p className="text-gray-500 md:text-lg">When I&apos;m not coding, you can find me [your hobbies/interests].</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

