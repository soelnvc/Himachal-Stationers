import { Review } from '@/app/types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-[6rem] leading-[0.5] font-heading text-[var(--color-border)] font-bold mb-8">"</div>
      <p className="text-2xl md:text-3xl font-medium text-white text-balance tracking-tight leading-snug mb-12 flex-grow">
        {review.content}
      </p>
      
      <div className="flex items-center space-x-4 border-t border-[var(--color-border)] pt-8">
        <div className="w-12 h-12 bg-white flex items-center justify-center font-bold text-[var(--color-background)] font-heading uppercase text-xl">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest text-sm">{review.name}</h4>
          <p className="text-[var(--color-electric-pink)] text-xs uppercase tracking-widest mt-1">
            {Array.from({ length: review.rating }).map(() => '★').join('')}
          </p>
        </div>
      </div>
    </div>
  );
}
