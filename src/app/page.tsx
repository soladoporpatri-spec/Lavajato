import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CustomerProof } from "@/components/CustomerProof";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Services />
        <BeforeAfter />
        <Benefits />
        <Process />
        <CustomerProof />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
