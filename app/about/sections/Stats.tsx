"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: "50+", frLabel: "Artisanes", arLabel: "حرفية" },
  { num: "30+", frLabel: "Ans d'Héritage", arLabel: "عامًا من التراث" },
  { num: "100%", frLabel: "Naturel & Pur", arLabel: "طبيعي ونقي" },
  { num: "3", frLabel: "Certifications", arLabel: "شهادات" },
];

export default function Stats() {
  const { lang } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.statItem}`, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: `.${styles.statsStrip}`, start: 'top 80%' } });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.statsStrip} ref={comp}>
      {stats.map((s, i) => (
        <div key={i} className={styles.statItem}>
          <span className={styles.statNum}>{s.num}</span>
          <span className={styles.statLabel}>{lang === 'ar' ? s.arLabel : s.frLabel}</span>
        </div>
      ))}
    </div>
  );
}
