import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    document.body.style.backgroundColor = "unset";
  }
  ngOnInit(): void {
    document.body.style.backgroundColor = "#f2f2f2";
  }


}
