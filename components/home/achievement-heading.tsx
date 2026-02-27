


"use client";

import React from "react";

interface AchievementHeadingProps {
  title?: string;
  subtitle?: string;
}

export function AchievementHeading({
  title = "Achievement by the Clever Codex",
  subtitle = "Our journey milestones and key accomplishments.",
}: AchievementHeadingProps) {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <h2 className="text-3xl md:text-6xl mb-4 text-black dark:text-white max-w-4xl font-syne font-semibold">
        {title}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-xl max-w-sm font-syne">
        {subtitle}
      </p>
    </div>
  );
}
