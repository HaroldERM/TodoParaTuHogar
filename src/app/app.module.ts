import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { TabsComponent } from './tabs.component';
import { AboutUsComponent } from './about-us.component';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    LoginComponent,
    TabsComponent,
    AboutUsComponent,
    ProductsComponent,
    AddProductComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
