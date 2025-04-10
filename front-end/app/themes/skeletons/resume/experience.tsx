export function ExperienceSkeleton(){
    return (
      <div className="col-span-2 w-3/4 mx-auto p-6 animate-pulse">
        <div className="h-10 bg-gray-200 w-1/2 mx-auto mb-6 rounded" />
        <div className="space-y-6 border-l-4 border-gray-200 pl-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="relative pb-6">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 space-y-2">
                <div className="h-6 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-3 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-100 rounded w-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  