import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { RoundedComponent } from './UI/rounded/rounded.component';
import { HttpClientModule } from '@angular/common/http';
import { LineWithTextComponent } from './UI/line-with-text/line-with-text.component';
import { ProductCardComponent } from './UI/product-card/product-card.component';
import { CardWithTitleComponent } from './UI/card-with-title/card-with-title.component';
import { SaleCardComponent } from './UI/sale-card/sale-card.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RoundedComponent,
    LineWithTextComponent,
    ProductCardComponent,
    CardWithTitleComponent,
    SaleCardComponent,
    ProductPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
