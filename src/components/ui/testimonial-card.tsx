import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  role: string
  companyLogo?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border-2 border-gray-200 dark:border-gray-700",
        "bg-white dark:bg-gray-800 shadow-lg",
        "p-6 text-start",
        "hover:shadow-xl hover:scale-105",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        "backdrop-blur-sm",
        className
      )}
    >
      <div className="flex flex-col items-start mb-4">
        <div className="flex items-center gap-3 mb-2">
          {author.companyLogo && (
            <img 
              src={author.companyLogo} 
              alt={`${author.name}'s company logo`}
              className="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-600"
            />
          )}
          <div>
            <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
              {author.name}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {author.role}
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {text}
      </p>
    </div>
  )
}
