"use client";
export default function AboutEditorSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-6 w-1/3 bg-gray-200 rounded" />
      </div>
      <div className="w-full max-w-xs space-y-2">
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
      </div>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200 space-y-2">
          <div className="h-5 w-1/3 bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-100 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="px-6 py-4 col-span-1 space-y-4">
            <div className="relative w-full aspect-square bg-gray-200 rounded-full" />
            <div className="space-y-2">
              <div className="h-9 w-full bg-gray-200 rounded" />
              <div className="h-3 w-3/4 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="col-span-2 px-6 py-4">
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex px-6 py-4 border-t border-gray-200 justify-end space-x-4">
          <div className="h-9 w-24 bg-gray-100 rounded" />
          <div className="h-9 w-32 bg-gray-300 rounded" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="h-5 w-1/4 bg-gray-200 rounded" />
        </div>
        <div className="p-6 space-y-4">
          <div className="h-10 w-1/2 bg-gray-100 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-3/4 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}
