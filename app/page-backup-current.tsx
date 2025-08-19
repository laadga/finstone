"use client";

import { Shield, Search, Lightbulb, Users, BarChart3, Rocket, CheckCircle, ChevronDown, Clock, Puzzle, Target, Zap, TrendingUp, AlertTriangle } from 'lucide-react'
import { WavyBackground } from '@/components/ui/wavy-background'

import { DashboardComparison } from '@/components/ui/dashboard-comparison'

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
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Home</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-medium drop-shadow-lg">Testimonials</a>
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
              From Financial Chaos to
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg mt-2">
                Predictable Profits — in 48 Hours
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-black dark:text-muted-foreground mb-8 max-w-4xl mx-auto drop-shadow-lg font-semibold leading-relaxed">
              We uncover wasted time, hidden costs, and missed revenue, then give you a step-by-step roadmap to recover profits.
            </p>
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get My AI Audit Report in 48 Hours →
            </button>
            

            

          </div>
        </section>

        {/* Risk Reminder Section */}
        <section className="py-12 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-transparent dark:bg-transparent border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Disruption to Your Operations</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our AI audit runs in the background while your team continues working normally. 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Minimal time required from your team.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No workflow interruptions
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Minimal team involvement
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Results in 48 hours
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                Real Results from Real Businesses
              </h2>
              <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto drop-shadow-lg font-semibold">
                See how our AI audit transformed operations and unlocked hidden profits
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">$</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Construction Firm</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">$15M Revenue</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "Recovered $87K/year by fixing invoicing leaks. Our cash flow improved dramatically."
                </p>
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                  → 23 days faster invoicing
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Legal Practice</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">$8M Revenue</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "Automated 40% of admin tasks. Team now focuses on billable work instead of paperwork."
                </p>
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                  → $45K additional billable hours
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm text-white font-bold">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">E-commerce Brand</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">$25M Revenue</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "Streamlined fulfillment process. Customer satisfaction up 35%, returns down 20%."
                </p>
                <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                  → $120K annual savings
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
                When you book a Finstone AI Audit, you don't just get us, you get our 5 AI Lab Assistants working behind the scenes to recover lost profit, cut wasted time, and keep your business safe.
              </p>
            </div>
          </div>
        </section>

        {/* Robot 1: The Mapper */}
        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 inline-block transform hover:scale-105 transition-transform duration-300">
                Step 1
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                The Mapper
              </h2>
              <p className="text-2xl text-purple-600 dark:text-purple-400 mb-8 italic font-semibold drop-shadow-lg">
                "I analyze your workflows and uncover where time and money are being wasted."
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center group">
                <div className="relative">
                  <img 
                    src="/r1-removebg-preview.png" 
                    alt="The Mapper - AI Assistant"
                    className="w-56 h-56 md:w-72 md:h-72 mx-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.15)',
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Search className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    What I Do For You:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Free your team from 40% of admin so they focus on growth.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I identify every repetitive task that's draining your resources and show you exactly how to automate them.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Late invoicing = cash flow stress.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I show you exactly where your invoicing process is breaking down and how to fix it.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Puzzle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Scattered tools = confusion and lost deals.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I map out your tech stack and identify redundancies that are costing you money.</p></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Robot 2: The Forecaster */}
        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 inline-block transform hover:scale-105 transition-transform duration-300">
                Step 2
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                The Forecaster
              </h2>
              <p className="text-2xl text-purple-600 dark:text-purple-400 mb-8 italic font-semibold drop-shadow-lg">
                "I calculate exactly how much you'll save or earn back once the leaks are fixed."
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2 text-center group">
                <div className="relative">
                  <img 
                    src="/r2-removebg-preview.png" 
                    alt="The Forecaster - AI Assistant"
                    className="w-56 h-56 md:w-72 md:h-72 mx-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.15)',
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    What I Do For You:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Know your exact ROI before you act.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I show you exactly how much money you'll get back with detailed ROI calculations for each improvement.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Real-time profit/project tracking.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I set up systems so you can see your financial performance in real-time, not just at month-end.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertTriangle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>No more waiting until month-end.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I eliminate the delay between action and insight so you can make better decisions faster.</p></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Robot 3: The Auditor */}
        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 inline-block transform hover:scale-105 transition-transform duration-300">
                Step 3
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                The Auditor
              </h2>
              <p className="text-2xl text-purple-600 dark:text-purple-400 mb-8 italic font-semibold drop-shadow-lg">
                "I cut wasted tools and bring in smarter AI-powered systems."
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center group">
                <div className="relative">
                  <img 
                    src="/r3-removebg-preview.png" 
                    alt="The Auditor - AI Assistant"
                    className="w-56 h-56 md:w-72 md:h-72 mx-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.15)',
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Search className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    What I Do For You:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Stop wasting money on tools you don't use.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I identify tools you're paying for but not using, and consolidate them into smarter solutions.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Puzzle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Tools that actually integrate.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I recommend systems that work together seamlessly, eliminating data silos and manual transfers.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Streamlined decision-making.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I create unified dashboards so you have one source of truth for all your business metrics.</p></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Robot 4: The Guardian */}
        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 inline-block transform hover:scale-105 transition-transform duration-300">
                Step 4
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                The Guardian
              </h2>
              <p className="text-2xl text-purple-600 dark:text-purple-400 mb-8 italic font-semibold drop-shadow-lg">
                "I protect your business from costly mistakes and compliance risks."
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2 text-center group">
                <div className="relative">
                  <img 
                    src="/r4-removebg-preview.png" 
                    alt="The Guardian - AI Assistant"
                    className="w-56 h-56 md:w-72 md:h-72 mx-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.15)',
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    What I Do For You:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Never miss a deadline, never risk a fine.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I set up automated reminders and tracking systems so nothing falls through the cracks.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertTriangle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Avoid fines and errors.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I identify compliance gaps and set up safeguards before they become costly problems.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Automated checks for peace of mind.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I create systems that continuously monitor your operations and alert you to potential issues.</p></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Robot 5: The Builder */}
        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-lg font-bold px-6 py-2 rounded-full mb-6 inline-block transform hover:scale-105 transition-transform duration-300">
                Step 5
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
                The Builder
              </h2>
              <p className="text-2xl text-purple-600 dark:text-purple-400 mb-8 italic font-semibold drop-shadow-lg">
                "I deliver your 30-Day Quick Wins plan and roadmap to scale."
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center group">
                <div className="relative">
                  <img 
                    src="/r5-removebg-preview.png" 
                    alt="The Builder - AI Assistant"
                    className="w-56 h-56 md:w-72 md:h-72 mx-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.15)',
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-white/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    What I Do For You:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>3–5 biggest leaks fixed.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I prioritize the highest-impact improvements that will give you immediate results.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Step-by-step AI roadmap.</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I provide a clear implementation plan with timelines, resources needed, and expected outcomes.</p></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Get results in 30 days, not 'someday.'</strong><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I focus on quick wins that will show measurable results within 30 days.</p></span>
                    </li>
                  </ul>
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