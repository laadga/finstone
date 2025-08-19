"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles"
import { Waves } from "@/components/ui/wave-background"

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Finstone
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-finstone-primary to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-finstone-primary to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-finstone-secondary to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-finstone-secondary to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#00BFA6"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function SparklesPreviewDark() {
  return (
    <div className="h-[40rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00BFA6"
          speed={1}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        AI Audit Faster
      </h1>
    </div>
  );
}

export function SparklesPreviewColorful() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#4DD0E1"
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          The Future of Auditing
        </h1>
        <p className="text-neutral-300 cursor-default text-center">
          is powered by AI
        </p>
      </div>
    </div>
  );
}

export function FinstoneSparklesHero() {
  return (
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Enhanced Particles for Hero */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="finstonehero"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#A855F7"
          speed={0.4}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#6B46C1]/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#A855F7]/50">
          <div className="w-2 h-2 bg-[#A855F7] rounded-full animate-pulse"></div>
          <span className="text-[#AAAAAA] text-sm font-medium">Exclusive 14-Day AI Audit • Limited Slots Available</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-[#EAEAEA]">Turn Operational Chaos Into</span>
          <br />
          <span className="bg-gradient-to-r from-[#6B46C1] via-[#A855F7] to-[#6B46C1] bg-clip-text text-transparent">
            Profit, Clarity & Scale
          </span>
          <br />
          <span className="text-[#EAEAEA]">— in Just 14 Days</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#AAAAAA] mb-8 max-w-4xl mx-auto leading-relaxed">
          If you&apos;re losing 20+ hours/month to manual admin or leaking cash from late invoicing, our <strong className="text-[#EAEAEA]">Finstone AI Audit™</strong> reveals the exact automations to fix it — <strong className="text-[#6B46C1]">guaranteed</strong>.
        </p>
        
        {/* Value Props */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8 text-sm">
          <div className="flex items-center gap-2 text-[#AAAAAA]">
            <div className="w-5 h-5 rounded-full bg-[#6B46C1] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#EAEAEA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span><strong className="text-[#EAEAEA]">$1,000 flat fee</strong> • No hourly rates</span>
          </div>
          <div className="flex items-center gap-2 text-[#AAAAAA]">
            <div className="w-5 h-5 rounded-full bg-[#6B46C1] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#EAEAEA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span><strong className="text-[#EAEAEA]">14-day delivery</strong> • Not 6 months</span>
          </div>
          <div className="flex items-center gap-2 text-[#AAAAAA]">
            <div className="w-5 h-5 rounded-full bg-[#6B46C1] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#EAEAEA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span><strong className="text-[#EAEAEA]">$10K+ savings guarantee</strong> • Risk-free</span>
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://calendly.com/contact-finstonelab/30min" target="_blank" rel="noopener noreferrer">
            <button 
              className="group bg-[#6B46C1] text-[#EAEAEA] px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-[#A855F7]/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border border-[#A855F7]/40 hover:bg-[#5B3BA8]"
            >
              Book Your $1,000 AI Audit Now →
            </button>
          </a>
        </div>
        
        {/* Social Proof */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#A855F7]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[#AAAAAA] text-sm">
            Trusted by <strong className="text-[#EAEAEA]">growth-minded Professional Service Firms & E-commerce Brands</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export function WavesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
      {/* Centered content with aspect ratio */}
      <div className="w-full flex flex-col items-center">
        {/* Top border - thin white line */}
        <div className="w-full h-[1px] bg-white/80"></div>
        
        {/* 16:9 container that's full width */}
        <div className="w-full aspect-video relative">
          <Waves className="h-full w-full" />
        </div>
        
        {/* Bottom border - thin white line */}
        <div className="w-full h-[1px] bg-white/80"></div>
      </div>
    </div>
  )
}


