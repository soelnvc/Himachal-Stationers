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
  // Default to the first category, e.g., 'back-to-school' or 'cards'
  // Based on the mockup, 'cards' was the active one
  const [activeCategoryId, setActiveCategoryId] = useState<string>('cards');

  const activeCategory = shopCategories.find(c => c.id === activeCategoryId) || shopCategories[1];

  return (
    <main className="min-h-screen bg-white selection:bg-[#783228] selection:text-white">
      
      {/* Floating Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-black/10 hover:bg-black/20 backdrop-blur-md p-3 rounded-full transition-colors text-black"
        aria-label="Back to Home"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <ShopHero 
        categories={shopCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategoryId}
      />
      
      <AlternatingFeatures features={activeCategory.features} />
      
      <ShopGrid products={activeCategory.products} />
      
      {/* Reusing existing Footer, but note it might contrast with the new aesthetic slightly, though footers are fine */}
      <Footer />
    </main>
  );
}
