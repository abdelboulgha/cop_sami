"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import ProductsInfo from '../components/ProductsInfo';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import { LanguageProvider } from '../components/LanguageProvider';

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <div className="pattern-bg" />
        <div className="ambient-glow" />
        <Navbar />
        <Hero />
        <About />
        <Process />
        <ProductsInfo />
        <Benefits />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
