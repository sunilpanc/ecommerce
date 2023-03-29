import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { RoundedComponent } from './UI/rounded/rounded.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './core/footer/footer.component';
import { UIModule } from './UI/ui.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UIModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
