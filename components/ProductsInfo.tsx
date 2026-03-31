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
      const cards = document.querySelectorAll(`.${styles.card}`);
      
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className={`section ${styles.productsSection}`} ref={containerRef}>
      <div className="container">
        
        <div className={styles.header}>
          <div className="badge">Gamme d'Exception</div>
          <h2 className={styles.heading}>L'Or Liquide <span style={{color: 'var(--c-green)'}}>décliné</span></h2>
          <p>
            Que ce soit pour sublimer vos plats avec des arômes subtils ou pour sublimer votre peau avec une hydratation profonde, nos produits répondent aux plus hautes exigences.
          </p>
        </div>

        <div className={styles.cards}>
          
          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              {/* Fallback image if cosmetics_products is not fully loaded yet, but we generated it */}
              <Image 
                src="/assets/hero_argan_oil.png" 
                alt="Argan Alimentaire" 
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Gamme Alimentaire</h3>
              <p className={styles.cardDesc}>
                Huile d'argan torréfiée 100% bio. Un goût raffiné de noisette et d'amande pour accompagner vos salades, couscous, et tagines. Amlou traditionnel au miel.
              </p>
              <a href="#" className={styles.cardAction}>Découvrir la saveur →</a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <Image 
                src="/assets/cosmetics_products.png" 
                alt="Argan Cosmétique" 
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Gamme Cosmétique</h3>
              <p className={styles.cardDesc}>
                Huile pure non torréfiée, riche en vitamine E et antioxydants. Parfaite pour le soin de la peau, des cheveux et des ongles. Secret de beauté millénaire.
              </p>
              <a href="#" className={styles.cardAction}>Révéler votre beauté →</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
