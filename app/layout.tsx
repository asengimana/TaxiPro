import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaxiPro - Service de Taxi Professionnel | Transferts Aéroports & Trajets Locaux',
  description: 'Service de taxi professionnel disponible 24h/7j. Transferts aéroports, trajets locaux, transport médical. Réservation simple et rapide. Chauffeur expérimenté et véhicule confortable.',
  keywords: ['taxi', 'transfert aéroport', 'transport', 'chauffeur', 'réservation', 'trajets locaux'],
  openGraph: {
    title: 'TaxiPro - Votre Service de Taxi de Confiance',
    description: 'Service de taxi professionnel 24h/7j. Réservez facilement vos trajets.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}