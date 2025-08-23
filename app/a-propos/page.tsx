import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Shield, Award, Users, Car, Heart, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À Propos - TaxiPro | Votre Chauffeur Professionnel de Confiance",
  description:
    "Découvrez votre chauffeur professionnel et son véhicule. Plus de 15 ans d'expérience, service de qualité et véhicule confortable pour tous vos déplacements.",
};

export default function APropos() {
  const caracteristiquesVehicule = [
    {
      icon: Car,
      title: "Berline Confortable",
      description: "Véhicule spacieux et climatisé",
    },
    {
      icon: Shield,
      title: "Entretien Régulier",
      description: "Révisions et contrôles fréquents",
    },
    {
      icon: Users,
      title: "4 Passagers",
      description: "Capacité jusqu'à 4 personnes",
    },
    {
      icon: Heart,
      title: "Hygiène Impeccable",
      description: "Nettoyage après chaque course",
    },
  ];

  const certifications = [
    "Licence de transport de personnes",
    "Assurance professionnelle complète",
    "Formation aux premiers secours",
    "Carte professionnelle VTC",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
            alt="Chauffeur professionnel"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            À Propos de TaxiPro
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Votre chauffeur professionnel de confiance depuis plus de 15 ans
          </p>
        </div>
      </section>

      {/* Présentation du Chauffeur */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/31627609/pexels-photo-31627609.jpeg"
                alt="Pierre Dupont - Chauffeur professionnel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pierre Dupont
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Chauffeur Professionnel Certifié
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {
                    "Fort de plus de 15 années d'expérience dans le transport de personnes, je mets un point d'honneur à offrir un service de qualité irréprochable à chacun de mes clients."
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {
                    "Ma priorité : votre confort, votre sécurité et votre ponctualité. Que ce soit pour un rendez-vous professionnel ou un transfert vers l'aéroport, vous pouvez compter sur monprofessionnalisme."
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {
                    "Discret, courtois et toujours à l'écoute, je m'adapte à vos besoins pour faire de chaque trajet une expérience agréable."
                  }
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <span>{"15+ années d'expérience"}</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-3" />
                  <span>Certifié professionnel</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-500 mr-3" />
                  <span>Note moyenne 4.9/5</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-3" />
                  <span>+500 clients satisfaits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Véhicule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Véhicule
            </h2>
            <p className="text-xl text-gray-600">
              Confort, sécurité et élégance pour tous vos déplacements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                alt="Véhicule taxi professionnel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Mercedes Classe E - Berline Premium
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Notre véhicule de prestige allie confort, sécurité et élégance.
                Parfaitement entretenu et régulièrement contrôlé pour votre
                sérénité.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {caracteristiquesVehicule.map((caract, index) => (
                  <div key={index} className="flex items-start">
                    <caract.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{caract.title}</h4>
                      <p className="text-sm text-gray-600">
                        {caract.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">Équipements de Série</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Climatisation bi-zone",
                  "Sièges cuir chauffants",
                  "Wifi gratuit à bord",
                  "Chargeurs téléphone",
                  "Bouteilles d'eau offertes",
                  "Journaux disponibles",
                  "Système audio premium",
                  "Vitres teintées",
                ].map((equipement, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>{equipement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Assurances
            </h2>
            <p className="text-xl text-gray-600">
              Toutes les garanties pour voyager en toute sérénité
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            {"Faites Confiance à l'Expérience"}
          </h2>
          <p className="text-xl mb-8">
            Plus de 15 ans au service de la clientèle, pour votre satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black"
            >
              <a href="tel:+33123456789">Appelez Maintenant</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Prendre Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
