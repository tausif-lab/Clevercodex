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
        
        {/* Overlay Text */}
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
