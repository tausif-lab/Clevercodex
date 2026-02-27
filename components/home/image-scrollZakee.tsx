
"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent, useInView } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";
const FRAME_COUNT = 200;

const currentFrame = (index: number) =>
  `/Zakee-jpg/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export function ImageScrollZakee() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Detect when the section is in view to trigger the first set of animations
  const isInView = useInView(containerRef, { amount: 0.2, once: true });
  
  // State and Refs for typewriter/flow logic
  const typingStartedRef = useRef(false);
  const nameStartedRef = useRef(false);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [displayedCrewName, setDisplayedCrewName] = useState("");
  const [crewNameComplete, setCrewNameComplete] = useState(false);
  const [headingWordIndex, setHeadingWordIndex] = useState(0);

  const heading = "CREWMATE";
  const crewName = "2.Sanji"; // Subheading on top of the frame
  const name = "Zakee Ahmed";
  const title = "Full stack developer And system Design Specialist";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Preload Zakee images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setImages(loadedImages);
      };
      loadedImages.push(img);
    }
  }, []);

  // Trigger initial heading/subheading animations only when section is visible
  useEffect(() => {
    if (isInView && !typingStartedRef.current) {
      typingStartedRef.current = true;
      setStartTyping(true);
    }
  }, [isInView]);

  // Fade in "CREWMATE"
  useEffect(() => {
    if (!startTyping) return;
    const timer = setTimeout(() => setHeadingWordIndex(1), 300);
    return () => clearTimeout(timer);
  }, [startTyping]);

  // Typewriter for "Sanji" (Top Subheading)
  useEffect(() => {
    if (!startTyping || headingWordIndex < 1) return;
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= crewName.length) {
        setDisplayedCrewName(crewName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setCrewNameComplete(true);
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [startTyping, headingWordIndex]);

  // Optimized Scroll Trigger for Zakee Ahmed (Main Overlay)
  // Threshold lowered to 0.70 to ensure it appears naturally during scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.70 && crewNameComplete && !nameStartedRef.current) {
      nameStartedRef.current = true; // Prevents multiple interval instances (fixes lag)
      
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= name.length) {
          setDisplayedName(name.slice(0, currentIndex));
          currentIndex++;
        } else {
          setNameComplete(true);
          clearInterval(interval);
        }
      }, 60); 
    }
  });

  // Typewriter for Zakee's Title
  useEffect(() => {
    if (!nameComplete) return;
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= title.length) {
        setDisplayedTitle(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTitleComplete(true);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [nameComplete]);

  // Canvas Drawing Logic
  useMotionValueEvent(frameIndex, "change", (latest: number) => {
    if (images.length !== FRAME_COUNT) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const index = Math.max(0, Math.min(Math.round(latest) - 1, FRAME_COUNT - 1));
    const image = images[index];

    if (image?.complete) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
      const nw = image.width * ratio;
      const nh = image.height * ratio;
      context.drawImage(image, 0, 0, image.width, image.height, (canvas.width - nw) / 2, (canvas.height - nh) / 2, nw, nh);
    }
  });

  // Handle Resize
  useEffect(() => {
    const resize = () => {
      if (canvasRef.current && containerRef.current) {
        const container = containerRef.current.querySelector('.canvas-container');
        if (container) {
          canvasRef.current.width = container.clientWidth;
          canvasRef.current.height = container.clientHeight;
        }
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [images]);

  // Overlay text transitions - sliding in from left
  const textOpacity = useTransform(scrollYProgress, [0.70, 0.85], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.70, 0.85], [-50, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
        <StarsBackground />
      </div>

      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center z-10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="relative">
            {/* Top Heading - Fades In */}
            <div className="text-center mb-6 md:mb-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: headingWordIndex >= 1 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white font-syne drop-shadow-2xl"
              >
                {heading}
              </motion.h1>
            </div>

            {/* Subheading Subtitle - Typewriter Effect for "Sanji" */}
            <div className="text-left mb-4 md:mb-6 max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-syne drop-shadow-xl">
                {displayedCrewName}
                {!crewNameComplete && headingWordIndex >= 1 && (
                  <span className="animate-pulse ml-1">|</span>
                )}
              </h2>
            </div>

            {/* Photo Frame Container */}
            <div className="canvas-container relative w-full aspect-[16/10] md:aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 backdrop-blur-sm border border-white/10">
              <canvas ref={canvasRef} className="w-full h-full object-contain" />

              {/* Main Text Overlay - Left Aligned */}
              <motion.div
                style={{ opacity: textOpacity, x: textX }}
                className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-r from-black/80 via-black/30 to-transparent p-6 md:p-14 text-left pointer-events-none"
              >
                <div className="z-10 pointer-events-auto max-w-sm md:max-w-xl">
                  {/* Name: Zakee Ahmed */}
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white font-syne mb-4 drop-shadow-2xl min-h-[1.2em]">
                    {displayedName}
                    {!nameComplete && crewNameComplete && (
                      <span className="animate-pulse ml-1">|</span>
                    )}
                  </h3>

                  {/* Title: Full stack... */}
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-syne mb-6 md:mb-8 drop-shadow-lg min-h-[1.5em]">
                    {displayedTitle}
                    {nameComplete && !titleComplete && (
                      <span className="animate-pulse ml-1">|</span>
                    )}
                  </p>

                  {/* Button */}
                  {titleComplete && (
                    <Link href="/intro/Zakee">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-full bg-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-black font-syne transition-all hover:scale-105 shadow-xl hover:shadow-2xl hover:bg-gray-100"
                    >
                      Learn More About Me
                    </motion.button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}