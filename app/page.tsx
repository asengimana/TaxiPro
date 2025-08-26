"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Shield, Phone, Star, MapPin, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg"
            alt="Taxi professionnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            TaxiPro
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Votre service de taxi professionnel disponible 24h/7j
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-lg px-8 py-4 h-auto"
            >
              <a href="tel:+33123456789">
                <Phone className="mr-2 h-5 w-5" />
                Appeler Maintenant
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 h-auto"
            >
              <Link href="/contact">Réservation ou Devis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Points Forts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir TaxiPro ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un service de qualité qui met votre confort et votre sécurité au
              premier plan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Ponctualité Garantie
              </h3>
              <p className="text-gray-600">
                {
                  "Nous nous engageons à être à l'heure pour tous vos rendez-vous importants."
                }
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sécurité Assurée</h3>
              <p className="text-gray-600">
                Véhicule entretenu régulièrement et chauffeur professionnel
                expérimenté.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <Users className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Service Personnalisé
              </h3>
              <p className="text-gray-600">
                Accueil chaleureux et service adapté à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Aperçu */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions de transport adaptées à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Transferts Aéroports</CardTitle>
                <CardDescription>
                  Liaisons rapides et confortables vers tous les aéroports
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Trajets Locaux</CardTitle>
                <CardDescription>
                  Déplacements en ville et banlieue proche
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Événements</CardTitle>
                <CardDescription>
                  Mise à disposition pour mariages et événements spéciaux
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">Voir Tous Nos Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <div className="flex justify-center mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 text-amber-400 fill-current"
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  {
                    '"Service impeccable pour mon transfert à l\'aéroport. Ponctuel, professionnel et véhicule très propre."'
                  }
                </p>
                <p className="font-semibold">Marie Dubois</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  {
                    '"Excellent chauffeur, très courtois et conduite très sécurisée. Je recommande vivement !"'
                  }
                </p>
                <p className="font-semibold">Jean Martin</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  {
                    '"Disponible même tard le soir, service fiable pour mes déplacements professionnels."'
                  }
                </p>
                <p className="font-semibold">Sophie Laurent</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Réserver Votre Trajet ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous dès maintenant pour une réservation rapide et un
            service de qualité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
            >
              <a href="tel:+33123456789">
                <Phone className="mr-2 h-5 w-5" />
                01 23 45 67 89
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Formulaire de Réservation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
