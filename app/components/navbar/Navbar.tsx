'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, MessageSquare, MapPin, Mail } from 'lucide-react';
import { siteConfig } from '@/app/data/siteConfig';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const navLinks = [
  { name: 'Shop', href: '#shop', icon: ShoppingBag },
  { name: 'Reviews', href: '#reviews', icon: MessageSquare },
  { name: 'Location', href: '#location', icon: MapPin },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Navbar() {
  const activeSection = useActiveSection(navLinks.map(l => l.href.substring(1)));

  useEffect(() => {
    let activeInstance: any = null;
    let cleanupScroll: (() => void) | null = null;

    const initLiquidGlass = async () => {
      try {
        // @ts-ignore
        const { LiquidGlass } = await import('@ybouane/liquidglass');
        const glassElements = Array.from(document.querySelectorAll('.glass')) as HTMLElement[];
        const rootEl = document.querySelector('#liquid-root') as HTMLElement;
        
        if (glassElements.length > 0 && rootEl) {
          glassElements.forEach(el => {
            el.dataset.config = JSON.stringify({
              blurAmount: 0.2,
              refraction: 0.1,
              chromAberration: 0.02,
              specular: 0.05,
              edgeHighlight: 0.05,
              fresnel: 0.3,
              cornerRadius: 24, // Enable rounded corners in WebGL outline/rendering
            });
          });

          activeInstance = await LiquidGlass.init({
            root: rootEl,
            glassElements: glassElements,
          });

          const handleScroll = () => {
            activeInstance?.markChanged();
          };

          window.addEventListener('scroll', handleScroll, { passive: true });
          cleanupScroll = () => {
            window.removeEventListener('scroll', handleScroll);
          };

          // Trigger a refresh after a delay to ensure all async images/fonts are captured correctly
          setTimeout(() => {
            activeInstance?.markChanged();
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to initialize LiquidGlass:', err);
      }
    };

    initLiquidGlass();

    return () => {
      if (cleanupScroll) cleanupScroll();
      if (activeInstance && typeof activeInstance.destroy === 'function') {
        activeInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass hidden md:block">
        <div className="w-full h-24 px-6 md:px-12 flex items-center justify-between relative z-10">
          <Link href="/" className="text-3xl font-bold font-heading uppercase text-white tracking-tighter">
            {siteConfig.name}
          </Link>
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors uppercase tracking-widest",
                  activeSection === link.href.substring(1) ? "text-[var(--color-lilac-ash)]" : "text-white hover:text-[var(--color-lilac-ash)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar (Floating Tab Bar - iOS style) */}
      <nav className="fixed bottom-6 left-6 right-6 z-50 glass md:hidden rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="w-full h-20 px-4 flex items-center justify-around relative z-10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-3 px-6 flex items-center justify-center transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <Icon className={cn(
                  "h-6 w-6 relative z-10 transition-colors duration-300",
                  isActive ? "text-[var(--color-lilac-ash)] scale-110" : "text-white/60 hover:text-white"
                )} />
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
