import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { businessData } from "@/config/business";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a
              href="#inicio"
              className="brand"
              aria-label="Lavajato do Paulinho, início"
            >
              <Image src="/logo.jpg" width={48} height={48} alt="" />
              <span>
                <small>Lavajato do</small>
                <strong>
                  Paulinho<span className="brand-dot">.</span>
                </strong>
              </span>
            </a>
            <p>
              Cuidado de verdade para o seu carro.
              <br />
              Aqui em Anápolis.
            </p>
          </div>
          <div>
            <h2>Venha conhecer</h2>
            <address>
              Av. Brasil Norte, 1310 - Q 22
              <br />
              Cidade Jardim, Anápolis - GO
              <br />
              CEP 75080-240
            </address>
          </div>
          <div>
            <h2>Vamos conversar</h2>
            <a
              href={businessData.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-phone"
            >
              {businessData.displayPhone}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <p>Consulte os horários pelo WhatsApp.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lavajato do Paulinho</span>
          <a href="#inicio">Voltar ao início ↑</a>
          <span>Desenvolvido na plataforma Nythar</span>
        </div>
      </div>
    </footer>
  );
}
