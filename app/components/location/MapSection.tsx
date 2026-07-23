import { siteConfig } from '@/app/data/siteConfig';
import { SectionHeading } from '../shared/SectionHeading';
import { AnimateIn } from '../shared/AnimateIn';
import { GlowCard } from '../shared/GlowCard';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MapSection() {
  return (
    <section id="location" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Visit the Store" 
          subtitle="Experience the cosmic collection in person. We'd love to see you." 
        />
        
        <div className="swiss-grid items-center">
          <div className="col-span-4 md:col-span-5 space-y-8">
            <AnimateIn delay={0.1} direction="right">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--color-neon-purple)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {siteConfig.address.split(',').map((line, i) => (
                        <span key={i} className="block">{line.trim()}{i < siteConfig.address.split(',').length - 1 ? ',' : ''}</span>
                      ))}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-[var(--color-cosmic-blue)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                    <div className="text-white/70 space-y-1">
                      <p>Mon - Fri: 10:00 AM - 7:00 PM</p>
                      <p>Sat: 11:00 AM - 6:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] hover:bg-white/5 hover:text-white h-12 px-6 font-medium transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
          
          <div className="col-span-4 md:col-span-7">
            <AnimateIn delay={0.3} direction="left">
              <GlowCard hoverEffect={false} className="p-2 overflow-hidden h-[400px]">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.75rem', filter: 'grayscale(1) invert(0.9) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl opacity-80 mix-blend-screen"
                ></iframe>
              </GlowCard>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
