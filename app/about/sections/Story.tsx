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
      /* ── Cinematic Quote Section Animations ── */
      // Video float-in from left
      gsap.fromTo(`.${styles.reelVideoWrap}`, 
        { x: -80, opacity: 0, rotateY: 15 }, 
        { x: 0, opacity: 1, rotateY: 0, duration: 1.4, ease: 'power3.out', 
          scrollTrigger: { trigger: `.${styles.cinematicQuote}`, start: 'top 80%' } 
        }
      );

      // Quote mark scale-in
      gsap.fromTo(`.${styles.quoteDecorMark}`, 
        { scale: 0.3, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)', 
          scrollTrigger: { trigger: `.${styles.cinematicQuote}`, start: 'top 75%' } 
        }
      );

      // Quote text reveal
      gsap.fromTo(`.${styles.quoteText}`, 
        { opacity: 0, y: 50, clipPath: 'inset(0 0 100% 0)' }, 
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.6, ease: 'power3.out', 
          scrollTrigger: { trigger: `.${styles.cinematicQuote}`, start: 'top 70%' } 
        }
      );

      // Author line slide-in
      gsap.fromTo(`.${styles.quoteAuthorLine}`, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1, ease: 'power3.inOut', 
          scrollTrigger: { trigger: `.${styles.cinematicQuote}`, start: 'top 65%' } 
        }
      );

      gsap.fromTo(`.${styles.quoteAuthor}`, 
        { opacity: 0, x: -20 }, 
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.3,
          scrollTrigger: { trigger: `.${styles.cinematicQuote}`, start: 'top 65%' } 
        }
      );

      // Floating ambient orbs gentle movement
      gsap.utils.toArray(`.${styles.ambientOrb}`).forEach((orb: any, i: number) => {
        gsap.to(orb, {
          y: `${(i % 2 === 0 ? -1 : 1) * 30}`,
          x: `${(i % 2 === 0 ? 1 : -1) * 15}`,
          duration: 4 + i * 0.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

      // Video glow pulse
      gsap.to(`.${styles.videoGlow}`, {
        opacity: 0.6,
        scale: 1.05,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      /* ── Story Split Block Animations ── */
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
      {/* ── Cinematic Founder Quote ── */}
      <section className={styles.cinematicQuote}>
        {/* Ambient background effects */}
        <div className={styles.cinematicBg}>
          <div className={`${styles.ambientOrb} ${styles.orbOne}`} />
          <div className={`${styles.ambientOrb} ${styles.orbTwo}`} />
          <div className={`${styles.ambientOrb} ${styles.orbThree}`} />
        </div>

        <div className={styles.cinematicInner}>
          {/* Video Reel with glow */}
          <div className={styles.reelVideoWrap}>
            <div className={styles.videoGlow} />
            <div className={styles.videoFrame}>
              <video
                src="/videos/C0215.mp4"
                controls
                playsInline
                className={styles.reelVideo}
              />
            </div>
            <span className={styles.videoLabel}>
              {t("Regarder le film", "شاهد الفيلم")}
            </span>
          </div>

          {/* Quote Content */}
          <div className={styles.cinematicQuoteContent}>
            <span className={styles.quoteDecorMark}>&ldquo;</span>
            <h2 className={styles.quoteText}>
              {t("Notre volonté a toujours été claire : honorer les richesses de la terre marocaine en n'offrant que l'excellence pure.", "لطالما كانت إرادتنا واضحة: تكريم ثروات الأرض المغربية من خلال تقديم التميز النقي فقط.")}
            </h2>
            <div className={styles.quoteAttribution}>
              <div className={styles.quoteAuthorLine} />
              <p className={styles.quoteAuthor}>
                {t("Fondateur, Argan Product by Sami", "المؤسس، أركان برودكت باي سامي")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story Block ── */}
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
