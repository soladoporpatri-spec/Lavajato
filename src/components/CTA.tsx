"use client";
import { businessData } from "../config/business";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2500&auto=format&fit=crop"
          alt="Car Wash Detail"
          className="w-full h-full object-cover opacity-30 saturate-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
            PRONTO PARA<br/>
            <span className="text-blue-500 text-glow">FAZER BRILHAR?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto">
            Seu carro merece cuidado de verdade. Sem filas de espera, agende agora pelo WhatsApp.
          </p>

          <a
            href={businessData.getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden bg-white text-black px-12 py-5 rounded-full font-black tracking-widest uppercase text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          >
            <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-200">
              Agendar Pelo WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
