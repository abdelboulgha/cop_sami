"use client";

import React, { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname]);

  return (
    <LanguageProvider>
      <div className="pattern-bg" />
      <div className="ambient-glow" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
