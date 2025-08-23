import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CreditCard, Euro, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tarifs - TaxiPro | Prix Transparents pour Tous Vos Trajets',
  description: 'Consultez nos tarifs transparents pour transferts aéroports, trajets locaux et services spéciaux. Devis gratuit sur demande. Paiement CB, espèces acceptés.',
};

export default function Tarifs() {
  const exempleTarifs = [
    {
      trajet: "Centre-ville → Aéroport CDG",
      prix: "45€",
      duree: "45 min"
    },
    {
      trajet: "Centre-ville → Gare du Nord",
      prix: "25€",
      duree: "25 min"
    },
    {
      trajet: "Centre-ville → Aéroport Orly",
      prix: "40€",
      duree: "40 min"
    },
    {
      trajet: "Trajet en ville (< 10 km)",
      prix: "15-25€",
      duree: "15-30 min"
    }
  ];

  const moyensPaiement = [
    "Cartes bancaires (Visa, Mastercard)",
    "Espèces",
    "Paiement par entreprise",
    "Chèques (sur accord préalable)"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-700">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
            alt="Tarifs taxi"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tarifs Transparents
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Des prix justes et compétitifs pour tous vos déplacements
          </p>
        </div>
      </section>

      {/* Structure Tarifaire */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos tarifs sont calculés de manière transparente selon la distance et le type de prestation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Tarification Kilométrique</CardTitle>
                <CardDescription>
                  Prix calculé selon la distance réelle du trajet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">1,50€</div>
                <p className="text-sm text-gray-600">par kilomètre</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Prise en Charge</CardTitle>
                <CardDescription>
                  Forfait de prise en charge inclus dans chaque course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-2">3,50€</div>
                <p className="text-sm text-gray-600">forfait de base</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Euro className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Majoration Nocturne</CardTitle>
                <CardDescription>
                  Supplément pour les courses de nuit et dimanche
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-2">+20%</div>
                <p className="text-sm text-gray-600">de 20h à 6h</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exemples de Tarifs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exemples de Tarifs
            </h2>
            <p className="text-xl text-gray-600">
              Quelques exemples pour vous donner une idée de nos prix
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {exempleTarifs.map((exemple, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{exemple.trajet}</span>
                    <span className="text-2xl font-bold text-blue-600">{exemple.prix}</span>
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Durée approximative : {exemple.duree}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">
              Tarifs Indicatifs
            </h3>
            <p className="text-amber-700">
              Ces tarifs sont donnés à titre indicatif. Le prix final dépend du trajet exact, 
              de l'heure et des conditions de circulation. Devis gratuit sur demande.
            </p>
          </div>
        </div>
      </section>

      {/* Moyens de Paiement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Moyens de Paiement
            </h2>
            <p className="text-xl text-gray-600">
              Plusieurs options pour votre confort
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-6 w-6 mr-3 text-blue-600" />
                Paiements Acceptés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {moyensPaiement.map((moyen, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>{moyen}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d'un Devis Personnalisé ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour obtenir un devis gratuit adapté à votre trajet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
              <a href="tel:+33123456789">
                Appelez pour un Devis
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/contact">
                Formulaire de Contact
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}