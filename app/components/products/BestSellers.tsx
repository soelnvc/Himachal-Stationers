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

  const filteredProducts = products.filter(
    (product) => activeCategory === 'All' || product.category === activeCategory
  );

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
