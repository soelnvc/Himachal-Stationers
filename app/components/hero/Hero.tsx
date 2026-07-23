import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/app/data/siteConfig';
import { AnimateIn } from '../shared/AnimateIn';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-neon-purple)]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[var(--color-electric-pink)]/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="swiss-grid items-center">
          <div className="col-span-4 md:col-span-6 space-y-8">
            <AnimateIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
                {siteConfig.tagline}
              </h1>
            </AnimateIn>
            
            <AnimateIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 max-w-lg text-balance">
                {siteConfig.description}
              </p>
            </AnimateIn>
            
            <AnimateIn delay={0.3}>
              <div className="pt-4">
                <a 
                  href="#shop"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-neon-purple)] via-[var(--color-electric-pink)] to-[var(--color-neon-orange)] text-white border-0 hover:opacity-90 transition-opacity h-14 px-8 text-base font-semibold shadow-[0_0_20px_rgba(255,79,145,0.4)]"
                >
                  Explore Collection
                </a>
              </div>
            </AnimateIn>
          </div>
          
          <div className="col-span-4 md:col-span-6 mt-12 md:mt-0">
            <AnimateIn delay={0.4} direction="left" className="relative">
              <div className="aspect-[4/5] md:aspect-square relative rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-[0_0_40px_rgba(107,72,255,0.2)]">
                {/* Fallback placeholder color if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-indigo-night)] to-[var(--color-deep-space)]" />
                <Image
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop"
                  alt="Premium stationery collection"
                  fill
                  className="object-cover mix-blend-overlay opacity-80"
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
