'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlowCard } from '../shared/GlowCard';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <GlowCard className="p-8 text-center py-16">
        <div className="w-16 h-16 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-electric-pink)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
        <p className="text-white/70">We'll get back to you as soon as possible.</p>
      </GlowCard>
    );
  }

  return (
    <GlowCard className="p-8" hoverEffect={false}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full bg-[var(--color-deep-space)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full bg-[var(--color-deep-space)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full bg-[var(--color-deep-space)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] transition-all resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 text-base font-semibold rounded-full bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-electric-pink)] hover:opacity-90 transition-opacity border-0 shadow-[0_0_20px_rgba(107,72,255,0.3)] text-white"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </GlowCard>
  );
}
