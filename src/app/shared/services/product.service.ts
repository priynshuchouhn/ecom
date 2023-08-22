import { Injectable } from '@angular/core';
import { OfferDescription } from '../models/offer.model';
import { CategoryCard } from '../models/category-card.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  tempOffer: OfferDescription[] = [
    {
      imagePath: 'https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_1588xN.4245808662_a3x4.jpg',
      offer: 'Up to 40% off on',
      description: 'Womens Ethnic Clothing'
    },
    {
      imagePath: 'https://i.etsystatic.com/32501528/r/il/23a5b4/3700725057/il_1588xN.3700725057_szgj.jpg',
      offer: 'Up to 40% off on',
      description: 'Womens Western Clothing'
    },
    {
      imagePath: 'https://i.etsystatic.com/25566015/r/il/5b71e2/3196479462/il_1588xN.3196479462_20xh.jpg',
      offer: 'Up to 40% off on',
      description: 'Mens Clothing'
    },
    {
      imagePath: 'https://i.etsystatic.com/24480679/r/il/d42481/4357242172/il_1588xN.4357242172_hmhi.jpg',
      offer: 'Up to 40% off on',
      description: 'Womens Shoes'
    },
    {
      imagePath: 'https://i.etsystatic.com/27315676/r/il/1ec9f4/4052126126/il_1588xN.4052126126_p41j.jpg',
      offer: 'Up to 40% off on',
      description: 'Wedding Clothing'
    },
    {
      imagePath: 'https://i.etsystatic.com/37671807/r/il/e7e9fe/4482590499/il_300x300.4482590499_6buz.jpg',
      offer: 'Up to 40% off on',
      description: 'Jewellery'
    },
  ];

  tempCategoryCardInfo: CategoryCard[] = [
    {
      imagePath: 'https://i.etsystatic.com/22439879/c/1000/794/0/595/il/692950/4719403898/il_340x270.4719403898_ekpc.jpg',
      description: 'Ecom Staff Picks'
    },
    {
      imagePath: 'https://i.etsystatic.com/37016402/c/2253/1790/0/751/il/b1f641/4418096333/il_340x270.4418096333_f7td.jpg',
      description: 'For your home'
    },
    {
      imagePath: 'https://i.etsystatic.com/22605194/c/2000/1589/0/264/il/14ccfa/3657188176/il_340x270.3657188176_pmre.jpg',
      description: 'Kitchen and Dining'
    },
    {
      imagePath: 'https://i.etsystatic.com/24480679/c/961/764/0/160/il/def599/4355874013/il_340x270.4355874013_e5kj.jpg',
      description: 'Gifts for Her'
    },
    {
      imagePath: 'https://i.etsystatic.com/26918689/r/il/d42274/3448225875/il_340x270.3448225875_7dcr.jpg',
      description: 'The Wedding Shop'
    },
  ];

  getOfferDescription() {
    return this.tempOffer.slice();
  }

  getCategoryCardInfo() {
    return this.tempCategoryCardInfo.slice();
  }

  constructor() { }
}
