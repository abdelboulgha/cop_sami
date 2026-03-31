import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Argan Product by Sami | Cooperative Cop Sami",
  description: "Cooperative spécialisée dans les produits d'argan, alimentaire et cosmétique de haute qualité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
