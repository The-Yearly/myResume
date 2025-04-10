export function HeroSkeleton(){
    return (
      <section className="py-24 md:py-32 w-full bg-gray-50 animate-pulse">
        <div className="px-4 md:px-6 text-center">
          <div className="space-y-6">
            <div className="h-10 md:h-16 bg-gray-200 rounded w-3/4 mx-auto" />
            <div className="h-6 md:h-8 bg-gray-200 rounded w-2/3 mx-auto" />
            <div className="flex justify-center space-x-4">
              <div className="h-10 w-32 bg-gray-300 rounded" />
              <div className="h-10 w-32 bg-gray-200 rounded border" />
            </div>
          </div>
        </div>
      </section>
    )
  }