export interface Product {
  id: string;
  title: string;
  offeredPrice: number;
  originalPrice: number;
  fileName: string;
  totalItems: number;
  rating: number;
  size: { S: number; M: number; L: number; XL: number; XXL: number };
  totalItemSold: number;
}
