'use client';

import { useState } from 'react';
import { MaskedReveal } from '../shared/MaskedReveal';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-12 border border-[var(--color-border)] text-center bg-[var(--color-background)]">
        <h3 className="text-4xl font-bold font-heading uppercase text-white mb-4">Transmission Sent</h3>
        <p className="text-xl text-[var(--color-neon-purple)] font-medium">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <MaskedReveal direction="up" delay={0.1}>
          <div className="relative group">
            <input
              type="text"
              id="name"
              required
              className="w-full bg-transparent border-0 border-b-2 border-[var(--color-border)] py-4 text-xl text-white focus:outline-none focus:border-[var(--color-neon-purple)] transition-colors peer placeholder-transparent"
              placeholder="Name"
            />
            <label htmlFor="name" className="absolute left-0 top-4 text-white/50 text-xl font-medium transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[var(--color-neon-purple)] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-white/50">Name</label>
          </div>
        </MaskedReveal>
        
        <MaskedReveal direction="up" delay={0.2}>
          <div className="relative group">
            <input
              type="email"
              id="email"
              required
              className="w-full bg-transparent border-0 border-b-2 border-[var(--color-border)] py-4 text-xl text-white focus:outline-none focus:border-[var(--color-neon-purple)] transition-colors peer placeholder-transparent"
              placeholder="Email"
            />
            <label htmlFor="email" className="absolute left-0 top-4 text-white/50 text-xl font-medium transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[var(--color-neon-purple)] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-white/50">Email</label>
          </div>
        </MaskedReveal>
      </div>
      
      <MaskedReveal direction="up" delay={0.3}>
        <div className="relative group">
          <textarea
            id="message"
            required
            rows={1}
            className="w-full bg-transparent border-0 border-b-2 border-[var(--color-border)] py-4 text-xl text-white focus:outline-none focus:border-[var(--color-neon-purple)] transition-colors peer placeholder-transparent resize-none overflow-hidden"
            placeholder="Message"
          ></textarea>
          <label htmlFor="message" className="absolute left-0 top-4 text-white/50 text-xl font-medium transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[var(--color-neon-purple)] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-white/50">Message</label>
        </div>
      </MaskedReveal>
      
      <MaskedReveal direction="up" delay={0.4}>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-20 text-2xl font-bold font-heading tracking-widest uppercase bg-white text-[var(--color-background)] hover:bg-[var(--color-neon-purple)] hover:text-white transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </MaskedReveal>
    </form>
  );
}
