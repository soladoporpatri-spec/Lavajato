"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { media } from "@/config/media";
import { businessData } from "@/config/business";

const steps = [
  {
    title: "Lavagem completa",
    description: "A primeira etapa é tirar a sujeira e lavar o veículo.",
    short: "Lavagem",
    visual: "Água e espuma",
  },
  {
    title: "Secagem detalhada",
    description:
      "Depois da lavagem, é hora de secar a carroceria e cuidar dos detalhes.",
    short: "Secagem",
    visual: "Atenção aos detalhes",
  },
  {
    title: "Acabamento com cera",
    description: `Quer um acabamento a mais? A cera em pasta é opcional, por +R$${businessData.prices.wax}.`,
    short: "Acabamento",
    visual: "O toque final",
  },
];
export function Process() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const candidates = stepRefs.current
        .map((step, index) => {
          if (!step) return null;
          const bounds = step.getBoundingClientRect();
          return {
            index,
            distance: Math.abs(bounds.top + bounds.height / 2 - viewportCenter),
          };
        })
        .filter(
          (item): item is { index: number; distance: number } => item !== null,
        );
      const nearest = candidates.sort((a, b) => a.distance - b.distance)[0];
      if (nearest) setActive(nearest.index);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return (
    <section
      id="processo"
      className="process section-space"
      aria-labelledby="process-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-label">Capricho do começo ao fim</p>
            <h2 id="process-title">
              Do sujo
              <br />
              ao brilho.
            </h2>
          </div>
          <p>
            Lavagem, secagem e o acabamento que você escolher.
            <br />
            Um passo de cada vez.
          </p>
        </div>
        <div className="process-grid">
          <div className={`process-visual process-state-${active}`}>
            <div className="process-visual-top">
              <span>O cuidado em 3 etapas</span>
              <strong aria-hidden="true">0{active + 1}</strong>
            </div>
            <Image
              src={media.heroMedium}
              alt="Ilustração das etapas de cuidado de um carro"
              width={960}
              height={640}
            />
            <div className="process-water" aria-hidden="true" />
            <div className="process-shine" aria-hidden="true" />
            <div className="process-visual-bottom">
              <span>{steps[active].visual}</span>
              <span>Ilustração criada com IA</span>
            </div>
            <div className="process-selector" aria-label="Visualizar etapa">
              {steps.map((step, index) => (
                <button
                  key={step.short}
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                >
                  {step.short}
                </button>
              ))}
            </div>
          </div>
          <ol className="process-steps">
            {steps.map((step, index) => (
              <li
                key={step.title}
                data-step={index}
                data-active={active === index}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
              >
                <span className="step-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index === 2 && (
                    <span className="optional-tag">Adicional opcional</span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
