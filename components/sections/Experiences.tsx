"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function Experiences() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-[#F7F3EE] py-24">
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-80px] top-24 h-64 w-64 rounded-full bg-[#C7A17A]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#C7A17A]">
            Parcours
          </p>
          <h2 className="text-4xl font-bold text-[#2E4057] md:text-5xl">
            Expériences RH
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -6, 0] }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.5 },
                y: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
              className="group rounded-[2rem] bg-white p-7 shadow-sm transition hover:shadow-2xl"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#F7F3EE] p-2">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <span className="rounded-full bg-[#F7F3EE] px-4 py-2 text-xs font-semibold text-[#2E4057]">
                  {experience.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#2E4057]">
                {experience.role}
              </h3>

              <p className="mt-1 font-medium text-[#C7A17A]">
                {experience.company}
              </p>

              <p className="mt-4 min-h-20 leading-7 text-slate-600">
                {experience.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.missions.map((mission) => (
                  <span
                    key={mission}
                    className="rounded-full bg-[#F7F3EE] px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {mission}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
