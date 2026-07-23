'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SwissGridLineProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
  delay?: number;
}

export function SwissGridLine({ direction = 'horizontal', className, delay = 0 }: SwissGridLineProps) {
  const isHorizontal = direction === 'horizontal';
  
  return (
    <motion.div
      initial={{ 
        scaleX: isHorizontal ? 0 : 1,
        scaleY: isHorizontal ? 1 : 0,
        transformOrigin: isHorizontal ? 'left' : 'top'
      }}
      whileInView={{ 
        scaleX: 1,
        scaleY: 1
      }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 1,
        delay,
        ease: [0.76, 0, 0.24, 1]
      }}
      className={cn(
        "bg-[var(--color-border)] absolute z-0",
        isHorizontal ? "h-[1px] w-full left-0 right-0" : "w-[1px] h-full top-0 bottom-0",
        className
      )}
    />
  );
}
