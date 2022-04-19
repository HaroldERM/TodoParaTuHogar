import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule],
  exports: [MatTabsModule],
  declarations: [AppComponent, LoginComponent, TabsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
