import { siteConfig } from '@/app/data/siteConfig';
import { SectionHeading } from '../shared/SectionHeading';
import { MaskedReveal } from '../shared/MaskedReveal';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[var(--color-deep-space)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Inquiries" 
          subtitle="Connect with our studio." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24">
          <div className="md:col-span-4 space-y-12">
            <MaskedReveal direction="up" delay={0.1}>
              <div>
                <div className="text-xs font-bold text-[var(--color-electric-pink)] tracking-widest uppercase mb-4 border-b border-[var(--color-border)] pb-2 inline-block">Direct Line</div>
                <div className="text-3xl text-white font-medium hover:text-[var(--color-neon-purple)] transition-colors mt-4">
                  <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}>{siteConfig.phone}</a>
                </div>
              </div>
            </MaskedReveal>
            
            <MaskedReveal direction="up" delay={0.2}>
              <div>
                <div className="text-xs font-bold text-[var(--color-neon-purple)] tracking-widest uppercase mb-4 border-b border-[var(--color-border)] pb-2 inline-block">Electronic Mail</div>
                <div className="text-3xl text-white font-medium hover:text-[var(--color-electric-pink)] transition-colors mt-4">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
              </div>
            </MaskedReveal>
          </div>
          
          <div className="md:col-span-8 md:pl-12 md:border-l border-[var(--color-border)]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
