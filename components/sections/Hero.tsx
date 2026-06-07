"use client";

import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F3EE] pt-28 lg:pt-32">
  <div className="absolute right-0 top-0 hidden h-full w-[38%] bg-[#2E4057] lg:block" />
  <div className="absolute left-4 top-36 h-56 w-56 rounded-full bg-[#C7A17A]/20 blur-3xl sm:h-72 sm:w-72" />

  <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C7A17A]/40 bg-white/70 px-4 py-2 text-sm font-medium text-[#2E4057] shadow-sm">
            <GraduationCap size={18} />
            Portfolio RH — BUT GEA GPRH
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] text-[#2E4057] sm:text-5xl md:text-6xl lg:text-7xl">
            Imene BENABBAS
          </h1>

          <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-slate-700 md:text-3xl">
            Future professionnelle des Ressources Humaines, spécialisée en
            recrutement et développement RH.
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            Ce portfolio présente mon parcours, mes expériences professionnelles,
            mes compétences RH et mes projets académiques construits tout au long
            de mon BUT GEA.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#experiences"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2E4057] px-8 py-4 font-semibold text-white shadow-xl shadow-[#2E4057]/20 transition hover:-translate-y-1"
            >
              Découvrir mon parcours
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#2E4057]/25 bg-white/70 px-8 py-4 font-semibold text-[#2E4057] shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mt-16 lg:mt-0"
        >
          <div className="relative ml-auto max-w-md rounded-[2.2rem] bg-white p-7 shadow-2xl">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#F7F3EE] text-4xl font-bold text-[#C7A17A]">
              IB
            </div>

            <h2 className="text-2xl font-bold text-[#2E4057]">
              Objectif professionnel
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Intégrer un Master RH en alternance afin de renforcer mes
              compétences en recrutement, administration du personnel et
              accompagnement des collaborateurs.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl bg-[#F7F3EE] p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#2E4057]">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#2E4057]">
                    3 expériences professionnelles
                  </p>
                  <p className="text-sm text-slate-500">
                    Recrutement, administration, relation client
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#C7A17A]/30 p-4">
                <p className="text-sm font-medium text-slate-500">
                  Domaines clés
                </p>
                <p className="mt-2 font-semibold text-[#2E4057]">
                  Recrutement · Formation · Gestion administrative RH
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}