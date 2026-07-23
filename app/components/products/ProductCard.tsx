import Image from 'next/image';
import { Product } from '@/app/types';
import { GlowCard } from '../shared/GlowCard';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <GlowCard className="p-4 group">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 border border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[var(--color-deep-space)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-electric-pink)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Best Seller
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-xs font-medium text-[var(--color-solar-glow)] tracking-wider uppercase">
          {product.category}
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-[var(--color-electric-pink)] transition-colors">
          {product.name}
        </h3>
        {product.price && (
          <div className="text-white/70 font-medium">
            {product.price}
          </div>
        )}
      </div>
    </GlowCard>
  );
}
