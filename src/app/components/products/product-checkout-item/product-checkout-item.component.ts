import { Component } from '@angular/core';

@Component({
  selector: 'app-product-checkout-item',
  templateUrl: './product-checkout-item.component.html',
  styleUrls: ['./product-checkout-item.component.css']
})
export class ProductCheckoutItemComponent {

  quantity: number = 1

  increament(){
    this.quantity++;
  }

  decrement(){
    this.quantity--;
  }

}
