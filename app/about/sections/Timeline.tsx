"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

const milestones = [
  { year: "1990", frTitle: "Naissance d'une Vision", arTitle: "ولادة رؤية", frDesc: "La coopérative est fondée au cœur du Souss-Massa...", arDesc: "تأسست التعاونية في قلب سوس ماسة..." },
  { year: "2005", frTitle: "Première Certification", arTitle: "أول شهادة اعتماد", frDesc: "ECOCERT valide nos pratiques biologiques...", arDesc: "تعترف إيكوسيرت بممارساتنا العضوية..." },
  { year: "2015", frTitle: "Gamme Cosmétique", arTitle: "خط التجميل", frDesc: "Lancement de notre ligne de soins visage et corps...", arDesc: "إطلاق خط العناية بالوجه والجسم..." },
  { year: "2024", frTitle: "Rayonnement Mondial", arTitle: "الإشعاع العالمي", frDesc: "Plus de 50 artisanes, 3 certifications...", arDesc: "أكثر من 50 حرفية، 3 شهادات اعتماد..." }
];

export default function Timeline() {
  const { lang, t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.timelineTrack}`, { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: 'power3.inOut', transformOrigin: 'top center', scrollTrigger: { trigger: `.${styles.timelineWrap}`, start: 'top 75%' } });
      gsap.utils.toArray(`.${styles.milestone}`).forEach((el: any, i: number) => {
        gsap.fromTo(el, { x: i % 2 === 0 ? -60 : 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } });
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.timelineSection} ref={comp}>
        <div className="container">
          <div className={styles.timelineHeader}>
            <span className={styles.eyebrow}>{t("Notre Parcours", "مسيرتنا")}</span>
            <h2 className={styles.blockTitle}>{t("Une Histoire Gravée dans le Temps", "تاريخ محفور في الزمن")}</h2>
          </div>
          <div className={styles.timelineWrap}>
            <div className={styles.timelineTrack} />
            {milestones.map((m, i) => (
              <div key={i} className={`${styles.milestone} ${i % 2 === 0 ? styles.milestoneLeft : styles.milestoneRight}`}>
                <div className={styles.milestoneDot} />
                <div className={styles.milestoneCard}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <h3 className={styles.milestoneTitle}>{lang === 'ar' ? m.arTitle : m.frTitle}</h3>
                  <p className={styles.milestoneDesc}>{lang === 'ar' ? m.arDesc : m.frDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
