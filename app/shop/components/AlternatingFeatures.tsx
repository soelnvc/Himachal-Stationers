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
    <div className="py-24 md:py-32 bg-[var(--color-background)] flex flex-col gap-24 md:gap-32 border-b border-[var(--color-border)] overflow-hidden">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const featureNum = String(index + 1).padStart(2, '0');

        return (
          <div key={index} className="container mx-auto px-4 md:px-12">
            
            {/* Header divider bar for Swiss grid structure */}
            <div className="flex items-center justify-between border-t border-b border-[var(--color-border)] py-3 mb-8">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-electric-pink)] font-heading">
                {featureNum} // Selection Overview
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-foreground)]/40 font-heading">
                Swiss Catalog Grid
              </span>
            </div>

            {/* Asymmetrical 12-Column Swiss Layout (Flat, Zero Shadows) */}
            <div className="grid grid-cols-12 gap-0 items-center">
              
              {/* Image Block */}
              <motion.div 
                className={cn(
                  "relative aspect-[4/3] md:aspect-[3/2] overflow-hidden border border-[var(--color-border)] bg-[var(--color-deep-space)] z-0",
                  // Mobile Asymmetric placement using 12-col grid span & starts
                  isEven 
                    ? "col-span-10 col-start-3 md:col-span-6 md:col-start-1" 
                    : "col-span-10 col-start-1 md:col-span-6 md:col-start-7"
                )}
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 85vw, 50vw"
                />
              </motion.div>

              {/* Text Block */}
              <motion.div 
                className={cn(
                  "flex flex-col justify-center bg-[var(--color-background)] border border-[var(--color-border)] p-6 md:p-12 z-10",
                  // Mobile Asymmetric placement: Offset text block spanning cols 1-11 or 2-12
                  isEven 
                    ? "col-span-11 col-start-1 -mt-8 md:mt-0 md:col-span-6 md:col-start-7 md:-ml-12 border-l-4 border-l-[var(--color-electric-pink)]" 
                    : "col-span-11 col-start-2 -mt-8 md:mt-0 md:col-span-6 md:col-start-1 md:-mr-12 text-right md:text-left items-end md:items-start border-r-4 border-r-[var(--color-neon-purple)] md:border-r-0 md:border-l-4 md:border-l-[var(--color-neon-purple)]"
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-electric-pink)] mb-2 font-heading">
                  {featureNum} //
                </span>
                
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--color-foreground)] font-heading mb-4 leading-none">
                  {feature.title}
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-[var(--color-foreground)]/80 font-sans leading-relaxed">
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
