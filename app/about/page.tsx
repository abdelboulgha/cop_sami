"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '../../components/LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

const valuesList = [
  {
    num: "01",
    frTitle: "Pureté Absolue", arTitle: "النقاء المطلق",
    frDesc: "Chaque goutte est pressée à froid pour conserver toutes ses propriétés antioxydantes et naturelles, sans aucun additif.",
    arDesc: "يتم عصر كل قطرة على البارد للحفاظ على جميع خصائصها المضادة للأكسدة والطبيعية، بدون أي إضافات."
  },
  {
    num: "02",
    frTitle: "Équité Artisane", arTitle: "الإنصاف الحرفي",
    frDesc: "Nous collaborons directement avec les femmes de la région du Souss-Massa pour garantir une rémunération juste et digne.",
    arDesc: "نتعاون مباشرة مع نساء منطقة سوس ماسة لضمان أجر عادل ولائق."
  },
  {
    num: "03",
    frTitle: "Héritage Floral", arTitle: "التراث الزهري",
    frDesc: "L'arganier est au centre de notre identité. Nos récoltes éco-responsables préservent cet arbre endémique marocain.",
    arDesc: "شجرة الأركان هي في قلب هويتنا. حصادنا المسؤول بيئياً يحافظ على هذه الشجرة المغربية المستوطنة."
  }
];

const milestones = [
  {
    year: "1990",
    frTitle: "Naissance d'une Vision",
    arTitle: "ولادة رؤية",
    frDesc: "La coopérative est fondée au cœur du Souss-Massa par une famille passionnée par l'arganier et ses trésors millénaires.",
    arDesc: "تأسست التعاونية في قلب سوس ماسة على يد عائلة مفتونة بشجرة الأركان وكنوزها العريقة."
  },
  {
    year: "2005",
    frTitle: "Première Certification",
    arTitle: "أول شهادة اعتماد",
    frDesc: "ECOCERT valide nos pratiques biologiques. Une reconnaissance internationale de notre engagement envers la nature.",
    arDesc: "تعترف إيكوسيرت بممارساتنا العضوية. اعتراف دولي بالتزامنا تجاه الطبيعة."
  },
  {
    year: "2015",
    frTitle: "Gamme Cosmétique",
    arTitle: "خط التجميل",
    frDesc: "Lancement de notre ligne de soins visage et corps — l'or liquide du Maroc au service de la beauté naturelle.",
    arDesc: "إطلاق خط العناية بالوجه والجسم — الذهب السائل في خدمة الجمال الطبيعي."
  },
  {
    year: "2024",
    frTitle: "Rayonnement Mondial",
    arTitle: "الإشعاع العالمي",
    frDesc: "Plus de 50 artisanes, 3 certifications et une présence internationale. Le Souss-Massa parle au monde.",
    arDesc: "أكثر من 50 حرفية، 3 شهادات اعتماد وحضور دولي. سوس ماسة تتحدث إلى العالم."
  }
];

const certifications = [
  {
    icon: "✦",
    frName: "ECOCERT Bio",
    arName: "إيكوسيرت عضوي",
    frDesc: "Agriculture biologique certifiée",
    arDesc: "زراعة عضوية معتمدة"
  },
  {
    icon: "◈",
    frName: "Commerce Équitable",
    arName: "تجارة عادلة",
    frDesc: "Rémunération juste des productrices",
    arDesc: "أجر عادل للمنتجين"
  },
  {
    icon: "❋",
    frName: "Label Maroc",
    arName: "علامة المغرب",
    frDesc: "Origine Souss-Massa garantie",
    arDesc: "أصل سوس ماسة مضمون"
  }
];

const stats = [
  { num: "50+", frLabel: "Artisanes", arLabel: "حرفية" },
  { num: "30+", frLabel: "Ans d'Héritage", arLabel: "عامًا من التراث" },
  { num: "100%", frLabel: "Naturel & Pur", arLabel: "طبيعي ونقي" },
  { num: "3", frLabel: "Certifications", arLabel: "شهادات" },
];

export default function AboutPage() {
  const { lang, t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // Hero
      gsap.fromTo(`.${styles.heroSubtitle}`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(`.${styles.heroTitle}`,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: 'power3.out', delay: 0.4 }
      );
      gsap.fromTo(`.${styles.heroScroll}`,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'power2.out', delay: 1.2 }
      );
      gsap.fromTo(`.${styles.heroImageWrap} img`,
        { scale: 1.15 },
        { scale: 1, duration: 4, ease: 'power2.out' }
      );
      gsap.fromTo(`.${styles.heroImageWrap}`,
        { y: '0%' },
        {
          y: '20%', ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.heroHeader}`,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Quote
      gsap.fromTo(`.${styles.quoteLine}`,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: 'power3.inOut',
          scrollTrigger: { trigger: `.${styles.introQuote}`, start: 'top 80%' } }
      );
      gsap.fromTo(`.${styles.quoteText}`,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.introQuote}`, start: 'top 75%' } }
      );

      // Stats
      gsap.fromTo(`.${styles.statItem}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: `.${styles.statsStrip}`, start: 'top 80%' } }
      );

      // Split blocks
      gsap.utils.toArray(`.${styles.imageParallaxWrap}`).forEach((wrap: any) => {
        gsap.to(wrap, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
      gsap.utils.toArray(`.${styles.textContent}`).forEach((el: any) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 80%' } }
        );
      });

      // Values
      gsap.fromTo(`.${styles.valueCard}`,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.valuesGrid}`, start: 'top 85%' } }
      );

      // Timeline
      gsap.fromTo(`.${styles.timelineTrack}`,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: 'power3.inOut', transformOrigin: 'top center',
          scrollTrigger: { trigger: `.${styles.timelineWrap}`, start: 'top 75%' } }
      );
      gsap.utils.toArray(`.${styles.milestone}`).forEach((el: any, i: number) => {
        gsap.fromTo(el,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
      });

      // Women section
      gsap.fromTo(`.${styles.womenOverlay}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.womenSection}`, start: 'top 60%' } }
      );

      // Certifications
      gsap.fromTo(`.${styles.certCard}`,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: `.${styles.certGrid}`, start: 'top 82%' } }
      );

      // CTA
      gsap.fromTo(`.${styles.ctaInner}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.ctaSection}`, start: 'top 75%' } }
      );

    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.aboutPage} ref={comp}>

      {/* ── 1. Cinematic Hero ── */}
      <section className={styles.heroHeader}>
        <div className={styles.heroImageWrap}>
          <Image
            src="/assets/about_argan_tree.png"
            alt="Argan tree landscape"
            fill
            className={styles.heroImageImg}
            priority
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <div className={styles.heroSubtitle}>
            {t("Notre Histoire", "قصتنا")}
          </div>
          <h1 className={styles.heroTitle}>
            {t("L'Héritage\nMillénaire", "تراث يمتد\nلآلاف السنين")}
          </h1>
          <div className={styles.heroScroll}>
            <span className={styles.heroScrollLine} />
            <span className={styles.heroScrollLabel}>{t("Découvrir", "اكتشف")}</span>
          </div>
        </div>
      </section>

      {/* ── 2. Intro Quote ── */}
      <section className={styles.introQuote}>
        <div className={styles.quoteLine} />
        <h2 className={styles.quoteText}>
          {t(
            "\"Notre volonté a toujours été claire : honorer les richesses de la terre marocaine en n'offrant que l'excellence pure.\"",
            "\"لطالما كانت إرادتنا واضحة: تكريم ثروات الأرض المغربية من خلال تقديم التميز النقي فقط.\""
          )}
        </h2>
        <div className={styles.quoteLine} />
        <p className={styles.quoteAuthor}>{t("— Fondateur, Argan Product by Sami", "— المؤسس، أركان برودكت باي سامي")}</p>
      </section>

      {/* ── 3. Stats Strip ── */}
      <div className={styles.statsStrip}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{lang === 'ar' ? s.arLabel : s.frLabel}</span>
          </div>
        ))}
      </div>

      {/* ── 4. Origins Block ── */}
      <section className={styles.section}>
        <div className={`container ${styles.splitBlock}`}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>{t("Les Origines", "الأصول")}</span>
            <h2 className={styles.blockTitle}>{t("La Naissance d'une Passion", "ولادة شغف")}</h2>
            <p className={styles.blockDesc}>
              {t(
                "Au cœur des vastes plaines du Souss-Massa, notre aventure familiale a débuté grâce à une fascination transmise de génération en génération. L'arganier, arbre majestueux défiant les climats les plus arides, est vite devenu bien plus qu'une ressource naturelle : c'est l'emblème de notre culture.",
                "في قلب سهول سوس ماسة الواسعة، بدأت مغامرتنا العائلية بفضل افتتان انتقل من جيل إلى جيل. شجرة الأركان، تلك الشجرة المهيبة التي تتحدى أشد المناخات جفافاً، سرعان ما أصبحت أكثر بكثير من مجرد مورد طبيعي بالنسبة لنا: إنها شعار ثقافتنا."
              )}
            </p>
            <p className={styles.blockDesc}>
              {t(
                "Fondée sur l'exigence et le savoir-faire méticuleux, la coopérative Argan Product by Sami est l'aboutissement du rêve d'offrir l'élixir précieux du Haut-Atlas au monde entier.",
                "تأسست تعاونية أركان برودكت باي سامي على أعلى معايير الجودة والخبرة الدقيقة، وهي تتويج لحلم تقديم إكسير الأطلس الكبير الثمين للعالم بأسره."
              )}
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageParallaxWrap}>
              <Image
                src="/assets/hero_argan_oil.png"
                alt="Argan extraction process"
                fill
                className={styles.splitImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Values ── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesSectionHeader}>
            <span className={styles.eyebrow}>{t("Nos Engagements", "التزاماتنا")}</span>
            <h2 className={styles.valuesSectionTitle}>{t("Ce qui nous définit", "ما يميزنا")}</h2>
          </div>
          <div className={styles.valuesGrid}>
            {valuesList.map((val, idx) => (
              <div key={idx} className={styles.valueCard}>
                <div className={styles.valueNum}>{val.num}</div>
                <h3 className={styles.valueTitle}>{lang === 'ar' ? val.arTitle : val.frTitle}</h3>
                <p className={styles.valueDesc}>{lang === 'ar' ? val.arDesc : val.frDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Timeline ── */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timelineHeader}>
            <span className={styles.eyebrow}>{t("Notre Parcours", "مسيرتنا")}</span>
            <h2 className={styles.blockTitle}>{t("Une Histoire Gravée dans le Temps", "تاريخ محفور في الزمن")}</h2>
          </div>
          <div className={styles.timelineWrap}>
            <div className={styles.timelineTrack} />
            {milestones.map((m, i) => (
              <div key={i} className={`${styles.milestone} ${i % 2 === 0 ? styles.milestoneLeft : styles.milestoneRight}`}>
                <div className={styles.milestoneDot} />
                <div className={styles.milestoneCard}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <h3 className={styles.milestoneTitle}>{lang === 'ar' ? m.arTitle : m.frTitle}</h3>
                  <p className={styles.milestoneDesc}>{lang === 'ar' ? m.arDesc : m.frDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Women Artisans ── */}
      <section className={styles.womenSection}>
        <div className={styles.womenImageWrap}>
          <Image
            src="/assets/women_cooperative.png"
            alt="Femmes artisanes de la coopérative"
            fill
            className={styles.womenImage}
          />
        </div>
        <div className={styles.womenOverlayBg} />
        <div className={styles.womenOverlay}>
          <span className={styles.eyebrowLight}>{t("Le Cœur de la Coopérative", "قلب التعاونية")}</span>
          <h2 className={styles.womenTitle}>
            {t("50+ Artisanes,\n1 Mission", "أكثر من 50 حرفية،\nمهمة واحدة")}
          </h2>
          <p className={styles.womenDesc}>
            {t(
              "Les femmes du Souss-Massa sont l'âme véritable de notre coopérative. Leur savoir-faire ancestral, leur passion et leur travail quotidien transforment chaque fruit d'argan en un trésor d'une pureté absolue.",
              "نساء سوس ماسة هن الروح الحقيقية لتعاونيتنا. خبرتهن الموروثة وشغفهن وعملهن اليومي يحولان كل ثمرة أركان إلى كنز من النقاء المطلق."
            )}
          </p>
          <div className={styles.womenDivider} />
          <p className={styles.womenQuote}>
            {t(
              "\"Chaque goutte d'huile porte l'empreinte de nos mains et l'amour de notre terre.\"",
              "\"كل قطرة زيت تحمل بصمة أيدينا وحب أرضنا.\""
            )}
          </p>
        </div>
      </section>

      {/* ── 8. Extraction Process Block ── */}
      <section className={styles.section}>
        <div className={`container ${styles.splitBlock} ${styles.splitBlockReverse}`}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>{t("L'Art de l'Extraction", "فن الاستخلاص")}</span>
            <h2 className={styles.blockTitle}>{t("Un Processus Fait Main", "عملية يدوية")}</h2>
            <p className={styles.blockDesc}>
              {t(
                "Sélectionnés minutieusement un à un, les fruits sont cassés et broyés très délicatement par des meules de pierre. Ce pressage à froid, hérité de centaines d'années de gestuelle amazighe, empêche l'oxydation de l'huile, la rendant exceptionnellement riche en vitamine E.",
                "يتم اختيار الثمار بعناية فائقة واحدة تلو الأخرى، ثم تُكسر وتُطحن برفق شديد بواسطة أحجار الرحى. هذا العصر البارد، الموروث من مئات السنين من الحركات الأمازيغية، يمنع أكسدة الزيت، مما يجعله غنياً بشكل استثنائي بفيتامين هـ."
              )}
            </p>
            <ul className={styles.processList}>
              <li className={styles.processItem}>
                <span className={styles.processNum}>01</span>
                <span>{t("Récolte manuelle des fruits", "الحصاد اليدوي للثمار")}</span>
              </li>
              <li className={styles.processItem}>
                <span className={styles.processNum}>02</span>
                <span>{t("Séchage au soleil naturel", "التجفيف تحت الشمس الطبيعية")}</span>
              </li>
              <li className={styles.processItem}>
                <span className={styles.processNum}>03</span>
                <span>{t("Pressage à froid à la meule", "العصر البارد بالرحى")}</span>
              </li>
              <li className={styles.processItem}>
                <span className={styles.processNum}>04</span>
                <span>{t("Filtration et conditionnement", "الترشيح والتعبئة")}</span>
              </li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageParallaxWrap}>
              <Image
                src="/assets/cosmetics_products.png"
                alt="Cosmetic products"
                fill
                className={styles.splitImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Certifications ── */}
      <section className={styles.certSection}>
        <div className="container">
          <div className={styles.certHeader}>
            <span className={styles.eyebrow}>{t("Nos Garanties", "ضماناتنا")}</span>
            <h2 className={styles.blockTitle}>{t("Certifié, Contrôlé, Authentique", "معتمد، مراقب، أصيل")}</h2>
          </div>
          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.certCard}>
                <div className={styles.certIcon}>{cert.icon}</div>
                <h3 className={styles.certName}>{lang === 'ar' ? cert.arName : cert.frName}</h3>
                <p className={styles.certDesc}>{lang === 'ar' ? cert.arDesc : cert.frDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <span className={styles.eyebrowLight}>{t("Découvrez Notre Collection", "اكتشف مجموعتنا")}</span>
          <h2 className={styles.ctaTitle}>
            {t("Vivez l'Expérience\nArgan Product", "عش تجربة\nأركان برودكت")}
          </h2>
          <p className={styles.ctaDesc}>
            {t(
              "De la terre du Souss-Massa à votre table, chaque produit est une promesse de pureté et d'authenticité.",
              "من أرض سوس ماسة إلى طاولتك، كل منتج وعد بالنقاء والأصالة."
            )}
          </p>
          <a href="/produits" className={styles.ctaBtn}>
            {t("Explorer les Produits", "استكشف المنتجات")}
          </a>
        </div>
      </section>

    </div>
  );
}
