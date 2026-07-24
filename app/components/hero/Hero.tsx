'use client';

import Image from 'next/image';
import { siteConfig } from '@/app/data/siteConfig';
import { MaskedReveal } from '../shared/MaskedReveal';
import { SwissGridLine } from '../shared/SwissGridLine';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';

export function Hero() {
  // Motion values for tracking cursor and liquid radius
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const revealRadius = useMotionValue(0);

  // Springs for liquid physical responsiveness
  const springConfig = { damping: 35, stiffness: 150, mass: 0.6 };
  const pointerX = useSpring(mouseX, springConfig);
  const pointerY = useSpring(mouseY, springConfig);
  const pointerRadius = useSpring(revealRadius, { damping: 25, stiffness: 100 });

  // CSS Mask template with soft-edge radial gradient
  const maskImage = useMotionTemplate`radial-gradient(circle ${pointerRadius}px at ${pointerX}px ${pointerY}px, black 25%, transparent 100%)`;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    revealRadius.set(240); // Size of reveal circle
  };

  const handlePointerLeave = () => {
    revealRadius.set(0);
  };

  return (
    <section 
      className="relative min-h-screen pt-36 flex flex-col justify-between pb-32 md:pb-16 overflow-hidden bg-[var(--color-background)] cursor-crosshair"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerMove} // Capture mobile touch-down
    >
      {/* Magazine Header / Branding at top-left */}
      <div className="absolute top-8 left-6 z-20 md:top-12 md:left-12 select-none">
        <MaskedReveal direction="right" duration={0.8} delay={0.1} animateOnMount={true}>
          <span className="text-xl md:text-2xl font-bold font-heading uppercase text-[var(--color-absolute-light)] tracking-tighter">
            {siteConfig.name.split(' ')[0]} <span className="text-[var(--color-electric-pink)]">{siteConfig.name.split(' ').slice(1).join(' ')}</span>
          </span>
        </MaskedReveal>
      </div>

      {/* Magazine Issue / Detail at top-right */}
      <div className="absolute top-8 right-6 z-20 md:top-12 md:right-12 text-right hidden sm:block select-none">
        <MaskedReveal direction="left" duration={0.8} delay={0.1} animateOnMount={true}>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-absolute-light)]/60">
            Issue No. 01 // Est. 2026 // Curated Studio
          </span>
        </MaskedReveal>
      </div>

      {/* Structural grid lines */}
      <SwissGridLine direction="horizontal" className="top-32" delay={0.5} />
      <SwissGridLine direction="vertical" className="left-6 md:left-24" delay={0.6} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full mt-auto">
        <div className="flex flex-col space-y-8 md:space-y-12">
          
          {/* Magazine Cover Page Massive Aligned Headline */}
          <div className="w-full">
            <MaskedReveal direction="up" duration={1.2} delay={0.2} animateOnMount={true}>
              {/* Desktop Headline */}
              <h1 className="hidden md:block text-6xl sm:text-8xl md:text-[9vw] lg:text-[10vw] font-bold leading-[0.8] tracking-tighter uppercase text-[var(--color-absolute-light)] m-0 p-0 drop-shadow-2xl">
                STATIONERY<br />
                <span className="text-[var(--color-electric-pink)]">AT BEST PRICE</span>
              </h1>
              {/* Mobile Headline (precisely aligned width for a block layout) */}
              <h1 className="md:hidden font-bold leading-[0.75] uppercase tracking-tighter text-[var(--color-absolute-light)] m-0 p-0 drop-shadow-2xl">
                <span className="text-[14vw] block font-heading">STATIONERY</span>
                <span className="text-[10.8vw] block text-[var(--color-electric-pink)] font-heading">AT BEST PRICE</span>
              </h1>
            </MaskedReveal>
          </div>
          
          {/* Teaser descriptions and Explore actions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[rgba(255,255,255,0.2)] pt-8">
            <div className="md:col-span-7">
              <MaskedReveal direction="left" duration={1} delay={0.6} animateOnMount={true}>
                <p className="text-lg md:text-2xl text-[var(--color-absolute-light)] font-medium text-balance border-l-4 border-[var(--color-neon-orange)] pl-6 drop-shadow-lg">
                  {siteConfig.description}
                </p>
              </MaskedReveal>
            </div>

            <div className="md:col-span-5 pointer-events-auto w-full">
              <MaskedReveal direction="up" duration={0.8} delay={0.8} animateOnMount={true}>
                <a 
                  href="#shop"
                  className="inline-flex items-center justify-between group border-y md:border-t-0 md:border-b-2 border-[var(--color-absolute-light)]/30 md:border-[var(--color-absolute-light)] py-6 md:py-0 md:pb-4 w-full text-[var(--color-absolute-light)] hover:text-[var(--color-neon-orange)] hover:border-[var(--color-neon-orange)] transition-colors text-2xl uppercase tracking-tight font-bold"
                >
                  <span>Explore Collection</span>
                  <span className="group-hover:translate-x-4 transition-transform duration-300">→</span>
                </a>
              </MaskedReveal>
            </div>
          </div>
          
        </div>
      </div>

      {/* Masked background image reveal */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Layer 1: Darkened base image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full relative after:absolute after:inset-0 after:bg-[rgba(34,34,34,0.65)]">
            <Image
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2400&auto=format&fit=crop"
              alt="Premium stationery collection"
              fill
              className="object-cover object-center grayscale contrast-125 brightness-90"
              priority
            />
          </div>
        </div>

        {/* Layer 2: Clean revealed image on top with spring physics & soft radial mask */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage: maskImage,
            WebkitMaskImage: maskImage,
          }}
        >
          <div className="w-full h-full relative">
            <Image
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2400&auto=format&fit=crop"
              alt="Premium stationery collection reveal"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
