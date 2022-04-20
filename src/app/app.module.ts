import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoginComponent, TabsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
