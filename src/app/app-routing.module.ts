import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListingComponent } from './pages/product/product-listing/product-listing.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'product', component: ProductComponent, children: [
      { path: 'list/:category', component: ProductListingComponent},
      {path: 'detail/:name', component: ProductDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
