'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { shopCategories } from '@/app/data/shopData';
import { ShopHero } from './components/ShopHero';
import { AlternatingFeatures } from './components/AlternatingFeatures';
import { ShopGrid } from './components/ShopGrid';
import { Footer } from '@/app/components/footer/Footer';

export default function ShopPage() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('cards');

  const activeCategory = shopCategories.find(c => c.id === activeCategoryId) || shopCategories[1];

  return (
    <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-electric-pink)] selection:text-white">
      
      {/* Swiss Style Floating Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-[var(--color-background)]/90 text-[var(--color-foreground)] border border-[var(--color-border)] backdrop-blur-md p-3.5 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-300 shadow-xl uppercase font-heading text-xs flex items-center gap-2 group"
        aria-label="Back to Main Site"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="hidden sm:inline tracking-widest font-bold">Return</span>
      </Link>

      <ShopHero 
        categories={shopCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategoryId}
      />
      
      <AlternatingFeatures features={activeCategory.features} />
      
      <ShopGrid products={activeCategory.products} />
      
      <Footer />
    </main>
  );
}
