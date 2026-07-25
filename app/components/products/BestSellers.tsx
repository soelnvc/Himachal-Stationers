'use client';

import { useState } from 'react';
import { products } from '@/app/data/products';
import { SectionHeading } from '../shared/SectionHeading';
import { CategoryTabs } from './CategoryTabs';
import { ProductCard } from './ProductCard';
import { MaskedReveal } from '../shared/MaskedReveal';
import { SwissGridLine } from '../shared/SwissGridLine';

export function BestSellers() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const displayedProducts = products
    .filter((product) => activeCategory === 'All' || product.category === activeCategory)
    .slice(0, 4);

  return (
    <section id="shop" className="py-32 relative bg-[var(--color-background)]">
      <SwissGridLine direction="horizontal" className="top-0" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-24">
        <SectionHeading 
          title="Curated Collection" 
          subtitle="Explore our thoughtfully selected stationery designed to elevate your creative workflow." 
        />
        
        <MaskedReveal direction="left" duration={0.8} delay={0.3}>
          <CategoryTabs 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </MaskedReveal>
      </div>

      <div className="w-full border-y border-[var(--color-border)] bg-[var(--color-border)]">
        <div className="grid grid-cols-2 gap-[1px]">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="w-full border-b border-[var(--color-border)]">
        <a 
          href="/shop" 
          className="flex items-center justify-between px-6 md:px-12 py-8 group hover:bg-[var(--color-border)]/25 transition-colors text-xl md:text-2xl uppercase tracking-widest font-bold text-[var(--color-foreground)]"
        >
          <span>View Shop</span>
          <span className="group-hover:translate-x-4 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
}
