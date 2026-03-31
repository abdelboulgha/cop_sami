"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Image reveal
      tl.to(`.${styles.imgWrapper}`, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        scale: 1,
        duration: 1.5,
        ease: 'power4.inOut'
      })
      .from(`.${styles.mainImg}`, {
        scale: 1.15,
        duration: 1.5,
        ease: 'power3.out'
      }, "-=1.5")
      // Texts coming up
      .to(`.${styles.animText}`, {
        y: '0%',
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1
      }, "-=0.8")
      // Extra details fade
      .to(`.${styles.desc}, .${styles.actions}, .${styles.badge}`, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }, "-=0.8");
      
    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={`container ${styles.hero}`} ref={comp}>
      <div className={styles.heroGrid}>
        
        {/* Left Side: Dramatic Typography */}
        <div className={styles.textColumn}>
          <div className={styles.badge} style={{ opacity: 0, transform: 'translateY(15px)' }}>
            Héritage Marocain — Depuis 1998
          </div>
          
          <h1 className={`heading-display ${styles.title}`}>
            <span className={styles.titleRow}>
              <span className={styles.animText}>L'Or</span>
            </span>
            <span className={styles.titleRow}>
              <span className={styles.animText}>Liquide <span className={styles.italic}>du Maroc</span></span>
            </span>
          </h1>
          
          <p className={styles.desc}>
            Découvrez la pureté absolue. Argan Product by Sami extrait l'essence la plus rare des forêts du Souss pour sublimer votre alimentation et révéler votre beauté naturelle.
          </p>
          
          <div className={styles.actions}>
            <a href="#products" className="btn btn-primary">Découvrir la Gamme</a>
            <a href="#about" className="btn btn-outline">Notre Savoir-Faire</a>
          </div>
        </div>

        {/* Right Side: Editorial Visual */}
        <div className={styles.visualColumn}>
          <div className={styles.imgWrapper} style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}>
            <Image 
              src="/assets/hero_argan_oil.png" 
              alt="Argan Oil Cinematic"
              fill
              priority
              className={styles.mainImg}
            />
          </div>
          
          <div className={styles.splineLayer}>
            {/* Elegant 3D primitive geometry as a refined abstraction of the argan nut / oil drop */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
