'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/app/data/siteConfig';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Shop', href: '#shop' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const activeSection = useActiveSection(navLinks.map(l => l.href.substring(1)));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full h-24 px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold font-heading uppercase text-white tracking-tighter">
            {siteConfig.name}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors uppercase tracking-widest",
                  activeSection === link.href.substring(1) ? "text-[var(--color-electric-pink)]" : "text-white hover:text-[var(--color-electric-pink)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            exit={{ clipPath: 'inset(100% 0 0 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[var(--color-deep-space)] flex flex-col justify-center px-6"
          >
            <button 
              className="absolute top-8 right-6 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-10 w-10" />
            </button>
            
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-5xl font-bold uppercase tracking-tighter font-heading block",
                      activeSection === link.href.substring(1) ? "text-[var(--color-electric-pink)]" : "text-white hover:text-[var(--color-electric-pink)] transition-colors"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-6 right-6 border-t border-[var(--color-border)] pt-8"
            >
              <p className="text-white/50 text-sm uppercase tracking-widest">{siteConfig.email}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
