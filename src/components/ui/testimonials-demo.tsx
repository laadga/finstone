import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Sofia Rodriguez",
      role: "Chief Operations Officer",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  },
  {
    author: {
      name: "Emma Thompson",
      role: "Operations Director",
      companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented."
  },
  {
    author: {
      name: "David Park",
      role: "Finance Manager",
      companyLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution."
  },
  {
    author: {
      name: "Sarah Chen",
      role: "VP of Engineering",
      companyLogo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=center"
    },
    text: "This AI solution has revolutionized our workflow automation. The ROI was immediate and substantial."
  },
  {
    author: {
      name: "Michael Rodriguez",
      role: "CTO",
      companyLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=center"
    },
    text: "The machine learning capabilities are outstanding. We've seen a 40% improvement in our predictive analytics."
  },
  {
    author: {
      name: "Lisa Wang",
      role: "Product Manager",
      companyLogo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=center"
    },
    text: "Implementation was seamless and the support team is incredibly responsive. Highly recommend!"
  }
];

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Real Results from Real Businesses"
      description="See how our AI audit transformed operations and unlocked hidden profits"
      testimonials={testimonials}
    />
  )
}
