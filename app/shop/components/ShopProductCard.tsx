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
    <div className="group relative aspect-[4/5] bg-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-sm">
      <Image
        src={product.image}
        alt="Product Image"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      
      {/* Soft gradient bottom to make price pop */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Floating Price Tag */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-black font-semibold text-sm px-3 py-1.5 rounded shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {product.price}
      </div>
    </div>
  );
}
