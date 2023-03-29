import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';

const PRODUCT_DATA = [
  {
    id: '1',
    title: 'Men Henley Neck Full Sleeve Red Wine',
    offeredPrice: 399,
    originalPrice: 1299,
    fileName: 'black-white-check.svg',
    totalItems: 10,
    rating: 4.5,
    size: { S: 1, M: 3, L: 1, XL: 4, XXL: 1 },
    totalItemSold: 5,
  },
  {
    id: '2',
    title: 'Here & Now Hoody in Blue Color',
    offeredPrice: 599,
    originalPrice: 1899,
    fileName: 'hoody-tshirts.svg',
    totalItems: 15,
    rating: 4.5,
    size: { S: 3, M: 3, L: 3, XL: 4, XXL: 2 },
    totalItemSold: 25,
  },
  {
    id: '3',
    title: 'White Check Half Sleeve T-shirts',
    offeredPrice: 699,
    originalPrice: 2199,
    fileName: 'white-check-tshirt.svg',
    totalItems: 20,
    rating: 4.5,
    size: { S: 1, M: 8, L: 6, XL: 4, XXL: 1 },
    totalItemSold: 100,
  },
  {
    id: '4',
    title: 'Zara Full Sleeve Red T-Shirt',
    offeredPrice: 999,
    originalPrice: 4999,
    fileName: 'red-tshirts.svg',
    totalItems: 50,
    rating: 4.5,
    size: { S: 10, M: 10, L: 10, XL: 15, XXL: 5 },
    totalItemSold: 115,
  },
  {
    id: '5',
    title: 'Men Henley Neck Full Sleeve Red Wine',
    offeredPrice: 399,
    originalPrice: 1299,
    fileName: 'black-white-check.svg',
    totalItems: 10,
    rating: 4.5,
    size: { S: 1, M: 3, L: 1, XL: 4, XXL: 1 },
    totalItemSold: 5,
  },
  {
    id: '6',
    title: 'Men Henley Neck Full Sleeve Red Wine',
    offeredPrice: 199,
    originalPrice: 1299,
    fileName: 'black-white-check.svg',
    totalItems: 10,
    rating: 4.5,
    size: { S: 1, M: 3, L: 1, XL: 4, XXL: 1 },
    totalItemSold: 5,
  },
  {
    id: '7',
    title: 'Here & Now Hoody in Blue Color',
    offeredPrice: 599,
    originalPrice: 1899,
    fileName: 'hoody-tshirts.svg',
    totalItems: 15,
    rating: 4.5,
    size: { S: 3, M: 3, L: 3, XL: 4, XXL: 2 },
    totalItemSold: 25,
  },
  {
    id: '8',
    title: 'White Check Half Sleeve T-shirts',
    offeredPrice: 699,
    originalPrice: 2199,
    fileName: 'white-check-tshirt.svg',
    totalItems: 20,
    rating: 4.5,
    size: { S: 1, M: 8, L: 6, XL: 4, XXL: 1 },
    totalItemSold: 100,
  },
  {
    id: '9',
    title: 'Zara Full Sleeve Red T-Shirt',
    offeredPrice: 999,
    originalPrice: 4999,
    fileName: 'red-tshirts.svg',
    totalItems: 50,
    rating: 4.5,
    size: { S: 10, M: 10, L: 10, XL: 15, XXL: 5 },
    totalItemSold: 115,
  },
  {
    id: '10',
    title: 'Men Henley Neck Full Sleeve Red Wine',
    offeredPrice: 399,
    originalPrice: 1299,
    fileName: 'black-white-check.svg',
    totalItems: 10,
    rating: 4.5,
    size: { S: 1, M: 3, L: 1, XL: 4, XXL: 1 },
    totalItemSold: 5,
  },
  {
    id: '11',
    title: 'Men Henley Neck Full Sleeve Red Wine',
    offeredPrice: 399,
    originalPrice: 1299,
    fileName: 'black-white-check.svg',
    totalItems: 10,
    rating: 4.5,
    size: { S: 1, M: 3, L: 1, XL: 4, XXL: 1 },
    totalItemSold: 5,
  },
  {
    id: '12',
    title: 'Here & Now Hoody in Blue Color',
    offeredPrice: 599,
    originalPrice: 1899,
    fileName: 'hoody-tshirts.svg',
    totalItems: 15,
    rating: 4.5,
    size: { S: 3, M: 3, L: 3, XL: 4, XXL: 2 },
    totalItemSold: 25,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
  constructor() {}
  private products: Product[] = PRODUCT_DATA;
  productChanged = new Subject<Product[]>();

  getProducts() {
    return this.products.slice();
  }
}
