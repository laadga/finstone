import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&crop=center"
        secondImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop&crop=center"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[300px] w-[300px] md:h-[600px] md:w-[700px]"
        slideMode="hover"
      />
    </div>
  );
}
