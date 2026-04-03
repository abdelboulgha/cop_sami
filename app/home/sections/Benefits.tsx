"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Benefits.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4C11 4 4 11 4 20s7 16 16 16 16-7 16-16S29 4 20 4z"/>
        <path d="M20 12v8l5 3"/>
        <path d="M20 4v3M20 33v3M4 20H7M33 20h3"/>
      </svg>
    ),
    titleFr: '100% Naturel',
    titleAr: '١٠٠٪ طبيعي',
    descFr: "Sans additif ni conservateur. La pureté du fruit à l'état pur.",
    descAr: 'بدون إضافات أو مواد حافظة. نقاء الثمرة في حالتها الطبيعية.',
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4l4 8 9 1.3-6.5 6.3 1.5 9L20 24l-8 4.6 1.5-9L7 13.3l9-1.3z"/>
        <circle cx="20" cy="28" r="8"/>
        <path d="M16 28l3 3 5-5"/>
      </svg>
    ),
    titleFr: 'Bio Certifié',
    titleAr: 'عضوي معتمد',
    descFr: 'Certifié ECOCERT. Nos pratiques respectent la terre et les hommes.',
    descAr: 'معتمد من إيكوسيرت. ممارساتنا تحترم الأرض والإنسان.',
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 28c0-6 4-10 8-14 4 4 8 8 8 14a8 8 0 01-16 0z"/>
        <path d="M20 14v10"/>
        <path d="M16 22l4 4 4-4"/>
        <path d="M8 20H4M36 20h-4"/>
      </svg>
    ),
    titleFr: 'Fait Main',
    titleAr: 'مصنوع يدويًا',
    descFr: 'Savoir-faire ancestral transmis de génération en génération.',
    descAr: 'خبرة أجداد تنتقل من جيل إلى جيل بعناية.',
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6c-5 0-10 5-10 12 0 5 3 9 7 11v5h6v-5c4-2 7-6 7-11 0-7-5-12-10-12z"/>
        <path d="M14 24h12"/>
        <path d="M17 28h6"/>
      </svg>
    ),
    titleFr: 'Richesse Nutritive',
    titleAr: 'غني بالفيتامينات',
    descFr: 'Oméga-6, vitamine E et polyphénols — un trésor nutritionnel.',
    descAr: 'أوميغا 6، فيتامين هـ وبوليفينول — كنز غذائي.',
  },
];

export default function Benefits() {
  const comp = useRef(null);
  const { lang, t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Section title
      gsap.fromTo(`.${styles.sectionTitle}`,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.sectionTitle}`, start: 'top 85%' },
        }
      );
      // Cards
      gsap.fromTo(`.${styles.item}`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.grid}`, start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.benefitsSection} ref={comp}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <div className="section-intro" style={{ justifyContent: 'center' }}>
            <span className="subheading">{t('Pourquoi nous choisir', 'لماذا تختارنا')}</span>
          </div>
          <h2 className={`heading-primary ${styles.title}`}>
            {t('La Promesse de la Nature', 'وعد الطبيعة')}
          </h2>
        </div>

        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.iconBox}>
                {b.svg}
              </div>
              <h4 className={styles.itemTitle}>
                {lang === 'ar' ? b.titleAr : b.titleFr}
              </h4>
              <p className={styles.itemDesc}>
                {lang === 'ar' ? b.descAr : b.descFr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
