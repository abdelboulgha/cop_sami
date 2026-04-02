import PageHero from '../../components/PageHero';
import ProductsInfo from '../../components/ProductsInfo';
import ProductGrid from '../../components/ProductGrid';
import Cta from '../../components/Cta';

export const metadata = {
  title: 'Nos Produits | Argan Product by Sami',
  description: "Découvrez notre gamme d'huiles d'argan — alimentaire et cosmétique — issues de notre coopérative artisanale du Souss-Massa.",
};

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos Produits"
        eyebrowAr="منتجاتنا"
        title="L'Or Vert du Maroc"
        titleAr="الذهب الأخضر للمغرب"
        subtitle="Huile alimentaire et cosmétique 100% naturelle, extraite artisanalement par nos coopératrices du Souss-Massa."
        subtitleAr="زيت غذائي وتجميلي طبيعي 100%، مستخرج يدويًا من قبل حرفياتنا في سوس ماسة."
      />
      <ProductsInfo />
      <ProductGrid />
      <Cta />
    </>
  );
}
