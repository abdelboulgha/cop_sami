import PageHero from '../../components/PageHero';
import About from '../../components/About';
import Cta from '../../components/Cta';

export const metadata = {
  title: 'Notre Savoir-Faire | Argan Product by Sami',
  description: "Découvrez l'histoire de notre coopérative et le processus artisanal d'extraction de l'huile d'argan du Souss-Massa, Maroc.",
};

export default function SavoirFairePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre Savoir-Faire"
        eyebrowAr="خبرتنا"
        title="L'Art de l'Argan"
        titleAr="فن الأركان"
        subtitle="Un héritage millénaire transmis par les femmes du Souss-Massa, au cœur du Maroc."
        subtitleAr="إرث عريق تنقله نساء سوس ماسة في قلب المغرب."
      />
      <About />
      <Cta />
    </>
  );
}
