"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.heroSubtitle}`, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo(`.${styles.heroTitle}`, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power3.out', delay: 0.4 });
      gsap.fromTo(`.${styles.heroScroll}`, { opacity: 0 }, { opacity: 1, duration: 2, ease: 'power2.out', delay: 1.2 });
      gsap.fromTo(`.${styles.heroImageWrap} img`, { scale: 1.15 }, { scale: 1, duration: 4, ease: 'power2.out' });
      gsap.fromTo(`.${styles.heroImageWrap}`, { y: '0%' }, {
        y: '20%', ease: 'none',
        scrollTrigger: { trigger: `.${styles.heroHeader}`, start: 'top top', end: 'bottom top', scrub: true }
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroHeader} ref={comp}>
      <div className={styles.heroImageWrap}>
        <Image src="/assets/about_argan_tree.png" alt="Argan tree landscape" fill className={styles.heroImageImg} priority />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroText}>
        <div className={styles.heroSubtitle}>{t("Notre Histoire", "قصتنا")}</div>
        <h1 className={styles.heroTitle}>{t("L'Héritage\nMillénaire", "تراث يمتد\nلآلاف السنين")}</h1>
        <div className={styles.heroScroll}>
          <span className={styles.heroScrollLine} />
          <span className={styles.heroScrollLabel}>{t("Découvrir", "اكتشف")}</span>
        </div>
      </div>
    </section>
  );
}
