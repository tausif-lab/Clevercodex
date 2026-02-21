import { Hero } from "@/components/home/hero-1";
import { ValuesSection } from "@/components/home/valuesection";
import { ImageScroll } from "@/components/home/image-scroll";

export default function Home() {
  return (
    <>
      <Hero
        title="End-to-End Web, App & SEO Solutions"
        subtitle="Clever Codex combines performance-focused development with strategic SEO to help ambitious brands scale faster and smarter."
        eyebrow="Next-Gen Productivity"
        ctaLabel="Get Started"
        ctaHref="#"
      />
      <ValuesSection />
      <ImageScroll />
    </>
  );
}