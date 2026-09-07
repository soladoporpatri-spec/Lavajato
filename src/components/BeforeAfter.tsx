"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | React.ChangeEvent<HTMLInputElement>) => {
    // If it's the range input
    if ('target' in event && 'value' in event.target) {
      setSliderPosition(Number((event.target as HTMLInputElement).value));
    }
  };

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            A DIFERENÇA APARECE<br/>
            <span className="text-blue-500 text-glow">NO BRILHO.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm font-bold tracking-widest uppercase flex items-center gap-2"
          >
            <div className="w-8 h-[1px] bg-blue-500" />
            Arraste para comparar
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto rounded-none overflow-hidden aspect-[4/3] md:aspect-[21/9] bg-slate-900 group"
          ref={containerRef}
          style={{ cursor: 'ew-resize' }}
        >
          {/* After image (Clean) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop" 
              alt="Carro Limpo" 
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* Dark gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 right-8 bg-blue-600/90 backdrop-blur-md text-white px-4 py-2 text-xs font-bold tracking-widest uppercase shadow-2xl border border-blue-400/30">
              DEPOIS
            </div>
          </div>

          {/* Before image (Dirty - via CSS filter) */}
          <div 
            className="absolute inset-0 border-r-2 border-white/50"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2000&auto=format&fit=crop" 
              alt="Carro Sujo" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 sepia-[0.3]"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 text-xs font-bold tracking-widest uppercase border border-slate-700">
              ANTES
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,1)] pointer-events-none z-20"
            style={{ left: `calc(${sliderPosition}%)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-950 border border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              <div className="flex gap-1">
                <div className="w-0.5 h-3 bg-white/50" />
                <div className="w-0.5 h-3 bg-white" />
                <div className="w-0.5 h-3 bg-white/50" />
              </div>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleMove}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Controle de slider antes e depois"
          />
        </motion.div>
      </div>
    </section>
  );
}
