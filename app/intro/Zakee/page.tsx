"use client"
import React from "react";
import Image from "next/image";
import { Syne } from "next/font/google";
import { StarsBackground } from "../../../components/ui/stars-background"; // Adjust path as needed
import { Github, ExternalLink } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Footer } from "../../../components/home/Footer"
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});



// Certificates Data - Now with single image per certificate
const certificates = [
  { id: 1, image: "/Intro/Zakee/IdeaZakee.jpeg", title: "Winner At GEC Ideathon" },
  { id: 2, image: "/Intro/Tausif/IMG_2555.jpg", title: "Interacollege Hackthon position holders " },
  { id: 3, image: "/Intro/Tausif/IMG_2554.jpg", title: "Winner UNICEF hackthon " },
  { id: 4, image: "/Intro/Zakee/Ethical.png", title: " Participated on the Ethical Hacking Workshop By IIT DEhli " },
];

// Projects Data - Now with descriptions
const projects = [
  {
    id: 1,
    title: "EXODAC",
    description: "This platform uses a multimodal machine learning model trained on NASA and open-source exoplanet datasets to analyze transit-based parameters. Users enter observational data, and the system evaluates it to generate a probability score indicating whether the object is a potential exoplanet candidate.  ",
    image: "/Intro/Zakee/Exodac.png",
    github: "https://github.com/zak336/EXODAC",
    demo: "https://exodac.vercel.app",
    tags: ["Next.js","Postgress","Python"],
  },
  {
    id: 2,
    title: "Keezaboard: Turn Your Academic Data into Clear, Actionable Insights",
    description: " Visualize your academic progress with Keezaboard. Transform grades into insights, identify strengths, and focus your study efforts where they matter most—all in one clear, personalized view.",
    image: "/Intro/Zakee/image.png",
    github: "https://github.com/zak336/Keezaboard",
    demo: "https://keezaboard-git-master-zak336s-projects.vercel.app",
    tags: ["Next.js", "Supabase", "Postgress"],
  },
  {
    id: 3,
    title: "ReadE-Cable Acess Study Resourace Anytime Anywhere",
    description: "Made an App called ReadE-Cable in which a student from CSVTU can access notes , PYQ , Test , Video and more ,download the notes and access the notes anywhere, anytime.",
    image: "/Intro/Zakee/Readecuble.png",
    github: "https://github.com/gitbook78/ReadECuble",
    demo: "https://gitbook78.github.io/ReadECuble/",
    tags: ["Java XML", "Firebase", "Android Studio"],
  },
  {
    id: 4,
    title: "Cafe management and Preodering System",
    description: "Cafe management system and pre-ordering system that allows the customer to pre-order the menu with payment integrated system and allows the cafe owner to accept that request and also can edit the menu  ",
    image: "/Intro/Zakee/Zakeecafe.png",
    github: "https://github.com/tausif-lab/Tech-Cafe",
    demo: "https://techcafe.clevercodex.site/",
    tags: ["Next.js", "Supabase"],
  },
];
const gradualSpacing: Variants = {
  hidden: { 
    opacity: 0, 
    letterSpacing: "-0.2em", // Tightly compressed
    filter: "blur(10px)"      
  },
  visible: { 
    opacity: 1, 
    letterSpacing: "inherit", // Expands to original tracking
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    }
  },
};
export default function PortfolioPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  return (
    <main className={`${syne.variable} font-sans bg-black text-white`}>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Stars Background Layer */}
        <StarsBackground
          starDensity={0.00100}
          allStarsTwinkle
          twinkleProbability={0.7}
          minTwinkleSpeed={1}
          maxTwinkleSpeed={1}
          className="pointer-events-none"
        />

        {/* Content Layer */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
            
            {/* --- HERO SECTION --- */}
           <section className="flex flex-col items-center text-center space-y-8">
             <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
               <Image
                 src="/Intro/Zakee/Zakeegif.png"
                 alt="Profile"
                 fill
                 className="object-cover"
               />
             </div>
             
             {/* Apply variants and Ref here */}
             <div ref={containerRef} className="space-y-3">
               <motion.h1
                 initial="hidden"
                 animate={isInView ? "visible" : "hidden"}
                 variants={gradualSpacing}
                 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter font-syne bg-gradient-to-br from-white from-30% to-white/60 bg-clip-text text-transparent"
               >
                Zakee Ahmed
               </motion.h1>
               
               <motion.p
                 initial="hidden"
                 animate={isInView ? "visible" : "hidden"}
                 variants={gradualSpacing}
                 transition={{ delay: 0.3 }} // Delay the subtitle for a staggered effect
                 className="text-xl md:text-2xl text-gray-300 font-syne uppercase tracking-widest"
               >
                 Full Stack Developer(Web + Mobile App) & System Design Specialist
               </motion.p>
             </div>
           </section>

            {/* --- SKILLS SECTION --- */}
<section className="space-y-12">
  <div className="text-center space-y-2">
    <h2 className="text-4xl md:text-5xl font-bold font-syne uppercase tracking-tight text-white">
      Skills & Expertise
    </h2>
    <p className="text-gray-400 text-lg font-syne">
      Technologies I work with
    </p>
  </div>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div>
      <h3 className="text-xl font-semibold font-syne text-gray-200 mb-2">
        Frontend
      </h3>
      <p className="text-gray-400">
         React.js, Next.js, Flutter 
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold font-syne text-gray-200 mb-2">
        Backend
      </h3>
      <p className="text-gray-400">
        Node.js, Express.js, REST APIs 
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold font-syne text-gray-200 mb-2">
        Database
      </h3>
      <p className="text-gray-400">
       Postgress SQL, Supabase, MongoDB
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold font-syne text-gray-200 mb-2">
       AI Specialization
      </h3>
      <p className="text-gray-400">
        OpenCV, TensorFlow, PyTorch
      </p>
    </div>

  </div>
</section>

            {/* --- CERTIFICATES SECTION --- */}
<section className="space-y-12">
  <div className="text-center space-y-2">
    <h2 className="text-4xl md:text-5xl font-bold font-syne uppercase tracking-tight bg-gradient-to-br from-white from-30% to-white/60 bg-clip-text text-transparent">
      Certifications
    </h2>
    <p className="text-gray-400 text-lg font-syne">
      Professional credentials and achievements
    </p>
  </div>
  
  {/* Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {certificates.map((cert) => (
      <div
        key={cert.id}
        className="group space-y-3 transition-transform duration-300 hover:scale-105"
      >
        <div className="relative aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(255,255,255,0.1)]">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-center text-xs md:text-sm font-syne uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">
          {cert.title}
        </h3>
      </div>
    ))}
  </div>
</section>

            {/* --- PROJECTS SECTION --- */}
            <section className="space-y-12 pb-20">
              <div className="text-center space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold font-syne uppercase tracking-tight bg-gradient-to-br from-white from-30% to-white/60 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <p className="text-gray-400 text-lg font-syne">
                  Showcasing my best work
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group space-y-5 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold font-syne uppercase tracking-tight text-white">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-300 font-syne leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-syne uppercase tracking-wider bg-white/10 border border-white/20 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                        <span className="text-sm font-syne">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 rounded-lg transition-colors border border-white/20"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-syne">Demo</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <Footer />

          </div>
        </div>
      </div>
    </main>
  );
}