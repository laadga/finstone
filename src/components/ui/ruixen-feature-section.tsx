"use client"

import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
	{
		author: {
			name: "Emma",
			role: "Operations Director",
			companyLogo: "https://logo.clearbit.com/camunda.com"
		},
		text: "We recovered over $127K in missed revenue that was slipping through the cracks. The audit paid for itself in the first week."
	},
	{
		author: {
			name: "David",
			role: "Finance Manager",
			companyLogo: "https://logo.clearbit.com/airbyte.com"
		},
		text: "Before the audit, we had no visibility into where cash was leaking. Now, we have a clear roadmap and are saving 30+ hours a month."
	},
	{
		author: {
			name: "Sofia",
			role: "Chief Operations Officer",
			companyLogo: "https://logo.clearbit.com/cube.dev"
		},
		text: "The audit identified 3 low-margin contracts we were losing money on. We renegotiated them and increased annual profit by $72K."
	},
	{
		author: {
			name: "Sarah",
			role: "VP of Engineering",
			companyLogo: "https://logo.clearbit.com/cronitor.io"
		},
		text: "Our admin workload dropped from 30% to 8% of billable time. The automated compliance tracking alone saved us 15 hours per month."
	},
	{
		author: {
			name: "Michael",
			role: "CTO",
			companyLogo: "https://logo.clearbit.com/hevo.io"
		},
		text: "Within 90 days, we improved our on-time delivery rate from 80% to 96%. The ROI was immediate and substantial."
	},
	{
		author: {
			name: "Lisa",
			role: "Product Manager",
			companyLogo: "https://logo.clearbit.com/retool.com"
		},
		text: "Our cash flow forecasting went from monthly updates to real-time insights. The AI-powered collections system reduced our receivables from 38 to 19 days."
	},
	{
		author: {
			name: "James",
			role: "Business Owner",
			companyLogo: "https://logo.clearbit.com/tally.so"
		},
		text: "The audit revealed compliance risks we didn't even know about. Their automated deadline alerts prevented potential $10K fines."
	},
	{
		author: {
			name: "Alex",
			role: "Operations Manager",
			companyLogo: "https://logo.clearbit.com/qovery.com"
		},
		text: "We found $45K in duplicate vendor payments and recovered $23K in overcharged expenses. The audit was eye-opening."
	},
	{
		author: {
			name: "Maria",
			role: "Financial Controller",
			companyLogo: "https://logo.clearbit.com/appsmith.com"
		},
		text: "The automated reporting system eliminated 20+ hours of manual work per month. We now have real-time visibility into our financial health."
	},
	{
		author: {
			name: "Robert",
			role: "Managing Partner",
			companyLogo: "https://logo.clearbit.com/refine.dev"
		},
		text: "We discovered $89K in unclaimed tax credits and optimized our expense structure. The audit transformed our entire financial strategy."
	}
]

export default function RuixenSection() {
  return (
    <TestimonialsSection
      title="Real Results from Real Businesses"
      description="See how our AI audit transformed operations and unlocked hidden profits"
      testimonials={testimonials}
    />
  )
}
