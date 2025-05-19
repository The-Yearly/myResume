export function ProjectsSkeleton() {
  return (
    <section className="py-16 md:py-24 animate-pulse">
      <div className="text-center space-y-4">
        <div className="h-10 bg-gray-200 w-1/2 mx-auto rounded" />
        <div className="h-4 bg-gray-200 w-2/3 mx-auto rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border-2 border-gray-100 rounded-lg">
            <div className="aspect-video bg-gray-200" />
            <div className="p-6 space-y-2">
              <div className="h-6 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="flex gap-2 mt-3">
                <div className="h-6 w-20 bg-gray-200 rounded" />
                <div className="h-6 w-20 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
