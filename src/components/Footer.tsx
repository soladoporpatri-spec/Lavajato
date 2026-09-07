"use client";
import { businessData } from "../config/business";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center md:text-left">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="font-bold text-xl text-white">Lavajato do Paulinho</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Lava rápido eficiente em Anápolis - GO. Chegou, lavou, brilhou. Sem frescura e com qualidade.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white mb-4">Endereço</h4>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              {businessData.address}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white mb-4">Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
              <li>
                <a href={businessData.getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-blue-400">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-sm text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Lavajato do Paulinho. Todos os direitos reservados.</p>
          <p>Desenvolvido na plataforma Nythar</p>
        </div>
      </div>
    </footer>
  );
}
