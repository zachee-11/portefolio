"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experiences" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#FAF9F7]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:px-10 lg:px-16">
        <Link href="/" className="text-base font-bold text-[#2E4057] sm:text-lg">
          Imene BENABBAS
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#2E4057]">
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2E4057] shadow-sm lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-[#FAF9F7] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white px-5 py-4 font-medium text-[#2E4057] shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}