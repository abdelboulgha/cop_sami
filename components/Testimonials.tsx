"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quoteFr: "Un véritable secret de beauté. La pureté de cette huile ressort dès la première utilisation. On sent l'authenticité et l'histoire derrière chaque goutte.",
    quoteAr: "سر جمال حقيقي. يبرز نقاء هذا الزيت من الاستخدام الأول. نشعر بالأصالة والتاريخ وراء كل قطرة.",
    authorFr: "Magazine Botanique",
    authorAr: "مجلة علم النبات",
    roleFr: "Édition Spéciale Soins",
    roleAr: "إصدار خاص للعناية",
  },
  {
    quoteFr: "Cette coopérative représente l'excellence marocaine dans sa forme la plus pure. Un produit qu'on ne peut plus se passer.",
    quoteAr: "تمثل هذه التعاونية التميز المغربي في أنقى صورة. منتج لا يمكن الاستغناء عنه.",
    authorFr: "La Revue du Bien-Être",
    authorAr: "مجلة الرفاهية",
    roleFr: "Beauté & Cosmétiques Naturels",
    roleAr: "الجمال والمستحضرات الطبيعية",
  },
  {
    quoteFr: "L'Amlou préparé avec l'huile alimentaire Sami est tout simplement divin. Une saveur que l'on ne retrouve nulle part ailleurs.",
    quoteAr: "أملو المحضّر بزيت سامي الغذائي إلهي ببساطة. نكهة لا تجدها في أي مكان آخر.",
    authorFr: "Chef Rachida Amrani",
    authorAr: "الشيف رشيدة عمراني",
    roleFr: "Gastronomie Marocaine",
    roleAr: "الطهي المغربي",
  },
];

const Stars = () => (
  <div className={styles.stars} aria-label="5 étoiles">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
        <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const comp  = useRef(null);
  const { lang, t } = useLang();
  const [active, setActive] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.labelRow}`,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: comp.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(`.${styles.quoteWrapper}`,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: comp.current, start: 'top 75%' },
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  const goTo = (i: number) => {
    gsap.to(`.${styles.quoteText}`, {
      opacity: 0, y: 12, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        setActive(i);
        gsap.to(`.${styles.quoteText}`, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
      },
    });
  };

  const q = testimonials[active];

  return (
    <section className={styles.section} ref={comp}>
      <div className={styles.bgAccent} />

      <div className="container">
        {/* Top label */}
        <div className={styles.labelRow}>
          <div className={styles.labelLine} />
          <span className="subheading" style={{ color: 'var(--c-gold)', marginBottom: 0 }}>
            {t('Ils nous font confiance', 'يثقون بنا')}
          </span>
          <div className={styles.labelLine} />
        </div>

        <div className={styles.quoteWrapper}>
          <div className={styles.openQuote} aria-hidden>"</div>

          <Stars />

          <p className={styles.quoteText}>
            {lang === 'ar' ? q.quoteAr : q.quoteFr}
          </p>

          <div className={styles.author}>
            <span className={styles.authorName}>
              {lang === 'ar' ? q.authorAr : q.authorFr}
            </span>
            <span className={styles.authorRole}>
              {lang === 'ar' ? q.roleAr : q.roleFr}
            </span>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
