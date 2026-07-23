'use client';

import { cn } from '@/lib/utils';
import { categories } from '@/app/data/products';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-0 border border-[var(--color-border)] inline-flex bg-[var(--color-background)]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-6 py-4 text-sm font-bold uppercase tracking-widest transition-colors border-r border-[var(--color-border)] last:border-r-0 outline-none",
            activeCategory === category
              ? "bg-[var(--color-foreground)] text-[var(--color-background)]"
              : "bg-transparent text-white/60 hover:bg-white/10 hover:text-white"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
