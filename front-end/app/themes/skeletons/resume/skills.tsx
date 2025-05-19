export function SkillsSkeleton() {
  return (
    <section className="py-16 w-full md:py-24 bg-gray-50 animate-pulse">
      <div className="text-center space-y-4">
        <div className="h-10 bg-gray-200 w-1/2 mx-auto rounded" />
        <div className="h-4 bg-gray-200 w-2/3 mx-auto rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 bg-gray-200 mx-auto mb-4 rounded-md" />
            <div className="h-5 w-1/2 bg-gray-200 mx-auto mb-2 rounded" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
