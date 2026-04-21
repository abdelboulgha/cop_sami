"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useLang } from "@/context/LanguageContext";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className={styles.footer}>
      {/* Top decorative border */}
      <div className={styles.topBorder} />

      <div className="container">
        <div className={styles.grid}>

          {/* ── Brand column ─────────────────────────────── */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/assets/LOGO-PNG.png"
                alt="Argan Product by Sami"
                width={150}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className={styles.brandDesc}>
              {t(
                "Coopérative artisanale dédiée à la production et à la valorisation de l'huile d'argan au cœur du Souss-Massa, Maroc.",
                "تعاونية حرفية مخصصة لإنتاج وتثمين زيت الأركان في قلب سوس ماسة، المغرب."
              )}
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}><FacebookIcon /></a>
              <a href="#" aria-label="WhatsApp" className={styles.socialLink}><WhatsappIcon /></a>
            </div>
          </div>

          {/* ── Navigation column ────────────────────────── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('Navigation', 'تصفح')}</h4>
            <nav className={styles.colLinks}>
              <Link href="/"             className={styles.navLink}>{t('Accueil', 'الرئيسية')}</Link>
              <Link href="/produits"     className={styles.navLink}>{t('Produits', 'المنتجات')}</Link>
              <Link href="/savoir-faire" className={styles.navLink}>{t('Savoir-Faire', 'خبرتنا')}</Link>
              <Link href="/contact"      className={styles.navLink}>{t('Contact', 'اتصل بنا')}</Link>
            </nav>
          </div>

          {/* ── Info column ───────────────────────────────── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('Informations', 'معلومات')}</h4>
            <nav className={styles.colLinks}>
              <Link href="#" className={styles.navLink}>{t('Expédition & Retours', 'الشحن والاسترجاع')}</Link>
              <Link href="#" className={styles.navLink}>{t('Politique de Confidentialité', 'سياسة الخصوصية')}</Link>
              <Link href="#" className={styles.navLink}>{t('Mentions Légales', 'إشعار قانوني')}</Link>
              <Link href="#" className={styles.navLink}>{t('FAQ', 'أسئلة شائعة')}</Link>
            </nav>
          </div>

          {/* ── Contact column ────────────────────────────── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('Contactez-Nous', 'اتصل بنا')}</h4>
            <div className={styles.contactList}>
              <a href="tel:+212605925032" className={styles.contactItem}>
                <span className={styles.contactIcon}>✆</span>
                +212 605 925 032
              </a>
              <a href="mailto:Cooperativealmawlid@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>✉</span>
                Cooperativealmawlid@gmail.com
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⊙</span>
                <span>
                  {t("Route d'Agadir, BP 45", 'طريق أكادير، ص.ب 45')}<br/>
                  {t('Souss-Massa, Maroc', 'سوس ماسة، المغرب')}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} Argan Product by Sami.{' '}
            {t('Tous droits réservés.', 'كل الحقوق محفوظة.')}
          </span>
          <div className={styles.bottomRight}>
            <span className={styles.madeWith}>
              {t('Fait avec excellence au Maroc', 'صُنع بامتياز في المغرب')}
            </span>
            <span className={styles.goldDot}>◆</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
