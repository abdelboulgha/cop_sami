"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Cta.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const comp = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.eyebrow}`,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: comp.current, start: 'top 72%' },
        }
      );
      gsap.fromTo(`.${styles.headline}`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.3, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: comp.current, start: 'top 72%' },
        }
      );
      gsap.fromTo(`.${styles.btnRow}`,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: comp.current, start: 'top 72%' },
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.ctaSection} ref={comp}>
      {/* Decorative Moroccan geometric pattern overlay */}
      <div className={styles.pattern} aria-hidden />
      {/* Radial center glow */}
      <div className={styles.glow} aria-hidden />
      {/* Top/Bottom gradient fades */}
      <div className={styles.fadeTop} aria-hidden />
      <div className={styles.fadeBottom} aria-hidden />

      <div className={`container ${styles.content}`}>

        <span className={`subheading ${styles.eyebrow}`} style={{ color: 'var(--c-gold)', marginBottom: 'var(--spacing-6)' }}>
          {t('Votre Bien-Être, Notre Mission', 'رفاهيتك، مهمتنا')}
        </span>

        <h2 className={`heading-primary ${styles.headline}`}>
          {t("Découvrez nos produits\nd'exception.", "اكتشف منتجاتنا\nالاستثنائية.")}
        </h2>

        <p className={styles.sub}>
          {t(
            "De la forêt d'arganiers du Souss-Massa jusqu'à vous — une pureté sans compromis.",
            "من غابة أشجار الأركان في سوس ماسة إليك — نقاء بلا تنازلات."
          )}
        </p>

        <div className={styles.btnRow}>
          <a href="#products" className="btn btn-light">
            {t('Accéder à la Boutique', 'دخول المتجر')}
          </a>
          <a href="#about" className={styles.learnMore}>
            {t('En savoir plus', 'اعرف أكثر')}
            <span className={styles.lmArrow}>→</span>
          </a>
        </div>

        {/* Gold divider ornament */}
        <div className={styles.ornamentLine}>
          <span />
          <span className={styles.ornamentDiamond}>◆</span>
          <span />
        </div>

      </div>
    </section>
  );
}
