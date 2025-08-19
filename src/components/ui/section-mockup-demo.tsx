import React from 'react';

// Ensure this import path is correct for your project structure
import SectionWithMockup from "@/components/ui/section-with-mockup"

// Data for the first section (default layout)
const exampleData1 = {
    title: (
        <>
            AI-Powered Financial
            <br />
            Analysis Platform
        </>
    ),
    description: (
        <>
            Our advanced AI systems work behind the scenes to analyze your financial workflows, 
            <br />
            identify inefficiencies, and provide actionable insights for optimization. 
            <br />
            Get real-time analysis, automated reporting, and intelligent recommendations.
        </>
    ),
    primaryImageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080',
    secondaryImageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080',
};

// Changed from 'export default function ...' to 'export function ...'
export function SectionMockupDemoPage() {
    return (
        <SectionWithMockup
            title={exampleData1.title}
            description={exampleData1.description}
            primaryImageSrc={exampleData1.primaryImageSrc}
            secondaryImageSrc={exampleData1.secondaryImageSrc}
        />
    );
}



