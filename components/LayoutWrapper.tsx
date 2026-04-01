"use client";

import React from 'react';
import { LanguageProvider } from './LanguageProvider';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
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
