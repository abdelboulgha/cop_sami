"use client";

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Collection.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const collectionData = [
  {
    id: 1,
    tagFr: 'ALIMENTAIRE',
    tagAr: 'غذائي',
    titleFr: "Huile d'Argan",
    titleAr: "زيت الأرغان",
    descFr: "Pure, pressée à froid. Idéale pour la cuisine et la table.",
    descAr: "نقي، معصور على البارد. مثالي للطهي والمائدة.",
    img: '/assets/huile_amande_amere.jpeg',
  },
  {
    id: 2,
    tagFr: 'SOINS',
    tagAr: 'عناية',
    titleFr: "Huile de Noix de Coco",
    titleAr: "زيت جوز الهند",
    descFr: "Multi-usage : hydrate, nourrit et protège naturellement.",
    descAr: "متعدد الاستخدامات: يرطب ويغذي ويحمي بشكل طبيعي.",
    img: '/assets/huile_ricin.jpeg',
  },
  {
    id: 3,
    tagFr: 'SOINS',
    tagAr: 'عناية',
    titleFr: "Huile d'Amande Amère",
    titleAr: "زيت اللوز المر",
    descFr: "Unifie le teint et adoucit la peau en profondeur.",
    descAr: "يوحد البشرة ويلطفها بعمق.",
    img: '/assets/huile_sesame.jpeg',
  },
  {
    id: 4,
    tagFr: 'COSMÉTIQUE',
    tagAr: 'تجميل',
    titleFr: "Huile d'Amande Douce",
    titleAr: "زيت اللوز الحلو",
    descFr: "Douce et pénétrante, hydrate peau et cheveux.",
    descAr: "ناعم وسريع الامتصاص، يرطب البشرة والشعر.",
    img: '/assets/huile_amande_douce.jpeg',
  },
  {
    id: 5,
    tagFr: 'SOINS',
    tagAr: 'عناية',
    titleFr: "Huile de Sésame",
    titleAr: "زيت السمسم",
    descFr: "Riche en antioxydants et vitamine E, nourrit et protège.",
    descAr: "غني بمضادات الأكسدة وفيتامين هـ، يغذي البشرة ويحميها.",
    img: '/assets/huile_argan_alimentaire.jpeg',
  },
  {
    id: 6,
    tagFr: 'SOINS',
    tagAr: 'عناية',
    titleFr: "Huile de Ricin Pure",
    titleAr: "زيت الخروع النقي",
    descFr: "Fortifie cheveux, cils et sourcils. Hydratation intense.",
    descAr: "يقوي الشعر والرموش والحواجب. ترطيب مكثف.",
    img: '/assets/huile_coco.jpeg',
  },
];

export default function Collection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  useLayoutEffect(() => {
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
