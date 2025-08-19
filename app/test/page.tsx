"use client";

import { SparklesCore } from '@/components/ui/sparkles'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Test Page</h1>
      <p className="text-xl">If you can see this, the basic Next.js setup is working.</p>
      <div className="mt-8 p-4 bg-blue-600 rounded">
        <p>This is a test component to verify rendering.</p>
      </div>
    </div>
  );
}
