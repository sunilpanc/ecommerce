import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  src: string = './../../../assets/images/products/';
  @Input() title: string | undefined;
  @Input() originalPrice: number | undefined;
  @Input() offeredPrice: number | undefined;
  @Input() set fileName(val: string) {
    this.src += val;
  }
}
