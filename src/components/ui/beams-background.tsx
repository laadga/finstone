"use client";

import { cn } from "@/lib/utils";

interface SimpleBackgroundProps {
    className?: string;
    children?: React.ReactNode;
}

export function BeamsBackground({
    className,
    children,
}: SimpleBackgroundProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full overflow-hidden z-0",
                className
            )}
        >
            {/* Simple gradient background - no animations for performance */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212]" />
            
            {/* Subtle purple accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/5 via-transparent to-[#A855F7]/5" />
            
            {/* Content */}
            {children && (
                <div className="relative z-10 w-full h-full">
                    {children}
                </div>
            )}
        </div>
    );
}
