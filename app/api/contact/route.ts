import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Imene BENABBAS",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.CONTACT_RECEIVER_EMAIL,
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `[Portfolio RH] ${subject}`,
        htmlContent: `
  <div style="margin:0;padding:0;background:#f7f3ee;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
      
      <div style="background:#2e4057;border-radius:28px 28px 0 0;padding:32px;color:#ffffff;">
        <p style="margin:0 0 10px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#c7a17a;font-weight:700;">
          Portfolio RH
        </p>
        <h1 style="margin:0;font-size:28px;line-height:1.2;">
          Nouveau message reçu
        </h1>
        <p style="margin:14px 0 0;color:rgba(255,255,255,.75);font-size:15px;line-height:1.6;">
          Une personne vient de prendre contact depuis le portfolio professionnel d’Imene BENABBAS.
        </p>
      </div>

      <div style="background:#ffffff;padding:32px;border-radius:0 0 28px 28px;box-shadow:0 20px 50px rgba(46,64,87,.12);">
        
        <div style="margin-bottom:24px;">
          <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#c7a17a;font-weight:700;">
            Expéditeur
          </p>
          <h2 style="margin:0;color:#2e4057;font-size:22px;">
            ${name}
          </h2>
          <p style="margin:8px 0 0;color:#64748b;font-size:15px;">
            ${email}
          </p>
        </div>

        <div style="background:#f7f3ee;border-radius:20px;padding:22px;margin-bottom:22px;">
          <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#c7a17a;font-weight:700;">
            Sujet
          </p>
          <p style="margin:0;color:#2e4057;font-size:17px;font-weight:700;">
            ${subject}
          </p>
        </div>

        <div style="border:1px solid #eee7dd;border-radius:20px;padding:22px;">
          <p style="margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#c7a17a;font-weight:700;">
            Message
          </p>
          <p style="margin:0;color:#475569;font-size:16px;line-height:1.8;white-space:pre-line;">
            ${message}
          </p>
        </div>

        <div style="margin-top:28px;padding-top:20px;border-top:1px solid #eee7dd;">
          <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.6;">
            Ce message a été envoyé depuis le formulaire de contact du portfolio RH d’Imene BENABBAS.
            Répondez directement à cet email pour contacter l’expéditeur.
          </p>
        </div>
      </div>
    </div>
  </div>
`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Erreur lors de l’envoi du message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Message envoyé avec succès.",
    });
  } catch {
    return NextResponse.json(
      { message: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}

