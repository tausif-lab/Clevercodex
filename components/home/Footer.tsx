"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background"; 
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black text-white font-syne overflow-hidden">
      {/* 1. Distinguishing Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* 2. Stars Background Integration */}
      <StarsBackground 
        className="z-0 opacity-40" 
        starDensity={0.00012} 
        allStarsTwinkle={true}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Brand/CTA Section */}
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8"
            >
              START YOUR <br /> 
              <span className="text-white/40">NEXT CHAPTER.</span>
            </motion.h2>
            <motion.a
              href="mailto:hello@agency.com"
              className="group flex items-center gap-3 text-xl md:text-2xl font-medium hover:text-white/70 transition-all underline underline-offset-8"
            >
              hr@clevercodex.site
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">Explore</span>
              <ul className="flex flex-col gap-3 text-lg">
                <li className="hover:opacity-50 cursor-pointer transition-opacity">Projects</li>
                <li className="hover:opacity-50 cursor-pointer transition-opacity">Expertise</li>
                <li className="hover:opacity-50 cursor-pointer transition-opacity">Approach</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">Social</span>
              <ul className="flex flex-col gap-3 text-lg">
                <li className="flex items-center gap-2 hover:opacity-50 cursor-pointer transition-opacity">
                  LinkedIn <Linkedin size={14} />
                </li>
                <li className="flex items-center gap-2 hover:opacity-50 cursor-pointer transition-opacity">
                  X / Twitter <Twitter size={14} />
                </li>
                <li className="flex items-center gap-2 hover:opacity-50 cursor-pointer transition-opacity">
                  GitHub <Github size={14} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-6">
          <p className="text-sm text-white/40 tracking-widest uppercase">
            © {currentYear} Cowebed — Crafted for the digital age.
          </p>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-white/60">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Legal</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}