"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

export default function MissionVision() {
  const { t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.womenOverlay}`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.womenSection}`, start: 'top 60%' } });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.womenSection} ref={comp}>
      <div className={styles.womenImageWrap}>
        <Image src="/assets/women_cooperative.png" alt="Femmes artisanes" fill className={styles.womenImage} />
      </div>
      <div className={styles.womenOverlayBg} />
      <div className={styles.womenOverlay}>
        <span className={styles.eyebrowLight}>{t("Le Cœur de la Coopérative", "قلب التعاونية")}</span>
        <h2 className={styles.womenTitle}>{t("50+ Artisanes,\n1 Mission", "أكثر من 50 حرفية،\nمهمة واحدة")}</h2>
        <p className={styles.womenDesc}>{t("Les femmes du Souss-Massa sont l'âme véritable...", "نساء سوس ماسة هن الروح الحقيقية لتعاونيتنا...")}</p>
        <div className={styles.womenDivider} />
        <p className={styles.womenQuote}>{t("\"Chaque goutte d'huile porte l'empreinte de nos mains...\"", "\"كل قطرة زيت تحمل بصمة أيدينا...\"")}</p>
      </div>
    </section>
  );
}
