"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

export default function Cta() {
  const { t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.ctaInner}`, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.ctaSection}`, start: 'top 75%' } });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.ctaSection} ref={comp}>
      <div className={styles.ctaInner}>
        <span className={styles.eyebrowLight}>{t("Découvrez Notre Collection", "اكتشف مجموعتنا")}</span>
        <h2 className={styles.ctaTitle}>{t("Vivez l'Expérience\nArgan Product", "عش تجربة\nأركان برودكت")}</h2>
        <p className={styles.ctaDesc}>{t("De la terre du Souss-Massa à votre table...", "من أرض سوس ماسة إلى طاولتك...")}</p>
        <a href="/produits" className={styles.ctaBtn}>{t("Explorer les Produits", "استكشف المنتجات")}</a>
      </div>
    </section>
  );
}
