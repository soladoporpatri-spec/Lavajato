"use client";
import { businessData } from "../config/business";
import { motion } from "framer-motion";

export function Location() {
  const encodedAddress = encodeURIComponent(businessData.address);
  const iframeUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="py-32 bg-[#020617] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-slate-900 border border-white/5 flex flex-col lg:flex-row relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
          
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
              ONDE O BRILHO<br/>ACONTECE.
            </h2>
            <div className="w-12 h-1 bg-blue-500 mb-8" />
            
            <h3 className="text-xl font-bold text-white mb-4">
              Lavajato do Paulinho
            </h3>
            
            <p className="text-slate-400 mb-10 leading-relaxed font-light">
              Av. Brasil Norte, 1310 - Q 22<br />
              Cidade Jardim<br />
              Anápolis - GO<br />
              75080-240
            </p>
            
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white hover:text-blue-400 transition-colors group w-fit"
            >
              ABRIR NO MAPA
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
          
          <div className="flex-1 min-h-[400px] relative border-l border-white/5">
            <iframe 
              src={iframeUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
