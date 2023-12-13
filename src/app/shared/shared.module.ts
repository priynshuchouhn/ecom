import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductNamePipe } from './pipes/product-name.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ProductNamePipe
  ]
})
export class SharedModule { }
