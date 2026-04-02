"use client";

import React, { useEffect, useRef, useState } from 'react';
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
    descFr: "Pressée à froid, riche en vitamine E. Idéale pour la peau et les cheveux.",
    descAr: "معصور على البارد، غني بفيتامين هـ. مثالي للبشرة والشعر.",
    price: "180 DH",
    badge: "bestseller",
    featured: true,
  },
  {
    id: 2,
    image: "/assets/hero_argan_oil.png",
    categoryFr: "Alimentaire", categoryAr: "غذائي",
    titleFr: "Huile d'Argan Torréfiée", titleAr: "زيت أركان محمص",
    descFr: "Saveur de noisette grillée, parfaite pour sublimer vos plats.",
    descAr: "نكهة البندق المحمص، مثالية لإضفاء لمسة مميزة على أطباقك.",
    price: "240 DH",
    badge: null,
    featured: false,
  },
  {
    id: 3,
    image: "/assets/honey_jar.png",
    categoryFr: "Épicerie", categoryAr: "بقالة",
    titleFr: "Miel Naturel de l'Arganier", titleAr: "عسل الأركان الطبيعي",
    descFr: "Récolté dans les forêts d'arganiers, pur et non transformé.",
    descAr: "محصود من غابات الأركان، نقي وغير معالج.",
    price: "300 DH",
    badge: "nouveau",
    featured: false,
  },
  {
    id: 4,
    image: "/assets/artisanal_soap.png",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Savon Noir Artisanal", titleAr: "الصابون الأسود الحرفي",
    descFr: "Formulé à l'huile d'argan, purifiant et nourrissant pour le corps.",
    descAr: "مصاغ بزيت الأركان، منقي ومغذي للجسم.",
    price: "60 DH",
    badge: null,
    featured: false,
  },
  {
    id: 5,
    image: "/assets/cosmetics_products.png",
    categoryFr: "Cosmétique", categoryAr: "تجميل",
    titleFr: "Soins Visage & Corps", titleAr: "عناية الوجه والجسم",
    descFr: "Crème anti-âge enrichie à l'argan. Régénérante et lumineuse.",
    descAr: "كريم مضاد للشيخوخة مُعزَّز بالأركان. مجدد ومضيء.",
    price: "120 DH",
    badge: null,
    featured: false,
  },
  {
    id: 6,
    image: "/assets/medicinal_plants.png",
    categoryFr: "Nature", categoryAr: "طبيعة",
    titleFr: "Plantes Médicinales du Souss", titleAr: "نباتات طبية من سوس",
    descFr: "Thym, romarin et lavande du terroir marocain, séchés naturellement.",
    descAr: "زعتر وإكليل الجبل ولافندر من الأراضي المغربية، مجففة طبيعياً.",
    price: "80 DH",
    badge: "nouveau",
    featured: false,
  },
];

const categoriesFr = ["Tous", "Alimentaire", "Cosmétique", "Soins", "Épicerie", "Nature"];
const categoriesAr = ["الكل", "غذائي", "تجميل", "عناية", "بقالة", "طبيعة"];

export default function ProductGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();
  const [activeFilter, setActiveFilter] = useState(0);

  const featured = products.find(p => p.featured)!;
  const filteredProducts = activeFilter === 0
    ? products.filter(p => !p.featured)
    : products.filter(p => {
        const cat = lang === 'ar' ? p.categoryAr : p.categoryFr;
        const filterLabel = lang === 'ar' ? categoriesAr[activeFilter] : categoriesFr[activeFilter];
        return cat === filterLabel;
      });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.sectionHeader}`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.sectionHeader}`, start: 'top 85%' } }
      );
      gsap.fromTo(`.${styles.featuredBanner}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.featuredBanner}`, start: 'top 82%' } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.productCard}`);
    gsap.fromTo(cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, [activeFilter]);

  return (
    <section className={styles.productGridSection} ref={containerRef}>

      {/* Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>{t("La Boutique", "المتجر")}</span>
        <h2 className={styles.sectionTitle}>{t("Notre Collection Complète", "مجموعتنا الكاملة")}</h2>
        <p className={styles.sectionDesc}>
          {t(
            "Des produits d'exception issus de l'arganier, sélectionnés avec soin par nos artisanes.",
            "منتجات استثنائية مستخرجة من شجرة الأركان، مختارة بعناية من قبل حرفياتنا."
          )}
        </p>
      </div>

      {/* Featured product */}
      <div className={styles.featuredBanner}>
        <div className={styles.featuredImageWrap}>
          <Image
            src={featured.image}
            alt={lang === 'ar' ? featured.titleAr : featured.titleFr}
            fill
            className={styles.featuredImage}
          />
          <div className={styles.featuredImageOverlay} />
        </div>
        <div className={styles.featuredContent}>
          <span className={styles.featuredBadge}>{t("Produit Phare", "المنتج الرئيسي")}</span>
          <span className={styles.featuredCategory}>
            {lang === 'ar' ? featured.categoryAr : featured.categoryFr}
          </span>
          <h3 className={styles.featuredTitle}>
            {lang === 'ar' ? featured.titleAr : featured.titleFr}
          </h3>
          <p className={styles.featuredDesc}>
            {lang === 'ar' ? featured.descAr : featured.descFr}
          </p>
          <div className={styles.featuredFooter}>
            <span className={styles.featuredPrice}>{featured.price}</span>
            <a href="#" className={styles.featuredBtn}>
              {t("Découvrir", "اكتشف")}
              <span className={styles.btnArrow}>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className={styles.filterBar}>
        {categoriesFr.map((_, i) => (
          <button
            key={i}
            className={`${styles.filterBtn} ${activeFilter === i ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(i)}
          >
            {lang === 'ar' ? categoriesAr[i] : categoriesFr[i]}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className={styles.gridContainer}>
        {filteredProducts.length === 0 ? (
          <p className={styles.emptyMsg}>{t("Aucun produit dans cette catégorie.", "لا توجد منتجات في هذه الفئة.")}</p>
        ) : (
          filteredProducts.map((p) => (
            <div key={p.id} className={styles.productCard}>
              <div className={styles.imageWrap}>
                <Image
                  src={p.image}
                  alt={lang === 'ar' ? p.titleAr : p.titleFr}
                  fill
                  className={styles.productImg}
                />
                {p.badge && (
                  <span className={`${styles.badge} ${p.badge === 'nouveau' ? styles.badgeNew : styles.badgeBest}`}>
                    {p.badge === 'nouveau' ? t("Nouveau", "جديد") : t("Bestseller", "الأكثر مبيعاً")}
                  </span>
                )}
                <div className={styles.cardOverlay}>
                  <a href="#" className={styles.overlayBtn}>
                    {t("Découvrir", "اكتشف")}
                    <span className={styles.btnArrow}>→</span>
                  </a>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>
                  {lang === 'ar' ? p.categoryAr : p.categoryFr}
                </span>
                <h3 className={styles.productTitle}>
                  {lang === 'ar' ? p.titleAr : p.titleFr}
                </h3>
                <p className={styles.productDesc}>
                  {lang === 'ar' ? p.descAr : p.descFr}
                </p>
                <div className={styles.productFooter}>
                  <span className={styles.productPrice}>{p.price}</span>
                  <a href="#" className={styles.addButton}>
                    {t('Commander', 'اطلب الآن')}
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </section>
  );
}
