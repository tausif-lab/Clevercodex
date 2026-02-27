"use client";

import React from "react";
import { StarsBackground } from "@/components/ui/stars-background";

interface StarsBackgroundSectionProps {
  children: React.ReactNode;
}

/**
 * Wraps content (e.g. AchievementTimeline, ImageScroll) with a full-width
 * stars canvas as the background. Content is rendered above the stars.
 */
export function StarsBackgroundSection({ children }: StarsBackgroundSectionProps) {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/*<StarsBackground
        starDensity={0.00100}
        allStarsTwinkle
        twinkleProbability={0.7}
        minTwinkleSpeed={1}
        maxTwinkleSpeed={1}
        className="pointer-events-none"
      />*/}
      <div className="relative w-full min-h-screen overflow-hidden">
      <StarsBackground
                starDensity={0.00100}
                allStarsTwinkle
                twinkleProbability={0.7}
                minTwinkleSpeed={1}
                maxTwinkleSpeed={1}
                className="pointer-events-none"
              />
      <div className="relative z-10 w-full">
        {children}
      </div>
      </div>
    </section>
  );
}
