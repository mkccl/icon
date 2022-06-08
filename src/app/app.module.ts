import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconSwapComponent } from './pages/icon-swap/icon-swap.component';

@NgModule({
  declarations: [
    AppComponent,
    IconSwapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
