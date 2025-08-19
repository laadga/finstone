"use client";

import React from 'react';

export function RobotShowcase() {
  return (
    <div className="w-full py-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
          Meet Your AI Team
        </h3>
        <p className="text-lg text-black dark:text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
          Our specialized AI robots work together to transform your operations
        </p>
      </div>
      
      <div className="flex justify-center">
        <div className="max-w-4xl bg-gray-100 dark:bg-gray-800 p-8 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
          <img 
            src="/robots-screenshot.png" 
            alt="AI Team Robots - Five distinct cartoon robots with cream bodies and purple accents"
            className="w-full h-auto rounded-lg shadow-2xl"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'block';
              }
            }}
          />
          <div className="hidden text-center text-gray-500 dark:text-gray-400">
            <p className="text-lg mb-4">Image not found</p>
            <p className="text-sm">Please save your screenshot as "robots-screenshot.png" in the public folder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
