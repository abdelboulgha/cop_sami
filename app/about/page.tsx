"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '../../components/LanguageProvider';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const { lang, t } = useLang();
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(`.${styles.heroText}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(`.${styles.heroImageImg}`,
        { y: '-10%', filter: 'saturate(0.4)' },
        {
          y: '10%', filter: 'saturate(1.1)', ease: 'none',
          scrollTrigger: {
            trigger: `.${styles.heroHeader}`,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Scroll Fade animations
      gsap.utils.toArray(`.${styles.fadeIn}`).forEach((el: any) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.5, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
          }
        );
      });
      
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.aboutPage} ref={comp}>
      
      {/* ── Hero Header ── */}
      <section className={styles.heroHeader}>
        <div className={styles.heroImageWrap}>
          <Image
            src="/assets/about_argan_tree.png"
            alt="Argan tree landscape"
            fill
            className={styles.heroImageImg}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.heroSubtitle}>
            {t("Notre Histoire", "قصتنا")}
          </div>
          <h1 className={styles.heroTitle}>
            {t("Un Héritage Millénaire.", "تراث يمتد لآلاف السنين.")}
          </h1>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className={styles.section}>
        <div className={`container ${styles.splitBlock} ${styles.fadeIn}`}>
          <div className={styles.textContent}>
            <span className="subheading" style={{ color: 'var(--c-gold)' }}>
              {t("Origines", "الأصول")}
            </span>
            <h2 className={styles.blockTitle}>
              {t("La Naissance d'une Passion", "ولادة شغف")}
            </h2>
            <p className={styles.blockDesc}>
              {t(
                "Née au cœur des vastes terres arides du Souss-Massa, la coopérative Argan Product by Sami est le fruit d'une transmission familiale profonde. Depuis plusieurs générations, nous observons avec respect le prodigieux arganier, cet arbre endémique marocain capable de défier le temps et la sécheresse.",
                "نشأت تعاونية أركان برودكت باي سامي في قلب أراضي سوس ماسة القاحلة الواسعة، وهي ثمرة لانتقال عائلي عميق. منذ عدة أجيال، نراقب باحترام شجرة الأركان المذهلة، هذه الشجرة المغربية المستوطنة القادرة على تحدي الزمن والجفاف."
              )}
            </p>
            <p className={styles.blockDesc}>
              {t(
                "Ce qui a commencé comme une modeste entreprise familiale s'est imposé comme un étendard de la qualité marocaine. Notre exigence absolue nous pousse à ne sélectionner que les meilleurs fruits, garantissant une huile d'une pureté exceptionnelle, tout en préservant le savoir-faire ancestral de l'extraction à froid.",
                "ما بدأ كعمل عائلي متواضع فرض نفسه كمعيار للجودة المغربية. يدفعنا التزامنا المطلق إلى اختيار أفضل الثمار فقط، مما يضمن زيتاً بنقاء استثنائي، مع الحفاظ على المعرفة التقليدية للاستخراج البارد."
              )}
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/assets/background.jpg"
              alt="Argan fruits"
              fill
              className={styles.splitImg}
            />
          </div>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`container ${styles.manifesto} ${styles.fadeIn}`}>
          <h3 className={styles.manifestoText}>
            {t(
              "\"Chaque goutte d'huile que nous produisons raconte l'histoire de notre terre et le dévouement de nos artisanes.\"",
              "\"كل قطرة زيت ننتجها تحكي قصة أرضنا وتفاني حرفياتنا.\""
            )}
          </h3>
          <span className="subheading">
             — Sami, {t("Fondateur", "المؤسس")}
          </span>
        </div>
      </section>

      {/* ── Craftsmanship ── */}
      <section className={styles.section}>
        <div className={`container ${styles.splitBlock} ${styles.splitBlockReverse} ${styles.fadeIn}`}>
          <div className={styles.textContent}>
            <span className="subheading" style={{ color: 'var(--c-gold)' }}>
              {t("Engagement Éthique", "التزام أخلاقي")}
            </span>
            <h2 className={styles.blockTitle}>
              {t("Autonomisation et Durabilité", "التمكين والاستدامة")}
            </h2>
            <p className={styles.blockDesc}>
              {t(
                "Nous ne produisons pas seulement de l'huile, nous cultivons une communauté. En collaborant directement avec les femmes artisanes locales, Argan Product by Sami leur offre une indépendance financière, des conditions de travail dignes et un statut respecté au sein de leurs villages.",
                "نحن لا ننتج الزيت فحسب، بل ننمي مجتمعاً. من خلال التعاون المباشر مع الحرفيات المحليات، تقدم أركان برودكت باي سامي لهن الاستقلال المالي، وظروف عمل لائقة، ومكانة محترمة داخل قراهن."
              )}
            </p>
            <p className={styles.blockDesc}>
              {t(
                "Soucieux de la préservation de notre biodiversité, notre processus de récolte est strictement durable. Aucun arganier n'est endommagé, favorisant la reforestation et la protection contre la désertification du sud marocain.",
                "حرصاً منا على الحفاظ على تنوعنا البيولوجي، فإن عملية الحصاد لدينا مستدامة بدقة. لا يتم إتلاف أي شجرة أركان، مما يعزز إعادة التشجير والحماية من التصحر في جنوب المغرب."
              )}
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/assets/huile1.JPG"
              alt="Artisane marocaine"
              fill
              className={styles.splitImg}
            />
          </div>
        </div>
      </section>
      
    </main>
  );
}
