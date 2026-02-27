"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarsBackground } from "@/components/ui/stars-background";
import { useEffect, useState } from "react";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function HeroWithStars({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [titleComplete, setTitleComplete] = useState(false);
  const subtitleWords = subtitle.split(" ");

  // Typewriter effect for title (same as hero-1)
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= title.length) {
        setDisplayedTitle(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTitleComplete(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <section
      id="hero-stars"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden rounded-b-xl bg-black"
    >
      {/* Stars background layer */}
      <StarsBackground className="pointer-events-none" />

      {/* Eyebrow *}
      {eyebrow && (
        <a href="#" className="group relative z-10">
          <span
            className="text-sm text-gray-200/90 dark:text-gray-300 font-geist mx-auto px-5 py-2 
            bg-gradient-to-tr from-zinc-300/10 via-gray-400/10 to-transparent  
            border-[2px] border-gray-300/30 dark:border-white/10 
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
          >
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      )}

      {/* Title with Typewriter Effect */}
      <h1
        className="relative z-10 text-balance 
        bg-gradient-to-br from-white from-30% to-white/60 
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
        text-transparent sm:text-6xl md:text-7xl lg:text-8xl 
        dark:from-white dark:to-white/60 min-h-[1.2em] font-syne"
      >
        {displayedTitle}
        {!titleComplete && <span className="animate-pulse">|</span>}
      </h1>

      {/* Subtitle with Word Fade In */}
      <p className="relative z-10 mb-12 text-balance text-lg tracking-tight text-gray-200/90 dark:text-gray-300 md:text-xl font-syne">
        {subtitleWords.map((word, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 0.1 + 0.5}s`,
              animationFillMode: "forwards",
            }}
          >
            {word}
            {index < subtitleWords.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </p>

      {/* CTA */}
      {ctaLabel && (
        <div className="relative z-10 flex justify-center">
          <Button
            asChild
            className="mt-[-20px] w-fit md:w-52 z-20 font-geist tracking-tighter text-center text-lg"
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      )}

      {/* Bottom Fade into page background */}
      <div
        className="relative z-10 animate-fade-up mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,black_20%,transparent)]"
      />
    </section>
  );
}

