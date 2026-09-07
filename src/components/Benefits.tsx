"use client";
import { businessData } from "../config/business";
import { motion } from "framer-motion";

export function Benefits() {
  const features = [
    { num: "01", title: "CUIDADO EXTREMO", desc: "Lavagem detalhada que respeita a integridade da pintura e dos materiais internos." },
    { num: "02", title: "PRODUTOS PREMIUM", desc: "Utilizamos apenas químicos e microfibras de alta performance." },
    { num: "03", title: "PREÇO JUSTO", desc: `Qualidade inegociável a partir de R$ ${businessData.prices.car}.` }
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="text-blue-500 font-display text-2xl font-black mb-4">{feat.num}</div>
              <h3 className="text-white font-bold tracking-widest uppercase mb-4 text-sm">{feat.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
