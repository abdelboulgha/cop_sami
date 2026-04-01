"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LanguageProvider';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/assets/LOGO-PNG.png"
          alt="Argan Product by Sami"
          width={130}
          height={50}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>

      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <Link href="/"        className={styles.link} onClick={() => setMenuOpen(false)}>{t('Accueil', 'الرئيسية')}</Link>
        <Link href="#about"   className={styles.link} onClick={() => setMenuOpen(false)}>{t('À Propos', 'حول')}</Link>
        <Link href="#products" className={styles.link} onClick={() => setMenuOpen(false)}>{t('Produits', 'منتجات')}</Link>
        <Link href="#process" className={styles.link} onClick={() => setMenuOpen(false)}>{t('Savoir-Faire', 'خبرتنا')}</Link>
        <Link href="#contact" className={styles.link} onClick={() => setMenuOpen(false)}>{t('Contact', 'اتصل بنا')}</Link>
      </div>

      <div className={styles.right}>
        <div className={styles.langSwitch}>
          <button
            className={`${styles.langBtn} ${lang === 'fr' ? styles.active : ''}`}
            onClick={() => setLang('fr')}
          >
            FR
          </button>
          <span className={styles.langSep} />
          <button
            className={`${styles.langBtn} ${lang === 'ar' ? styles.active : ''}`}
            onClick={() => setLang('ar')}
          >
            AR
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
