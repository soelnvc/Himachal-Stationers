import { siteConfig } from '@/app/data/siteConfig';
import { SectionHeading } from '../shared/SectionHeading';
import { MaskedReveal } from '../shared/MaskedReveal';
import { SwissGridLine } from '../shared/SwissGridLine';

export function MapSection() {
  return (
    <section id="location" className="py-32 relative bg-[var(--color-background)] overflow-hidden">
      <SwissGridLine direction="horizontal" className="top-0" />
      <SwissGridLine direction="vertical" className="left-1/3 hidden md:block" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4 flex flex-col justify-center">
            <SectionHeading 
              title="Locate Us" 
              className="mb-8 md:mb-12"
            />
            <MaskedReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[var(--color-neon-orange)] tracking-widest uppercase mb-2">Address</div>
                  <p className="text-2xl text-white font-medium">{siteConfig.address}</p>
                </div>
                
                <div>
                  <div className="text-xs font-bold text-[var(--color-electric-pink)] tracking-widest uppercase mb-2">Hours</div>
                  <ul className="text-lg text-white/80 space-y-1 font-medium">
                    <li>Mon-Fri: 9AM - 8PM</li>
                    <li>Sat-Sun: 10AM - 6PM</li>
                  </ul>
                </div>
                
                <div className="pt-8">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between group border-b-2 border-white pb-2 w-full text-white hover:text-[var(--color-electric-pink)] hover:border-[var(--color-electric-pink)] transition-colors text-xl uppercase tracking-widest font-bold"
                  >
                    <span>Get Directions</span>
                    <span className="group-hover:translate-x-4 transition-transform duration-300">↗</span>
                  </a>
                </div>
              </div>
            </MaskedReveal>
          </div>
          
          <div className="md:col-span-8 relative">
            <MaskedReveal direction="up" delay={0.4} className="h-full">
              <div className="aspect-square md:aspect-video w-full relative grayscale contrast-125 hover:grayscale-0 transition-all duration-700 border border-[var(--color-border)]">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </MaskedReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
