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
      
      // Animate title words up
      tl.to('.anim-word', {
        y: '0%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.15,
        delay: 0.2
      })
      // Fade in description
      .to(`.${styles.description}`, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.5")
      // Fade in buttons
      .to(`.${styles.actions}`, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.6");
      
    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroSection} ref={comp}>
      {/* Background Image Setup - highly opaque for texture */}
      <Image 
        src="/assets/hero_argan_oil.png" 
        alt="Argan Oil Background"
        fill
        className={styles.bgImage}
        priority
      />

      <div className={styles.splineContainer}>
        {/* Placeholder for 3D Argan shape, using a generic interactive shape from Spline */}
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      <div className={`container ${styles.content}`}>
        <div className="badge">100% Naturel & Authentique</div>
        <h1 className={styles.title}>
          <span><span className="anim-word">L'Essence</span></span>
          <span><span className="anim-word">de l'<span className={styles.highlight}>Argan</span></span></span>
          <span><span className="anim-word">Marocain</span></span>
        </h1>
        
        <p className={styles.description}>
          Découvrez la pureté et les bienfaits inégalés de nos produits à base d'argan. 
          De la cosmétique de luxe à l'art culinaire, Cop Sami vous offre l'or du Maroc.
        </p>
        
        <div className={styles.actions}>
          <a href="#products" className="btn btn-primary">Explorer nos produits</a>
          <a href="#about" className="btn btn-outline">Notre Histoire</a>
        </div>
      </div>
    </section>
  );
}
