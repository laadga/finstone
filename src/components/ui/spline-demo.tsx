'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ShiningText } from "@/components/ui/shining-text"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-transparent border border-gray-300/20 backdrop-blur-sm mb-6">
            <div className="w-5 h-5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-medium text-sm">Trusted by $2M-$50M Businesses</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight">
            From Financial Chaos to
            <span className="block mt-2">
              <ShiningText text="Predictable Profits" className="text-5xl md:text-6xl font-bold" />
            </span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-lg mb-8">
            We uncover wasted time, hidden costs, and missed revenue, then give you a step-by-step roadmap to recover profits.
          </p>
          <div className="flex flex-col items-center w-fit">
            <a href="https://calendly.com/contact-finstonelab/30min" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-fit">
                Get My AI Audit Report in 48 Hours →
              </button>
            </a>
            <ShiningText text="100+ businesses audited" className="text-sm text-neutral-400 mt-3 font-medium" />
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
