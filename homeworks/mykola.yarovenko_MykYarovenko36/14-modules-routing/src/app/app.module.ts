import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modules } from './modules';
import { appServices } from './services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
  ],
  providers: [
    ...appServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }