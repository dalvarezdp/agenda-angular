import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoService } from './contacto.service';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
