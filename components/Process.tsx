"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Process.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(`.${styles.step}`);
      
      gsap.to(steps, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: comp.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });
      
    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className={styles.processSection} ref={comp}>
      <div className={styles.bgOrnament}></div>
      
      <div className="container">
        
        <div className={styles.header}>
          <span className="subheading" style={{ color: 'var(--c-surface)' }}>Le Savoir-Faire Éthique</span>
          <h2 className="heading-primary" style={{ color: 'var(--c-surface)' }}>L'Art de l'Extraction</h2>
          <p className={styles.introDesc}>
            Chaque goutte raconte l'histoire du dévouement de nos coopératrices. Découvrez les étapes immuables qui transforment le fruit de l'arganier en or liquide.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h4 className={styles.stepTitle}>La Récolte</h4>
            <p className={styles.stepDesc}>Les fruits mûrs sont récoltés à la main entre l'été et l'automne, dans le respect de l'écosystème endémique de la région d'Agadir.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h4 className={styles.stepTitle}>Le Dépulpage</h4>
            <p className={styles.stepDesc}>Les fruits sont séchés au soleil de la Méditerranée avant que la pulpe ne soit retirée pour révéler le noyau (la noix d'argan).</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h4 className={styles.stepTitle}>Le Concassage</h4>
            <p className={styles.stepDesc}>Étape fastidieuse et traditionnelle, effectuée par nos artisanes. Les noix sont brisées à l'aide de pierres pour extraire les précieux amandons.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>04</div>
            <h4 className={styles.stepTitle}>La Pression</h4>
            <p className={styles.stepDesc}>L'extraction à froid garantie la conservation totale des antioxydants, vitamines et propriétés actives de cette huile miraculeuse.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
