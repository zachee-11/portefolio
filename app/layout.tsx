import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imene BENABBAS | Portfolio RH",
  description:
    "Étudiante en BUT GEA - Gestion et Pilotage des Ressources Humaines",
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