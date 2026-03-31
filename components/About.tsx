"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro quote trigger
      gsap.fromTo(`.${styles.introQuote}`, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          ease: "power3.out", 
          duration: 1.5,
          scrollTrigger: {
            trigger: `.${styles.introQuote}`,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Main about section trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.aboutContent}`,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
      
      tl.to(`.${styles.imgWrapper}`, {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: 'power4.out',
        clipPath: 'inset(0% 0% 0% 0%)'
      })
      .to(`.${styles.textCol}`, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out'
      }, "-=1.2");
      
    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className={`section ${styles.about}`} ref={comp}>
      <div className="container">
        
        {/* Editorial introductory quote centered */}
        <div className={styles.introText}>
          <span className="subheading">L'Essence Pure</span>
          <p className={styles.introQuote}>
            C'est dans les terres arides du <span className={styles.highlight}>Souss-Massa</span> que réside l'un des secrets les plus précieux du monde : L'Arganier.
          </p>
        </div>

        {/* 2 Cols About Details */}
        <div className={`grid-2 ${styles.aboutContent}`}>
          <div className={styles.imageCol}>
            <div className={styles.imgWrapper}>
              <Image 
                src="/assets/about_argan_tree.png" 
                alt="Paysage marocain, Arganier"
                fill
                className={styles.img}
              />
            </div>
            {/* Overlapping text box for that asymmetrical editorial layout */}
            <div className={styles.floatingCard}>
              <div className={styles.cardTitle}>25+</div>
              <div className={styles.cardDesc}>Années<br/>d'Excellence</div>
            </div>
          </div>
          
          <div className={styles.textCol}>
            <span className="subheading">Notre Histoire</span>
            <h2 className={`heading-primary ${styles.title}`}>De la tradition à la sophistication.</h2>
            
            <p className={styles.paragraph}>
              La coopérative <strong>Argan Product by Sami</strong> incarne le parfait équilibre entre la sagesse ancestrale marocaine et l'excellence intemporelle. Forts d'un engagement inébranlable, nous préservons l'écosystème exceptionnel de l'arganeraie.
            </p>
            
            <p className={styles.paragraph}>
              L'extraction de notre huile est un véritable rituel. Chaque amandon est soigneusement sélectionné par nos artisanes dévouées, conférant ainsi à chaque goutte une qualité d'une rareté incomparable, certifiée biologique mondialement.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Naturel & Bio</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>50+</span>
                <span className={styles.statLabel}>Artisanes</span>
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="#process" className="btn btn-primary">Découvrir le Processus</a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
