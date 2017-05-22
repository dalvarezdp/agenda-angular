import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoService } from './contacto.service';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent,
    MisContactosComponent,
    NuevoContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
