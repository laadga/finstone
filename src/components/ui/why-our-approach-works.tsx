"use client"

import { cn } from "@/lib/utils"

interface WhyOurApproachWorksProps {
  className?: string
}

export function WhyOurApproachWorks({ className }: WhyOurApproachWorksProps) {
  const features = [
    {
      title: "Finance + AI Expertise Combined",
      description: "We're not just tech consultants pushing random tools. We understand your financial operations AND the AI solutions that actually work."
    },
    {
      title: "Audit First, Sell Second",
      description: "We show you exactly what's broken and how much it's costing you BEFORE recommending any solutions. Complete transparency."
    },
    {
      title: "14-Day Delivery Guarantee",
      description: "Other consultants take months to deliver basic insights. We give you a complete roadmap in 2 weeks or you don't pay."
    },
    {
      title: "ROI-Focused, Not Tool-Focused",
      description: "We care about your bottom line, not selling you expensive software. Every recommendation comes with dollar-impact projections."
    }
  ]

  return (
    <section className={cn("py-0 bg-transparent", className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Why Our Approach Works Where Others Fail
          </h2>
        </div>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-transparent border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-black text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
