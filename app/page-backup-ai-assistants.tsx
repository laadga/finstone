"use client";

import { Shield, Search, Lightbulb, Users, BarChart3, Rocket, CheckCircle, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { WavyBackground } from '@/components/ui/wavy-background'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import { DashboardComparison } from '@/components/ui/dashboard-comparison'
import timelineData from '@/data/timeline-data'
import { ThemeToggle } from '@/components/ui/theme-toggle'
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
        <p className="text-black dark:text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
      <main className="relative pt-0">
        <WavyBackground 
          className="-z-10" 
          backgroundFill="var(--background)"
          colors={["#1e40af", "#7c3aed", "#3730a3"]}
          waveWidth={40}
          blur={8}
          speed="slow"
          waveOpacity={0.3}
        />
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="font-bold text-xl text-foreground drop-shadow-lg">
                Finstone
              </div>
              
              <div className="hidden md:flex space-x-8 items-center">
                <a href="#who-its-for" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Who It&apos;s For</a>
                <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Solution</a>
                <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Process</a>
                <a href="#guarantee" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Guarantee</a>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">FAQ</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <button className="hidden md:block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Your AI Audit
                </button>
                <button className="md:hidden text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 relative z-10">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-transparent dark:bg-card/80 border border-gray-300/20 dark:border-border backdrop-blur-sm mb-8">
              <div className="w-5 h-5 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-medium text-sm">Trusted by $2M-$50M Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 drop-shadow-2xl leading-tight">
              Turn Operational Chaos into
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg mt-2">
                Profit, Clarity & Scale
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-black dark:text-muted-foreground mb-8 max-w-4xl mx-auto drop-shadow-lg font-semibold leading-relaxed">
              If you&apos;re losing 20+ hours/month to manual admin or leaking cash from late invoicing, our Finstone AI Audit™ reveals the exact automations to fix it — guaranteed.
            </p>
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Your Audit →
            </button>
            
            {/* Additional Hero Content to Fill Space */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-transparent dark:bg-card/80 border border-gray-300/20 dark:border-border p-6 rounded-lg backdrop-blur-sm shadow-xl text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 drop-shadow-lg">48-Hour Turnaround</h3>
                <p className="text-black dark:text-muted-foreground text-sm">Get your complete AI audit report in just 2 days</p>
              </div>
              
              <div className="bg-transparent dark:bg-card/80 border border-gray-300/20 dark:border-border p-6 rounded-lg backdrop-blur-sm shadow-xl text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 drop-shadow-lg">100% Guaranteed</h3>
                <p className="text-black dark:text-muted-foreground text-sm">Money-back guarantee if you don't see results</p>
              </div>
              
              <div className="bg-transparent dark:bg-card/80 border border-gray-300/20 dark:border-border p-6 rounded-lg backdrop-blur-sm shadow-xl text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 drop-shadow-lg">10x ROI Promise</h3>
                <p className="text-black dark:text-muted-foreground text-sm">Guaranteed return on your investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who-its-for" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg">Trusted by growth-minded business leaders</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                Professional Service Firms & E-commerce Brands
              </h2>
              <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto drop-shadow-lg font-semibold">
                If you&apos;re losing 20+ hours/month to manual admin or leaking cash from operational inefficiencies, this audit is for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-transparent dark:bg-black/80 border border-gray-300/20 dark:border-white/20 p-8 rounded-lg backdrop-blur-sm shadow-2xl">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 drop-shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">Professional Services Firms</h3>
                    <p className="text-black dark:text-gray-400 text-sm font-medium">$2M–$20M Revenue • Accounting, Legal, Consulting • 15–100 employees</p>
                  </div>
                </div>
                <ul className="space-y-3 text-black dark:text-gray-400 text-center">
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold text-xl drop-shadow-lg">•</span>
                    <span><strong className="text-gray-900 dark:text-white font-medium">30–40% of staff time</strong> lost to manual admin</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold text-xl drop-shadow-lg">•</span>
                    <span><strong className="text-gray-900 dark:text-white font-medium">Late invoicing</strong> causing cash flow issues</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold text-xl drop-shadow-lg">•</span>
                    <span><strong className="text-gray-900 dark:text-white font-medium">Manual data entry</strong> creating costly errors</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-transparent dark:bg-black/80 border border-gray-300/20 dark:border-white/20 p-8 rounded-lg backdrop-blur-sm shadow-2xl">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 drop-shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-lg">E-Commerce Brands</h3>
                    <p className="text-black dark:text-gray-400 text-sm font-medium">$5M–$50M Revenue • Online Retail • 20–80 employees</p>
                  </div>
                </div>
                <ul className="space-y-3 text-black dark:text-gray-400 text-center">
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold text-xl drop-shadow-lg">•</span>
                    <span><strong className="text-gray-900 dark:text-white font-medium">Inventory inefficiencies</strong> eroding margins</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold text-xl drop-shadow-lg">•</span>
                    <span><strong className="text-gray-900 dark:text-white font-medium">Order processing delays</strong> hurting customer satisfaction</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold text-xl drop-shadow-lg">•</span>
                    <span><strong className="text-gray-900 dark:text-white font-medium">Manual fulfillment</strong> limiting growth potential</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-transparent dark:bg-black/90 border border-gray-300/20 dark:border-white/20 p-8 rounded-lg backdrop-blur-sm shadow-2xl text-center">
                              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white drop-shadow-lg">Every Month You Delay This, You&apos;re Losing Money You&apos;ll Never Get Back</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-transparent dark:bg-black/80 border border-gray-300/20 dark:border-white/20 p-6 rounded-lg backdrop-blur-sm shadow-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">35%</div>
                  <div className="text-black dark:text-gray-300 text-sm font-semibold">of staff time lost to manual admin tasks</div>
                </div>
                <div className="bg-transparent dark:bg-black/80 border border-gray-300/20 dark:border-white/20 p-6 rounded-lg backdrop-blur-sm shadow-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">$50K+</div>
                  <div className="text-black dark:text-gray-300 text-sm font-semibold">in potential lost profit annually</div>
                </div>
                <div className="bg-transparent dark:bg-black/80 border border-gray-300/20 dark:border-white/20 p-6 rounded-lg backdrop-blur-sm shadow-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">23 days</div>
                  <div className="text-black dark:text-gray-300 text-sm font-semibold">average delay in cash flow from late invoicing</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                Meet Your AI Assistants
              </h2>
              <p className="text-xl text-black dark:text-gray-300 max-w-4xl mx-auto drop-shadow-lg font-semibold leading-relaxed">
                When you book a Finstone AI Audit, you don&apos;t just get us, you get our 5 AI Lab Assistants working behind the scenes to recover lost profit, cut wasted time, and keep your business safe.
              </p>
            </div>
            

            

          </div>
        </section>

        {/* Robots Image Section */}
        <section className="py-12 relative z-10">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-transparent p-2 md:p-4">


              {/* Robots Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* The Mapper */}
                <div className="text-center group transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/r1-removebg-preview.png" 
                    alt="The Mapper - AI Assistant"
                    width={144}
                    height={144}
                    className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain drop-shadow-lg mb-4"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Mapper</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 italic">&ldquo;I spot the hidden leaks.&rdquo;</p>
                  <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
                    Scans your workflows to uncover inefficiencies and shows you where automations bring the biggest ROI.
                  </p>
                </div>

                {/* The Forecaster */}
                <div className="text-center group transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/r2-removebg-preview.png" 
                    alt="The Forecaster - AI Assistant"
                    width={144}
                    height={144}
                    className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain drop-shadow-lg mb-4"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Forecaster</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 italic">&ldquo;I turn data into dollar signs.&rdquo;</p>
                  <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
                    Runs the numbers so you can see exactly how much time and profit you&apos;ll recover before making changes.
                  </p>
                </div>

                {/* The Auditor */}
                <div className="text-center group transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/r3-removebg-preview.png" 
                    alt="The Auditor - AI Assistant"
                    width={144}
                    height={144}
                    className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain drop-shadow-lg mb-4"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Auditor</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 italic">&ldquo;I cut the clutter.&rdquo;</p>
                  <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
                    Reviews your tech stack, eliminates redundant tools, and recommends AI-powered upgrades that scale with you.
                  </p>
                </div>

                {/* The Guardian */}
                <div className="text-center group transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/r4-removebg-preview.png" 
                    alt="The Guardian - AI Assistant"
                    width={144}
                    height={144}
                    className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain drop-shadow-lg mb-4"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Guardian</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 italic">&ldquo;I keep you safe.&rdquo;</p>
                  <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
                    Protects you from compliance risks, costly errors, and regulatory headaches before they hit.
                  </p>
                </div>

                {/* The Builder */}
                <div className="text-center group transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/r5-removebg-preview.png" 
                    alt="The Builder - AI Assistant"
                    width={144}
                    height={144}
                    className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain drop-shadow-lg mb-4"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Builder</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 italic">&ldquo;I put it all into action.&rdquo;</p>
                  <p className="text-sm text-black dark:text-gray-400 leading-relaxed">
                    Delivers your 30-Day Quick Wins Plan so you see measurable results immediately, not &ldquo;someday.&rdquo;
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg">Our Process</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                Your Complete AI Audit Journey
              </h2>
              <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto drop-shadow-lg font-semibold">
                From initial consultation to long-term strategy, we guide you through every step of optimizing your financial operations.
              </p>
            </div>
            

            
            {/* Before & After Comparison */}
            <div className="text-center mb-16 max-w-7xl mx-auto">
              <DashboardComparison />
            </div>
            
            {/* Advanced Radial Orbital Timeline */}
            <div className="relative h-[800px] bg-black dark:bg-black/80 rounded-2xl border border-white/20 dark:border-white/20 border-gray-200/40 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <RadialOrbitalTimeline timelineData={timelineData} />
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-black dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                Our streamlined process ensures you get actionable insights quickly, with ongoing support to implement and optimize your financial systems.
              </p>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantee" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg">Our Guarantee</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                Risk-Free Investment with Iron-Clad Guarantee
              </h2>
              <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto drop-shadow-lg font-semibold">
                We&apos;re putting our money where our mouth is. If you don&apos;t see at least 10x ROI, we&apos;ll refund your entire investment.
              </p>
            </div>
            
            <div className="bg-transparent dark:bg-black/90 border border-gray-300/20 dark:border-white/20 p-12 rounded-lg backdrop-blur-sm shadow-2xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">The Finstone AI Audit™ Guarantee</h3>
              <p className="text-xl text-black dark:text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-lg">
                If our audit doesn&apos;t identify at least $10,000 in potential savings and efficiency gains, we&apos;ll refund your entire investment. No questions asked.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">100%</div>
                  <div className="text-black dark:text-gray-400 font-semibold">Money-Back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">48</div>
                  <div className="text-black dark:text-gray-400 font-semibold">Hour Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">10x</div>
                  <div className="text-black dark:text-gray-400 font-semibold">ROI Guarantee</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your AI Audit Now →
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold mb-4 drop-shadow-lg">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto drop-shadow-lg font-semibold">
                Everything you need to know about our AI-powered finance systems audit process.
              </p>
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
                answer="You'll receive a clear roadmap to optimize your finance operations. We also offer ongoing support to implement automation, track progress, and ensure long-term results."
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">Finstone AI Audit™</h3>
                <p className="text-black dark:text-gray-400 drop-shadow-lg">Transforming business operations through AI-powered insights and strategic automation.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 drop-shadow-lg">Services</h4>
                <ul className="space-y-2 text-black dark:text-gray-400">
                  <li><a href="#" className="hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors">AI Operations Audit</a></li>
                  <li><a href="#" className="hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors">Process Optimization</a></li>
                  <li><a href="#" className="hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors">Automation Strategy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 drop-shadow-lg">Company</h4>
                <ul className="space-y-2 text-black dark:text-gray-400">
                  <li><a href="#" className="hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white dark:hover:text-white hover:text-gray-900 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 drop-shadow-lg">Contact</h4>
                <div className="space-y-2 text-black dark:text-gray-400">
                  <p>📧 hello@finstone.ai</p>
                  <p>📱 +1 (555) 123-4567</p>
                  <p>📍 Global Service</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 dark:border-white/20 border-gray-200/40 pt-8 text-center">
              <p className="text-black dark:text-gray-400 drop-shadow-lg">
                © 2024 Finstone AI Audit™. All rights reserved. | 
                <a href="#" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all ml-2">Privacy Policy</a> | 
                <a href="#" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </main>
  )
}