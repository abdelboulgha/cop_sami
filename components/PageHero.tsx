"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './PageHero.module.css';
import gsap from 'gsap';
import { useLang } from './LanguageProvider';

interface PageHeroProps {
  eyebrow: string;
  eyebrowAr: string;
  title: string;
  titleAr: string;
  subtitle?: string;
  subtitleAr?: string;
  image?: string;
}

export default function PageHero({
  eyebrow, eyebrowAr,
  title, titleAr,
  subtitle, subtitleAr,
  image,
}: PageHeroProps) {
  const comp = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(`.${styles.eyebrow}`, { opacity: 0, y: 16, duration: 0.9, ease: 'power3.out', delay: 0.1 });
      gsap.from(`.${styles.titleWord}`, { yPercent: 110, stagger: 0.1, duration: 1.4, ease: 'power4.out', delay: 0.2 });
      if (subtitle) {
        gsap.from(`.${styles.subtitle}`, { opacity: 0, y: 20, duration: 1, ease: 'power3.out', delay: 0.7 });
      }
      gsap.from(`.${styles.breadcrumb}`, { opacity: 0, y: 10, duration: 0.8, ease: 'power3.out', delay: 0.9 });
      if (image) {
        gsap.from(`.${styles.heroImageWrap}`, { opacity: 0, x: 30, duration: 1.2, ease: 'power3.out', delay: 0.5 });
      }
    }, comp);
    return () => ctx.revert();
  }, [subtitle, image]);

  const displayTitle = lang === 'ar' ? titleAr : title;
  const words = displayTitle.split(' ');

  return (
    <section className={styles.pageHero} ref={comp}>
      <div className={styles.bgLines} aria-hidden>
        <span /><span /><span />
      </div>
      <div className={styles.bgGlow} aria-hidden />

      <div className={`container ${styles.inner} ${image ? styles.hasImage : ''}`}>
        <div className={styles.textContent}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>
              {lang === 'ar' ? eyebrowAr : eyebrow}
            </span>
          </div>

          {/* Title word-by-word */}
          <h1 className={styles.title}>
            {words.map((word, i) => (
              <span key={i} className={styles.titleRow}>
                <span className={styles.titleWord}>{word}</span>
                {i < words.length - 1 && <span className={styles.titleWord}>&nbsp;</span>}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          {(subtitle || subtitleAr) && (
            <p className={styles.subtitle}>
              {lang === 'ar' ? subtitleAr : subtitle}
            </p>
          )}

          {/* Gold divider */}
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond}>◆</span>
            <span className={styles.dividerLine} />
          </div>

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <Link href="/" className={styles.breadLink}>{t('Accueil', 'الرئيسية')}</Link>
            <span className={styles.breadSep}>›</span>
            <span className={styles.breadCurrent}>{lang === 'ar' ? eyebrowAr : eyebrow}</span>
          </nav>
        </div>

        {image && (
          <div className={styles.heroImageWrap}>
            <img src={image} alt={displayTitle} className={styles.heroImage} />
          </div>
        )}
      </div>
    </section>
  );
}
