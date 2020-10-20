import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';


registerLocaleData(localEs); //Regitrar idioma español en la aplicacion
registerLocaleData(localFr); //Indicar idioma frances en la aplicacion

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
