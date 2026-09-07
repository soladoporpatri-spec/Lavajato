import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { businessData } from "@/config/business";
import { media } from "@/config/media";
import { BookingLink } from "./BookingLink";
import { DepthSurface } from "./DepthSurface";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <DepthSurface className="hero-scene" scroll>
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-water" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="hero-car">
          <picture>
            <source media="(max-width: 640px)" srcSet={media.heroMobile} />
            <source media="(max-width: 1100px)" srcSet={media.heroMedium} />
            <Image
              src={media.hero}
              alt="Ilustração de um carro grafite com gotas de água e reflexos na pintura"
              width={1536}
              height={1024}
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </div>
        <div className="wrap hero-content">
          <a className="hero-location" href="#localizacao">
            <MapPin size={15} aria-hidden="true" /> Cidade Jardim, Anápolis
          </a>
          <h1 id="hero-title">
            Seu carro limpo.
            <br />
            Do jeito certo.
          </h1>
          <p className="hero-description">
            Lavagem caprichada para carros, SUVs e caminhonetes em Anápolis.
            Cuidado de verdade, sem complicação.
          </p>
          <div className="hero-actions">
            <BookingLink />
            <a href="#servicos" className="text-link">
              Ver serviços <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-prices" aria-label="Preços iniciais">
            <div>
              <span>Carros a partir de</span>
              <strong>
                <small>R$</small>
                {businessData.prices.car}
              </strong>
            </div>
            <div>
              <span>SUVs / caminhonetes a partir de</span>
              <strong>
                <small>R$</small>
                {businessData.prices.suv}
              </strong>
            </div>
          </div>
        </div>
        <span className="hero-image-note">
          Imagem ilustrativa criada com IA
        </span>
      </DepthSurface>
      <div className="hero-bottom wrap">
        <span>Capricho em cada etapa.</span>
        <a href="#servicos">
          Conheça a lavagem <ArrowDown size={16} aria-hidden="true" />
        </a>
        <span>Anápolis / GO</span>
      </div>
    </section>
  );
}
