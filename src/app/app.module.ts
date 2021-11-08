import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';


// CAMBIAR EL LOCALE DE LA APP
import localeES from '@angular/common/locales/es-CL';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES)
registerLocaleData(localeFR)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
