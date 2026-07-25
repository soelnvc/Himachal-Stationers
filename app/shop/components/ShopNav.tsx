'use client';

import { ShopCategoryData } from '@/app/data/shopData';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface ShopNavProps {
  categories: ShopCategoryData[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function ShopNav({ categories, activeCategory, onCategoryChange }: ShopNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 flex justify-center w-full px-4">
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none gap-4 max-w-full pb-4 md:pb-0 px-2 md:px-0">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className="relative px-6 py-4 md:px-8 md:py-6 rounded-3xl md:rounded-[2rem] text-sm md:text-base font-medium flex-shrink-0 transition-all duration-500 overflow-hidden group border border-white/20 shadow-xl backdrop-blur-xl"
              style={{
                backgroundColor: isActive ? 'rgba(120, 50, 40, 0.85)' : 'rgba(180, 130, 60, 0.75)', // Match mockup tones: dark red for active, golden/brown for inactive
                color: isActive ? '#fff' : '#000',
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeShopTab"
                  className="absolute inset-0 bg-black/20 z-0"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 transition-colors duration-300">
                {category.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
