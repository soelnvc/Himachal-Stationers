import Image from 'next/image';

interface ShopProductCardProps {
  product: {
    id: string;
    image: string;
    price: string;
  };
}

export function ShopProductCard({ product }: ShopProductCardProps) {
  return (
    <div className="group relative aspect-[3/4] w-full bg-[var(--color-deep-space)] overflow-hidden border border-[var(--color-border)]">
      {/* Product Image */}
      <Image
        src={product.image}
        alt="Product Image"
        fill
        className="object-cover transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105 opacity-90 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-100"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      
      {/* Dark gradient bottom for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34,34,34,0.85)] via-[rgba(34,34,34,0.2)] to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Swiss Price Tag Overlay (Top Right) */}
      <div className="absolute top-3 right-3 bg-[var(--color-foreground)] text-[var(--color-background)] text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 font-heading z-10 shadow-lg">
        {product.price}
      </div>
    </div>
  );
}
