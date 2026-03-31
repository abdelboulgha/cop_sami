"use client";

import React, { useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  // basic mock for lang switcher
  const [lang, setLang] = React.useState('fr');

  useEffect(() => {
    // If we wanted to trigger some nav animations lazily or handle scroll, we could do it here
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/assets/LOGO-PNG.png" 
          alt="Argan Product by Sami" 
          width={150} 
          height={60} 
          style={{ objectFit: 'contain' }}
        />
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="#about" className={styles.link}>
          {lang === 'fr' ? 'À Propos' : 'حول'}
        </Link>
        <Link href="#products" className={styles.link}>
          {lang === 'fr' ? 'Produits' : 'منتجات'}
        </Link>
        <Link href="#process" className={styles.link}>
          {lang === 'fr' ? 'Processus' : 'العملية'}
        </Link>
        <Link href="#contact" className={styles.link}>
          {lang === 'fr' ? 'Contact' : 'اتصل بنا'}
        </Link>
      </div>
      
      <div className={styles.langSwitch}>
        <button 
          className={`${styles.langBtn} ${lang === 'fr' ? styles.active : ''}`}
          onClick={() => setLang('fr')}
        >
          FR
        </button>
        <span className={styles.langSeparator}>|</span>
        <button 
          className={`${styles.langBtn} ${lang === 'ar' ? styles.active : ''}`}
          onClick={() => setLang('ar')}
        >
          AR
        </button>
      </div>
    </nav>
  );
}
