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

export default function AboutPage() {
  const { lang, t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Reveal (Words slide up)
      gsap.fromTo(`.${styles.heroSubtitle}`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
      );
      
      gsap.fromTo(`.${styles.heroTitle}`,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: 'power3.out', delay: 0.4 }
      );

      // Hero image slight zoom out and parallax
      gsap.fromTo(`.${styles.heroImageWrap} img`,
        { scale: 1.15 },
        { scale: 1, filter: 'saturate(1.2)', duration: 4, ease: 'power2.out' }
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

      // 2. Huge Intro Quote Fade
      gsap.fromTo(`.${styles.quoteText}`,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.introQuote}`, start: 'top 80%' }
        }
      );

      // 3. Split Block Images Parallax Backgrounds
      gsap.utils.toArray(`.${styles.imageParallaxWrap}`).forEach((wrap: any) => {
        gsap.to(wrap, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // 4. Split Block Content Fade In
      gsap.utils.toArray(`.${styles.textContent}`).forEach((el: any) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.5, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 80%' }
          }
        );
      });

      // 5. Values Stagger
      gsap.fromTo(`.${styles.valueCard}`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.valuesGrid}`, start: 'top 85%' }
        }
      );

    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.aboutPage} ref={comp}>
      
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
        </div>
      </section>

      {/* ── 2. Massive Intro Quote ── */}
      <section className={styles.introQuote}>
        <h2 className={styles.quoteText}>
          {t(
            "\"Notre volonté a toujours été claire : honorer les richesses de la terre marocaine en n'offrant que l'excellence pure.\"",
            "\"لطالما كانت إرادتنا واضحة: تكريم ثروات الأرض المغربية من خلال تقديم التميز النقي فقط.\""
          )}
        </h2>
      </section>

      {/* ── 3. Split Block (Origins) ── */}
      <section className={styles.section}>
        <div className={`container ${styles.splitBlock}`}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>
              {t("Les Origines", "الأصول")}
            </span>
            <h2 className={styles.blockTitle}>
              {t("La Naissance d'une Passion", "ولادة شغف")}
            </h2>
            <p className={styles.blockDesc}>
              {t(
                "Au cœur des vastes plaines du Souss-Massa, notre aventure familiale a débuté grâce à une fascination transmise de génération en génération. L'arganier, arbre majestueux défiant les climats les plus arides, est vite devenu bien plus qu'une ressource naturelle pour nous : c'est l'emblème de notre culture.",
                "في قلب سهول سوس ماسة الواسعة، بدأت مغامرتنا العائلية بفضل افتتان انتقل من جيل إلى جيل. شجرة الأركان، تلك الشجرة المهيبة التي تتحدى أشد المناخات جفافاً، سرعان ما أصبحت أكثر بكثير من مجرد مورد طبيعي بالنسبة لنا: إنها شعار ثقافتنا."
              )}
            </p>
            <p className={styles.blockDesc}>
              {t(
                "Fondée sur l'exigence et le savoir-faire méticuleux, la coopérative Argan Product by Sami est l'aboutissement du rêve d'offrir l'élixir précieux du Haut-Atlas au monde entier, en préservant son authenticité d'antan.",
                "تأسست تعاونية أركان برودكت باي سامي على أعلى معايير الجودة والخبرة الدقيقة، وهي تتويج لحلم تقديم إكسير الأطلس الكبير الثمين للعالم بأسره، مع الحفاظ على أصالته القديمة."
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

      {/* ── 4. Values Display ── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesGrid}>
            {valuesList.map((val, idx) => (
              <div key={idx} className={styles.valueCard}>
                <div className={styles.valueNum}>{val.num}</div>
                <h3 className={styles.valueTitle}>
                  {lang === 'ar' ? val.arTitle : val.frTitle}
                </h3>
                <p className={styles.valueDesc}>
                  {lang === 'ar' ? val.arDesc : val.frDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Split Block Reverse (Elie / Products) ── */}
      <section className={styles.section}>
        <div className={`container ${styles.splitBlock} ${styles.splitBlockReverse}`}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>
              {t("L'Art de l'Extraction", "فن الاستخلاص")}
            </span>
            <h2 className={styles.blockTitle}>
              {t("Un Processus Fait Main", "عملية يدوية")}
            </h2>
            <p className={styles.blockDesc}>
              {t(
                "Sélectionnés minutieusement un à un, les fruits sont cassés et broyés très délicatement par des meules de pierre. Ce pressage à froid, hérité de centaines d'années de gestuelle amazighe, empêche l'oxydation de l'huile, la rendant exceptionnellement riche en vitamine E.",
                "يتم اختيار الثمار بعناية فائقة واحدة تلو الأخرى، ثم تُكسر وتُطحن برفق شديد بواسطة أحجار الرحى. هذا العصر البارد، الموروث من مئات السنين من الحركات الأمازيغية، يمنع أكسدة الزيت، مما يجعله غنياً بشكل استثنائي بفيتامين هـ."
              )}
            </p>
            <p className={styles.blockDesc}>
              {t(
                "Chaque bouteille certifie notre engagement auprès du consommateur. Nos produits cosmétiques et alimentaires renferment ainsi une puissance antioxydante naturelle redoutable, célébrée dans le monde entier.",
                "تشهد كل زجاجة على التزامنا تجاه المستهلك. تحتوي منتجاتنا التجميلية والغذائية على قوة مضادة للأكسدة طبيعية هائلة، يُحتفى بها في جميع أنحاء العالم."
              )}
            </p>
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
      
    </main>
  );
}
