import { FeatureSteps } from "@/components/ui/feature-section"

const finstoneFeatures = [
  { 
    step: 'Step 1', 
    title: 'AI Workflow Analysis',
    content: 'Our AI assistants analyze your workflows to identify time and money leaks, uncovering every repetitive task that\'s draining your resources.', 
    image: '/robotic-hand.jpeg' 
  },
  { 
    step: 'Step 2',
    title: 'ROI Calculation & Planning',
    content: 'We calculate exactly how much you\'ll save or earn back, providing detailed ROI calculations for each improvement with a 30-Day Quick Wins plan.',
    image: '/ROI.png'
  },
  { 
    step: 'Step 3',
    title: 'Implementation & Optimization',
    content: 'We deliver your action plan and roadmap to scale, prioritizing the highest-impact improvements that will give you immediate results.',
    image: '/implementation.jpeg'
  },
]

export function FinstoneProcess() {
  return (
    <section id="process" className="py-20 relative z-10">
      <FeatureSteps 
        features={finstoneFeatures}
        title="Your AI Audit Journey"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </section>
  )
}
