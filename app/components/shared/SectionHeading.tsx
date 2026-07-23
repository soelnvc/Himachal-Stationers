import { cn } from '@/lib/utils';
import { MaskedReveal } from './MaskedReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 md:mb-24", 
      align === 'center' && "text-center", 
      align === 'right' && "text-right",
      className
    )}>
      <MaskedReveal direction="up" duration={0.8} delay={0.1}>
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold mb-6 text-balance tracking-tighter uppercase leading-[0.85] text-white">
          {title}
        </h2>
      </MaskedReveal>
      {subtitle && (
        <MaskedReveal direction="up" duration={0.8} delay={0.2}>
          <p className="text-xl md:text-2xl text-[var(--color-neon-purple)] max-w-2xl font-medium text-balance tracking-tight">
            {align === 'center' ? (
              <span className="mx-auto block">{subtitle}</span>
            ) : align === 'right' ? (
              <span className="ml-auto block">{subtitle}</span>
            ) : (
              subtitle
            )}
          </p>
        </MaskedReveal>
      )}
    </div>
  );
}
