'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ShopCategoryData } from '@/app/data/shopData';
import { ShopNav } from './ShopNav';
import { SwissGridLine } from '@/app/components/shared/SwissGridLine';

interface ShopHeroProps {
  categories: ShopCategoryData[];
  activeCategory: ShopCategoryData;
  onCategoryChange: (id: string) => void;
}

export function ShopHero({ categories, activeCategory, onCategoryChange }: ShopHeroProps) {
  return (
    <div className="relative w-full h-[65vh] md:h-[75vh] bg-[var(--color-background)] overflow-hidden border-b border-[var(--color-border)]">
      <SwissGridLine direction="horizontal" className="top-24" delay={0.2} />
      <SwissGridLine direction="vertical" className="left-12 md:left-24" delay={0.3} />

      {/* Hero Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full after:absolute after:inset-0 after:bg-[rgba(34,34,34,0.45)]">
            <Image
              src={activeCategory.heroImage}
              alt={activeCategory.label}
              fill
              className="object-cover object-center grayscale contrast-125 brightness-90"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Swiss Monumental Heading Overlay */}
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center relative z-10 select-none">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-electric-pink)] mb-2 font-heading">
          Catalog Overview // 2026
        </span>
        <motion.h1 
          key={activeCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tighter text-[var(--color-absolute-light)] font-heading leading-none"
        >
          {activeCategory.label}
        </motion.h1>
      </div>

      {/* Focus Carousel Navigation centered at the bottom of hero */}
      <ShopNav 
        categories={categories} 
        activeCategory={activeCategory.id} 
        onCategoryChange={onCategoryChange} 
      />
    </div>
  );
}
