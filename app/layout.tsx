import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Argan Product by Sami | Coopérative Artisanale",
  description: "Coopérative artisanale spécialisée dans les produits d'argan 100% naturels — huile alimentaire et cosmétique du Souss-Massa, Maroc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <WhatsAppButton />
      </body>
    </html>
  );
}
