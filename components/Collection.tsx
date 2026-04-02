"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Collection.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

const collectionData = [
  {
    id: 1,
    tagFr: 'HUILES',
    tagAr: 'زيوت',
    titleFr: "Huile d'Argan",
    titleAr: "زيت أركان",
    descFr: "Idéale pour le visage, le corps et les cheveux.",
    descAr: "مثالي للوجه والجسم والشعر.",
    img: '/assets/hero_argan_oil.png',
  },
  {
    id: 2,
    tagFr: 'MIELS',
    tagAr: 'عسل',
    titleFr: "Miel Naturel pur",
    titleAr: "عسل طبيعي نقي",
    descFr: "Récolté avec soin, riche en saveurs thérapeutiques.",
    descAr: "مقطوف بعناية، غني بالنكهات العلاجية.",
    img: '/assets/honey_jar.png',
  },
  {
    id: 3,
    tagFr: 'PÂTES',
    tagAr: 'أملو',
    titleFr: "Amlou Traditionnel",
    titleAr: "أملو تقليدي",
    descFr: "Amandes grillées, argan et miel — un délice berbère.",
    descAr: "لوز محمص، أركان وعسل — بهجة أمازيغية.",
    img: '/assets/about_argan_tree.png', // Temporary placeholder for Amlou, using old image
  },
  {
    id: 4,
    tagFr: 'PLANTES',
    tagAr: 'أعشاب',
    titleFr: "Plantes Médicinales",
    titleAr: "أعشاب طبية",
    descFr: "Thym, romarin, lavande du terroir marocain.",
    descAr: "زعتر، إكليل الجبل، لافندر من الأراضي المغربية.",
    img: '/assets/medicinal_plants.png',
  },
  {
    id: 5,
    tagFr: 'SAVON',
    tagAr: 'صابون',
    titleFr: "Savon Artisanal",
    titleAr: "صابون حرفي",
    descFr: "Huile d'argan et végétaux pour adoucir la peau.",
    descAr: "زيت أركان ونباتات لتنعيم البشرة.",
    img: '/assets/artisanal_soap.png',
  },
  {
    id: 6,
    tagFr: 'COSMÉTIQUE',
    tagAr: 'مستحضرات',
    titleFr: "Soins Visage",
    titleAr: "عناية بالوجه",
    descFr: "Découvrez notre ligne de soins naturels.",
    descAr: "اكتشف خط العناية الطبيعية لدينا.",
    img: '/assets/cosmetics_products.png',
  }
];

export default function Collection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const mm = gsap.matchMedia();

      // Desktop & Tablet horizontal scroll animation
      mm.add("(min-width: 769px)", () => {
        if (!containerRef.current) return;
        
        // Calculate the exact amount to scroll left to reach the end of the container
        const amountToScroll = containerRef.current.scrollWidth - window.innerWidth;
        
        gsap.to(containerRef.current, {
          x: -amountToScroll - 80, // Pad the end slightly
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", // Pin when section reaches top of viewport
            end: `+=${amountToScroll}`, // Scroll distance equals content width
            pin: true,
            scrub: 1, // Smooth scrubbing
            invalidateOnRefresh: true // Re-calculate on resize
          }
        });
      });

      // Mobile fallback (native CSS scrolling) - no GSAP animation needed, it's handled in CSS
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.collectionSection} ref={sectionRef} id="collection">
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <span className={styles.subheading}>{t('NOTRE GAMME', 'مجموعتنا')}</span>
          <h2 className={styles.title}>
            La <span>Collection</span>
          </h2>
        </div>
        <div className={styles.headerDesc}>
          {t(
            "Faites défiler pour découvrir toute notre gamme de produits naturels du terroir marocain.",
            "قم بالتمرير لاكتشاف مجموعتنا الكاملة من المنتجات الطبيعية من الأراضي المغربية."
          )}
        </div>
      </div>

      <div className={styles.horizontalScrollWrapper}>
        <div className={styles.scrollContainer} ref={containerRef}>
          {collectionData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={item.img}
                  alt={lang === 'ar' ? item.titleAr : item.titleFr}
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardOverlay}></div>
              
              <div className={styles.badge}>
                {lang === 'ar' ? item.tagAr : item.tagFr}
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {lang === 'ar' ? item.titleAr : item.titleFr}
                </h3>
                <p className={styles.cardDesc}>
                  {lang === 'ar' ? item.descAr : item.descFr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
