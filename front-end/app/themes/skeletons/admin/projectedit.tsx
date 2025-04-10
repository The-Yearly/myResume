"use client"
export default function ProjectsEditorSkeleton() {
  return (
    <div className="p-4 space-y-6 animate-pulse">
      <div className="space-y-2 w-full max-w-xs">
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="flex gap-4">
          <div className="h-10 w-48 bg-gray-200 rounded" />
          <div className="h-10 w-20 bg-gray-300 rounded" />
        </div>
      </div>
      <div className="h-6 w-1/3 bg-gray-300 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl shadow-md border p-4 space-y-3">
            <div className="h-80 w-full bg-gray-200 rounded-xl" />
            <div className="h-5 w-2/3 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="h-6 w-16 bg-gray-200 rounded-full" />
              <div className="h-6 w-12 bg-gray-200 rounded-full" />
              <div className="h-6 w-20 bg-gray-200 rounded-full" />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="space-x-2 flex">
                <div className="h-8 w-16 bg-blue-200 rounded" />
                <div className="h-8 w-16 bg-red-200 rounded" />
              </div>
              <div className="h-4 w-16 bg-blue-200 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="h-10 w-40 bg-blue-300 rounded mx-auto" />
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="h-5 w-1/4 bg-gray-200 rounded" />
        </div>
        <div className="p-6 space-y-4">
          <div className="h-6 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  )
}
