import { Product } from '@/app/types';

export const categories = ['All', 'Cards', 'Kids & Art', 'Paperwork', 'Back to School'] as const;

export const products: Product[] = [
  {
    id: '1',
    name: 'Cosmic Gradient Notebook',
    category: 'Paperwork',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    price: '$24.00',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Nebula Gel Pens (Set of 6)',
    category: 'Kids & Art',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=600&auto=format&fit=crop',
    price: '$18.00',
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Minimalist Greeting Card',
    category: 'Cards',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop',
    price: '$6.00',
  },
  {
    id: '4',
    name: 'Student Planner 2026',
    category: 'Back to School',
    image: 'https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=600&auto=format&fit=crop',
    price: '$32.00',
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'Starlight Highlighters',
    category: 'Kids & Art',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop',
    price: '$12.00',
  },
  {
    id: '6',
    name: 'Executive Folio',
    category: 'Paperwork',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    price: '$85.00',
  }
];
