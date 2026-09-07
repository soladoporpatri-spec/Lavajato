import Image from "next/image";
import { ArrowUpRight, Droplets } from "lucide-react";
import { businessData, serviceMessages } from "@/config/business";
import { media } from "@/config/media";
import { DepthSurface } from "./DepthSurface";
import { BookingLink } from "./BookingLink";

export function Services() {
  return (
    <section
      id="servicos"
      className="services section-space"
      aria-labelledby="services-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">O cuidado que seu carro pede</p>
            <h2 id="services-title">
              Escolha a lavagem.
              <br />
              Deixe o resto com a gente.
            </h2>
          </div>
          <p>
            Do carro do dia a dia à caminhonete.
            <br />
            Escolha o serviço e combine pelo WhatsApp.
          </p>
        </div>
        <div className="service-grid">
          <DepthSurface className="service-card service-car">
            <article>
              <div className="service-heading">
                <div>
                  <span className="service-category">Para o dia a dia</span>
                  <h3>Carros de passeio</h3>
                </div>
                <div className="service-price">
                  <span>A partir de</span>
                  <strong>
                    <small>R$</small>
                    {businessData.prices.car}
                  </strong>
                </div>
              </div>
              <div className="service-photo">
                <Image
                  src={media.heroMedium}
                  alt="Carro de passeio ilustrativo"
                  width={960}
                  height={640}
                />
              </div>
              <div className="service-bottom">
                <p>Seu carro limpo e bem cuidado para acompanhar a rotina.</p>
                <BookingLink message={serviceMessages.car}>
                  Agendar carro
                </BookingLink>
              </div>
              <span className="photo-note">
                Imagem ilustrativa criada com IA
              </span>
            </article>
          </DepthSurface>
          <DepthSurface className="service-card service-suv">
            <article>
              <div className="service-heading">
                <div>
                  <span className="service-category">
                    Cuidado em todos os tamanhos
                  </span>
                  <h3>SUVs e caminhonetes</h3>
                </div>
                <div className="service-price">
                  <span>A partir de</span>
                  <strong>
                    <small>R$</small>
                    {businessData.prices.suv}
                  </strong>
                </div>
              </div>
              <div className="service-photo">
                <Image
                  src={media.suv}
                  alt="SUV ilustrativo, foto de banco de imagens"
                  width={1000}
                  height={667}
                />
              </div>
              <div className="service-bottom">
                <p>O mesmo capricho, com atenção ao porte do seu veículo.</p>
                <BookingLink message={serviceMessages.suv}>
                  Agendar SUV ou caminhonete
                </BookingLink>
              </div>
              <span className="photo-note">
                Foto ilustrativa de banco de imagens
              </span>
            </article>
          </DepthSurface>
          <DepthSurface className="service-extra wax-card">
            <article>
              <div className="wax-reflection" aria-hidden="true">
                <Droplets size={42} />
              </div>
              <div>
                <span className="service-category">Um cuidado a mais</span>
                <h3>Cera em pasta</h3>
                <p>Quer finalizar com cera? Acrescente à lavagem.</p>
                <a
                  className="text-link"
                  href={businessData.getWhatsAppLink(serviceMessages.wax)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adicionar cera <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="extra-price">
                <strong>
                  +<small>R$</small>
                  {businessData.prices.wax}
                </strong>
                <span>Adicional opcional</span>
              </div>
            </article>
          </DepthSurface>
          <DepthSurface className="service-extra heavy-card">
            <article>
              <div>
                <span className="service-category">
                  Para uma limpeza mais completa
                </span>
                <h3>Serviços pesados</h3>
                <p>Guariba, lavagem por baixo/chassi e lavagem de motor.</p>
                <a
                  className="text-link"
                  href={businessData.getWhatsAppLink(serviceMessages.heavy)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar meu veículo{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="extra-price">
                <strong>A combinar</strong>
                <span>Consulte pelo WhatsApp</span>
              </div>
            </article>
          </DepthSurface>
        </div>
        <p className="price-note">
          Valores iniciais para carros e SUVs. Confirme o serviço e o valor
          final antes da lavagem.
        </p>
      </div>
    </section>
  );
}
