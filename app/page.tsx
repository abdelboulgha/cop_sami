import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import ProductsInfo from '../components/ProductsInfo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <ProductsInfo />
      <Footer />
    </main>
  );
}
