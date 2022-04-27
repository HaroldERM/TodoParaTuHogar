import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseService } from './firebase.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { LoginComponent2 } from './login-transition.component';
import { TabsComponent } from './tabs.component';
import { AboutUsComponent } from './about-us.component';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCI3-YRFBWH8MCq57m6nPiC4MlQL41SEnM',
      authDomain: 'todoparatuhogar-ed9a6.firebaseapp.com',
      projectId: 'todoparatuhogar-ed9a6',
      storageBucket: 'todoparatuhogar-ed9a6.appspot.com',
      messagingSenderId: '616941008723',
      appId: '1:616941008723:web:dfeb6c124aacf1a365d3a6',
    }),
  ],
  providers: [FirebaseService],
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent2,
    TabsComponent,
    AboutUsComponent,
    ProductsComponent,
    AddProductComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
