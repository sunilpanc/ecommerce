import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dataForRounded: { title: string; fileName: string }[] = [
    { title: `Men's T-Shirts`, fileName: 'men-tshirts.svg' },
    { title: `Women's Wear`, fileName: 'womens-wear.svg' },
    { title: `Winter Collections`, fileName: 'winter-collections.svg' },
    { title: `Hooded T-Shirts`, fileName: 'hooded-tshirts.svg' },
    { title: `Polo Neck T-Shirts`, fileName: 'poloneck-tshirts.svg' },
    { title: `Full Sleeves T-Shirts`, fileName: 'fullsleves-tshirts.svg' },
  ];

  dataForTrendingShirts: {
    title: string;
    fileName: string;
    offeredPrice: number;
    originalPrice: number;
  }[] = [
    {
      title: 'Men Henley Neck Full Sleeve Red Wine',
      fileName: 'black-white-check.svg',
      offeredPrice: 399,
      originalPrice: 1299,
    },
    {
      title: 'Here & Now Hoody in Blue Color',
      fileName: 'hoody-tshirts.svg',
      offeredPrice: 599,
      originalPrice: 1899,
    },
    {
      title: 'White Check Half Sleeve T-shirts',
      fileName: 'white-check-tshirt.svg',
      offeredPrice: 699,
      originalPrice: 2199,
    },
    {
      title: 'Zara Full Sleeve Red T-Shirt',
      fileName: 'red-tshirts.svg',
      offeredPrice: 999,
      originalPrice: 4999,
    },
    {
      title: 'Men Henley Neck Full Sleeve Red Wine',
      fileName: 'black-white-check.svg',
      offeredPrice: 399,
      originalPrice: 1299,
    },
    {
      title: 'Here & Now Hoody in Blue Color',
      fileName: 'hoody-tshirts.svg',
      offeredPrice: 599,
      originalPrice: 1899,
    },
    {
      title: 'White Check Half Sleeve T-shirts',
      fileName: 'white-check-tshirt.svg',
      offeredPrice: 699,
      originalPrice: 2199,
    },
    {
      title: 'Zara Full Sleeve Red T-Shirt',
      fileName: 'red-tshirts.svg',
      offeredPrice: 999,
      originalPrice: 4999,
    },
  ];

  dataForFeaturedProducts: {
    title: string;
    fileName: string;
    offeredPrice: number;
    originalPrice: number;
  }[] = [
    {
      title: 'Men Henley Neck Full Sleeve Red Wine',
      fileName: 'black-white-check.svg',
      offeredPrice: 399,
      originalPrice: 1299,
    },
    {
      title: 'Here & Now Hoody in Blue Color',
      fileName: 'hoody-tshirts.svg',
      offeredPrice: 599,
      originalPrice: 1899,
    },
    {
      title: 'White Check Half Sleeve T-shirts',
      fileName: 'white-check-tshirt.svg',
      offeredPrice: 699,
      originalPrice: 2199,
    },
    {
      title: 'Zara Full Sleeve Red T-Shirt',
      fileName: 'red-tshirts.svg',
      offeredPrice: 999,
      originalPrice: 4999,
    },
  ];
  dataForNewProducts: {
    title: string;
    fileName: string;
    offeredPrice: number;
    originalPrice: number;
  }[] = [
    {
      title: 'Men Henley Neck Full Sleeve Red Wine',
      fileName: 'black-white-check.svg',
      offeredPrice: 399,
      originalPrice: 1299,
    },
    {
      title: 'Here & Now Hoody in Blue Color',
      fileName: 'hoody-tshirts.svg',
      offeredPrice: 599,
      originalPrice: 1899,
    },
    {
      title: 'White Check Half Sleeve T-shirts',
      fileName: 'white-check-tshirt.svg',
      offeredPrice: 699,
      originalPrice: 2199,
    },
    {
      title: 'Zara Full Sleeve Red T-Shirt',
      fileName: 'red-tshirts.svg',
      offeredPrice: 999,
      originalPrice: 4999,
    },
  ];

  dataForBestSellingProducts: {
    title: string;
    fileName: string;
    offeredPrice: number;
    originalPrice: number;
  }[] = [
    {
      title: 'Men Henley Neck Full Sleeve Red Wine',
      fileName: 'black-white-check.svg',
      offeredPrice: 399,
      originalPrice: 1299,
    },
    {
      title: 'Here & Now Hoody in Blue Color',
      fileName: 'hoody-tshirts.svg',
      offeredPrice: 599,
      originalPrice: 1899,
    },
    {
      title: 'White Check Half Sleeve T-shirts',
      fileName: 'white-check-tshirt.svg',
      offeredPrice: 699,
      originalPrice: 2199,
    },
    {
      title: 'Zara Full Sleeve Red T-Shirt',
      fileName: 'red-tshirts.svg',
      offeredPrice: 999,
      originalPrice: 4999,
    },
  ];
  dataForCollections: { fileName: string; title: string }[] = [
    { fileName: 'street-wear.svg', title: 'Street Wear' },
    { fileName: 'striped-tshirts.svg', title: 'Striped T-Shirts' },
    { fileName: 'round-neck-tshirts.svg', title: 'Round Neck T-Shirts' },
    { fileName: 'printed-tshirts.svg', title: 'Printed T-Shirts' },
    { fileName: 'oversized-tshirts.svg', title: 'Oversized T-Shirts' },
    { fileName: 'half-sleeves-tshirts.svg', title: 'Half Sleeves T-Shirts' },
  ];

  dataForSaleCard: { fileName: string; discount: number }[] = [
    { fileName: 'diamond.svg', discount: 85 },
    { fileName: 'discount-icon.svg', discount: 75 },
  ];
}
