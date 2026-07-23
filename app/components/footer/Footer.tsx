import Link from 'next/link';
import { siteConfig } from '@/app/data/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-deep-space)] pt-16 pb-8 border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Subtle nebula divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-neon-purple)] to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="swiss-grid mb-16">
          <div className="col-span-4 md:col-span-4">
            <Link href="/" className="text-2xl font-bold font-heading cosmic-gradient-text inline-block mb-4">
              {siteConfig.name}
            </Link>
            <p className="text-white/60 max-w-sm mb-6">
              {siteConfig.tagline}
            </p>
          </div>
          
          <div className="col-span-2 md:col-span-2 md:col-start-7">
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="#shop" className="text-white/60 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#shop" className="text-white/60 hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link href="#shop" className="text-white/60 hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="#contact" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#location" className="text-white/60 hover:text-white transition-colors">Store Location</Link></li>
              <li><Link href="#reviews" className="text-white/60 hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div className="col-span-4 md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <ul className="space-y-3">
              <li><a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--color-electric-pink)] transition-colors">Instagram</a></li>
              <li><a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--color-cosmic-blue)] transition-colors">Twitter</a></li>
              <li><a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--color-neon-purple)] transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
