import { cn } from '@/lib/utils';
import { AnimateIn } from './AnimateIn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <AnimateIn direction="up" className={cn("mb-12", align === 'center' && "text-center", className)}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/60 max-w-2xl text-balance">
          {align === 'center' ? (
            <span className="mx-auto block">{subtitle}</span>
          ) : (
            subtitle
          )}
        </p>
      )}
    </AnimateIn>
  );
}
