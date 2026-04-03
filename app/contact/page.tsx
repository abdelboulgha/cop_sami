import PageHero from "@/app/contact/sections/PageHero";
import ContactSection from "@/app/contact/sections/ContactSection";

export const metadata = {
  title: 'Contact | Argan Product by Sami',
  description: "Contactez la coopérative Argan Product by Sami — questions sur nos produits, partenariats et commandes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        eyebrowAr="اتصل بنا"
        title="Écrivez-nous"
        titleAr="تواصل معنا"
        subtitle="Une question, une commande, un partenariat ? Notre équipe vous répond sous 24h."
        subtitleAr="سؤال، طلب، أو شراكة؟ فريقنا يجيبكم خلال 24 ساعة."
      />
      <ContactSection />
    </>
  );
}
