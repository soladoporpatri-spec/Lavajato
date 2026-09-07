import { Droplets, MessageCircle, BadgeCheck } from "lucide-react";
export function Benefits() {
  const benefits = [
    {
      Icon: Droplets,
      title: "Cuidado com seu carro",
      description: "Da lavagem ao acabamento, cada etapa tem seu lugar.",
    },
    {
      Icon: MessageCircle,
      title: "Conversa direta",
      description: "Tire suas dúvidas e combine a lavagem pelo WhatsApp.",
    },
    {
      Icon: BadgeCheck,
      title: "Preço claro",
      description:
        "Consulte os valores e escolha os adicionais antes de começar.",
    },
  ];
  return (
    <section
      id="beneficios"
      className="benefits"
      aria-label="Por que escolher o Lavajato do Paulinho"
    >
      <div className="wrap benefits-grid">
        {benefits.map(({ Icon, title, description }) => (
          <div key={title}>
            <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
