"use client";

import { motion } from "framer-motion";
import { saeProjects } from "@/data/sae";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  ExternalLink,
  FileText,
  Target,
  UserRound,
  Lightbulb,
  ImageIcon,
} from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-24">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#2E4057]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#C7A17A]">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-[#2E4057] md:text-5xl">
            SAE détaillées
          </h2>
        </div>

        <div className="space-y-8">
          {saeProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -5, 0] }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.5 },
                y: {
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="rounded-[2rem] border border-black/5 bg-[#F7F3EE] p-5 shadow-sm sm:p-7 md:p-8"
            >
              <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#C7A17A]">
                    {project.level}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-[#2E4057] md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#2E4057]">
                  <FileText size={28} />
                </div>
              </div>

              <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 md:p-6">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-[#C7A17A]">
                    Contexte
                  </p>
                  <p className="leading-7 text-slate-600">{project.context}</p>
                </div>

                <div className="rounded-2xl bg-white p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2 text-[#C7A17A]">
                    <Target size={18} />
                    <p className="text-sm font-bold uppercase tracking-[2px]">
                      Objectifs
                    </p>
                  </div>

                  <ul className="space-y-2 text-slate-600">
                    {project.objectives.map((objective) => (
                      <li key={objective}>• {objective}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2 text-[#C7A17A]">
                    <UserRound size={18} />
                    <p className="text-sm font-bold uppercase tracking-[2px]">
                      Mon rôle
                    </p>
                  </div>
                  <p className="leading-7 text-slate-600">{project.role}</p>
                </div>

                <div className="rounded-2xl bg-white p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2 text-[#C7A17A]">
                    <Lightbulb size={18} />
                    <p className="text-sm font-bold uppercase tracking-[2px]">
                      Analyse réflexive
                    </p>
                  </div>
                  <p className="leading-7 text-slate-600">
                    {project.reflection}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#2E4057]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                {project.proof ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#2E4057]">
                      <ImageIcon size={17} className="text-[#C7A17A]" />
                      Preuve associée
                    </div>

                    {project.proof.type === "image" && (
                      <Link
                        href={project.proof.href}
                        target="_blank"
                        className="block overflow-hidden rounded-2xl border border-black/5 bg-white"
                      >
                        <Image
                          src={project.proof.href}
                          alt={`Preuve ${project.title}`}
                          width={1200}
                          height={800}
                          className="max-h-72 w-full object-cover transition duration-500 hover:scale-105"
                        />
                      </Link>
                    )}

                    <Link
                      href={project.proof.href}
                      target="_blank"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#2E4057] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1f3045]"
                    >
                      <Eye size={16} />
                      {project.proof.label}
                      <ExternalLink
                        size={14}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-slate-400">
                    Aucune preuve disponible pour cette SAE.
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}