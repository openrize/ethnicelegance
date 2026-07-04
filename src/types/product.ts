
export type Category = 'womens' | 'mens' | 'accessories' | 'new' | 'bestseller' | 'sale';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  originalPrice: number;
  image: string;
  gallery?: string[];
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  sizes: string[];
  colors: string[];
  discount: number;
  stockLeft: number;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
