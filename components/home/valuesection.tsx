"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

interface AgencyHeroProps {
  className?: string;
  visionImageSrc?: string;
  executionImageSrc?: string;
}

export const AgencyHero: React.FC<AgencyHeroProps> = ({ className, visionImageSrc, executionImageSrc }) => {
  const [activeTab, setActiveTab] = useState<"vision" | "execution">("vision");

  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden bg-black", syne.className, className)}>
      {/* Stars Background */}
      <StarsBackground
        starDensity={0.00015}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation Pills */}
        <div className="flex items-center justify-center gap-4 pt-8 px-6">
          <button
            onClick={() => setActiveTab("vision")}
            className={cn(
              "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
              activeTab === "vision"
                ? "bg-white text-black shadow-lg"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            )}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Our Vision
          </button>
          <button
            onClick={() => setActiveTab("execution")}
            className={cn(
              "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
              activeTab === "execution"
                ? "bg-white text-black shadow-lg"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            )}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            Our Execution
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center px-6 py-16">
          <div className="grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                  Modern Development Agency
                </span>
              </div>

              {activeTab === "vision" ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-left duration-500">
                  <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl xl:text-7xl">
                    We grow
                    <br />
                    together.
                  </h1>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    Your success is our success. We don't just build digital products—we craft
                    scalable solutions that drive measurable growth. When your business thrives,
                    we've done our job right.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    We believe in partnerships built on trust, transparency, and shared victories.
                    Your growth fuels our passion to innovate, and together, we'll transform your
                    vision into market-leading digital experiences.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-left duration-500">
                  <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl xl:text-7xl">
                    Proven
                    <br />
                    process.
                  </h1>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    Our battle-tested methodology ensures every project succeeds through strategic
                    planning and flawless execution.
                  </p>

                  {/* Execution Steps */}
                  <div className="space-y-4 pt-4">
                    {[
                      {
                        number: "01",
                        title: "Research",
                        description: "Deep dive into your market, competitors, and target audience",
                      },
                      {
                        number: "02",
                        title: "Market Analysis",
                        description: "Identify opportunities and craft data-driven strategies",
                      },
                      {
                        number: "03",
                        title: "Development",
                        description: "Build scalable, performant solutions with modern tech",
                      },
                      {
                        number: "04",
                        title: "Testing",
                        description: "Rigorous QA to ensure flawless user experiences",
                      },
                      {
                        number: "05",
                        title: "Maintenance",
                        description: "Ongoing support and optimization for sustained growth",
                      },
                    ].map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <div className="flex-shrink-0">
                          <span className="text-2xl font-bold text-white/40 group-hover:text-white transition-colors">
                            {step.number}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                Start Your Project
              </button>
            </div>

            {/* Right Visual Element */}
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-md animate-in fade-in slide-in-from-right duration-700">
                {/* Decorative Card with Image */}
                <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                  {(activeTab === "vision" && visionImageSrc) || (activeTab === "execution" && executionImageSrc) ? (
                    <img 
                      src={activeTab === "vision" ? visionImageSrc : executionImageSrc} 
                      alt={activeTab === "vision" ? "Vision" : "Execution"} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-12">
                      {/* Hexagonal Logo Placeholder */}
                      <div className="relative">
                        <svg
                          viewBox="0 0 200 200"
                          className="w-48 h-48 text-white opacity-90"
                          fill="currentColor"
                        >
                          <path d="M100 10 L170 50 L170 130 L100 170 L30 130 L30 50 Z" />
                          <path
                            d="M100 50 L140 70 L140 110 L100 130 L60 110 L60 70 Z"
                            fill="black"
                          />
                        </svg>
                        
                        {/* Animated Rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute w-56 h-56 rounded-full border border-white/20 animate-pulse" />
                          <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-pulse delay-150" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};