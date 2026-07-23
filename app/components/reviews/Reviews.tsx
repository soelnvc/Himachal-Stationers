import { reviews } from '@/app/data/reviews';
import { SectionHeading } from '../shared/SectionHeading';
import { ReviewCard } from './ReviewCard';
import { AnimateIn } from '../shared/AnimateIn';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative bg-[var(--color-surface)]/30 border-y border-[var(--color-border)]">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[var(--color-cosmic-blue)]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Community Love" 
          subtitle="Hear what creatives, students, and professionals say about our collection." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <AnimateIn key={review.id} delay={index * 0.15}>
              <ReviewCard review={review} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
