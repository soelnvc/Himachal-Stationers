'use client';

import { useState } from 'react';
import { products } from '@/app/data/products';
import { SectionHeading } from '../shared/SectionHeading';
import { CategoryTabs } from './CategoryTabs';
import { ProductCard } from './ProductCard';
import { AnimateIn } from '../shared/AnimateIn';

export function BestSellers() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts = products.filter(
    (product) => activeCategory === 'All' || product.category === activeCategory
  );

  return (
    <section id="shop" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Curated Collection" 
          subtitle="Explore our thoughtfully selected stationery designed to elevate your creative workflow." 
        />
        
        <AnimateIn delay={0.2}>
          <CategoryTabs 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <AnimateIn key={product.id} delay={0.1 + (index % 3) * 0.1}>
              <ProductCard product={product} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
