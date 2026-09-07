"use client";
import { businessData } from "../config/business";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={businessData.getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-500 hover:scale-110 flex items-center justify-center group",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border border-white/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <MessageCircle size={28} fill="currentColor" className="relative z-10" />
      
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block shadow-xl pointer-events-none border border-black/10">
        Agendar
      </span>
    </a>
  );
}
