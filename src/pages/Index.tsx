import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Portfolio />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
