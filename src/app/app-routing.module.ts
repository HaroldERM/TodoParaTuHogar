import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginComponent2 } from './login-transition.component';
import { AboutUsComponent } from './about-us.component';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product.component';
import { CartComponent } from './cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: LoginComponent2 },
  { path: 'products', component: ProductsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
