import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlowCard({ children, className, hoverEffect = true }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-[var(--color-surface)] p-6 transition-all duration-300",
        "border border-[var(--color-border)] backdrop-blur-xl",
        hoverEffect && "hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(107,72,255,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
