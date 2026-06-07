import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#172232] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:px-10 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
        <div>
          <p className="text-xl font-bold">Imene BENABBAS</p>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Portfolio professionnel dédié aux Ressources Humaines, au
            recrutement et au développement RH.
          </p>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#C7A17A]">Navigation</p>
          <div className="space-y-2 text-sm text-white/60">
            <a href="#about" className="block hover:text-white">À propos</a>
            <a href="#skills" className="block hover:text-white">Compétences</a>
            <a href="#experiences" className="block hover:text-white">Expériences</a>
            <a href="#portfolio" className="block hover:text-white">Portfolio</a>
            <a href="#cv" className="block hover:text-white">CV</a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#C7A17A]">Profil</p>
          <div className="space-y-2 text-sm text-white/60">
            <p>BUT GEA - GPRH</p>
            <p>Recrutement</p>
            <p>Administration RH</p>
            <p>Développement RH</p>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-[#C7A17A]">Contact</p>
          <div className="space-y-3 text-sm text-white/60">
            <p className="flex items-center gap-2">
              <Mail size={16} />
              benabbasimene@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              06 59 68 74 16
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} />
              France
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 text-sm text-white/50 md:flex-row md:px-10 lg:px-16">
          <p>© 2026 Imene BENABBAS. Tous droits réservés.</p>
          <p>Portfolio RH — Design & développement web</p>
        </div>
      </div>
    </footer>
  );
}