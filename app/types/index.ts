export interface Product {
  id: string;
  name: string;
  category: 'Cards' | 'Kids & Art' | 'Paperwork' | 'Back to School';
  image: string;
  price?: string;
  isBestSeller?: boolean;
}

export interface Review {
  id: string;
  name: string;
  content: string;
  rating: number;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
  socials: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
}
