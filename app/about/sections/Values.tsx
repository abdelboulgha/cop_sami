"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

const valuesList = [
  { num: "01", frTitle: "Pureté Absolue", arTitle: "النقاء المطلق", frDesc: "Chaque goutte est pressée à froid...", arDesc: "يتم عصر كل قطرة على البارد..." },
  { num: "02", frTitle: "Équité Artisane", arTitle: "الإنصاف الحرفي", frDesc: "Nous collaborons directement avec les femmes...", arDesc: "نتعاون مباشرة مع نساء منطقة سوس ماسة..." },
  { num: "03", frTitle: "Héritage Floral", arTitle: "التراث الزهري", frDesc: "L'arganier est au centre de notre identité...", arDesc: "شجرة الأركان هي في قلب هويتنا..." }
];

export default function Values() {
  const { lang, t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.valueCard}`, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.valuesGrid}`, start: 'top 85%' } });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.valuesSection} ref={comp}>
      <div className="container">
        <div className={styles.valuesSectionHeader}>
          <span className={styles.eyebrow}>{t("Nos Engagements", "التزاماتنا")}</span>
          <h2 className={styles.valuesSectionTitle}>{t("Ce qui nous définit", "ما يميزنا")}</h2>
        </div>
        <div className={styles.valuesGrid}>
          {valuesList.map((val, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.valueNum}>{val.num}</div>
              <h3 className={styles.valueTitle}>{lang === 'ar' ? val.arTitle : val.frTitle}</h3>
              <p className={styles.valueDesc}>{lang === 'ar' ? val.arDesc : val.frDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
