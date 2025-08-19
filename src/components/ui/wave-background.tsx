'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

interface Point {
    x: number
    y: number
    wave: { x: number; y: number }
    cursor: {
        x: number
        y: number
        vx: number
        vy: number
    }
}

interface WavesProps {
    className?: string
    strokeColor?: string
    backgroundColor?: string
    pointerSize?: number
}

export function Waves({
    className = "",
    strokeColor = "#B08D57",  // Warm bronze lines for elegant finance theme
    backgroundColor = "transparent",  // Transparent to show through
    pointerSize = 0.5
}: WavesProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const mouseRef = useRef({
        x: -10,
        y: 0,
        lx: 0,
        ly: 0,
        sx: 0,
        sy: 0,
        v: 0,
        vs: 0,
        a: 0,
        set: false,
    })
    const pathsRef = useRef<SVGPathElement[]>([])
    const linesRef = useRef<Point[][]>([])
    const noiseRef = useRef<((x: number, y: number) => number) | null>(null)
    const rafRef = useRef<number | null>(null)
    const boundingRef = useRef<DOMRect | null>(null)
    const frameCountRef = useRef(0)

    // Initialization
    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return

        // Initialize noise generator
        noiseRef.current = createNoise2D()

        // Initialize size and lines
        setSize()
        setLines()

        // Bind events
        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        containerRef.current.addEventListener('touchmove', onTouchMove, { passive: false })

        // Start animation
        rafRef.current = requestAnimationFrame(tick)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('mousemove', onMouseMove)
            containerRef.current?.removeEventListener('touchmove', onTouchMove)
        }
    }, [])

    // Set SVG size
    const setSize = () => {
        if (!containerRef.current || !svgRef.current) return

        boundingRef.current = containerRef.current.getBoundingClientRect()
        const { width, height } = boundingRef.current

        svgRef.current.style.width = `${width}px`
        svgRef.current.style.height = `${height}px`
    }

    // Setup lines - reduced points for better performance
    const setLines = () => {
        if (!svgRef.current || !boundingRef.current) return

        const { width, height } = boundingRef.current
        linesRef.current = []

        // Clear existing paths
        pathsRef.current.forEach(path => {
            path.remove()
        })
        pathsRef.current = []

        // Reduced number of lines for better performance
        const numLines = Math.floor(height / 80) // Increased spacing between lines
        const numPoints = Math.floor(width / 60) // Reduced points per line

        for (let i = 0; i < numLines; i++) {
            const line: Point[] = []
            const y = (i + 1) * (height / (numLines + 1))

            for (let j = 0; j < numPoints; j++) {
                const x = (j / (numPoints - 1)) * width
                line.push({
                    x,
                    y,
                    wave: { x: 0, y: 0 },
                    cursor: { x: 0, y: 0, vx: 0, vy: 0 }
                })
            }
            linesRef.current.push(line)
        }

        // Create SVG paths
        linesRef.current.forEach((line, i) => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', strokeColor)
            path.setAttribute('stroke-width', '1')
            path.setAttribute('opacity', '0.3')
            path.setAttribute('vector-effect', 'non-scaling-stroke')
            svgRef.current!.appendChild(path)
            pathsRef.current.push(path)
        })
    }

    // Resize handler
    const onResize = () => {
        setSize()
        setLines()
    }

    // Mouse move handler - throttled for performance
    const onMouseMove = (e: MouseEvent) => {
        if (!boundingRef.current) return

        const { left, top } = boundingRef.current
        mouseRef.current.x = e.clientX - left
        mouseRef.current.y = e.clientY - top
        mouseRef.current.set = true
    }

    // Touch move handler
    const onTouchMove = (e: TouchEvent) => {
        if (!boundingRef.current || e.touches.length === 0) return

        const { left, top } = boundingRef.current
        const touch = e.touches[0]
        mouseRef.current.x = touch.clientX - left
        mouseRef.current.y = touch.clientY - top
        mouseRef.current.set = true
        e.preventDefault()
    }

    // Animation tick - optimized for performance
    const tick = () => {
        if (!noiseRef.current || !boundingRef.current) return

        frameCountRef.current++
        
        // Only update every 2 frames for better performance
        if (frameCountRef.current % 2 !== 0) {
            rafRef.current = requestAnimationFrame(tick)
            return
        }

        const time = Date.now() * 0.001
        const noise = noiseRef.current

        // Update lines with reduced complexity
        linesRef.current.forEach((line, lineIndex) => {
            line.forEach((point, pointIndex) => {
                // Simplified wave calculation
                const waveX = Math.sin(time * 0.5 + pointIndex * 0.1) * 20
                const waveY = Math.sin(time * 0.3 + lineIndex * 0.2) * 15
                
                point.wave.x = waveX
                point.wave.y = waveY

                // Simplified cursor interaction
                if (mouseRef.current.set) {
                    const dx = mouseRef.current.x - point.x
                    const dy = mouseRef.current.y - point.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    const maxDistance = 200

                    if (distance < maxDistance) {
                        const force = (1 - distance / maxDistance) * 0.3
                        point.cursor.x += dx * force * 0.01
                        point.cursor.y += dy * force * 0.01
                    }
                }

                // Apply damping
                point.cursor.x *= 0.95
                point.cursor.y *= 0.95
            })
        })

        // Update SVG paths
        pathsRef.current.forEach((path, lineIndex) => {
            const line = linesRef.current[lineIndex]
            if (!line) return

            let d = `M ${line[0].x + line[0].wave.x + line[0].cursor.x} ${line[0].y + line[0].wave.y + line[0].cursor.y}`
            
            for (let i = 1; i < line.length; i++) {
                const point = line[i]
                d += ` L ${point.x + point.wave.x + point.cursor.x} ${point.y + point.wave.y + point.cursor.y}`
            }
            
            path.setAttribute('d', d)
        })

        rafRef.current = requestAnimationFrame(tick)
    }

    return (
        <div ref={containerRef} className={className}>
            <svg
                ref={svgRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'visible',
                    pointerEvents: 'none',
                }}
            />
        </div>
    )
}
