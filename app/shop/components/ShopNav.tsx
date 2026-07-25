'use client';

import { useRef, useEffect } from 'react';
import { ShopCategoryData } from '@/app/data/shopData';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface ShopNavProps {
  categories: ShopCategoryData[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function ShopNav({ categories, activeCategory, onCategoryChange }: ShopNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const activeEl = itemRefs.current[activeCategory];
    if (activeEl && containerRef.current) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeCategory]);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 w-full overflow-hidden py-4">
      <div 
        ref={containerRef}
        className="flex overflow-x-auto whitespace-nowrap scrollbar-none gap-4 md:gap-8 px-[35vw] sm:px-[40vw] py-4 items-center snap-x snap-mandatory scroll-smooth"
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              ref={(el) => { itemRefs.current[category.id] = el; }}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "relative px-6 py-3.5 md:px-8 md:py-4 transition-all duration-500 ease-out flex-shrink-0 snap-center uppercase tracking-widest font-heading font-bold text-xs md:text-sm border select-none cursor-pointer",
                isActive
                  ? "scale-110 md:scale-125 z-10 bg-[var(--color-foreground)] text-[var(--color-background)] border-[var(--color-foreground)] shadow-2xl"
                  : "scale-90 opacity-60 hover:opacity-90 bg-[var(--color-background)]/90 text-[var(--color-foreground)] border-[var(--color-border)] backdrop-blur-md"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFocusBorder"
                  className="absolute -inset-[2px] border-2 border-[var(--color-electric-pink)] pointer-events-none"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {category.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
