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
    image: "/assets/premium_cosmetic.png",
    categoryFr: "Cosmétique", categoryAr: "تجميل",
    titleFr: "Élixir d'Argan Pur", titleAr: "إكسير الأركان النقي",
    descFr: "Pressée à froid selon un savoir-faire ancestral, cette huile pure est un véritable trésor de régénération pour votre peau et vos cheveux.",
    descAr: "معصور على البارد ووفقاً لخبرات الأجداد، هذا الزيت النقي هو كنز حقيقي لتجديد بشرتك وشعرك.",
    price: "240 DH",
    badge: "bestseller",
    featured: true,
  },
  {
    id: 2,
    image: "/assets/premium_culinary.png",
    categoryFr: "Alimentaire", categoryAr: "غذائي",
    titleFr: "Argan Torréfié d'Exception", titleAr: "أركان محمص استثنائي",
    descFr: "Une pression à froid de noix torréfiées offrant une saveur de noisette unique. Le fleuron de la gastronomie berbère.",
    descAr: "عصر على البارد لثمار محمصة تقدم نكهة بندق فريدة. فخر فن الطبخ الأمازيغي.",
    price: "320 DH",
    badge: null,
    featured: false,
  },
  {
    id: 3,
    image: "/assets/premium_amlou.png",
    categoryFr: "Épicerie", categoryAr: "بقالة",
    titleFr: "Amlou Royal au Miel", titleAr: "أملو ملكي بالعسل",
    descFr: "L'alliance parfaite entre l'argan, les amandes grillées et le miel pur. Une texture onctueuse et un goût incomparable.",
    descAr: "المزيج المثالي بين الأركان، اللوز المحمص والعسل النقي. قوام كريمي وطعم لا يضاهى.",
    price: "180 DH",
    badge: "nouveau",
    featured: false,
  },
  {
    id: 4,
    image: "/assets/premium_honey.png",
    categoryFr: "Épicerie", categoryAr: "بقالة",
    titleFr: "Miel d'Arganier Sauvage", titleAr: "عسل الأركان البري",
    descFr: "Récolté au cœur de l'arganeraie du Souss, ce miel rare possède des vertus thérapeutiques et un arôme floral délicat.",
    descAr: "محصود من قلب غابات الأركان في سوس، هذا العسل النادر يتميز بخصائص علاجية ورائحة زهرية رقيقة.",
    price: "350 DH",
    badge: "nouveau",
    featured: false,
  },
  {
    id: 5,
    image: "/assets/premium_soap.png",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Savon Artisanal à l'Argan", titleAr: "صابون حرفي بالأركان",
    descFr: "Saponifié à froid pour préserver les bienfaits de l'huile, ce savon nettoie en douceur tout en nourrissant en profondeur.",
    descAr: "مصاغ على البارد للحفاظ على فوائد الزيت، هذا الصابون ينظف بلطف بينما يغذي بعمق.",
    price: "85 DH",
    badge: null,
    featured: false,
  },
  {
    id: 6,
    image: "/assets/cosmetics_products.png",
    categoryFr: "Cosmétique", categoryAr: "تجميل",
    titleFr: "Crème Multi-Régénérante", titleAr: "كريم متعدد التجديد",
    descFr: "Enrichie en huile d'argan et vitamine E, elle restaure l'élasticité et l'éclat naturel de votre visage.",
    descAr: "غني بزيت الأركان وفيتامين هـ، يعيد المرونة والاشراق الطبيعي لوجهك.",
    price: "290 DH",
    badge: null,
    featured: false,
  },
  {
    id: 7,
    image: "/assets/artisanal_soap.png",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Savon Noir Traditionnel", titleAr: "الصابون الأسود التقليدي",
    descFr: "Le rituel du Hammam à domicile. Purifie la peau et élimine les toxines pour une douceur satinée.",
    descAr: "طقس الحمام في منزلك. ينقي البشرة ويزيل السموم لنعومة حريرية.",
    price: "65 DH",
    badge: null,
    featured: false,
  },
  {
    id: 8,
    image: "/assets/medicinal_plants.png",
    categoryFr: "Épicerie", categoryAr: "بقالة",
    titleFr: "Herbes du Haut-Atlas", titleAr: "أعشاب الأطلس الكبير",
    descFr: "Un mélange de thym, romarin et origan sauvages, séchés à l'ombre pour préserver leurs huiles essentielles.",
    descAr: "مزيج من الزعتر وإكليل الجبل والزعتر البري، مجفف في الظل للحفاظ على زيوتها الأساسية.",
    price: "120 DH",
    badge: null,
    featured: false,
  },
  {
    id: 9,
    image: "/assets/bottle_3d.png",
    categoryFr: "Cosmétique", categoryAr: "تجميل",
    titleFr: "Sérum Cheveux Soyeux", titleAr: "سيروم الشعر الحريري",
    descFr: "Une formule légère qui discipline les frisottis et apporte une brillance intense sans alourdir la chevelure.",
    descAr: "تركيبة خفيفة تضبط التجعد وتضفي لمعاناً مكثفاً دون إثقال الشعر.",
    price: "210 DH",
    badge: "bestseller",
    featured: false,
  },
  {
    id: 10,
    image: "/assets/hero_argan_oil.png",
    categoryFr: "Alimentaire", categoryAr: "غذائي",
    titleFr: "Huile de Table Vierge", titleAr: "زيت طعام بكر",
    descFr: "Idéale pour vos salades ou pour le petit déjeuner avec du pain artisanal. Pureté garantie.",
    descAr: "مثالية لسلطاتك أو للإفطار مع الخبز الحرفي. نقاء مضمون.",
    price: "150 DH",
    badge: null,
    featured: false,
  },
  {
    id: 11,
    image: "/assets/about_argan_tree.png",
    categoryFr: "Coffrets", categoryAr: "صناديق",
    titleFr: "Coffret Découverte Sami", titleAr: "صندوق اكتشاف سامي",
    descFr: "L'essentiel de notre coopérative dans un magnifique écrin artisanal. Le cadeau idéal.",
    descAr: "جوهر تعاونيتنا في علبة حرفية رائعة. الهدية المثالية.",
    price: "580 DH",
    badge: "nouveau",
    featured: false,
  },
  {
    id: 12,
    image: "/assets/women_cooperative.png",
    categoryFr: "Coffrets", categoryAr: "صناديق",
    titleFr: "Coffret Rituel Hammam", titleAr: "صندوق طقوس الحمام",
    descFr: "Tout pour une exfoliation et une hydratation complète selon la tradition marocaine.",
    descAr: "كل شيء لتقشير وترطيب كامل وفقاً للتقاليد المغربية.",
    price: "420 DH",
    badge: null,
    featured: false,
  },
  {
    id: 13,
    image: "/assets/premium_cosmetic.png", 
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Huile de Massage Relaxante", titleAr: "زيت تدليك مريح",
    descFr: "Un mélange apaisant d'argan et d'huiles essentielles pour dénouer les tensions du corps.",
    descAr: "مزيج مهدئ من الأركان والزيوت الأساسية لفك توتر الجسم.",
    price: "190 DH",
    badge: null,
    featured: false,
  },
  {
    id: 14,
    image: "/assets/premium_culinary.png",
    categoryFr: "Alimentaire", categoryAr: "غذائي",
    titleFr: "Argan Gourmet - Edition Limitée", titleAr: "أركان جورميه - إصدار محدود",
    descFr: "Une sélection rigoureuse d'amandons issus de parcelles préservées, pour un goût d'une finesse extrême.",
    descAr: "اختيار دقيق من قطع أراضي محمية، لطعم منتهى الدقة.",
    price: "380 DH",
    badge: "bestseller",
    featured: false,
  },
  {
    id: 15,
    image: "/assets/artisanal_soap.png",
    categoryFr: "Soins", categoryAr: "عناية",
    titleFr: "Gommage Corporel à l'Argan", titleAr: "مقشر الجسم بالأركان",
    descFr: "Une peau lissée et rayonnante grâce aux grains naturels et à l'hydratation intense de l'argan.",
    descAr: "بشرة ناعمة ومشعة بفضل الحبيبات الطبيعية والترطيب المكثف للأركان.",
    price: "140 DH",
    badge: null,
    featured: false,
  },
  {
    id: 16,
    image: "/assets/premium_amlou.png",
    categoryFr: "Épicerie", categoryAr: "بقالة",
    titleFr: "Délice d'Argan & Noix Noir", titleAr: "حلوى الأركان والجوز الأسود",
    descFr: "Une variante audacieuse de l'Amlou avec une touche intense de noix grillées.",
    descAr: "نسخة جريئة من أملو مع لمسة مكثفة من الجوز المحمص.",
    price: "220 DH",
    badge: "nouveau",
    featured: false,
  }
];

const categoriesFr = ["Tous", "Alimentaire", "Cosmétique", "Soins", "Épicerie", "Coffrets"];
const categoriesAr = ["الكل", "غذائي", "تجميل", "عناية", "بقالة", "صناديق"];

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
            <a href="#" className={styles.featuredBtn}>
              {t("Découvrir", "اكتشف")}
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
