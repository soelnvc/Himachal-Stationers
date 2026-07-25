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
    <div className="py-32 bg-[var(--color-background)] flex flex-col gap-24 md:gap-32 border-b border-[var(--color-border)]">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const featureNum = String(index + 1).padStart(2, '0');

        return (
          <div key={index} className="container mx-auto px-6 md:px-12">
            <div className={cn(
              "flex flex-col md:flex-row items-stretch gap-12 lg:gap-24 border-t border-[var(--color-border)] pt-12",
              !isEven && "md:flex-row-reverse"
            )}>
              {/* Image Container */}
              <motion.div 
                className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-[3/2] overflow-hidden border border-[var(--color-border)] bg-[var(--color-deep-space)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                className="w-full md:w-1/2 flex flex-col justify-center items-start text-left"
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-electric-pink)] mb-3 font-heading">
                  {featureNum} // Selection
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--color-foreground)] font-heading mb-6 leading-none">
                  {feature.title}
                </h2>
                <p className="text-base md:text-xl text-[var(--color-foreground)]/70 font-sans border-l-2 border-[var(--color-neon-orange)] pl-4">
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
