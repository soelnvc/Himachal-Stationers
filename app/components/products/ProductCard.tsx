import Image from 'next/image';
import { Product } from '@/app/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative aspect-[3/4] w-full bg-[var(--color-deep-space)] overflow-hidden">
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
        sizes="(max-width: 768px) 33vw, 33vw"
      />

      {/* Dark overlay for readability on hover, persistent on mobile/active */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34,34,34,0.95)] via-[rgba(34,34,34,0.3)] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 md:p-6" />

      {/* Best Seller Badge */}
      {product.isBestSeller && (
        <div className="absolute top-2 left-2 bg-[var(--color-neon-purple)] text-[var(--color-absolute-light)] text-[8px] md:text-xs font-bold px-2 py-1 uppercase tracking-widest z-10">
          Best
        </div>
      )}

      {/* Price Tag Overlay (Top Right) */}
      {product.price && (
        <div className="absolute top-2 right-2 bg-[var(--color-absolute-light)] text-[var(--color-absolute-dark)] text-[10px] md:text-sm font-bold px-2 py-1 uppercase tracking-wider z-10">
          {product.price}
        </div>
      )}

      {/* Content details Overlay (Bottom Left) */}
      <div className="absolute bottom-2 left-2 right-2 md:bottom-6 md:left-6 md:right-6 z-10 flex flex-col pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[8px] md:text-xs font-bold text-[var(--color-neon-orange)] tracking-widest uppercase mb-1">
          {product.category}
        </span>
        <h3 className="text-[10px] sm:text-xs md:text-xl font-bold font-heading uppercase text-[var(--color-absolute-light)] tracking-tighter leading-tight">
          {product.name}
        </h3>
      </div>
    </div>
  );
}
