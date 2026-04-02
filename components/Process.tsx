"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Process.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

const HarvestIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4C14 4 6 12 6 24c0 4 1.2 7.8 3.2 11"/>
    <path d="M24 4C34 4 42 12 42 24c0 4-1.2 7.8-3.2 11"/>
    <path d="M24 44V24"/>
    <path d="M14 34l10-10 10 10"/>
    <circle cx="24" cy="16" r="4"/>
  </svg>
);
const PulpIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="16"/>
    <circle cx="24" cy="24" r="8"/>
    <path d="M24 8v6M24 34v6M8 24h6M34 24h6"/>
    <path d="M12.7 12.7l4.2 4.2M31.1 31.1l4.2 4.2"/>
  </svg>
);
const CrushIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 36L24 10l14 26H10z"/>
    <path d="M17 28h14"/>
    <path d="M24 10v6"/>
    <circle cx="34" cy="14" r="4"/>
    <path d="M30 18l-6 10"/>
  </svg>
);

const steps = [
  {
    num: '01',
    icon: <HarvestIcon />,
    titleFr: 'La Récolte',
    titleAr: 'الحصاد',
    descFr: "Les fruits mûrs sont récoltés à la main entre l'été et l'automne, dans le respect de l'écosystème endémique de la région d'Agadir.",
    descAr: "يتم حصاد الثمار الناضجة يدويًا بين الصيف والخريف، مع احترام النظام البيئي المتوطن في منطقة أكادير.",
  },
  {
    num: '02',
    icon: <PulpIcon />,
    titleFr: 'Le Dépulpage',
    titleAr: 'إزالة اللب',
    descFr: "Les fruits sont séchés au chaud soleil de la Méditerranée avant que la pulpe charnue ne soit retirée pour révéler le précieux noyau.",
    descAr: "يتم تجفيف الثمار في شمس البحر الأبيض المتوسط قبل إزالة اللب للكشف عن النواة الثمينة.",
  },
  {
    num: '03',
    icon: <CrushIcon />,
    titleFr: 'Le Concassage',
    titleAr: 'التكسير',
    descFr: "Étape fastidieuse et minutieuse réalisée artisanalement. Les noix sont brisées à l'aide de pierres lisses pour en extraire les amandons intacts.",
    descAr: "خطوة شاقة ودقيقة تتم يدويًا. يتم كسر الجوز بأحجار ملساء لاستخراج النواة السليمة.",
  },
];

export default function Process() {
  const comp = useRef(null);
  const { lang, t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header
      gsap.fromTo(`.${styles.header}`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.header}`, start: 'top 80%' },
        }
      );

      // Progress line
      gsap.fromTo(`.${styles.progressLine}`,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.5, ease: 'power3.inOut',
          scrollTrigger: { trigger: `.${styles.timeline}`, start: 'top 75%' },
        }
      );

      // Steps stagger
      gsap.fromTo(`.${styles.step}`,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, stagger: 0.25, ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.timeline}`, start: 'top 72%', toggleActions: 'play none none reverse' },
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className={styles.processSection} ref={comp}>

      <div className="container">
        <div className={styles.header}>
          <div className="section-intro">
            <span className="subheading">{t('Le Savoir-Faire Éthique', 'الخبرة الأخلاقية')}</span>
          </div>
          <h2 className={`heading-primary ${styles.title}`}>
            {t("L'Art de l'Extraction", 'فن الاستخراج')}
          </h2>
          <p className={styles.subtitle}>
            {t(
              "Chaque goutte raconte l'histoire du dévouement de nos coopératrices. Découvrez les étapes immuables qui transforment le fruit de l'arganier en or liquide.",
              "كل قطرة تحكي قصة تفاني تعاونياتنا. اكتشف الخطوات التي تحول ثمرة الأركان إلى ذهب سائل."
            )}
          </p>
        </div>

        <div className={styles.timeline}>
          {/* Animated connecting line */}
          <div className={styles.lineTrack}>
            <div className={styles.progressLine} />
          </div>

          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepTop}>
                <div className={styles.iconRing}>
                  <div className={styles.iconInner}>{s.icon}</div>
                </div>
                <span className={styles.stepNum}>{s.num}</span>
              </div>
              <h4 className={styles.stepTitle}>
                {lang === 'ar' ? s.titleAr : s.titleFr}
              </h4>
              <p className={styles.stepDesc}>
                {lang === 'ar' ? s.descAr : s.descFr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
