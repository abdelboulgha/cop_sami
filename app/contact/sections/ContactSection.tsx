"use client";

import React, { useRef, useState } from 'react';
import styles from './ContactSection.module.css';
import { useLang } from "@/context/LanguageContext";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function ContactSection() {
  const { t } = useLang();
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      formRef.current?.reset();
    }, 1200);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* ── Left: Info ─────────────────────────────────── */}
          <div className={styles.info}>
            <span className="subheading">{t('Nous Contacter', 'اتصل بنا')}</span>
            <h2 className={styles.infoTitle}>
              {t("Parlons de\nl'Argan", "لنتحدث عن\nالأركان")}
            </h2>
            <div className={styles.infoDivider} />
            <p className={styles.infoDesc}>
              {t(
                "Notre équipe est disponible pour répondre à toutes vos questions sur nos produits, nos partenariats et notre coopérative.",
                "فريقنا متاح للإجابة على جميع أسئلتكم حول منتجاتنا وشراكاتنا وتعاونيتنا."
              )}
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><PhoneIcon /></div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>{t('WhatsApp', 'واتساب')}</span>
                  <a href="https://wa.me/212605925032">+212 605 925 032</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><PinIcon /></div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>{t('Adresse', 'العنوان')}</span>
                  <span>{t("Route d'Agadir, BP 45", 'طريق أكادير، ص.ب 45')}<br/>{t('Souss-Massa, Maroc', 'سوس ماسة، المغرب')}</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><ClockIcon /></div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>{t('Horaires', 'أوقات العمل')}</span>
                  <span>{t('Lun – Sam : 08h00 – 18h00', 'الاثنين – السبت: 08:00 – 18:00')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: WhatsApp Action ────────────────────────────────── */}
          <div className={styles.formWrapper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
            <svg viewBox="0 0 32 32" fill="none" width="64" height="64" style={{ marginBottom: '1rem' }}>
              <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16C2.5 18.375 3.12 20.655 4.254 22.656L2.8 28L8.253 26.574C10.207 27.608 12.443 28.163 16 28.163C23.456 28.163 29.5 22.119 29.5 14.663C29.5 7.207 23.456 1.163 16 1.163V2.5" fill="transparent"/>
              <path d="M25.5 14.5C25.5 8.701 20.799 4 15 4C9.201 4 4.5 8.701 4.5 14.5C4.5 16.822 5.253 18.98 6.551 20.708L5.4 24.6L9.369 23.453C11.026 24.582 12.96 25 15 25C20.799 25 25.5 20.299 25.5 14.5ZM19.782 18.066C19.52 18.803 18.5 19.398 17.75 19.547C17.224 19.652 16.478 19.767 13.923 18.708C10.781 17.405 8.759 14.218 8.6 14.012C8.441 13.805 7.288 12.27 7.288 10.681C7.288 9.092 8.098 8.319 8.431 7.976C8.698 7.701 9.12 7.566 9.52 7.566C9.644 7.566 9.761 7.572 9.863 7.577C10.171 7.591 10.325 7.612 10.531 8.111C10.788 8.732 11.417 10.269 11.493 10.428C11.572 10.587 11.652 10.806 11.547 11.014C11.444 11.214 11.366 11.303 11.212 11.482C11.058 11.661 10.891 11.861 10.75 12C10.596 12.172 10.428 12.358 10.608 12.668C10.788 12.978 11.408 13.992 12.314 14.8B13.485 15.845 14.42 16.162 14.753 16.3B15.036 16.417 15.37 16.39 15.568 16.176C15.822 15.9 16.132 15.432 16.448 14.971C16.678 14.633 16.976 14.591 17.259 14.694C17.542 14.798 19.041 15.536 19.342 15.688C19.642 15.84 19.843 15.917 19.92 16.048C20 16.179 20 16.765 19.782 18.066V18.066Z" fill="#25D366"/>
            </svg>
            <h3 className={styles.infoTitle} style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
              {t("Discutez avec nous", "تحدث معنا")}
            </h3>
            <p className={styles.infoDesc} style={{ margin: '0 auto 2rem', maxWidth: '350px' }}>
              {t("Pour un service client plus rapide et direct, nous avons privilégié le contact exclusif via WhatsApp.", "لخدمة عملاء أسرع، نفضل التواصل المباشر والحصري عبر واتساب.")}
            </p>
            <a 
              href="https://wa.me/212605925032" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.submitBtn} 
              style={{ background: '#25D366', color: '#fff', border: 'none', alignSelf: 'center' }}
            >
              {t("Ouvrir WhatsApp", "افتح واتساب")} <span className={styles.submitArrow}>→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
