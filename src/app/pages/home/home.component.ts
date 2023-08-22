import { Component, OnInit } from '@angular/core';
import { CategoryCard } from 'src/app/shared/models/category-card.model';
import { OfferDescription } from 'src/app/shared/models/offer.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  lstOfferDesc: OfferDescription[] =[];
  lstCategoryCard: CategoryCard[] = [];

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.lstOfferDesc = this.productService.getOfferDescription();
    this.lstCategoryCard = this.productService.getCategoryCardInfo();
  }



}
