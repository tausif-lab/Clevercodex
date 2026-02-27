import { HeroWithStars } from "@/components/home/hero-stars";
import {AgencyHero} from "@/components/home/valuesection";
import { ImageScroll } from "@/components/home/image-scroll";
import { ImageScrollZakee} from "@/components/home/image-scrollZakee";
import { AchievementTimeline } from "@/components/home/achievement-timeline";

import { ImageScrollSourabh } from "@/components/home/image-scrollSourabh";
import { Footer } from "@/components/home/Footer";
import ContactForm  from "@/components/home/contactus";

export default function Home() {
  return (
    <>
      <HeroWithStars
        title="End-to-End Web, App & SEO Solutions"
        subtitle=" Cowebed combines performance-focused development with strategic SEO to help ambitious brands scale faster and smarter."
        
        ctaLabel="Scroll Down"
        ctaHref="#"
      />
      <AgencyHero
        visionImageSrc="/flow.png"
       executionImageSrc="/processworkflow.png"
      />
     <ImageScroll />
     <ImageScrollZakee />
     <ImageScrollSourabh />
      <AchievementTimeline />
      <ContactForm />
      <Footer />
        
    </>
  );
}