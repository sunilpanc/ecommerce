import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { UIModule } from '../UI/ui.module';
import { ProductPageRoutingModule } from './product-page-routing.module';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [CommonModule, UIModule, ProductPageRoutingModule],
})
export class ProductPageModule {}
