/*"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 200;

const currentFrame = (index: number) =>
  `/Tausif-jpg/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export function ImageScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the current frame index based on scroll progress
  // Maps 0-1 to 1-200
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                setImages(loadedImages);
            }
        };
        loadedImages.push(img);
    }
  }, []);

  // Update canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest: number) => {
    if (images.length !== FRAME_COUNT) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const index = Math.round(latest) - 1;
    const safeIndex = Math.max(0, Math.min(index, FRAME_COUNT - 1));
    const image = images[safeIndex];

    if (image && image.complete) {
        // Draw image to cover canvas while maintaining aspect ratio
        const hRatio = canvas.width / image.width;
        const vRatio = canvas.height / image.height;
        const ratio = Math.max(hRatio, vRatio);
        
        // Calculate dimensions
        const newWidth = image.width * ratio;
        const newHeight = image.height * ratio;
        
        // Center the image
        const xOffset = (canvas.width - newWidth) / 2;
        const yOffset = (canvas.height - newHeight) / 2;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
            image, 
            0, 0, image.width, image.height,
            xOffset, yOffset, newWidth, newHeight
        );
    }
  });

  // Handle canvas resize and initial draw
  useEffect(() => {
      const resizeCanvas = () => {
          if (canvasRef.current) {
              canvasRef.current.width = window.innerWidth;
              canvasRef.current.height = window.innerHeight;
              
              // Force a redraw on resize if we have images
              if (images.length === FRAME_COUNT) {
                  const context = canvasRef.current.getContext("2d");
                  const image = images[0]; // Draw first frame on resize/load before scroll
                  if (context && image && image.complete) {
                      const hRatio = canvasRef.current.width / image.width;
                      const vRatio = canvasRef.current.height / image.height;
                      const ratio = Math.max(hRatio, vRatio);
                      const newWidth = image.width * ratio;
                      const newHeight = image.height * ratio;
                      const xOffset = (canvasRef.current.width - newWidth) / 2;
                      const yOffset = (canvasRef.current.height - newHeight) / 2;
                      
                      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                      context.drawImage(
                          image, 
                          0, 0, image.width, image.height,
                          xOffset, yOffset, newWidth, newHeight
                      );
                  }
              }
          }
      };
      
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      
      return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  // Use a transform to handle opacity for text
  // The user wants text to appear when the image is in the side pose
  // Assuming the side pose is near the end (e.g., frame 170-200)
  // Maps scroll 0.85-0.95 to opacity 0-1
  const textOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.85, 0.95], [20, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full object-cover" />
        
        {/* Overlay Text *}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center pointer-events-none"
        >
          <div className="z-10 p-8 pointer-events-auto">
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-4 drop-shadow-lg shadow-black">
              Tausif Khan
            </h2>
            <p className="text-xl text-gray-200 sm:text-2xl mb-8 drop-shadow-md shadow-black">
              Frontend & Backend developer
            </p>
            <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-transform hover:scale-105 shadow-xl">
              To know more about
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
*/
/*
"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 200;

const currentFrame = (index: number) =>
  `/Tausif-jpg/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export function ImageScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const name = "Tausif Khan";
  const title = "Frontend & Backend developer";

  // Calculate the current frame index based on scroll progress
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Trigger typing when scroll reaches the text reveal point
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.85 && !startTyping) {
        setStartTyping(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, startTyping]);

  // Typewriter effect for name
  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayedName(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        setNameComplete(true);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [startTyping, name]);

  // Typewriter effect for title (starts after name is complete)
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
    }, 50);

    return () => clearInterval(interval);
  }, [nameComplete, title]);

  // Update canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest: number) => {
    if (images.length !== FRAME_COUNT) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const index = Math.round(latest) - 1;
    const safeIndex = Math.max(0, Math.min(index, FRAME_COUNT - 1));
    const image = images[safeIndex];

    if (image && image.complete) {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate dimensions to contain the image within canvas
      const hRatio = canvas.width / image.width;
      const vRatio = canvas.height / image.height;
      const ratio = Math.min(hRatio, vRatio); // Use min to contain
      
      const newWidth = image.width * ratio;
      const newHeight = image.height * ratio;
      
      // Center the image
      const xOffset = (canvas.width - newWidth) / 2;
      const yOffset = (canvas.height - newHeight) / 2;
      
      context.drawImage(
        image,
        0, 0, image.width, image.height,
        xOffset, yOffset, newWidth, newHeight
      );
    }
  });

  // Handle canvas resize and initial draw
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current && containerRef.current) {
        const container = containerRef.current.querySelector('.canvas-container');
        if (container) {
          canvasRef.current.width = container.clientWidth;
          canvasRef.current.height = container.clientHeight;

          // Force a redraw on resize if we have images
          if (images.length === FRAME_COUNT) {
            const context = canvasRef.current.getContext("2d");
            const image = images[0];
            if (context && image && image.complete) {
              const hRatio = canvasRef.current.width / image.width;
              const vRatio = canvasRef.current.height / image.height;
              const ratio = Math.min(hRatio, vRatio);
              const newWidth = image.width * ratio;
              const newHeight = image.height * ratio;
              const xOffset = (canvasRef.current.width - newWidth) / 2;
              const yOffset = (canvasRef.current.height - newHeight) / 2;

              context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
              context.drawImage(
                image,
                0, 0, image.width, image.height,
                xOffset, yOffset, newWidth, newHeight
              );
            }
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  const textOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.85, 0.95], [20, 0]);

  return (
    <section className="relative w-full py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Heading *}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full mx-auto" />
        </div>

        {/* Scroll Container *}
        <div ref={containerRef} className="relative h-[300vh]">
          <div className="sticky top-20 md:top-24">
            {/* Contained Block *}
            <div className="canvas-container relative w-full aspect-[16/10] md:aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <canvas ref={canvasRef} className="w-full h-full object-contain" />

              {/* Overlay Text with Typewriter *}
              <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent text-center pointer-events-none"
              >
                <div className="z-10 p-6 md:p-8 pointer-events-auto w-full max-w-3xl">
                  {/* Name with typewriter *}
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white font-syne mb-4 drop-shadow-2xl min-h-[1.2em]">
                    {displayedName}
                    {!nameComplete && startTyping && (
                      <span className="animate-pulse">|</span>
                    )}
                  </h3>

                  {/* Title with typewriter *}
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-syne mb-6 md:mb-8 drop-shadow-lg min-h-[1.5em]">
                    {displayedTitle}
                    {nameComplete && !titleComplete && (
                      <span className="animate-pulse">|</span>
                    )}
                  </p>

                  {/* Button - appears after typing is complete *}
                  {titleComplete && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white font-syne transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      Learn More About Me
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}*/





/*
"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 200;

const currentFrame = (index: number) =>
  `/Tausif-jpg/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export function ImageScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const name = "Tausif Khan";
  const title = "Frontend & Backend developer";

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

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

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.85 && !startTyping) setStartTyping(true);
    });
    return () => unsubscribe();
  }, [scrollYProgress, startTyping]);

  useEffect(() => {
    if (!startTyping) return;
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayedName(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        setNameComplete(true);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [startTyping, name]);

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
    }, 50);
    return () => clearInterval(interval);
  }, [nameComplete, title]);

  useMotionValueEvent(frameIndex, "change", (latest: number) => {
    if (images.length !== FRAME_COUNT) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const index = Math.round(latest) - 1;
    const image = images[Math.max(0, Math.min(index, FRAME_COUNT - 1))];

    if (image?.complete) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const hRatio = canvas.width / image.width;
      const vRatio = canvas.height / image.height;
      // Use "cover" logic (Math.max) for mobile to fill screen, 
      // or "contain" (Math.min) to show the whole character.
      const ratio = Math.max(hRatio, vRatio); 
      
      const newWidth = image.width * ratio;
      const newHeight = image.height * ratio;
      const xOffset = (canvas.width - newWidth) / 2;
      const yOffset = (canvas.height - newHeight) / 2;
      
      context.drawImage(image, 0, 0, image.width, image.height, xOffset, yOffset, newWidth, newHeight);
    }
  });

  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current && containerRef.current) {
        const container = containerRef.current.querySelector('.canvas-container');
        if (container) {
          canvasRef.current.width = container.clientWidth;
          canvasRef.current.height = container.clientHeight;
        }
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  const textOpacity = useTransform(scrollYProgress, [0.85, 0.92], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.85, 0.95], [-30, 0]);

  return (
    <section className="relative w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Subtle Section Header *}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-gray-900 dark:text-white">
            The Creator
          </h2>
          <div className="mt-4 w-12 h-[2px] bg-blue-600 dark:bg-blue-500" />
        </div>

        <div ref={containerRef} className="relative h-[300vh]">
          <div className="sticky top-24 md:top-32">
            {/* Responsive Container: 
                - Mobile: aspect-[3/4] (taller)
                - Desktop: aspect-[16/9] (wider)
                - Subtle smooth border: border-gray-200 / border-zinc-800
            *}
            <div className="canvas-container relative w-full aspect-[4/5] md:aspect-[16/9] max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm bg-zinc-950">
              <canvas ref={canvasRef} className="w-full h-full object-cover" />

              {/* Overlay Text - Now Left Aligned *}
              <motion.div
                style={{ opacity: textOpacity, x: textX }}
                className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-r from-black/80 via-black/20 to-transparent p-8 md:p-20 text-left pointer-events-none"
              >
                <div className="z-10 pointer-events-auto max-w-2xl">
                  <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white font-syne mb-2 min-h-[1.1em]">
                    {displayedName}
                    {!nameComplete && startTyping && <span className="animate-pulse ml-1">|</span>}
                  </h3>

                  <p className="text-base md:text-xl lg:text-2xl text-gray-300 font-syne mb-8 opacity-90 min-h-[1.5em] leading-relaxed">
                    {displayedTitle}
                    {nameComplete && !titleComplete && <span className="animate-pulse ml-1">|</span>}
                  </p>

                  {titleComplete && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-bold text-black transition-all hover:bg-blue-600 hover:text-white"
                    >
                      Learn More About Me
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}*/
