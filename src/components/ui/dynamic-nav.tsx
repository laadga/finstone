'use client'

import { useEffect, useState, useRef } from 'react'

interface DynamicNavProps {
  children: React.ReactNode
}

export function DynamicNav({ children }: DynamicNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const newIsScrolled = scrollTop > 50
      console.log('Scroll position:', scrollTop, 'Is scrolled:', newIsScrolled)
      setIsScrolled(newIsScrolled)
      
      // Directly manipulate the DOM element
      if (navRef.current) {
        const nav = navRef.current
        if (newIsScrolled) {
          nav.style.setProperty('background', 'rgba(229, 228, 220, 0.6)', 'important')
          nav.style.setProperty('backdrop-filter', 'blur(40px) saturate(180%)', 'important')
          nav.style.setProperty('-webkit-backdrop-filter', 'blur(40px) saturate(180%)', 'important')
          nav.style.setProperty('box-shadow', '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 'important')
        } else {
          nav.style.setProperty('background', 'transparent', 'important')
          nav.style.setProperty('backdrop-filter', 'none', 'important')
          nav.style.setProperty('-webkit-backdrop-filter', 'none', 'important')
          nav.style.setProperty('box-shadow', 'none', 'important')
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: 'transparent',
        background: 'transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        border: 'none',
        boxShadow: 'none',
        // Force override any inherited styles
        backgroundImage: 'none',
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'scroll',
        backgroundPosition: '0% 0%',
        // Additional aggressive overrides
        backgroundClip: 'border-box',
        backgroundOrigin: 'border-box',
      }}
      data-scrolled={isScrolled}
    >
      {children}
    </nav>
  )
}
