import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ButtonComponent from 'src/stories/button.component';
import HeaderComponent from 'src/stories/header.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
