import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { BestSellers } from './components/products/BestSellers';
import { Reviews } from './components/reviews/Reviews';
import { MapSection } from './components/location/MapSection';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[var(--color-neon-purple)] selection:text-white">
      <Navbar />
      <Hero />
      <BestSellers />
      <Reviews />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  );
}
