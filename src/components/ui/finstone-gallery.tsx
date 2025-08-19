"use client";

import { ArrowRight } from "lucide-react";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const finstoneData = [
  {
    id: "mapper",
    title: "The Mapper - AI Workflow Analyzer",
    description:
      "I analyze your workflows and uncover where time and money are being wasted. I identify every repetitive task that's draining your resources and show you exactly how to automate them.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "forecaster",
    title: "The Forecaster - ROI Calculator",
    description:
      "I calculate exactly how much you'll save or earn back once the leaks are fixed. I show you exactly how much money you'll get back with detailed ROI calculations for each improvement.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "auditor",
    title: "The Auditor - Tool Optimizer",
    description:
      "I cut wasted tools and bring in smarter AI-powered systems. I identify tools you're paying for but not using, and consolidate them into smarter solutions.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "guardian",
    title: "The Guardian - Risk Protector",
    description:
      "I protect your business from costly mistakes and compliance risks. I set up automated reminders and tracking systems so nothing falls through the cracks.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "builder",
    title: "The Builder - Implementation Expert",
    description:
      "I deliver your 30-Day Quick Wins plan and roadmap to scale. I prioritize the highest-impact improvements that will give you immediate results.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const FinstoneGallery = ({
  title = "Meet Your AI Assistants",
  description = "When you book a Finstone AI Audit, you don't just get us, you get our 5 AI Lab Assistants working behind the scenes to recover lost profit, cut wasted time, and keep your business safe.",
  items = finstoneData,
}: Gallery4Props) => {
  return (
    <section id="solution" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg">The Solution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto drop-shadow-lg font-semibold leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Full-width line of AI assistant cards */}
        <div className="flex justify-between gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-1 min-w-0 group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white">
                  <div className="mb-2 text-xl font-bold text-white drop-shadow-lg">
                    {item.title}
                  </div>
                  <div className="mb-4 text-white/90 drop-shadow-lg line-clamp-3">
                    {item.description}
                  </div>
                  <div className="flex items-center text-sm text-white font-semibold">
                    Learn more{" "}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FinstoneGallery };
