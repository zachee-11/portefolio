"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";

export default function CVSection() {
  const cvPath = "/docs/cv-imene-benabbas.pdf";

  return (
    <section id="cv" className="relative overflow-hidden bg-[#F7F3EE] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#C7A17A]">
            CV
          </p>

          <h2 className="text-4xl font-bold text-[#2E4057] md:text-5xl">
            Mon CV
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Retrouvez mon parcours, mes expériences professionnelles, mes
            compétences RH et mes informations de contact dans mon CV complet.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={cvPath}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2E4057] px-7 py-4 font-semibold text-white transition hover:-translate-y-1"
            >
              <Eye size={18} />
              Prévisualiser
            </a>

            <a
              href={cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2E4057]/25 bg-white px-7 py-4 font-semibold text-[#2E4057] transition hover:-translate-y-1"
            >
              <Download size={18} />
              Télécharger
            </a>
          </div>

          <div className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F3EE] text-[#C7A17A]">
                <FileText size={26} />
              </div>

              <div>
                <p className="font-bold text-[#2E4057]">
                  CV Imene BENABBAS
                </p>
                <p className="text-sm text-slate-500">
                  Format PDF · Consultation et téléchargement
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-3 shadow-2xl"
        >
          <iframe
            src={cvPath}
            title="CV Imene BENABBAS"
            className="h-[620px] w-full rounded-[1.5rem]"
          />
        </motion.div>
      </div>
    </section>
  );
}
