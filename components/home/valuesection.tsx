"use client";

import React from "react";

/**
 * ValuesSection component redesigned for a more organic, aesthetic feel.
 * Removes technical grids and uses a card-based layout inspired by user references.
 */
export function ValuesSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Left Side - Organic Circular Design (Ref: Screenshot 5.21.19 PM) */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center shrink-0">
            {/* The rotating container provides subtle movement without looking "robotic" */}
            <div className="w-full h-full animate-[spin_20s_linear_infinite] pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  {/* Path for the circular text placement */}
                  <path
                    id="textPathCircle"
                    d="M 200, 200 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                  />
                </defs>

                {/* Aesthetic Blue Serif Text */}
                <text className="fill-blue-500/90 font-serif italic text-[32px] font-medium tracking-tight">
                  <textPath href="#textPathCircle" startOffset="25%" textAnchor="middle">
                    You grow
                  </textPath>
                  <textPath href="#textPathCircle" startOffset="75%" textAnchor="middle">
                    we grow
                  </textPath>
                </text>

                {/* Hand-drawn style gold arrows */}
                <g className="text-amber-500/70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  {/* Left Arrow Curve */}
                  <path d="M 100, 160 C 70, 200 70, 250 110, 290" />
                  <path d="M 105, 275 L 110, 290 L 95, 292" fill="currentColor" stroke="none" />
                  
                  {/* Right Arrow Curve */}
                  <path d="M 300, 240 C 330, 200 330, 150 290, 110" />
                  <path d="M 295, 125 L 290, 110 L 305, 108" fill="currentColor" stroke="none" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Side - Aesthetic Blue Card (Ref: Screenshot 5.21.53 PM) */}
          <div className="w-full max-w-2xl bg-[#2563eb] rounded-[40px] md:rounded-[60px] p-10 md:p-16 text-center text-white shadow-2xl shadow-blue-500/20">
            <div className="flex flex-col items-center space-y-6">
              
              {/* Curved 'The Honest Disclaimer' Text */}
              <div className="relative h-10 w-full mb-2">
                <svg viewBox="0 0 400 60" className="absolute left-1/2 -translate-x-1/2 top-0 w-64">
                  <path id="curve" d="M 50,50 Q 200,10 350,50" fill="transparent" />
                  <text className="font-serif italic text-xl fill-amber-300">
                    <textPath href="#curve" startOffset="50%" textAnchor="middle">
                      The Honest Disclaimer
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight">
                We’re not a<br />
                ‘do-everything’ agency
              </h2>

              {/* Strikethrough Pills - Reduced spacing and clean borders */}
              <div className="flex flex-wrap justify-center gap-3 py-4">
                {[
                  "Just Social Media Management",
                  "1 month SEO Magic",
                  "Zillion Reels a day",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="relative px-5 py-2.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm"
                  >
                    <span className="text-sm md:text-base font-medium relative inline-block">
                      {text}
                      {/* Stylized strikethrough line */}
                      <span className="absolute left-[-4px] right-[-4px] top-1/2 h-[1px] bg-white/60 -rotate-1" />
                    </span>
                  </div>
                ))}
              </div>

              {/* Focus Points */}
              <div className="space-y-1.5 opacity-90">
                <p className="text-lg md:text-xl">We don’t promise “VIRAL.”</p>
                <p className="text-lg md:text-xl">
                  We focus on sales, trust, and long-term growth.
                </p>
                <p className="text-xl font-bold pt-4 text-white">That’s it</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}