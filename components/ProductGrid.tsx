"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ProductGrid.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from './LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    image: "/assets/bottle_3d.png",
    categoryFr: "Cosmétique", categoryAr: "تجميل",
    titleFr: "Huile d'Argan Cosmétique Pur", titleAr: "زيت أركان تجميلي نقي",
    price: "180 DH",
  },
  {
    id: 2,
    image: "/assets/hero_argan_oil.png",
    categoryFr: "Alimentaire", categoryAr: "غذائي",
    titleFr: "Huile d'Argan Torréfiée", titleAr: "زيت أركان محمص",
    price: "240 DH",
  },
  {
    id: 3,
    image: "/assets/cosmetics_products.png",
    categoryFr: "Soin", categoryAr: "عناية",
    titleFr: "Crème Anti-Âge à l'Argan", titleAr: "كريم مضاد للشيخوخة بالأركان",
    price: "120 DH",
  },
  {
    id: 4,
    image: "/assets/hero_argan_oil.png", 
    categoryFr: "Épicerie Fine", categoryAr: "بقالة فاخرة",
    titleFr: "Amlou Beldi aux Amandes", titleAr: "أملو بلدي باللوز",
    price: "150 DH",
  },
  {
    id: 5,
    image: "/assets/bottle_3d.png", 
    categoryFr: "Bain", categoryAr: "استحمام",
    titleFr: "Savon Noir à l'Huile d'Argan", titleAr: "صابون أسود بزيت الأركان",
    price: "60 DH",
  },
  {
    id: 6,
    image: "/assets/about_argan_tree.png", 
    categoryFr: "Nature", categoryAr: "طبيعة",
    titleFr: "Miel Pur de l'Arganier", titleAr: "عسل الأركان النقي",
    price: "300 DH",
  }
];

export default function ProductGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Intro text animation
      gsap.fromTo(`.${styles.introBox}`,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.introBox}`,
            start: 'top 85%',
          }
        }
      );

      // Staggered reveal of products
      gsap.fromTo(`.${styles.productCard}`,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.gridContainer}`,
            start: 'top 85%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="collection" className={styles.productGridSection} ref={containerRef}>
      <div className={styles.introBox}>
        <span className="subheading" style={{ color: 'var(--c-gold)' }}>
          {t("La Boutique", "المتجر")}
        </span>
        <h2 className={styles.introTitle}>
          {t("Notre Collection Complète", "مجموعتنا الكاملة")}
        </h2>
      </div>

      <div className={styles.gridContainer}>
        {products.map((p) => (
          <div key={p.id} className={styles.productCard}>
            <div className={styles.imageWrap}>
              <Image
                src={p.image}
                alt={lang === 'ar' ? p.titleAr : p.titleFr}
                fill
                className={styles.productImg}
              />
            </div>
            <div className={styles.productInfo}>
              <span className={styles.productCategory}>
                {lang === 'ar' ? p.categoryAr : p.categoryFr}
              </span>
              <h3 className={styles.productTitle}>
                {lang === 'ar' ? p.titleAr : p.titleFr}
              </h3>
              <div className={styles.productPrice}>{p.price}</div>
              <span className={styles.addButton}>
                {t('Ajouter au panier', 'أضف إلى السلة')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
