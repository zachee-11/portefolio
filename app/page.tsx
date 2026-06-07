import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Portfolio from "@/components/sections/Portfolio";
import CVSection from "@/components/sections/CVSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Portfolio />
        <CVSection />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}