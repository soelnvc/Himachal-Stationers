'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { siteConfig } from '@/app/data/siteConfig';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[#080A18]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-heading cosmic-gradient-text">
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                activeSection === link.href.substring(1) ? "text-white" : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-white" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--color-surface)] border-l-[var(--color-border)]">
              <SheetTitle className="text-left text-white mb-8">{siteConfig.name}</SheetTitle>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-[var(--color-neon-purple)]",
                      activeSection === link.href.substring(1) ? "text-[var(--color-neon-purple)]" : "text-white/80"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
