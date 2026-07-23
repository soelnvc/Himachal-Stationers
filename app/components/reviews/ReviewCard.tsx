import { Review } from '@/app/types';
import { GlowCard } from '../shared/GlowCard';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <GlowCard className="h-full flex flex-col p-8">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating
                ? 'fill-[var(--color-solar-glow)] text-[var(--color-solar-glow)]'
                : 'text-white/20'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-lg text-white/80 leading-relaxed mb-8 flex-grow">
        "{review.content}"
      </blockquote>
      <div className="font-semibold text-white tracking-wide">
        {review.name}
      </div>
    </GlowCard>
  );
}
