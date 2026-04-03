"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

const certifications = [
  { icon: "✦", frName: "ECOCERT Bio", arName: "إيكوسيرت عضوي", frDesc: "Agriculture biologique certifiée", arDesc: "زراعة عضوية معتمدة" },
  { icon: "◈", frName: "Commerce Équitable", arName: "تجارة عادلة", frDesc: "Rémunération juste des productrices", arDesc: "أجر عادل للمنتجين" },
  { icon: "❋", frName: "Label Maroc", arName: "علامة المغرب", frDesc: "Origine Souss-Massa garantie", arDesc: "أصل سوس ماسة مضمون" }
];

export default function Certifications() {
  const { lang, t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.certCard}`, { y: 40, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: 'back.out(1.2)', scrollTrigger: { trigger: `.${styles.certGrid}`, start: 'top 82%' } });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.certSection} ref={comp}>
      <div className="container">
        <div className={styles.certHeader}>
          <span className={styles.eyebrow}>{t("Nos Garanties", "ضماناتنا")}</span>
          <h2 className={styles.blockTitle}>{t("Certifié, Contrôlé, Authentique", "معتمد، مراقب، أصيل")}</h2>
        </div>
        <div className={styles.certGrid}>
          {certifications.map((cert, i) => (
            <div key={i} className={styles.certCard}>
              <div className={styles.certIcon}>{cert.icon}</div>
              <h3 className={styles.certName}>{lang === 'ar' ? cert.arName : cert.frName}</h3>
              <p className={styles.certDesc}>{lang === 'ar' ? cert.arDesc : cert.frDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
