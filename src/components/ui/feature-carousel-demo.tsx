import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

export default function FeatureCarouselDemo() {
    const images = {
        alt: "Finstone AI Audit Features",
        step1img1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
        step1img2: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1740&auto=format&fit=crop",
        step2img1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop",
        step2img2: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1740&auto=format&fit=crop",
        step3img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
        step4img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1740&auto=format&fit=crop",
    };

    return (
        <div className="w-full font-sans">
            <FeatureCarousel
                image={images}
            />
        </div>
    );
}
