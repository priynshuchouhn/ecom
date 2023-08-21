import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthModule } from './components/auth/auth.module';
import { OfferDescCardComponent } from './components/products/offer-desc-card/offer-desc-card.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { CategoryCardComponent } from './components/products/category-card/category-card.component';




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    OfferDescCardComponent,
    ProductCardComponent,
    CategoryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
