"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { useLang } from './LanguageProvider';

export default function Hero() {
  const comp     = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t, lang } = useLang();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Ultra smooth video scale
      gsap.fromTo(videoRef.current,
        { scale: 1.15, filter: 'saturate(0)' },
        { scale: 1, filter: 'saturate(0.5)', duration: 10, ease: 'power2.out' }
      );

      // Fade in eyebrow
      tl.from(`.${styles.eyebrow}`, {
        opacity: 0,
        y: 15,
        duration: 2,
        ease: 'power3.out',
      })
      // Staggered title words
      .from(`.${styles.animWord}`, {
        yPercent: 120,
        duration: 2,
        stagger: 0.15,
        ease: 'expo.out',
      }, '-=1.5')
      // Subtitle
      .from(`.${styles.subtitle}`, {
        opacity: 0,
        duration: 2.5,
        ease: 'power2.out',
      }, '-=1.4')
      // CTA
      .from(`.${styles.actions}`, {
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
      }, '-=1.5');
      
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={comp}>
      <div className={styles.videoBg}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/Argan_Oil_Cooperative_Brand_Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlayColor} />
      </div>

      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.contentBox}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>
              {t('Coopérative Familiale — Depuis 1990', 'تعاونية عائلية — منذ 1990')}
            </span>
            <span className={styles.eyebrowLine} />
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleRow}>
              <span className={styles.animWord}>{t("L'Or", "الذهب")}</span>
            </span>
            <span className={`${styles.titleRow} ${styles.indent}`}>
              <span className={`${styles.animWord} ${styles.italic}`}>{t("Liquide", "السائل")}</span>
            </span>
            <span className={`${styles.titleRow}`}>
              <span className={styles.animWord}>{t("du Maroc", "من المغرب")}</span>
            </span>
          </h1>

          <p className={styles.subtitle}>
            {t(
              "Une extraction pure, pressée à froid dans l'héritage de la tradition. Redécouvrez la véritable essence de l'argan.",
              "استخلاص نقي، معصور على البارد في تراث التقاليد. أعد اكتشاف الجوهر الحقيقي للأركان."
            )}
          </p>

          <div className={styles.actions}>
            <a href="#products" className={`btn btn-light ${styles.btnPrimary}`}>
              {t('Découvrir la Collection', 'اكتشف المجموعة')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
