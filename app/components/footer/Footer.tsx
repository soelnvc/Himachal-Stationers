import Link from 'next/link';
import { siteConfig } from '@/app/data/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-background)] pt-32 pb-12 border-t border-[var(--color-border)] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          
          <div className="md:col-span-6">
            <Link href="/" className="text-5xl md:text-7xl font-bold font-heading text-white uppercase tracking-tighter leading-none block mb-8 hover:text-[var(--color-neon-purple)] transition-colors">
              {siteConfig.name}
            </Link>
            <p className="text-xl text-white/50 max-w-md font-medium text-balance">
              {siteConfig.tagline}
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-9">
            <h4 className="text-[var(--color-neon-orange)] text-xs font-bold uppercase tracking-widest mb-6">Index</h4>
            <ul className="space-y-4">
              <li><Link href="#shop" className="text-lg text-white font-medium hover:text-[var(--color-neon-orange)] transition-colors uppercase tracking-wider">Shop</Link></li>
              <li><Link href="#reviews" className="text-lg text-white font-medium hover:text-[var(--color-neon-orange)] transition-colors uppercase tracking-wider">Reviews</Link></li>
              <li><Link href="#location" className="text-lg text-white font-medium hover:text-[var(--color-neon-orange)] transition-colors uppercase tracking-wider">Location</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[var(--color-electric-pink)] text-xs font-bold uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-[var(--color-electric-pink)] transition-colors uppercase tracking-wider">Instagram</a></li>
              <li><a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-[var(--color-electric-pink)] transition-colors uppercase tracking-wider">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm uppercase tracking-widest font-bold">
            © {currentYear} {siteConfig.name}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-sm text-white/30 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
