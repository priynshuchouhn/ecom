import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  constructor(private router: Router){}

  section: string = 'cart';

  user =  JSON.parse(localStorage.getItem('user')!);

  ngOnDestroy(): void {
    document.body.style.backgroundColor = "unset";
  }
  ngOnInit(): void {
    document.body.style.backgroundColor = "#f2f2f2";
  }

  onPlaceOrder(){
    if(this.user){
      this.section = 'delivery';
    }else{
      this.router.navigate(['auth/login']);
    }
  }

  onDeliverHere(){
    this.section = 'payment';
  }




}
