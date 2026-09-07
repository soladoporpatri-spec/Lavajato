"use client";
import { businessData } from "../config/business";
import { motion } from "framer-motion";
import { useState } from "react";

const ServiceCard = ({ 
  title, 
  price, 
  description, 
  highlight = false, 
  msg 
}: { 
  title: string, 
  price: string | number, 
  description: string, 
  highlight?: boolean, 
  msg: string 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl p-px transition-all duration-300 ${highlight ? 'shadow-[0_0_30px_rgba(37,99,235,0.15)]' : ''}`}
    >
      {/* Dynamic Border Glow via mouse tracking */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${highlight ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.1)'}, transparent 40%)`
        }}
      />
      {/* Static Border Fallback */}
      <div className={`absolute inset-0 z-0 ${highlight ? 'bg-blue-500/20' : 'bg-slate-800'}`} />

      {/* Card Content */}
      <div className="relative z-10 bg-slate-950/90 backdrop-blur-xl h-full rounded-2xl p-8 sm:p-10 flex flex-col">
        {highlight && (
          <div className="absolute top-0 right-8 bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-b-md shadow-lg">
            Mais Procurado
          </div>
        )}

        <div className="mb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase block mb-2">
            A partir de
          </span>
          <div className="font-display font-black text-6xl sm:text-7xl tracking-tighter text-white group-hover:text-glow transition-all duration-300">
            {typeof price === 'number' ? `R$${price}` : price}
          </div>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 uppercase tracking-tight">
          {title}
        </h3>
        
        <p className="text-slate-400 font-light leading-relaxed mb-10 flex-grow">
          {description}
        </p>

        <a
          href={businessData.getWhatsAppLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-4 text-center text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-lg ${
            highlight 
              ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:bg-blue-500' 
              : 'bg-white/5 text-white hover:bg-white/10'
          }`}
        >
          {typeof price === 'number' ? 'Agendar Lavagem' : 'Consultar Valor'}
        </a>
      </div>
    </motion.div>
  );
};

export function Services() {
  return (
    <section id="servicos" className="py-32 bg-slate-950 relative">
      {/* Subtle background noise/texture can be applied here via a CSS class or image */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6"
          >
            LAVAGEM<br/><span className="text-slate-500">QUE VOCÊ PERCEBE.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            title="Carros Passeio"
            price={businessData.prices.car}
            description="Lava rápido eficiente para o dia a dia. Chegou, lavou, brilhou."
            msg={`Olá, Paulinho! Vi no site a lavagem para carros a partir de R$ ${businessData.prices.car} e gostaria de agendar.`}
          />
          <ServiceCard 
            title="SUVs & Caminhonetes"
            price={businessData.prices.suv}
            description="Tratamento para veículos grandes. Limpeza bruta sem enrolação."
            highlight={true}
            msg={`Olá, Paulinho! Vi no site a lavagem para SUVs e caminhonetes a partir de R$ ${businessData.prices.suv} e gostaria de agendar.`}
          />
          <ServiceCard 
            title="Acabamento Cera Pasta"
            price={`+ R$10`}
            description="Adicione brilho extra e proteção na pintura com nossa cera em pasta."
            msg="Olá, Paulinho! Gostaria de fazer uma lavagem e adicionar a cera em pasta de R$10."
          />
          <ServiceCard 
            title="Serviços Pesados"
            price="A combinar"
            description="Guariba, lavagem por baixo (chassi) e lavagem de motor. Consulte preços."
            msg="Olá, Paulinho! Gostaria de consultar os preços para serviços como Guariba / Lavar por baixo / Motor."
          />
        </div>
      </div>
    </section>
  );
}
