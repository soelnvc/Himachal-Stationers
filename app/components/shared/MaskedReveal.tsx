'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MaskedRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
  animateOnMount?: boolean;
}

export function MaskedReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  duration = 0.8,
  animateOnMount = false
}: MaskedRevealProps) {
  const clipPaths = {
    up: { initial: 'inset(100% 0 0 0)', animate: 'inset(0% 0 0 0)' },
    down: { initial: 'inset(0 0 100% 0)', animate: 'inset(0 0 0% 0)' },
    left: { initial: 'inset(0 0 0 100%)', animate: 'inset(0 0 0 0%)' },
    right: { initial: 'inset(0 100% 0 0)', animate: 'inset(0 0% 0 0)' },
  };

  const transformPaths = {
    up: { initial: { y: 20 }, animate: { y: 0 } },
    down: { initial: { y: -20 }, animate: { y: 0 } },
    left: { initial: { x: 20 }, animate: { x: 0 } },
    right: { initial: { x: -20 }, animate: { x: 0 } },
  };

  const animationProps = animateOnMount 
    ? {
        animate: { 
          clipPath: clipPaths[direction].animate,
          ...transformPaths[direction].animate
        }
      }
    : {
        whileInView: { 
          clipPath: clipPaths[direction].animate,
          ...transformPaths[direction].animate
        },
        viewport: { once: true, margin: "0px" }
      };

  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ 
          clipPath: clipPaths[direction].initial,
          ...transformPaths[direction].initial
        }}
        {...animationProps}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1] // Brutalist hard ease
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
