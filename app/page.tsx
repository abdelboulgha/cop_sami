import Hero from "@/app/home/sections/Hero";
import About from "@/app/home/sections/AboutPreview";
import Benefits from "@/app/home/sections/Benefits";
import Collection from "@/app/home/sections/Collection";
import Process from "@/app/home/sections/Process";
import Gallery from "@/app/home/sections/Gallery";
import Testimonials from "@/app/home/sections/Testimonials";
import Cta from "@/app/produits/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Collection />
      <Process />
      <Gallery />
      <Testimonials />
      <Cta />
    </>
  );
}
