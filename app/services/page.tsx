import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plane, MapPin, Heart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Nos Services - TaxiPro | Transferts Aéroports & Transport Professionnel",
  description:
    "Découvrez tous nos services de transport : transferts aéroports, trajets locaux, transport médical, mise à disposition pour événements. Service professionnel 24h/7j.",
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3954598/pexels-photo-3954598.jpeg"
            alt="Services de taxi"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Des solutions de transport professionnelles adaptées à tous vos
            besoins
          </p>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <Plane className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold">
                  Transferts Aéroports & Gares
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                {
                  "Liaisons directes et confortables vers tous les aéroports et gares de la région. Suivi de vols en temps réel pour s'adapter aux retards éventuels."
                }
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-3" />
                  Ponctualité garantie
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-500 mr-3" />
                  Tous aéroports de la région
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-3" />
                  Aide avec les bagages
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/31787681/pexels-photo-31787681.jpeg"
                alt="Transfert aéroport"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1634275/pexels-photo-1634275.jpeg"
                alt="Trajets locaux"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <MapPin className="h-12 w-12 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold">
                  Trajets Locaux & Longue Distance
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Déplacements en ville, banlieue et trajets longue distance.
                Service adapté pour vos rendez-vous professionnels et
                personnels.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-3" />
                  Disponible 24h/7j
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-500 mr-3" />
                  Toute la région
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-3" />
                  Trajets individuels ou groupes
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold">Transport Médical</h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Transport conventionné pour vos rendez-vous médicaux. Service
                adapté aux personnes à mobilité réduite.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-3" />
                  Prise en charge douce
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-500 mr-3" />
                  Conventionné sécurité sociale
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-3" />
                  Aide à la mobilité
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                alt="Transport médical"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg"
                alt="Événements"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Calendar className="h-12 w-12 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold">
                  Événements & Occasions Spéciales
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                {
                  "Mise à disposition pour vos événements importants : mariages, séminaires, soirées d'entreprise. Service haut de gamme garanti."
                }
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-3" />
                  Mise à disposition longue durée
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-500 mr-3" />
                  Service premium
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-green-500 mr-3" />
                  Chauffeur en tenue
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            {"Besoin d'un Transport Fiable ?"}
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour discuter de vos besoins spécifiques
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
              <Link href="/contact">Demander un Devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
