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
      <div className={styles.inner}>

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
            <span className="subheading">{t('Culinaire', 'طهو')}</span>
            <h3 className={styles.cardTitle}>{t('Huile Alimentaire', 'زيت الطعام')}</h3>
            <div className={styles.cardDivider} />
            <p className={styles.cardDesc}>
              {t(
                "Nos amandons sont doucement grillés pour libérer un riche parfum de noisette torréfiée. Parfaite pour exalter vos créations culinaires et créer l'authentique Amlou marocain.",
                "يتم تحميص لوزنا بلطف لإطلاق رائحة غنية من البندق المحمص. مثالي لرفع إبداعاتك الطهوية وصنع أملو المغربي الأصيل."
              )}
            </p>
            <ul className={styles.featureList}>
              <li>{t('Pressée à froid', 'معصور على البارد')}</li>
              <li>{t('Riche en Oméga-6', 'غني بأوميغا 6')}</li>
              <li>{t('Certifiée Bio', 'معتمد عضوي')}</li>
            </ul>
            <a href="#" className={styles.cardBtn}>
              {t('Découvrir l\u2019Alimentaire', 'استكشف المنتجات الغذائية')}
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>

        {/* Card 2 — Cosmétique */}
        <div className={styles.card}>
          <div className={styles.imgFrame}>
            <Image
              src="/assets/huile_amande_douce.jpeg"
              alt="Huile d'Amande Douce"
              fill
              className={styles.img}
            />
            <div className={styles.imgOverlay} />
            <span className={styles.imgTag}>{t('Beauté & Soins', 'الجمال')}</span>
          </div>
          <div className={styles.cardContent}>
            <span className="subheading">{t('Cosmétique', 'تجميل')}</span>
            <h3 className={styles.cardTitle}>{t("L\u2019Élixir Cosmétique", 'إكسير التجميل')}</h3>
            <div className={styles.cardDivider} />
            <p className={styles.cardDesc}>
              {t(
                "Pressée à froid à partir d'amandons crus, gorgée de vitamines E et d'acides gras essentiels — un hydratant miraculeux pour la régénération de la peau et des cheveux.",
                "معصور على البارد من لوز نيء، غني بفيتامين هـ والأحماض الدهنية الأساسية — مرطب معجزة لتجديد البشرة والشعر."
              )}
            </p>
            <ul className={styles.featureList}>
              <li>{t('Anti-âge naturel', 'مضاد للشيخوخة')}</li>
              <li>{t('Soin cheveux & peau', 'للشعر والبشرة')}</li>
              <li>{t('Sans conservateurs', 'بدون مواد حافظة')}</li>
            </ul>
            <a href="#" className={styles.cardBtn}>
              {t('Révélez votre Beauté', 'اكتشفي جمالك')}
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
