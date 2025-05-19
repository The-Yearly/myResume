"use client";
export default function HeroEditorSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-6 w-1/3 bg-gray-200 rounded" />
      </div>
      <div className="space-y-2 w-full max-w-xs">
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="h-10 bg-gray-200 rounded" />
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 space-y-2">
          <div className="h-5 w-1/3 bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-100 rounded" />
        </div>
        <div className="grid space-y-4 p-6">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="h-20 bg-gray-200 rounded" />
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
          <div className="h-6 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}
