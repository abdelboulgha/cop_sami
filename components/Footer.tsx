import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.logo}>
            <Image 
              src="/assets/LOGO-PNG.png" 
              alt="Cop Sami Logo" 
              width={160} 
              height={60} 
            />
          </div>
          <p className={styles.desc}>
            Coopérative artisanale spécialisée dans l'extraction et la production d'huile d'argan au Maroc. L'excellence au service de votre bien-être.
          </p>
          <div className={styles.socials}>
            <div className={styles.socialIcon}>fb</div>
            <div className={styles.socialIcon}>ig</div>
            <div className={styles.socialIcon}>in</div>
          </div>
        </div>

        <div>
          <h4 className={styles.title}>Liens Rapides</h4>
          <div className={styles.links}>
            <a className={styles.link}>Accueil</a>
            <a className={styles.link}>À Propos</a>
            <a className={styles.link}>Nos Produits</a>
            <a className={styles.link}>Contact</a>
          </div>
        </div>

        <div>
          <h4 className={styles.title}>Légal</h4>
          <div className={styles.links}>
            <a className={styles.link}>Mentions Légales</a>
            <a className={styles.link}>Politique de Confidentialité</a>
            <a className={styles.link}>CGV</a>
          </div>
        </div>

        <div>
          <h4 className={styles.title}>Contact</h4>
          <div className={styles.links}>
            <p className={styles.link}>Agadir, Maroc</p>
            <p className={styles.link}>contact@copsami.com</p>
            <p className={styles.link}>+212 500 000 000</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Argan Product by Sami. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
