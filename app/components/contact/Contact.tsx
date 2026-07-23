import { siteConfig } from '@/app/data/siteConfig';
import { SectionHeading } from '../shared/SectionHeading';
import { AnimateIn } from '../shared/AnimateIn';
import { ContactForm } from './ContactForm';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[var(--color-deep-space)]">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Have a question about a product or need help with an order? We're here for you." 
          align="center"
        />
        
        <div className="swiss-grid mt-16 max-w-5xl mx-auto">
          <div className="col-span-4 md:col-span-5 space-y-8">
            <AnimateIn delay={0.1}>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-electric-pink)] transition-colors">
                    <Mail className="w-5 h-5 text-[var(--color-electric-pink)]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Email us at</div>
                    <div className="text-lg text-white font-medium group-hover:text-[var(--color-electric-pink)] transition-colors">{siteConfig.email}</div>
                  </div>
                </a>
                
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-neon-purple)] transition-colors">
                    <Phone className="w-5 h-5 text-[var(--color-neon-purple)]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Call us at</div>
                    <div className="text-lg text-white font-medium group-hover:text-[var(--color-neon-purple)] transition-colors">{siteConfig.phone}</div>
                  </div>
                </a>
              </div>
            </AnimateIn>
          </div>
          
          <div className="col-span-4 md:col-span-7 mt-8 md:mt-0">
            <AnimateIn delay={0.2} direction="left">
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
