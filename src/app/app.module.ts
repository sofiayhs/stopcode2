import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTransazioniComponent } from './lista-transazioni/lista-transazioni.component';
import { ElementiTransazioneComponent } from './elementi-transazione/elementi-transazione.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTransazioniComponent,
    ElementiTransazioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
