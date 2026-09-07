import { MapPin, ArrowUpRight } from "lucide-react";
import { businessData } from "@/config/business";
import { BookingLink } from "./BookingLink";
export function Location() {
  const address = encodeURIComponent(businessData.address);
  return (
    <section
      id="localizacao"
      className="location section-space"
      aria-labelledby="location-title"
    >
      <div className="wrap location-grid">
        <div className="location-content">
          <p className="section-label">
            <MapPin size={16} aria-hidden="true" /> Cidade Jardim
          </p>
          <h2 id="location-title">
            Seu próximo
            <br />
            destino:
            <br />
            carro limpo.
          </h2>
          <p className="location-subtitle">
            Estamos na Av. Brasil Norte, em Anápolis.
          </p>
          <address>
            <strong>Lavajato do Paulinho</strong>
            <span>
              Av. Brasil Norte, 1310 - Q 22
              <br />
              Cidade Jardim, Anápolis - GO
              <br />
              CEP 75080-240
            </span>
          </address>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button maps-button"
          >
            Abrir no Google Maps <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <div className="location-contact">
            <p>Combine o melhor horário antes de vir.</p>
            <BookingLink className="button-subtle">
              Falar com o Paulinho
            </BookingLink>
          </div>
        </div>
        <div className="map-panel">
          <div className="map-panel-title">
            <MapPin size={18} aria-hidden="true" />
            <span>Anápolis, Goiás</span>
            <span>Como chegar</span>
          </div>
          <iframe
            src={`https://maps.google.com/maps?q=${address}&z=16&output=embed`}
            title="Localização do Lavajato do Paulinho na Av. Brasil Norte, Anápolis"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-panel-footer">
            <span>Av. Brasil Norte, 1310</span>
            <span>Cidade Jardim</span>
          </div>
        </div>
      </div>
    </section>
  );
}
