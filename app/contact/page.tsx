"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    date: undefined as Date | undefined,
    heure: "",
    adresseDepart: "",
    adresseArrivee: "",
    message: "",
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Vérifier que la date et l'heure sont sélectionnées
    if (!formData.date || !formData.heure) {
      setError("Veuillez sélectionner une date et une heure");
      setIsSubmitting(false);
      return;
    }

    // Créer la date complète
    const [hours, minutes] = formData.heure.split(":");
    const dateTime = new Date(formData.date);
    dateTime.setHours(parseInt(hours), parseInt(minutes));

    const submitData = {
      ...formData,
      dateHeure: dateTime.toISOString(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData({
      ...formData,
      date: date,
    });
    setIsCalendarOpen(false); // Fermer le calendrier après sélection
  };

  const handleTimeSelect = (time: string) => {
    setFormData({
      ...formData,
      heure: time,
    });
    setIsTimeOpen(false); // Fermer le sélecteur d'heure après sélection
  };

  // Générer les créneaux horaires de 6h00 à 23h30 par tranches de 30 minutes
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
        const displayTime = `${hour.toString().padStart(2, "0")}h${minute.toString().padStart(2, "0")}`;
        slots.push({ value: timeString, label: displayTime });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Date minimum (aujourd'hui)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Demande Envoyée !</CardTitle>
            <CardDescription>
              Nous vous recontacterons dans les plus brefs délais pour confirmer
              votre réservation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/">{"Retour à l'Accueil"}</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            alt="Contact taxi"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact & Réservation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Réservez votre trajet ou demandez un devis personnalisé
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contactez-Nous Directement
              </h2>

              <div className="space-y-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center p-6">
                    <div className="bg-blue-100 p-4 rounded-lg mr-6">
                      <Phone className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                      <a
                        href="tel:+33123456789"
                        className="text-blue-600 hover:text-blue-800 text-xl font-semibold"
                      >
                        01 23 45 67 89
                      </a>
                      <p className="text-sm text-gray-600">Disponible 24h/7j</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center p-6">
                    <div className="bg-green-100 p-4 rounded-lg mr-6">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <a
                        href="mailto:contact@taxipro.fr"
                        className="text-green-600 hover:text-green-800 text-lg"
                      >
                        contact@taxipro.fr
                      </a>
                      <p className="text-sm text-gray-600">Réponse sous 2h</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center p-6">
                    <div className="bg-purple-100 p-4 rounded-lg mr-6">
                      <MapPin className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Zone de Service
                      </h3>
                      <p className="text-gray-700">
                        Paris et Région Parisienne
                      </p>
                      <p className="text-sm text-gray-600">
                        Tous aéroports et gares
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center p-6">
                    <div className="bg-amber-100 p-4 rounded-lg mr-6">
                      <Clock className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                      <p className="text-gray-700">24 heures sur 24</p>
                      <p className="text-sm text-gray-600">7 jours sur 7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-900">
                  {"Réservation d'Urgence"}
                </h3>
                <p className="text-blue-800 mb-4">
                  Pour une réservation immédiate, appelez-nous directement. Nous
                  pouvons généralement être chez vous en moins de 20 minutes.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="tel:+33123456789">
                    <Phone className="mr-2 h-4 w-4" />
                    {"Appel d'Urgence"}
                  </a>
                </Button>
              </div>
            </div>

            {/* Formulaire de Réservation */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Formulaire de Réservation
                  </CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour demander un devis ou réserver
                    votre trajet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nom">Nom complet *</Label>
                        <Input
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.fr"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>Date souhaitée *</Label>
                        <Popover
                          open={isCalendarOpen}
                          onOpenChange={setIsCalendarOpen}
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !formData.date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.date ? (
                                format(formData.date, "PPP", { locale: fr })
                              ) : (
                                <span>Sélectionner une date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.date}
                              onSelect={handleDateSelect}
                              disabled={(date) => date < today}
                              initialFocus
                              locale={fr}
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label>Heure souhaitée *</Label>
                        <Popover open={isTimeOpen} onOpenChange={setIsTimeOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !formData.heure && "text-muted-foreground"
                              )}
                            >
                              <Clock className="mr-2 h-4 w-4" />
                              {formData.heure ? (
                                `${formData.heure.split(":")[0]}h${formData.heure.split(":")[1]}`
                              ) : (
                                <span>Sélectionner une heure</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <div className="max-h-60 overflow-y-auto">
                              <div className="grid grid-cols-1 gap-1 p-2">
                                {timeSlots.map((slot) => (
                                  <Button
                                    key={slot.value}
                                    variant={
                                      formData.heure === slot.value
                                        ? "default"
                                        : "ghost"
                                    }
                                    className="justify-start h-8 px-3 text-sm"
                                    onClick={() => handleTimeSelect(slot.value)}
                                  >
                                    {slot.label}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="adresseDepart">Adresse de départ *</Label>
                      <Input
                        id="adresseDepart"
                        name="adresseDepart"
                        value={formData.adresseDepart}
                        onChange={handleChange}
                        required
                        placeholder="Adresse complète de prise en charge"
                      />
                    </div>

                    <div>
                      <Label htmlFor="adresseArrivee">
                        {"Adresse d'arrivée *"}
                      </Label>
                      <Input
                        id="adresseArrivee"
                        name="adresseArrivee"
                        value={formData.adresseArrivee}
                        onChange={handleChange}
                        required
                        placeholder="Destination finale"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message (facultatif)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Informations complémentaires (nombre de passagers, bagages, demandes spéciales...)"
                        rows={4}
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-red-800 text-sm">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Envoyer ma Demande
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      * Champs obligatoires. Nous vous recontacterons rapidement
                      pour confirmer votre réservation.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
