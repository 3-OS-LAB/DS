import Hero from "@/components/home/hero";
import Vision from "@/components/home/vision";
import Companies from "@/components/home/companies";
import Stats from "@/components/home/stats";
import Industries from "@/components/home/industries";
import Timeline from "@/components/home/timeline";
import CTA from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Vision />
      <Companies />
      <Stats />
      <Industries />
      <Timeline />
      <CTA />
    </>
  );
}