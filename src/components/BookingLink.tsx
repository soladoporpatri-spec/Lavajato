import { MessageCircle, ArrowUpRight } from "lucide-react";
import { businessData } from "@/config/business";

export function BookingLink({
  children = "Agendar pelo WhatsApp",
  message,
  className = "",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      className={`button booking-link ${className}`}
      href={businessData.getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
