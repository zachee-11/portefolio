"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F7F3EE] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#C7A17A]">
            Compétences
          </p>
          <h2 className="text-4xl font-bold text-[#2E4057] md:text-5xl">
  Compétences RH
</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -5, 0] }}
            transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            }}
              className="group rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <p className="mb-5 text-sm font-semibold text-[#C7A17A]">
                0{index + 1}
              </p>
              <h3 className="text-2xl font-bold text-[#2E4057]">
                {skill.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}