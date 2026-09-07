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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Benefits />
      <Process />
      <Location />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
