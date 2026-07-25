'use client';

import { motion } from 'motion/react';
import { ShopCategoryData } from '@/app/data/shopData';
import { ShopProductCard } from './ShopProductCard';
import { SectionHeading } from '@/app/components/shared/SectionHeading';

interface ShopGridProps {
  products: ShopCategoryData['products'];
}

export function ShopGrid({ products }: ShopGridProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="py-32 bg-[var(--color-background)]">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <SectionHeading 
          title="Catalog Display" 
          subtitle="Window store collection — photo and pricing details." 
        />
      </div>

      {/* 3-Column Swiss Grid with 1px border gap */}
      <div className="w-full border-y border-[var(--color-border)] bg-[var(--color-border)]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px]">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ShopProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
