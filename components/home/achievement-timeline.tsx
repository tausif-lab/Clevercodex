


"use client";

import Image from "next/image";
import React from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import { Timeline } from "@/components/ui/timeline";
import { StagedRenderingController } from "next/dist/server/app-render/staged-rendering";

// Updated header component with stars theme
function AchievementHeader() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <h2 className="text-3xl md:text-6xl mb-4 text-white max-w-4xl font-syne font-semibold bg-gradient-to-br from-white from-30% to-white/60 bg-clip-text text-transparent">
        Achievements by the Cowebed
      </h2>
      <p className="text-gray-200/90 text-base md:text-xl max-w-2xl font-syne">
        Our journey milestones and key accomplishments.
      </p>
    </div>
  );
}

const timelineData = [
  {
    title: "STATE LEVEL WINNERS",
    content: (
      <div>
        <p className="text-gray-200/90 text-lg md:text-xl font-syne mb-8">
          Our first win, Won state level hackathon in 2025 August and we presented our project of online Exam System with security integration and Analysis System
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/IMG_0288.jpg"
              alt="State level Winners"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/IMG_0441.jpg"
              alt="Coding"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/Exampro.png"
              alt="App development"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/Student.png"
              alt="SEO and analytics"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "SIH COLLEGE WINNERS",
    content: (
      <div>
        <p className="text-gray-200/90 text-lg md:text-xl font-syne mb-8">
          Represented our Online exam system but with high exam security system include face recognition feature and face movement detection feature and Also enable to the feature of the descriptive diagram making in exam and descriptive checking system.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/IMG_0512.jpg"
              alt="Design system"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/IMG-12.jpg"
              alt="Development workflow"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/TeacherExam.png"
              alt="Team collaboration"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/Parents.png"
              alt="Analytics dashboard"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "UNICEF HACKATHON WINNERS",
    content: (
      <div>
       <p className="text-gray-200/90 text-lg md:text-xl font-syne mb-8">
          Provided the complete solution and the waste management that include the waste segregation through AI and then waste recycle and waste recycling market place
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/UNICEF1.jpg"
              alt="Web development"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/UNICEF2.JPG"
              alt="Coding"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/UNICEF5.png"
              alt="App development"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
            <Image
              src="/Achievement/UNICEF6.png"
              alt="SEO"
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>
    ),
  },
];

export function AchievementTimeline() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      
      <StarsBackground />
      
      {/* Timeline Content */}
      <div className="relative z-10 w-full">
        <Timeline
          header={<AchievementHeader />}
          data={timelineData}
        />
      </div>
    </section>
  );
}
