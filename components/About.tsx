"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: '50+',  labelFr: 'Artisanes Passionnées',       labelAr: 'حرفية الشغف' },
  { num: '30+',  labelFr: "Années d'Héritage", labelAr: 'عامًا من التراث' },
  { num: '100%', labelFr: 'Pureté Absolue',   labelAr: 'نقاء مطلق' },
  { num: '3',    labelFr: 'Certifications',  labelAr: 'شهادات أصلية' },
];

export default function About() {
  const comp        = useRef(null);
  const parallaxImg = useRef(null);
  const { lang, t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax image
      gsap.fromTo(parallaxImg.current,
        { y: '-10%', filter: 'saturate(0.5)' },
        {
          y: '10%',
          filter: 'saturate(0.8)',
          ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.storyParallax}`,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Quote reveal
      gsap.fromTo(`.${styles.quote}`,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.quoteBox}`, start: 'top 85%' },
        }
      );

      // Stats
      gsap.fromTo(`.${styles.statItem}`,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.statsWrap}`, start: 'top 85%' },
        }
      );

      // Text blocks
      gsap.utils.toArray(`.${styles.textBlock}`).forEach((el: any) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className={styles.about} ref={comp}>
      {/* Cinematic Parallax Container */}
      <div className={`container ${styles.parallaxContainer}`}>
        <div className={styles.storyParallax}>
          <Image
            ref={parallaxImg}
            src="/assets/about_argan_tree.png"
            alt="Argan tree in Souss-Massa, Morocco"
            fill
            className={styles.parallaxImage}
          />
        </div>
      </div>

      {/* Quote directly beneath */}
      <div className={`container ${styles.quoteBox}`}>
        <p className={styles.quote}>
          {t(
            "Née au cœur des terres du Souss-Massa, l'arganier abrite l'or véritable du Maroc.",
            "نشأت في قلب أراضي سوس ماسة، تحتضن شجرة الأركان الذهب الحقيقي للمغرب."
          )}
        </p>
      </div>

      {/* Elegant stats line */}
      <div className="container">
        <div className={styles.statsWrap}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{lang === 'ar' ? s.labelAr : s.labelFr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal grid */}
      <div className="container">
        <div className={styles.detailsGrid}>

          <div className={styles.textBlock}>
            <div className="section-intro">
              <span className="subheading">{t('Héritage Artisanal', 'تراث حرفي')}</span>
            </div>
            <h3 className={styles.blockTitle}>{t("L'Arbre de Vie", 'شجرة الحياة')}</h3>
            <p>
              {t(
                "L'arganier, trésor absolu du Maroc, pousse exclusivement dans la région aride du Souss-Massa. Symbole de résilience et de beauté, ses fruits renferment une huile aux vertus millénaires. Argan Product by Sami s'engage à protéger cet héritage écologique tout en offrant la qualité la plus pure.",
                "شجرة الأركان، الكنز المطلق للمغرب، تنمو حصريًا في المنطقة القاحلة لسوس ماسة. رمز للمرونة والجمال، تحتوي ثمارها على زيت بخصائص تعود لآلاف السنين. نلتزم بحماية هذا التراث البيئي مع تقديم أعلى جودة نقية."
              )}
            </p>
          </div>

          <div className={styles.textBlock}>
            <div className="section-intro">
              <span className="subheading">{t("L'Éthique", 'الأخلاق')}</span>
            </div>
            <h3 className={styles.blockTitle}>{t("L'Engagement des Femmes", 'التزام النساء')}</h3>
            <p>
              {t(
                "Notre huile est le fruit du travail acharné des coopératives de femmes de la région. Ce processus minutieux transmis de génération en génération représente non seulement un savoir-faire inestimable, mais également une source vitale de développement équitable. En choisissant nos produits, vous soutenez directement l'indépendance de plus de 50 artisanes passionnées.",
                "زيتنا هو ثمرة العمل الدؤوب لتعاونيات النساء في المنطقة. هذه العملية الدقيقة التي تنتقل من جيل إلى جيل لا تمثل فقط خبرة لا تقدر بثمن، بل هي أيضًا مصدر حيوي للتنمية العادلة. باختيارك لمنتجاتنا، أنت تدعم استقلالية أكثر من 50 حرفية شغوفة."
              )}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
