import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { ShiningText } from "@/components/ui/shining-text"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "text-foreground",
      "py-12 sm:py-24 md:py-0 px-0",
      "flex items-center justify-center",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-2 text-center sm:gap-4">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex overflow-hidden p-4 [--gap:2rem] [gap:var(--gap)]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee">
              {/* First set */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`first-${i}`}
                  {...testimonial}
                />
              ))}
              {/* Second set for seamless loop */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`second-${i}`}
                  {...testimonial}
                />
              ))}
              {/* Third set to ensure no gaps */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`third-${i}`}
                  {...testimonial}
                />
              ))}
              {/* Fourth set for extra smoothness */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`fourth-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/6 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/6 bg-gradient-to-l from-background sm:block" />
        </div>

        {/* Statistics Section */}
        <div className="flex justify-center items-center gap-8 mt-4 text-lg text-black font-medium">
          <span>20+ Hours saved per month on admin tasks</span>
          <span className="text-gray-400">•</span>
          <span>$85K+ Average cash leaks recovered</span>
          <span className="text-gray-400">•</span>
          <span>4.4x Average Return</span>
        </div>


      </div>
    </section>
  )
}
