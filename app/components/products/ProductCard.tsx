import Image from 'next/image';
import { Product } from '@/app/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col h-full bg-[var(--color-background)] overflow-hidden">
      <div className="relative aspect-square lg:aspect-[4/5] w-full bg-[var(--color-deep-space)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.isBestSeller && (
          <div className="absolute top-0 left-0 bg-[var(--color-electric-pink)] text-white text-xs font-bold px-4 py-3 uppercase tracking-widest z-10">
            Best Seller
          </div>
        )}
      </div>
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="text-xs font-bold text-[var(--color-neon-orange)] tracking-widest uppercase mb-4">
          {product.category}
        </div>
        <h3 className="text-3xl font-bold font-heading uppercase text-white tracking-tighter leading-none mb-6 group-hover:text-[var(--color-electric-pink)] transition-colors">
          {product.name}
        </h3>
        {product.price && (
          <div className="mt-auto pt-6 text-xl text-white font-medium border-t border-[var(--color-border)] group-hover:border-[var(--color-electric-pink)] transition-colors">
            {product.price}
          </div>
        )}
      </div>
    </div>
  );
}
