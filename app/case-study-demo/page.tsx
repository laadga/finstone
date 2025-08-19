import CaseStudyAccounting from "@/components/ui/case-study-accounting";

export default function CaseStudyDemoPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Finstone AI Case Study Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how we transformed a £6.5M accounting firm through AI-powered process automation
          </p>
        </div>
        
        <CaseStudyAccounting />
        
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            This is a demonstration of our case study presentation capabilities.
            <br />
            Contact us to learn how we can transform your business processes.
          </p>
        </div>
      </div>
    </div>
  );
}
