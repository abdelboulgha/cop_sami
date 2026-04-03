"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  '/assets/hero_argan_oil.png', 
  '/assets/honey_jar.png',      
  '/assets/artisanal_soap.png', 
  '/assets/medicinal_plants.png', 
  '/assets/cosmetics_products.png', 
  '/assets/premium_amlou.png', 
  '/assets/premium_cosmetic.png', 
];

export default function Gallery() {
  const comp = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(`.${styles.header}`,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: `.${styles.header}`, start: 'top 85%' },
        }
      );

      // Grid items stagger reveal
      gsap.fromTo(`.${styles.galleryItem}`,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: {
            trigger: `.${styles.galleryGrid}`,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.gallerySection} ref={comp} id="galerie">
      <div className={styles.header}>
        <span className={styles.subheading}>{t('Notre Galerie', 'معرضنا')}</span>
        <h2 className={styles.title}>
          Au <span>Cœur</span> du Terroir
        </h2>
      </div>

      <div className={styles.galleryGrid}>
        {galleryImages.map((src, i) => (
          <div key={i} className={styles.galleryItem}>
            <Image
              src={src}
              alt={`Galerie image ${i + 1}`}
              fill
              className={styles.galleryImage}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
