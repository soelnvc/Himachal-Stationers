'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ShopCategoryData } from '@/app/data/shopData';
import { ShopNav } from './ShopNav';

interface ShopHeroProps {
  categories: ShopCategoryData[];
  activeCategory: ShopCategoryData;
  onCategoryChange: (id: string) => void;
}

export function ShopHero({ categories, activeCategory, onCategoryChange }: ShopHeroProps) {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] bg-[#fdfaf5]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={activeCategory.heroImage}
            alt={activeCategory.label}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative gradient overly for smooth transition at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Shop Navigation Overlapping Hero Bottom */}
      <ShopNav 
        categories={categories} 
        activeCategory={activeCategory.id} 
        onCategoryChange={onCategoryChange} 
      />
    </div>
  );
}
