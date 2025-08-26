import Link from "next/link";
import { Car, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TaxiPro</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-4">
              Service de taxi professionnel disponible 24h/7j pour tous vos
              déplacements. Ponctualité, confort et sécurité garantis.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+33666491219"
                className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <Phone className="h-4 w-4 inline mr-2" />
                Appelez
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>06 66 49 12 19</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>contact@taxipro.fr</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Paris & Région Parisienne</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-3" />
                <span>24h/7j</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 TaxiPro. Tous droits réservés. |
            <span className="ml-2">
              Service de transport professionnel agréé
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
