"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ProductsInfo.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsInfo() {
  const containerRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(`.${styles.header}`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.header}`, start: 'top 82%' },
        }
      );

      // Cards
      gsap.utils.toArray(`.${styles.card}`).forEach((el: any, i: number) => {
        gsap.fromTo(el,
          { y: 70, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.3, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 78%', toggleActions: 'play none none reverse' },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className={styles.productsSection} ref={containerRef}>
      <div className={styles.inner} >

        <div className={styles.header}>
          <div className="section-intro">
            <span className="subheading">{t("Collections d'Excellence", 'مجموعات التميز')}</span>
          </div>
          <h2 className={`heading-primary ${styles.titleH}`}>
            {t('Les déclinaisons de l\u2019', 'تجليات\u00a0')}
            <em className={styles.titleEm}>{t('Or Vert', 'الذهب الأخضر')}</em>
          </h2>
          <p className={styles.introDesc}>
            {t(
              "Une approche holistique pour votre bien-être. Profitez de nos procédés d'extraction uniques, qu'il s'agisse de délicatesse culinaire ou de soins corporels.",
              "نهج شامل لرفاهيتك. استمتع بعمليات الاستخراج الفريدة، سواء للشهية الطهوية أو العناية بالجسم."
            )}
          </p>
        </div>

        {/* Card 1 — Alimentaire */}
        <div className={`${styles.card} ${styles.cardReverse}`}>
          <div className={styles.imgFrame}>
            <Image
              src="/assets/huile_amande_amere.jpeg"
              alt="Huile d'Argan Alimentaire"
              fill
              className={styles.img}
            />
            <div className={styles.imgOverlay} />
            <span className={styles.imgTag}>{t('Gastronomie', 'فن الطهو')}</span>
          </div>
          <div className={styles.cardContent}>
            <span className="subheading">{t('Alimentaire', 'غذائي')}</span>
            <h3 className={styles.cardTitle}>{t("Huile d'Argan Alimentaire", 'زيت الأرغان للأكل')}</h3>
            <div className={styles.cardDivider} />
            <p className={styles.cardDesc}>
              {t(
                "Huile d'argan pure pressée à froid, certifiée ONSSA. Idéale pour sublimer vos salades, tajines et le traditionnel Amlou marocain.",
                "زيت أرغان نقي معصور على البارد، معتمد من ONSSA. مثالي لتزيين سلطاتك والطاجين والأملو المغربي التقليدي."
              )}
            </p>
            <ul className={styles.featureList}>
              <li>{t('Pressée à froid', 'معصور على البارد')}</li>
              <li>{t('Certifiée ONSSA', 'معتمد من ONSSA')}</li>
              <li>{t('100% naturelle', '100% طبيعي')}</li>
            </ul>
            <a
              href={`https://wa.me/212605925032?text=${encodeURIComponent("Bonjour, je souhaite commander : Huile d'Argan Alimentaire")}`}
              target="_blank" rel="noopener noreferrer"
              className={styles.cardBtn}
            >
              {t('Commander sur WhatsApp', 'اطلب عبر واتساب')}
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>

        {/* Card 2 — Cosmétique */}
        <div className={styles.card}>
          <div className={styles.imgFrame}>
            <Image
              src="/assets/huile_argan_alimentaire.jpeg"
              alt="Huile d'Amande Douce"
              fill
              className={styles.img}
            />
            <div className={styles.imgOverlay} />
            <span className={styles.imgTag}>{t('Beauté & Soins', 'الجمال')}</span>
          </div>
          <div className={styles.cardContent}>
            <span className="subheading">{t('Soins', 'عناية')}</span>
            <h3 className={styles.cardTitle}>{t("Huile d'Amande Amère", 'زيت اللوز المر')}</h3>
            <div className={styles.cardDivider} />
            <p className={styles.cardDesc}>
              {t(
                "Prunus amygdalus amara kernel oil. Précieuse pour unifier le teint, atténuer les taches et offrir une douceur incomparable à la peau et aux cheveux.",
                "زيت نواة اللوز المر. ثمين لتوحيد البشرة، تخفيف البقع الداكنة ومنح نعومة لا مثيل لها للبشرة والشعر."
              )}
            </p>
            <ul className={styles.featureList}>
              <li>{t('Unifie le teint', 'يوحد البشرة')}</li>
              <li>{t('Soin cheveux & peau', 'للشعر والبشرة')}</li>
              <li>{t('Sans conservateurs', 'بدون مواد حافظة')}</li>
            </ul>
            <a
              href={`https://wa.me/212605925032?text=${encodeURIComponent("Bonjour, je souhaite commander : Huile d'Amande Amère")}`}
              target="_blank" rel="noopener noreferrer"
              className={styles.cardBtn}
            >
              {t('Commander sur WhatsApp', 'اطلب عبر واتساب')}
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
