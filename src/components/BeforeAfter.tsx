"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { media, realComparison, type RealComparison } from "@/config/media";

export function BeforeAfter({
  comparison = realComparison,
}: {
  comparison?: RealComparison | null;
}) {
  const [position, setPosition] = useState(50);
  const beforeLabel = comparison ? "Antes" : "Referência A";
  const afterLabel = comparison ? "Depois" : "Referência B";
  return (
    <section
      className="comparison section-space"
      aria-labelledby="comparison-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">Olhe de perto</p>
            <h2 id="comparison-title">
              A diferença
              <br />
              aparece no brilho.
            </h2>
          </div>
          <div className="comparison-intro">
            <p>
              {comparison
                ? comparison.description
                : "Deslize para explorar as referências visuais."}
            </p>
            <span className="drag-hint">
              <ChevronsLeftRight size={22} aria-hidden="true" /> Arraste para
              explorar
            </span>
          </div>
        </div>
        <figure>
          <div className="comparison-stage">
            <Image
              src={comparison?.after ?? media.referenceB}
              alt={
                comparison
                  ? `${comparison.description}, depois da lavagem`
                  : "Referência B: carro esportivo azul, imagem de banco"
              }
              width={1000}
              height={667}
              draggable={false}
            />
            <div
              className="comparison-before"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={comparison?.before ?? media.referenceA}
                alt={
                  comparison
                    ? `${comparison.description}, antes da lavagem`
                    : "Referência A: carro preto, imagem de banco"
                }
                width={1000}
                height={667}
                draggable={false}
              />
            </div>
            <span className="comparison-label label-before">{beforeLabel}</span>
            <span className="comparison-label label-after">{afterLabel}</span>
            <div
              className="comparison-divider"
              style={{ left: `${position}%` }}
              aria-hidden="true"
            >
              <span>
                <ChevronsLeftRight size={24} />
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              aria-label={
                comparison
                  ? "Comparar antes e depois"
                  : "Explorar referências ilustrativas"
              }
              aria-valuetext={`${position}% de ${beforeLabel}`}
              aria-describedby="comparison-caption"
            />
          </div>
          <div className="comparison-caption">
            <figcaption id="comparison-caption">
              {comparison
                ? "Fotos reais do mesmo veículo atendido no Lavajato do Paulinho."
                : "Demonstração interativa com fotos de veículos diferentes. Não representa um antes e depois nem trabalhos do Lavajato do Paulinho."}
            </figcaption>
            <div
              className="comparison-controls"
              aria-label="Posições da comparação"
            >
              <button
                onClick={() => setPosition(100)}
                aria-pressed={position === 100}
              >
                {beforeLabel}
              </button>
              <button
                onClick={() => setPosition(50)}
                aria-pressed={position === 50}
              >
                Meio a meio
              </button>
              <button
                onClick={() => setPosition(0)}
                aria-pressed={position === 0}
              >
                {afterLabel}
              </button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
