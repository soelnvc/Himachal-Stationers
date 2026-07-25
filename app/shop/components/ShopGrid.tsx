'use client';

import { motion } from 'motion/react';
import { ShopCategoryData } from '@/app/data/shopData';
import { ShopProductCard } from './ShopProductCard';

interface ShopGridProps {
  products: ShopCategoryData['products'];
}

export function ShopGrid({ products }: ShopGridProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-black font-heading tracking-tight">
            Shop
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ShopProductCard product={product} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
