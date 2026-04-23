"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/context/LanguageContext';
import styles from '../about.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const { t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.quoteLine}`, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power3.inOut', scrollTrigger: { trigger: `.${styles.introQuoteReel}`, start: 'top 80%' } });
      gsap.fromTo(`.${styles.quoteText}`, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: `.${styles.introQuoteReel}`, start: 'top 75%' } });
      gsap.utils.toArray(`.${styles.imageParallaxWrap}`).forEach((wrap: any) => {
        gsap.to(wrap, { yPercent: 25, ease: 'none', scrollTrigger: { trigger: wrap.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      gsap.utils.toArray(`.${styles.textContent}`).forEach((el: any) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } });
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <section className={styles.introQuoteReelSection}>
        <div className={styles.introQuoteReel}>
        <div className={styles.reelVideoWrap}>
          <video
            src="/videos/C0215.mp4"
            controls
            playsInline
            className={styles.reelVideo}
          />
        </div>
        <div className={styles.introQuoteContent}>
          <div className={styles.quoteLine} />
          <h2 className={styles.quoteText}>
            {t("\"Notre volonté a toujours été claire : honorer les richesses de la terre marocaine en n'offrant que l'excellence pure.\"", "\"لطالما كانت إرادتنا واضحة: تكريم ثروات الأرض المغربية من خلال تقديم التميز النقي فقط.\"")}
          </h2>
          <div className={styles.quoteLine} />
          <p className={styles.quoteAuthor}>{t("— Fondateur, Argan Product by Sami", "— المؤسس، أركان برودكت باي سامي")}</p>
        </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.splitBlock}`}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>{t("Les Origines", "الأصول")}</span>
            <h2 className={styles.blockTitle}>{t("La Naissance d'une Passion", "ولادة شغف")}</h2>
            <p className={styles.blockDesc}>{t("Au cœur des vastes plaines du Souss-Massa, notre aventure familiale a débuté grâce à une fascination transmise de génération en génération. L'arganier... est l'emblème de notre culture.", "في قلب سهول سوس ماسة الواسعة...")}</p>
            <p className={styles.blockDesc}>{t("Fondée sur l'exigence et le savoir-faire méticuleux...", "تأسست تعاونية أركان برودكت باي سامي على أعلى معايير الجودة...")}</p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageParallaxWrap}>
              <Image src="/assets/hero_argan_oil.png" alt="Argan extraction process" fill className={styles.splitImg} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
