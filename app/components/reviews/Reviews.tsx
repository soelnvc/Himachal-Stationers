import { reviews } from '@/app/data/reviews';
import { SectionHeading } from '../shared/SectionHeading';
import { MaskedReveal } from '../shared/MaskedReveal';
import { SwissGridLine } from '../shared/SwissGridLine';
import { ReviewCard } from './ReviewCard';

export function Reviews() {
  return (
    <section id="reviews" className="py-32 relative bg-[var(--color-deep-space)] overflow-hidden">
      <SwissGridLine direction="horizontal" className="top-0" />
      <SwissGridLine direction="vertical" className="left-1/2 hidden md:block" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Word of Mouth" 
          subtitle="What our community says about our curation."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[var(--color-border)] border-y border-[var(--color-border)]">
          {reviews.map((review, i) => (
            <div key={review.id} className="bg-[var(--color-deep-space)] p-8 md:p-16">
              <MaskedReveal direction="up" delay={i * 0.2}>
                <ReviewCard review={review} />
              </MaskedReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
