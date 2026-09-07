import { BookingLink } from "./BookingLink";
export function WhatsAppButton() {
  return (
    <aside className="floating-booking" aria-label="Agendamento rápido">
      <BookingLink>Agendar lavagem</BookingLink>
    </aside>
  );
}
