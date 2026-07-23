'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/app/data/siteConfig';
import { MaskedReveal } from '../shared/MaskedReveal';
import { SwissGridLine } from '../shared/SwissGridLine';

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsVisible(true);
  };

  const handlePointerLeave = () => {
    setIsVisible(false);
  };

  return (
    <section 
      className="relative min-h-screen pt-24 flex flex-col justify-between pb-12 overflow-hidden bg-[var(--color-background)] cursor-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerMove} // capture mobile touch-down
    >
      {/* Structural grid lines */}
      <SwissGridLine direction="horizontal" className="top-32" delay={0.5} />
      <SwissGridLine direction="vertical" className="left-6 md:left-24" delay={0.6} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full mt-auto mb-8 pointer-events-none select-none">
        <div className="flex flex-col space-y-12">
          
          <div className="w-full">
            <MaskedReveal direction="up" duration={1.2} delay={0.2}>
              <h1 className="text-6xl sm:text-8xl md:text-[11vw] lg:text-[12vw] font-bold leading-[0.8] tracking-tighter uppercase text-[var(--color-absolute-light)] m-0 p-0 drop-shadow-2xl">
                {siteConfig.name.split(' ')[0]}<br />
                <span className="text-[var(--color-neon-purple)]">{siteConfig.name.split(' ')[1] || 'Store'}</span>
              </h1>
            </MaskedReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-[rgba(255,255,255,0.2)] pt-8">
            <div className="md:col-span-7">
              <MaskedReveal direction="left" duration={1} delay={0.6}>
                <p className="text-xl md:text-2xl text-[var(--color-absolute-light)] font-medium text-balance border-l-4 border-[var(--color-neon-orange)] pl-6 drop-shadow-lg">
                  {siteConfig.description}
                </p>
              </MaskedReveal>
            </div>

            <div className="md:col-span-5 pointer-events-auto">
              <MaskedReveal direction="up" duration={0.8} delay={0.8}>
                <a 
                  href="#shop"
                  className="inline-flex items-center justify-between group border-b-2 border-[var(--color-absolute-light)] pb-4 w-full text-[var(--color-absolute-light)] hover:text-[var(--color-neon-orange)] hover:border-[var(--color-neon-orange)] transition-colors text-2xl uppercase tracking-tight font-bold"
                >
                  <span>Explore</span>
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

        {/* Layer 2: Clean revealed image on top */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: isVisible 
              ? `circle(150px at ${pointer.x}px ${pointer.y}px)` 
              : 'circle(0px at 50% 50%)',
            WebkitClipPath: isVisible 
              ? `circle(150px at ${pointer.x}px ${pointer.y}px)` 
              : 'circle(0px at 50% 50%)',
            transition: isVisible ? 'none' : 'clip-path 0.5s cubic-bezier(0.76, 0, 0.24, 1), -webkit-clip-path 0.5s cubic-bezier(0.76, 0, 0.24, 1)'
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
        </div>
      </div>
    </section>
  );
}
