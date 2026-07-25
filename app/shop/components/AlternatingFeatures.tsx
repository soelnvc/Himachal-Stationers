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
    <div className="py-24 md:py-32 bg-[var(--color-background)] flex flex-col gap-20 md:gap-32 border-b border-[var(--color-border)] overflow-hidden">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const featureNum = String(index + 1).padStart(2, '0');

        return (
          <div key={index} className="container mx-auto px-4 md:px-12">
            {/* Desktop: Standard Staggered Grid | Mobile: High-Impact Asymmetrical Overlap */}
            <div className={cn(
              "flex flex-col md:flex-row items-stretch gap-6 md:gap-16 lg:gap-24 border-t border-[var(--color-border)] pt-8 md:pt-16 relative",
              !isEven && "md:flex-row-reverse"
            )}>
              
              {/* Asymmetrical Image Container */}
              <motion.div 
                className={cn(
                  "relative aspect-[4/3] md:aspect-[3/2] overflow-hidden border border-[var(--color-border)] bg-[var(--color-deep-space)] shadow-2xl z-0",
                  // Mobile Asymmetric positioning: Alternate right-aligned vs left-aligned 85% width
                  isEven ? "w-[85%] ml-auto md:w-1/2 md:ml-0" : "w-[85%] mr-auto md:w-1/2 md:mr-0"
                )}
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 85vw, 50vw"
                />
                
                {/* Mobile Floating Number Tag inside Image corner */}
                <div className="absolute top-2 left-2 md:hidden bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-heading font-bold text-[var(--color-electric-pink)] tracking-widest uppercase border border-white/20">
                  {featureNum} //
                </div>
              </motion.div>

              {/* Asymmetrical Text Overlapping Card */}
              <motion.div 
                className={cn(
                  "flex flex-col justify-center bg-[var(--color-background)] border border-[var(--color-border)] p-6 md:p-0 md:bg-transparent md:border-none shadow-2xl md:shadow-none z-10 md:w-1/2",
                  // Mobile Asymmetric overlap: Float text block over the image corner with negative margin
                  isEven 
                    ? "w-[90%] mr-auto -mt-12 md:mt-0 text-left border-l-4 border-l-[var(--color-electric-pink)] md:border-l-0" 
                    : "w-[90%] ml-auto -mt-12 md:mt-0 text-right md:text-left items-end md:items-start border-r-4 border-r-[var(--color-neon-purple)] md:border-r-0"
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="hidden md:inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-electric-pink)] mb-3 font-heading">
                  {featureNum} // Selection
                </span>
                
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--color-foreground)] font-heading mb-4 leading-none">
                  {feature.title}
                </h2>
                
                <p className={cn(
                  "text-sm sm:text-base md:text-xl text-[var(--color-foreground)]/80 font-sans leading-relaxed max-w-md",
                  isEven ? "md:border-l-2 md:border-[var(--color-neon-orange)] md:pl-4" : "md:border-l-2 md:border-[var(--color-neon-orange)] md:pl-4"
                )}>
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
