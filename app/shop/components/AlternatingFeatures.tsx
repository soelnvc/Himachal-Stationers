'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ShopCategoryData } from '@/app/data/shopData';
import { cn } from '@/lib/utils';

interface AlternatingFeaturesProps {
  features: ShopCategoryData['features'];
}

export function AlternatingFeatures({ features }: AlternatingFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <div className="py-24 md:py-32 bg-white flex flex-col gap-24 md:gap-32">
      {features.map((feature, index) => {
        // Even indices: Image Left, Text Right
        // Odd indices: Text Left, Image Right
        const isEven = index % 2 === 0;

        return (
          <div key={index} className="container mx-auto px-6 md:px-12">
            <div className={cn(
              "flex flex-col md:flex-row items-center gap-12 lg:gap-24",
              !isEven && "md:flex-row-reverse"
            )}>
              {/* Image Side */}
              <motion.div 
                className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-square overflow-hidden bg-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Text Side */}
              <motion.div 
                className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black font-heading mb-6 leading-tight tracking-tight">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                  {feature.description}
                </p>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
