import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import Categories from '@/components/Categories';
import Pricing from '@/components/Pricing';
import Kit from '@/components/Kit';
import RemeraOficial from '@/components/RemeraOficial';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <EventInfo />
      <Categories />
      <Pricing />
      <Kit />
      <RemeraOficial />
      <Awards />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
