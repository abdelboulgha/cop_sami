"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ProductGrid.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    image: "/assets/huile_amande_amere.jpeg",
    categoryFr: "Alimentaire", categoryAr: "غذائي",
    titleFr: "Huile d'Argan Alimentaire", titleAr: "زيت الأرغان للأكل",
    descFr: "Huile d'argan pure pressée à froid. Idéale pour la table et la cuisine marocaine. Disponible en 250ml et 500ml, certifiée ONSSA.",
    descAr: "زيت أرغان نقي معصور على البارد. مثالي للمائدة والطهي المغربي. متوفر بـ 250 مل و 500 مل، معتمد من ONSSA.",
    price: "150 DH",
    badge: "bestseller",
  },
  {
    id: 2,
    image: "/assets/huile_ricin.jpeg",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Huile de Noix de Coco", titleAr: "زيت جوز الهند",
    descFr: "Cocos Nucifera oil. Multi-usage : hydrate, nourrit et protège naturellement peau et cheveux au quotidien.",
    descAr: "زيت جوز الهند. متعدد الاستخدامات: يرطب ويغذي ويحمي البشرة والشعر يومياً بشكل طبيعي.",
    price: "85 DH",
    badge: null,
  },
  {
    id: 3,
    image: "/assets/huile_sesame.jpeg",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Huile d'Amande Amère", titleAr: "زيت اللوز المر",
    descFr: "Prunus amygdalus amara kernel oil. Précieuse pour unifier le teint, adoucir la peau et atténuer les taches.",
    descAr: "زيت نواة اللوز المر. ثمين لتوحيد البشرة وترطيبها وتخفيف البقع الداكنة.",
    price: "120 DH",
    badge: "nouveau",
  },
  {
    id: 4,
    image: "/assets/huile_amande_douce.jpeg",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Huile de Sésame", titleAr: "زيت السمسم",
    descFr: "Sesamum indicum seed oil. Riche en antioxydants et vitamine E, elle nourrit et protège la peau naturellement.",
    descAr: "زيت بذور السمسم. غني بمضادات الأكسدة وفيتامين هـ، يغذي البشرة ويحميها بشكل طبيعي.",
    price: "95 DH",
    badge: null,
  },
  {
    id: 5,
    image: "/assets/huile_argan_alimentaire.jpeg",
    categoryFr: "Cosmétique", categoryAr: "تجميل",
    titleFr: "Huile d'Amande Douce", titleAr: "زيت اللوز الحلو",
    descFr: "Prunus Amygdalus dulcis. Douce et pénétrante, elle hydrate et nourrit en profondeur la peau et les cheveux.",
    descAr: "زيت اللوز الحلو. ناعم وسريع الامتصاص، يرطب ويغذي البشرة والشعر بعمق.",
    price: "110 DH",
    badge: "bestseller",
  },
  {
    id: 6,
    image: "/assets/huile_coco.jpeg",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Huile de Ricin Pure", titleAr: "زيت الخروع النقي",
    descFr: "Ricinus communis seed oil. Reconnue pour fortifier les cheveux, les cils et les sourcils. Hydratation intense et durable.",
    descAr: "زيت الخروع النقي. معروف بتقوية الشعر والرموش والحواجب. ترطيب مكثف ودائم.",
    price: "89 DH",
    badge: "nouveau",
  },
];

const categoriesFr = ["Tous", "Alimentaire", "Cosmétique", "Soins"];
const categoriesAr = ["الكل", "غذائي", "تجميل", "عناية"];

export default function ProductGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();
  const [activeFilter, setActiveFilter] = useState(0);

  const filteredProducts = activeFilter === 0
    ? products
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
            "Des huiles végétales pures, pressées à froid et certifiées par notre coopérative Al Mawlid.",
            "زيوت نباتية نقية، معصورة على البارد ومعتمدة من تعاونيتنا المولد."
          )}
        </p>
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
                  <a
                    href={`https://wa.me/212605925032?text=${encodeURIComponent(
                      lang === 'ar'
                        ? `مرحباً، أريد الطلب: ${p.titleAr}`
                        : `Bonjour, je souhaite commander : ${p.titleFr}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayBtn}
                  >
                    {t("Commander", "اطلب الآن")}
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
                  <a
                    href={`https://wa.me/212605925032?text=${encodeURIComponent(
                      lang === 'ar'
                        ? `مرحباً، أريد الطلب: ${p.titleAr}`
                        : `Bonjour, je souhaite commander : ${p.titleFr}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.addButton}
                  >
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
