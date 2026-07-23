import Image from 'next/image';
import { siteConfig } from '@/app/data/siteConfig';
import { MaskedReveal } from '../shared/MaskedReveal';
import { SwissGridLine } from '../shared/SwissGridLine';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 flex flex-col justify-between pb-12 overflow-hidden bg-[var(--color-background)]">
      {/* Structural grid lines */}
      <SwissGridLine direction="horizontal" className="top-32" delay={0.5} />
      <SwissGridLine direction="vertical" className="left-6 md:left-24" delay={0.6} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full mt-auto mb-8">
        <div className="flex flex-col space-y-12">
          
          <div className="w-full">
            <MaskedReveal direction="up" duration={1.2} delay={0.2}>
              <h1 className="text-6xl sm:text-8xl md:text-[11vw] lg:text-[12vw] font-bold leading-[0.8] tracking-tighter uppercase text-white m-0 p-0">
                {siteConfig.name.split(' ')[0]}<br />
                <span className="text-[var(--color-electric-pink)]">{siteConfig.name.split(' ')[1] || 'Store'}</span>
              </h1>
            </MaskedReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[var(--color-border)] pt-8">
            <div className="md:col-span-7">
              <MaskedReveal direction="left" duration={1} delay={0.6}>
                <p className="text-xl md:text-2xl text-white font-medium text-balance border-l-4 border-[var(--color-neon-orange)] pl-6">
                  {siteConfig.description}
                </p>
              </MaskedReveal>
            </div>

            <div className="md:col-span-5">
              <MaskedReveal direction="up" duration={0.8} delay={0.8}>
                <a 
                  href="#shop"
                  className="inline-flex items-center justify-between group border-b-2 border-white pb-4 w-full text-white hover:text-[var(--color-neon-orange)] hover:border-[var(--color-neon-orange)] transition-colors text-2xl uppercase tracking-tight font-bold"
                >
                  <span>Explore</span>
                  <span className="group-hover:translate-x-4 transition-transform duration-300">→</span>
                </a>
              </MaskedReveal>
            </div>
          </div>
          
        </div>
      </div>

      {/* Clean background image reveal without dark overlay */}
      <div className="absolute inset-0 z-0">
        <MaskedReveal direction="down" duration={1.5} delay={0.1} className="w-full h-full">
          <div className="w-full h-full relative">
            <Image
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2400&auto=format&fit=crop"
              alt="Premium stationery collection"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </MaskedReveal>
      </div>
    </section>
  );
}
