import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register-login-auth/register.component';
import { LoginComponent } from './register-login-auth/login.component';
import { AboutUsComponent } from './tabs/about-us.component';
import { ProductsComponent } from './tabs/products.component';
import { AddProductComponent } from './tabs/add-product.component';
import { CartComponent } from './tabs/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
