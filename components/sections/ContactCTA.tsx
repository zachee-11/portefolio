"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";

export default function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setFeedback("");

    const payload = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      subject: String(formData.get("subject")),
      message: String(formData.get("message")),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.message || "Erreur lors de l’envoi.");
        return;
      }

      setStatus("success");
      setFeedback("Message envoyé avec succès.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Impossible d’envoyer le message.");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#2E4057] py-24 text-white"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#C7A17A]/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#C7A17A]">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Échangeons ensemble
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            Disponible pour une alternance en Master RH, une opportunité
            professionnelle ou un échange autour des ressources humaines.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:imene.benabbas@example.com"
              className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
            >
              <Mail className="text-[#C7A17A]" />
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="break-all font-semibold">benabbasimene@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+33600000000"
              className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
            >
              <Phone className="text-[#C7A17A]" />
              <div>
                <p className="text-sm text-white/60">Téléphone</p>
                <p className="break-all font-semibold">06 59 68 74 16</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">
              <MapPin className="text-[#C7A17A]" />
              <div>
                <p className="text-sm text-white/60">Localisation</p>
                <p className="font-semibold">France</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] bg-white p-7 text-[#2E4057] shadow-2xl"
        >
          <h3 className="text-2xl font-bold">Envoyer un message</h3>

          <div className="mt-6 space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Votre nom"
              required
              className="w-full rounded-2xl bg-[#F7F3EE] px-5 py-4 outline-none transition focus:ring-2 focus:ring-[#C7A17A]"
            />

            <input
              name="email"
              type="email"
              placeholder="Votre email"
              required
              className="w-full rounded-2xl bg-[#F7F3EE] px-5 py-4 outline-none transition focus:ring-2 focus:ring-[#C7A17A]"
            />

            <input
              name="subject"
              type="text"
              placeholder="Sujet"
              required
              className="w-full rounded-2xl bg-[#F7F3EE] px-5 py-4 outline-none transition focus:ring-2 focus:ring-[#C7A17A]"
            />

            <textarea
              name="message"
              placeholder="Votre message"
              rows={5}
              required
              className="w-full resize-none rounded-2xl bg-[#F7F3EE] px-5 py-4 outline-none transition focus:ring-2 focus:ring-[#C7A17A]"
            />

            {feedback && (
              <p
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  status === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {feedback}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#2E4057] px-6 py-4 font-semibold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  Envoyer
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}