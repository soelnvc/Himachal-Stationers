'use client';

import { cn } from '@/lib/utils';
import { categories } from '@/app/data/products';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
            activeCategory === category
              ? "bg-[var(--color-surface)] text-white border border-[var(--color-neon-purple)] shadow-[0_0_15px_rgba(107,72,255,0.3)]"
              : "bg-transparent text-white/60 border border-[var(--color-border)] hover:bg-white/5 hover:text-white"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
