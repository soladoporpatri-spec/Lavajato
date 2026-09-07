"use client";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { num: "01", title: "PRÉ-LAVAGEM", desc: "Remoção pesada sem atrito, preservando a pintura." },
    { num: "02", title: "LAVAGEM DETALHADA", desc: "Shampoo neutro e luvas de microfibra premium." },
    { num: "03", title: "ACABAMENTO", desc: "Secagem técnica, limpeza de caixas de roda e vidros." },
    { num: "04", title: "BRILHO EXTRA", desc: "Aplicação de cera e revitalização de plásticos." },
  ];

  return (
    <section className="py-32 bg-[#01030b] relative overflow-hidden">
      {/* Dynamic lighting effect in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <h2 className="font-display text-4xl md:text-7xl font-black text-slate-800 uppercase tracking-tighter">
            O PROCESSO.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative border-t border-slate-800 pt-8"
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-700 ease-out" />
              
              <div className="font-display text-5xl font-black text-slate-800 group-hover:text-blue-500/50 transition-colors duration-500 mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
              <p className="text-slate-400 font-light text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
