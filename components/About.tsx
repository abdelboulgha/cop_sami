"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });
      
      tl.to(`.${styles.imageWrapper}`, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      })
      .to(`.${styles.textContent}`, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, "-=0.8");
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className={`section ${styles.aboutSection}`} ref={sectionRef}>
      <div className={`container ${styles.grid}`}>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/assets/about_argan_tree.png" 
            alt="Argan tree in Morocco" 
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <div className="badge">L'Histoire de Cop Sami</div>
          <h2 className={styles.heading}>Un Héritage Ancestral,<br/><span className="highlight" style={{color: 'var(--c-green)'}}>Une Passion Moderne</span></h2>
          
          <p className={styles.text}>
            La coopérative <strong>Argan Product by Sami</strong> est née d'une volonté farouche de préserver le savoir-faire marocain autour de l'arbre d'argan, véritable trésor de notre région. Nous allions tradition et innovation pour extraire l'essence la plus pure.
          </p>
          <p className={styles.text}>
            Que ce soit pour l'huile alimentaire aux arômes de noisette torréfiée ou nos cosmétiques haut de gamme, chaque goutte d'huile reflète notre engagement envers la qualité, l'éthique et le respect de la nature.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Biologique</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+50</span>
              <span className={styles.statLabel}>Femmes Artisanes</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Premium</span>
              <span className={styles.statLabel}>Qualité</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
