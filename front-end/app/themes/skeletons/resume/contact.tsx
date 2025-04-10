export function ContactSkeleton(){
    return (
      <div className="py-16 bg-gray-100 md:py-24 w-full animate-pulse">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-2">
            <div className="h-10 w-1/2 mx-auto bg-gray-200 rounded" />
            <div className="h-4 w-2/3 mx-auto bg-gray-200 rounded" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="h-6 w-6 bg-gray-300 rounded-full" />
                  <div className="space-y-1">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-3 bg-gray-100 rounded w-32" />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 w-3/4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-white border border-gray-200 rounded-md" />
              ))}
              <div className="h-24 bg-white border border-gray-200 rounded-md" />
              <div className="h-10 bg-gray-300 rounded-md w-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  