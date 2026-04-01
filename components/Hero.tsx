"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { useLang } from './LanguageProvider';

export default function Hero() {
  const comp      = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const videoRef  = useRef<HTMLVideoElement>(null);
  const { t } = useLang();

  useEffect(() => {
    // Make sure video plays (some browsers block autoplay)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Video slow zoom-in
      gsap.fromTo(videoRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 6, ease: 'power1.out' }
      );

      // Eyebrow
      tl.from(`.${styles.eyebrow}`, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
      })
      // Word clip-reveal
      .from(`.${styles.animWord}`, {
        yPercent: 115,
        duration: 1.5,
        stagger: 0.12,
        ease: 'power4.out',
      }, '-=0.5')
      // Subtitle
      .from(`.${styles.subtitle}`, {
        opacity: 0,
        y: 24,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.8')
      // CTA
      .from(`.${styles.actions}`, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7')
      // Trust row
      .from(`.${styles.trustRow}`, {
        opacity: 0,
        y: 16,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.6')
      // Scroll hint
      .from(`.${styles.scrollHint}`, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.3');

      // Bottle entrance
      gsap.from(bottleRef.current, {
        scale: 0.78,
        opacity: 0,
        y: 40,
        duration: 2.5,
        ease: 'expo.out',
        delay: 0.5,
      });

    }, comp);

    return () => ctx.revert();
  }, []);

  // Mouse parallax on bottle
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!bottleRef.current) return;
    const xPos = (e.clientX / window.innerWidth  - 0.5) * 20;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to(bottleRef.current, {
      rotationY: xPos,
      rotationX: -yPos,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 1.2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bottleRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: 'power3.out',
      duration: 1.8,
    });
  };

  return (
    <section
      className={styles.hero}
      ref={comp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Full-screen background video ────────────────── */}
      <div className={styles.videoBg}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero_poster.jpg"
        >
          <source src="/assets/hero_video.mp4"  type="video/mp4" />
          <source src="/assets/hero_video.webm" type="video/webm" />
        </video>

        {/* Multi-layer overlay for warmth + readability */}
        <div className={styles.overlayGradient} />
        <div className={styles.overlayColor}    />
        <div className={styles.overlayVignette} />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className={`container ${styles.heroGrid}`}>

        {/* Left: Typography */}
        <div className={styles.textColumn}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>
              {t('Argan Product by Sami', 'أركان برودكت باي سامي')}
            </span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleRow}>
              <span className={styles.animWord}>{t("L'Or", "الذهب")}</span>
            </span>
            <span className={styles.titleRow}>
              <span className={styles.animWord}>{t("Liquide", "السائل")}</span>
            </span>
            <span className={`${styles.titleRow} ${styles.titleRowItalic}`}>
              <span className={styles.animWord}>{t("du Maroc", "من المغرب")}</span>
            </span>
          </h1>

          <p className={styles.subtitle}>
            {t(
              "Découvrez l'authenticité de l'huile d'argan pure\nissue du terroir marocain.",
              "اكتشف أصالة زيت الأركان النقي المستخرج\nمن التضاريس المغربية."
            )}
          </p>

          <div className={styles.actions}>
            <a href="#products" className={styles.btnPrimary}>
              {t('Découvrir la gamme', 'اكتشف المجموعة')}
            </a>
            <a href="#process" className={styles.btnGhost}>
              {t('Notre savoir-faire', 'خبرتنا')}
            </a>
          </div>

          {/* Trust badges */}
          <div className={styles.trustRow}>
            <div className={styles.trustBadge}>
              <span className={styles.badgeNum}>100%</span>
              <span className={styles.badgeLabel}>{t('Naturel', 'طبيعي')}</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustBadge}>
              <span className={styles.badgeNum}>Bio</span>
              <span className={styles.badgeLabel}>{t('Certifié', 'معتمد')}</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustBadge}>
              <span className={styles.badgeNum}>50+</span>
              <span className={styles.badgeLabel}>{t('Artisanes', 'حرفية')}</span>
            </div>
          </div>
        </div>

        {/* Right: Floating bottle */}
        <div className={styles.visualColumn}>
          <div className={styles.bottleHalo} />

          <div className={styles.bottleContainer} ref={bottleRef}>
            <Image
              src="/assets/bottle_3d.png"
              alt="Argan 3D Bottle"
              fill
              priority
              className={styles.bottleImg}
            />
          </div>

          {/* Floating glass card */}
          <div className={styles.floatCard}>
            <span className={styles.floatCardIcon}>✦</span>
            <span className={styles.floatCardText}>
              {t('Extraction artisanale', 'استخراج حرفي')}
            </span>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>{t('Défiler', 'تمرير')}</span>
      </div>
    </section>
  );
}
