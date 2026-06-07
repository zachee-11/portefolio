"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#C7A17A]">
            À propos
          </p>
          <h2 className="text-4xl font-bold text-[#2E4057] md:text-5xl">
            Un parcours tourné vers l’humain
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 text-lg leading-8 text-slate-600"
        >
          <p>
            Étudiante en BUT GEA, parcours Gestion et Pilotage des Ressources
            Humaines, je construis progressivement mon projet professionnel
            autour du recrutement, de l’administration du personnel et du
            développement des compétences.
          </p>

          <p>
            À travers mes expériences professionnelles et mes projets
            académiques, j’ai appris à analyser des situations RH, à adopter une
            posture professionnelle et à proposer des solutions adaptées aux
            besoins d’une organisation.
          </p>

          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#F7F3EE] p-5">
              <p className="text-3xl font-bold text-[#C7A17A]">BUT</p>
              <p className="mt-1 text-sm text-slate-600">GEA - GPRH</p>
            </div>
            <div className="rounded-2xl bg-[#F7F3EE] p-5">
              <p className="text-3xl font-bold text-[#C7A17A]">RH</p>
              <p className="mt-1 text-sm text-slate-600">Recrutement</p>
            </div>
            <div className="rounded-2xl bg-[#F7F3EE] p-5">
              <p className="text-3xl font-bold text-[#C7A17A]">2026</p>
              <p className="mt-1 text-sm text-slate-600">Master en alternance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}