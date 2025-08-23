import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Vérifier si la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.log('Clé API Resend non configurée - simulation d\'envoi d\'email');
      
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return NextResponse.json(
        { 
          message: 'Demande reçue avec succès (mode simulation - configurez RESEND_API_KEY pour l\'envoi réel)',
          id: 'simulation-' + Date.now()
        },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { nom, telephone, email, dateHeure, adresseDepart, adresseArrivee, message } = body;

    // Validation des champs requis
    if (!nom || !telephone || !dateHeure || !adresseDepart || !adresseArrivee) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Formatage de la date
    const dateFormatted = new Date(dateHeure).toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'TaxiPro <contacts@taxims.fr>',
      to: ['alainsengimana@gmail.com'], // Remplacez par votre email
      subject: `Nouvelle demande de réservation - ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            Nouvelle Demande de Réservation
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations Client</h3>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Téléphone :</strong> <a href="tel:${telephone}">${telephone}</a></p>
            ${email ? `<p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Détails du Trajet</h3>
            <p><strong>Date et heure :</strong> ${dateFormatted}</p>
            <p><strong>Adresse de départ :</strong> ${adresseDepart}</p>
            <p><strong>Adresse d'arrivée :</strong> ${adresseArrivee}</p>
          </div>

          ${message ? `
            <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Message</h3>
              <p style="white-space: pre-line;">${message}</p>
            </div>
          ` : ''}

          <div style="background-color: #1e3a8a; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; font-size: 16px;">
              <strong>Action requise :</strong> Contactez le client dans les plus brefs délais pour confirmer la réservation.
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            Cette demande a été envoyée depuis le site web TaxiPro<br>
            Répondez rapidement pour assurer la satisfaction client
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Demande envoyée avec succès', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}