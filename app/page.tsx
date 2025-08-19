"use client";

import { Shield, Search, Lightbulb, Users, BarChart3, Rocket, CheckCircle, ChevronDown, Clock, Puzzle, Target, Zap, TrendingUp, AlertTriangle } from 'lucide-react'
import { SplineSceneBasic } from '@/components/ui/spline-demo'
import { DynamicNav } from '@/components/ui/dynamic-nav'
import { WhyOurApproachWorks } from '@/components/ui/why-our-approach-works'
import RuixenSection from '@/components/ui/ruixen-feature-section'
import FeaturedCrmDemoSection from '@/components/ui/featured-crm-demo-section'
import FeatureCarouselDemo from '@/components/ui/feature-carousel-demo'
import { ShiningText } from '@/components/ui/shining-text'


import { useState } from 'react'

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card/80 border border-border rounded-lg backdrop-blur-sm shadow-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-card/60 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-black leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative pt-0">

        {/* Navigation */}
        <DynamicNav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="font-bold text-xl text-foreground drop-shadow-lg">
                Finstone
              </div>
              
              <div className="hidden md:flex space-x-8 items-center">
                <a href="#problems" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Problems</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Results</a>
                <a href="#offer" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">What You Get</a>
                <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Process</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="https://calendly.com/contact-finstonelab/30min" target="_blank" rel="noopener noreferrer">
                  <button className="hidden md:block bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white px-6 py-2.5 rounded-full font-bold hover:from-blue-950 hover:via-blue-900 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Book Your AI Audit
                  </button>
                </a>
                <button className="md:hidden text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </DynamicNav>

        {/* Spline 3D Header */}
        <section id="home" className="pt-32 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SplineSceneBasic />
          </div>
        </section>

        {/* Problem + Agitation Section */}
        <section id="problems" className="py-20 bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                If You&apos;re Running a Business, You&apos;re Probably Struggling With...
              </h2>

            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pain Point 1: Cash Flow Chaos */}
              <div className="bg-transparent p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Cash Flow Chaos</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    Late payments causing constant cash crunches
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    No visibility into where money is actually going
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    Surprise expenses derailing growth plans
                  </li>
                </ul>
              </div>

              {/* Pain Point 2: Manual Process Hell */}
              <div className="bg-transparent p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Manual Process Hell</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    Staff spending 40% of time on admin tasks
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    Human errors costing thousands in mistakes
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    Scaling impossible due to manual bottlenecks
                  </li>
                </ul>
              </div>

              {/* Pain Point 3: Hidden Profit Leaks */}
              <div className="bg-transparent p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Hidden Profit Leaks</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    Inefficient processes eating into margins
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    Missed automation opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    No data to make informed decisions
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 font-medium">
                <strong>Sound familiar?</strong> These problems cost the average business 
                <span className="text-blue-800 font-bold"> $85,000+ annually</span> in wasted time and missed opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section id="who-we-help" className="py-20 bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-black mb-4">Who We Help</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Professional Services */}
              <div className="bg-transparent border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <ShiningText text="Professional Services Firms" className="text-lg font-bold text-black" />
                      <p className="text-sm text-black text-left">Accounting, Legal, Consulting</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-950 dark:text-blue-800 font-medium">$2M-$20M Revenue</p>
                </div>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Drowning in manual billing, client onboarding, and compliance tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Cash flow delays from late invoicing and payment collection
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Staff spending 40% of time on admin instead of billable work
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Compliance errors leading to fines and reputation damage
                  </li>
                </ul>
              </div>

              {/* E-commerce */}
              <div className="bg-transparent border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div>
                      <ShiningText text="Mid-Size E-commerce Brands" className="text-lg font-bold text-black" />
                      <p className="text-sm text-black text-left">Online Retail & DTC</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-950 dark:text-blue-800 font-medium">$5M-$50M Revenue</p>
                </div>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Inventory chaos causing stockouts and overstock situations
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Customer service overwhelmed with repetitive inquiries
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Financial reporting taking weeks instead of days
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Marketing campaigns running on gut feel instead of data
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-4 p-6 bg-transparent rounded-xl">
              <p className="text-black text-lg">
                <strong>We work with many other industries too!</strong> Whether you&apos;re in manufacturing, healthcare, 
                real estate, or any other sector, our AI audit uncovers the same types of hidden inefficiencies 
                and profit opportunities.
              </p>
            </div>
          </div>
        </section>



        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative z-10">
          <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-lg">
                Real Results from Real Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto drop-shadow-lg font-semibold">
                See how our AI audit transformed operations and unlocked hidden profits
              </p>
            </div>
            
            <RuixenSection />
          </div>
        </section>

        {/* What You Get Section */}
        <section id="offer" className="py-20 bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                What You Get
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Turn operational chaos into profit, clarity, and scale — in just 14 days
              </p>
            </div>

            {/* Investment Box */}
            <div className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-12 text-center">
              <div className="text-6xl font-bold text-black mb-2">$1,000</div>
              <div className="text-xl text-black mb-4">Flat Fee • 14 Days • Risk-Free Guarantee</div>
              <p className="text-lg text-black mb-6">
                If you don&apos;t see at least <span className="font-bold text-blue-800">$10K in potential annual savings</span> on paper, you don&apos;t pay.
              </p>
              <a href="https://calendly.com/contact-finstonelab/30min" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white px-8 py-4 rounded-full font-bold text-xl hover:from-blue-950 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Your AI Audit Now →
                </button>
              </a>
            </div>

            {/* Deliverables Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Deliverable 1 */}
              <div className="bg-transparent p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">AI Opportunity Map</h3>
                <p className="text-black text-sm">
                  A visual blueprint showing the top 3–5 automation opportunities in your business with exact ROI projections.
                </p>
              </div>

              {/* Deliverable 2 */}
              <div className="bg-transparent p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Cash Flow Impact Forecast</h3>
                <p className="text-black text-sm">
                  Exactly how much time & money each AI improvement will save or make you, with specific dollar amounts.
                </p>
              </div>

              {/* Deliverable 3 */}
              <div className="bg-transparent p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Tech Stack Audit</h3>
                <p className="text-black text-sm">
                  Which tools you&apos;re paying for but not using, and which AI-powered tools will replace them.
                </p>
              </div>

              {/* Deliverable 4 */}
              <div className="bg-transparent p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Risk & Compliance Scan</h3>
                <p className="text-black text-sm">
                  Identify process gaps that could cause legal, tax, or reputational damage before they become problems.
                </p>
              </div>

              {/* Deliverable 5 */}
              <div className="bg-transparent p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">30-Day Quick Wins Plan</h3>
                <p className="text-black text-sm">
                  Your prioritized action list for the next month, including exact automations to set up immediately.
                </p>
              </div>

              {/* Deliverable 6 */}
              <div className="bg-transparent p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Implementation Path</h3>
                <p className="text-black text-sm">
                  Option to hire us to build everything for you, or DIY roadmap if you prefer to implement yourself.
                </p>
              </div>
            </div>



            {/* Results Promise */}
            <div className="text-center mt-12">
              <p className="text-xl text-black font-medium">
                Our clients regularly see <span className="text-blue-800 font-bold">$50K–$250K/year in recovered profit</span> after implementation.
              </p>
              <p className="text-lg text-black mt-4">
                We don&apos;t sell you random automations. We build systems that make your business faster, smarter, and safer.
              </p>
            </div>
          </div>
        </section>

        {/* CRM Demo Section */}
        <section id="crm-demo" className="py-20 relative z-10">
          <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedCrmDemoSection />
          </div>
        </section>

        {/* Why Our Approach Works Section */}
        <WhyOurApproachWorks />

        {/* Process Section */}
        <section id="process" className="py-20 relative z-10 mt-16">
          <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">
                Your Complete AI Audit Journey
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto drop-shadow-lg font-semibold">
                From AI-powered analysis to automated workflows, we transform your financial operations through intelligent insights and seamless integrations.
              </p>
            </div>
            
            {/* Feature Carousel */}
            <FeatureCarouselDemo />
          </div>
        </section>



        {/* FAQ Section */}
        <section id="faq" className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              <FAQItem 
                question="What exactly do you do in a finance systems audit?"
                answer="We analyze your current financial operations, workflows, and reporting processes to uncover inefficiencies, errors, and opportunities for automation. The goal is to make your finance systems seamless, accurate, and scalable."
              />
              <FAQItem 
                question="How long does the audit process take?"
                answer="Typically, an initial audit takes 2–3 weeks, depending on the size and complexity of your operations. After that, we provide recommendations and a roadmap for implementation."
              />
              <FAQItem 
                question="Will my team need to be involved?"
                answer="Yes, collaboration with your finance team ensures we fully understand your processes. We make the process as smooth as possible with minimal disruption to your daily operations."
              />
              <FAQItem 
                question="Do you implement the solutions or just provide recommendations?"
                answer="We offer both: a detailed audit report with actionable recommendations, and optional hands-on support to implement automation and process improvements."
              />
              <FAQItem 
                question="What kind of businesses do you work with?"
                answer="We work with small to medium-sized enterprises, startups, and growing businesses that want to streamline their finance operations and reduce manual work."
              />
              <FAQItem 
                question="Can this help me save money?"
                answer="Yes! Many clients uncover hidden inefficiencies, errors, and missed automation opportunities, which directly reduces costs and increases operational efficiency."
              />
              <FAQItem 
                question="What happens after the audit?"
                answer="You&apos;ll receive a clear roadmap to optimize your finance operations. We also offer ongoing support to implement automation, track progress, and ensure long-term results."
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-black mb-4">Finstone AI Audit</h3>
              <p className="text-black mb-6">Transforming business operations through AI-powered insights and strategic automation.</p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:contact@finstonelab.com" className="text-black hover:text-gray-700 transition-colors">
                  📧 contact@finstonelab.com
                </a>
                <a href="https://www.linkedin.com/company/finstoneconsulting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 text-center">
              <p className="text-black text-sm">
                © 2024 Finstone AI Audit. All rights reserved. | 
                <a href="/privacy-policy" className="text-black hover:text-gray-700 transition-all ml-2">Privacy Policy</a> | 
                <a href="/terms-of-service" className="text-black hover:text-gray-700 transition-all ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    )
  }