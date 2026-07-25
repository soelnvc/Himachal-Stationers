export type ShopCategoryData = {
  id: string;
  label: string;
  heroImage: string;
  features: {
    title: string;
    description: string;
    image: string;
  }[];
  products: {
    id: string;
    image: string;
    price: string;
  }[];
};

export const shopCategories: ShopCategoryData[] = [
  {
    id: 'back-to-school',
    label: 'Back to School',
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2400&auto=format&fit=crop',
    features: [
      {
        title: 'Essential Supplies',
        description: 'Everything you need to start the semester right.',
        image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=800&auto=format&fit=crop',
      }
    ],
    products: [
      { id: 'bts1', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop', price: '₹150' },
      { id: 'bts2', image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=600&auto=format&fit=crop', price: '₹220' },
    ]
  },
  {
    id: 'cards',
    label: 'Cards',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2400&auto=format&fit=crop', // Wedding theme hero
    features: [
      {
        title: 'Wedding Cards',
        description: 'Premium, handcrafted invitations for your special day. Elegant designs that leave a lasting impression.',
        image: 'https://images.unsplash.com/photo-1520694478166-daaaaaec74b4?q=80&w=800&auto=format&fit=crop', // Wedding invite
      },
      {
        title: 'Shagun ke Lifafe',
        description: 'Traditional and modern gifting envelopes adorned with exquisite detailing and auspicious motifs.',
        image: 'https://images.unsplash.com/photo-1610190565814-7473faaa58d3?q=80&w=800&auto=format&fit=crop', // Traditional / Indian / Gold
      }
    ],
    products: [
      { id: 'c1', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop', price: '₹45' },
      { id: 'c2', image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=600&auto=format&fit=crop', price: '₹80' },
      { id: 'c3', image: 'https://images.unsplash.com/photo-1518889746356-658c238b1f5d?q=80&w=600&auto=format&fit=crop', price: '₹120' },
      { id: 'c4', image: 'https://images.unsplash.com/photo-1572945281483-e18e0a349bc9?q=80&w=600&auto=format&fit=crop', price: '₹60' },
      { id: 'c5', image: 'https://images.unsplash.com/photo-1594895697334-97c72f10d65b?q=80&w=600&auto=format&fit=crop', price: '₹35' },
      { id: 'c6', image: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?q=80&w=600&auto=format&fit=crop', price: '₹95' },
    ]
  },
  {
    id: 'for-the-artists',
    label: 'For THE ARTISTS',
    heroImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2400&auto=format&fit=crop',
    features: [
      {
        title: 'Professional Tools',
        description: 'High-grade materials for creators who demand the best.',
        image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800&auto=format&fit=crop',
      }
    ],
    products: [
      { id: 'art1', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop', price: '₹450' },
    ]
  },
  {
    id: 'paperwork',
    label: 'Paperwork',
    heroImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2400&auto=format&fit=crop',
    features: [
      {
        title: 'Office Essentials',
        description: 'Keep your workspace organized and productive.',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
      }
    ],
    products: [
      { id: 'pw1', image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=600&auto=format&fit=crop', price: '₹120' },
    ]
  }
];
