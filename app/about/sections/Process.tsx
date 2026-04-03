"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

export default function Process() {
  const { t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(`.${styles.imageParallaxWrap}`).forEach((wrap: any) => {
        gsap.to(wrap, { yPercent: 25, ease: 'none', scrollTrigger: { trigger: wrap.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      gsap.utils.toArray(`.${styles.textContent}`).forEach((el: any) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } });
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={comp}>
      <div className={`container ${styles.splitBlock} ${styles.splitBlockReverse}`}>
        <div className={styles.textContent}>
          <span className={styles.eyebrow}>{t("L'Art de l'Extraction", "فن الاستخلاص")}</span>
          <h2 className={styles.blockTitle}>{t("Un Processus Fait Main", "عملية يدوية")}</h2>
          <p className={styles.blockDesc}>{t("Sélectionnés minutieusement...", "يتم اختيار الثمار بعناية فائقة...")}</p>
          <ul className={styles.processList}>
            <li className={styles.processItem}><span className={styles.processNum}>01</span><span>{t("Récolte manuelle des fruits", "الحصاد اليدوي")}</span></li>
            <li className={styles.processItem}><span className={styles.processNum}>02</span><span>{t("Séchage au soleil naturel", "التجفيف تحت الشمس")}</span></li>
            <li className={styles.processItem}><span className={styles.processNum}>03</span><span>{t("Pressage à froid à la meule", "العصر البارد")}</span></li>
            <li className={styles.processItem}><span className={styles.processNum}>04</span><span>{t("Filtration et conditionnement", "الترشيح")}</span></li>
          </ul>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.imageParallaxWrap}>
            <Image src="/assets/cosmetics_products.png" alt="Cosmetic products" fill className={styles.splitImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
