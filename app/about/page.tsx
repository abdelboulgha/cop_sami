import React from 'react';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Stats from './sections/Stats';
import Values from './sections/Values';
import Timeline from './sections/Timeline';
import MissionVision from './sections/MissionVision';
import Process from './sections/Process';
import Certifications from './sections/Certifications';
import Cta from './sections/Cta';

export const metadata = {
  title: 'À Propos | Argan Product by Sami',
  description: "Découvrez l'histoire, les valeurs et les méthodes d'extraction authentiques de notre coopérative féminine.",
};

export default function AboutPage() {
  return (
    <div>
      <Hero />
      <Story />
      <Stats />
      <Values />
      <Timeline />
      <MissionVision />
      <Process />
      <Certifications />
      <Cta />
    </div>
  );
}
