import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWithTitleComponent } from './card-with-title/card-with-title.component';
import { LineWithTextComponent } from './line-with-text/line-with-text.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RoundedComponent } from './rounded/rounded.component';
import { SaleCardComponent } from './sale-card/sale-card.component';

@NgModule({
  declarations: [
    CardWithTitleComponent,
    LineWithTextComponent,
    ProductCardComponent,
    RoundedComponent,
    SaleCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardWithTitleComponent,
    LineWithTextComponent,
    ProductCardComponent,
    RoundedComponent,
    SaleCardComponent,
  ],
})
export class UIModule {}
