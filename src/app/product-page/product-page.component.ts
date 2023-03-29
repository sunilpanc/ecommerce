import { Component, OnInit } from '@angular/core';
import { ProductPageService } from './product-page.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  productData: Product[] | undefined;
  constructor(private productService: ProductPageService) {}
  ngOnInit(): void {
    this.productData = this.productService.getProducts();
  }
}
