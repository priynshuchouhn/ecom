import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    document.body.style.backgroundColor = "unset";
  }
  ngOnInit(): void {
    document.body.style.backgroundColor = "#f2f2f2";
  }

}
