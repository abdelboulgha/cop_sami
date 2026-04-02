import HeroCinematic from '../../components/HeroCinematic';
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
      <HeroCinematic
        eyebrow="Nos Produits"
        eyebrowAr="منتجاتنا"
        title={
          <>
            L&apos;Or Vert<br />du Maroc
          </>
        }
        imageSrc="/assets/premium_cosmetic.png" // You can change this to any hero image
      />
      <ProductsInfo />
      <ProductGrid />
      <Cta />
    </>
  );
}
