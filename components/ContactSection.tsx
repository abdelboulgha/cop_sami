"use client";

import React, { useRef, useState } from 'react';
import styles from './ContactSection.module.css';
import { useLang } from './LanguageProvider';

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
                  <span className={styles.contactLabel}>{t('Téléphone', 'الهاتف')}</span>
                  <a href="tel:+212600000000">+212 600 000 000</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MailIcon /></div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>{t('Email', 'البريد')}</span>
                  <a href="mailto:contact@argan-sami.ma">contact@argan-sami.ma</a>
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

          {/* ── Right: Form ────────────────────────────────── */}
          <div className={styles.formWrapper}>
            {sent ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✦</span>
                <h3>{t('Message envoyé !', 'تم إرسال الرسالة!')}</h3>
                <p>{t("Merci pour votre message. Nous vous répondrons sous 24h.", "شكرًا لرسالتكم. سنرد عليكم خلال 24 ساعة.")}</p>
                <button className={styles.resetBtn} onClick={() => setSent(false)}>
                  {t('Envoyer un autre message', 'إرسال رسالة أخرى')}
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('Prénom', 'الاسم الأول')}</label>
                    <input className={styles.input} type="text" required placeholder={t('Votre prénom', 'اسمك الأول')} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t('Nom', 'اللقب')}</label>
                    <input className={styles.input} type="text" required placeholder={t('Votre nom', 'لقبك')} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('Email', 'البريد الإلكتروني')}</label>
                  <input className={styles.input} type="email" required placeholder={t('votre@email.com', 'بريدك@الإلكتروني.com')} />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('Sujet', 'الموضوع')}</label>
                  <select className={styles.input}>
                    <option value="">{t('Choisir un sujet…', 'اختر موضوعًا…')}</option>
                    <option value="produit">{t('Renseignement produit', 'استفسار عن منتج')}</option>
                    <option value="commande">{t('Commande & livraison', 'طلب وتوصيل')}</option>
                    <option value="partenariat">{t('Partenariat', 'شراكة')}</option>
                    <option value="autre">{t('Autre', 'أخرى')}</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>{t('Message', 'الرسالة')}</label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    required
                    rows={5}
                    placeholder={t('Votre message…', 'رسالتك…')}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading
                    ? t('Envoi en cours…', 'جارٍ الإرسال…')
                    : t('Envoyer le message', 'إرسال الرسالة')
                  }
                  {!loading && <span className={styles.submitArrow}>→</span>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
