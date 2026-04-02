import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Collection from '../components/Collection';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';

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
