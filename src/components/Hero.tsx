"use client";
import { useRef } from "react";
import { businessData } from "../config/business";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
        {/* Radial vignette for studio lighting feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] z-10 opacity-80" />
        
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2500&auto=format&fit=crop"
          alt="Carro de luxo molhado após lavagem"
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-12"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-blue-500 font-bold tracking-[0.2em] text-sm md:text-base mb-6 uppercase drop-shadow-md">
            Lavajato do Paulinho
          </span>
          
          <h1 className="font-display text-7xl md:text-[10vw] leading-[0.85] font-black text-white mb-6 tracking-tighter">
            RÁPIDO.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 text-glow">BEM FEITO.</span>
          </h1>

          <p className="text-slate-300 max-w-xl text-lg md:text-xl font-light mb-12">
            Lava rápido de verdade. Chegou, lavou, brilhou. Sem frescura e com muita qualidade pro seu dia a dia.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href={businessData.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-blue-600 text-white px-10 py-4 rounded-full font-bold tracking-wide uppercase text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
              <span className="relative z-10">Agendar Lavagem</span>
            </a>
            
            <a
              href="#servicos"
              className="text-slate-300 hover:text-white font-bold tracking-widest uppercase text-xs transition-colors underline-offset-8 decoration-blue-500/50 hover:underline"
            >
              Explorar Serviços
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>

    </section>
  );
}
