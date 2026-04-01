"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Cta.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const comp = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.content}`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: comp.current, start: 'top 75%' },
        }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.ctaSection} ref={comp}>
      <div className={`container ${styles.content}`}>
        <span className="subheading" style={{ color: 'var(--c-gold)', marginBottom: 'var(--spacing-6)' }}>
          {t('Votre Bien-Être, Notre Mission', 'رفاهيتك، مهمتنا')}
        </span>

        <h2 className={styles.headline}>
          {t("Découvrez nos produits\nd'exception.", "اكتشف منتجاتنا\nالاستثنائية.")}
        </h2>

        <div className={styles.btnRow}>
          <a href="#products" className={`btn btn-light ${styles.btnPrimary}`}>
            {t('Accéder à la Boutique', 'دخول المتجر')}
          </a>
        </div>
      </div>
    </section>
  );
}
