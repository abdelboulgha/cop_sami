"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from "@/context/LanguageContext";

const navItems = [
  { href: '/',         labelFr: 'Accueil',  labelAr: 'الرئيسية' },
  { href: '/about',    labelFr: 'À Propos', labelAr: 'عن التعاونية' },
  { href: '/produits', labelFr: 'Produits', labelAr: 'المنتجات' },
  { href: '/contact',  labelFr: 'Contact',  labelAr: 'اتصل بنا' },
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
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

      {/* Desktop links */}
      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {lang === 'ar' ? item.labelAr : item.labelFr}
          </Link>
        ))}
      </div>

      <div className={styles.right}>
        {/* Language switcher */}
        <div className={styles.langSwitch}>
          <button
            className={`${styles.langBtn} ${lang === 'fr' ? styles.langActive : ''}`}
            onClick={() => setLang('fr')}
          >
            FR
          </button>
          <span className={styles.langSep} />
          <button
            className={`${styles.langBtn} ${lang === 'ar' ? styles.langActive : ''}`}
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
