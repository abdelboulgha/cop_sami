"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ProductsInfo.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsInfo() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(`.${styles.card}`);
      
      gsap.fromTo(cards, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className={`section ${styles.productsSection}`} ref={containerRef}>
      <div className="container">
        
        <div className={styles.header}>
          <span className="subheading">Collections d'Excellence</span>
          <h2 className="heading-primary">Les déclinaisons<br/>de l'<span style={{fontStyle: 'italic', fontWeight: '300', color: 'var(--c-green)'}}>Or Vert</span></h2>
          <p className={styles.introDesc}>
            Une approche holistique pour votre bien-être. Profitez de nos procédés d’extraction uniques, qu'il s'agisse de délicatesse culinaire ou de soins corporels.
          </p>
        </div>

        <div className={styles.productGrid}>
          
          <div className={styles.card}>
            <div className={styles.imgFrame}>
              <Image 
                src="/assets/hero_argan_oil.png" 
                alt="Argan Alimentaire 100% Bio" 
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>Gastronomie</span>
              <h3 className={styles.cardTitle}>L'Huile Torréfiée</h3>
              <p className={styles.cardDesc}>
                Nos amandons sont doucement grillés pour libérer un parfum léger de noisette grillée. Parfaite pour assaisonner vos salades ou créer le fameux Amlou marocain traditionnel.
              </p>
              <a href="#" className={styles.exploreBtn}>Découvrir l'Alimentaire</a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imgFrame}>
              <Image 
                src="/assets/cosmetics_products.png" 
                alt="Argan Cosmétique Pur" 
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>Beauté & Soins</span>
              <h3 className={styles.cardTitle}>L'Élixir Cosmétique</h3>
              <p className={styles.cardDesc}>
                Pressée à froid à partir d'amandons non torréfiés. Gorgée de vitamines E et d'acides gras essentiels, c'est l'hydratant anti-âge par excellence pour la peau, les cheveux et les ongles.
              </p>
              <a href="#" className={styles.exploreBtn}>En savoir plus</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
