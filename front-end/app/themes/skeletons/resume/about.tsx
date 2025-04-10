export function AboutSkeleton(){
    return (
      <section className="py-16 md:py-24 mx-10 animate-pulse">
        <div className="grid lg:grid-cols-5 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-gray-200" />
          </div>
          <div className="lg:col-span-3 space-y-4 ml-5">
            <div className="h-10 bg-gray-200 rounded w-1/2" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  