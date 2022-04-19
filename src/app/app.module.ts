import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule],
  exports: [MatTabsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
