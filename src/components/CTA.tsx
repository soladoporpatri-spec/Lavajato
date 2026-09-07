import Image from "next/image";
import { media } from "@/config/media";
import { BookingLink } from "./BookingLink";
export function CTA() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="wrap final-cta-grid">
        <div>
          <p className="section-label">A próxima lavagem começa aqui</p>
          <h2 id="cta-title">
            Pronto pra ver
            <br />
            seu carro brilhar?
          </h2>
          <p>
            Mande uma mensagem. A gente combina o serviço e o melhor horário
            para você.
          </p>
          <BookingLink />
        </div>
        <div className="cta-car">
          <Image
            src={media.heroMedium}
            alt="Ilustração de um carro com reflexos na pintura"
            width={960}
            height={640}
          />
          <span>Imagem ilustrativa criada com IA</span>
        </div>
      </div>
    </section>
  );
}
