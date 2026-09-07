"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { businessData } from "../config/business";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Localização", href: "#localizacao" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-gradient-to-b from-black/80 to-transparent py-8"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Lavajato do Paulinho Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-white/10" />
            <div className="flex flex-col hidden sm:flex">
              <span className="font-display text-2xl tracking-tighter text-white font-black leading-none">PAULINHO</span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-blue-500 uppercase">Car Wash</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs font-bold tracking-widest text-slate-300 hover:text-white uppercase transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={businessData.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-200 text-black px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-transform hover:scale-105 active:scale-95"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-display text-4xl font-black text-white uppercase tracking-tighter"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={businessData.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
