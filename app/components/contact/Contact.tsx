import { siteConfig } from '@/app/data/siteConfig';
import { SectionHeading } from '../shared/SectionHeading';
import { MaskedReveal } from '../shared/MaskedReveal';
import { Phone, MessageSquare, Mail } from 'lucide-react';

export function Contact() {
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, ''); // Strips to raw digits: 919872266092

  return (
    <section id="contact" className="py-32 relative bg-[var(--color-deep-space)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Inquiries" 
          subtitle="Connect with our studio." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--color-border)] border border-[var(--color-border)] mt-24">
          
          {/* Card 1: Direct Phone */}
          <MaskedReveal direction="up" delay={0.1} className="h-full">
            <a 
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="flex flex-col items-center justify-center text-center p-12 h-full bg-[var(--color-background)] group hover:bg-[var(--color-border)]/20 transition-all duration-300"
            >
              <Phone className="h-12 w-12 text-[var(--color-electric-pink)] group-hover:scale-110 group-hover:text-[var(--color-neon-purple)] transition-all duration-300" />
              <span className="text-xl font-bold uppercase tracking-widest text-[var(--color-foreground)] mt-6">
                Direct Call
              </span>
              <span className="text-xs text-white/50 group-hover:text-[var(--color-neon-orange)] transition-colors mt-2">
                {siteConfig.phone}
              </span>
            </a>
          </MaskedReveal>

          {/* Card 2: Direct WhatsApp */}
          <MaskedReveal direction="up" delay={0.2} className="h-full">
            <a 
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-12 h-full bg-[var(--color-background)] group hover:bg-[var(--color-border)]/20 transition-all duration-300"
            >
              <MessageSquare className="h-12 w-12 text-[var(--color-electric-pink)] group-hover:scale-110 group-hover:text-[var(--color-neon-purple)] transition-all duration-300" />
              <span className="text-xl font-bold uppercase tracking-widest text-[var(--color-foreground)] mt-6">
                WhatsApp Chat
              </span>
              <span className="text-xs text-white/50 group-hover:text-[var(--color-neon-orange)] transition-colors mt-2">
                Message Instantly
              </span>
            </a>
          </MaskedReveal>

          {/* Card 3: Direct Email */}
          <MaskedReveal direction="up" delay={0.3} className="h-full">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="flex flex-col items-center justify-center text-center p-12 h-full bg-[var(--color-background)] group hover:bg-[var(--color-border)]/20 transition-all duration-300"
            >
              <Mail className="h-12 w-12 text-[var(--color-electric-pink)] group-hover:scale-110 group-hover:text-[var(--color-neon-purple)] transition-all duration-300" />
              <span className="text-xl font-bold uppercase tracking-widest text-[var(--color-foreground)] mt-6">
                Send Email
              </span>
              <span className="text-xs text-white/50 group-hover:text-[var(--color-neon-orange)] transition-colors mt-2">
                {siteConfig.email}
              </span>
            </a>
          </MaskedReveal>

        </div>
      </div>
    </section>
  );
}
