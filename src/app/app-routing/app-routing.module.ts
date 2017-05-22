import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MisContactosComponent } from '../mis-contactos/mis-contactos.component'
import { NuevoContactoComponent } from '../nuevo-contacto/nuevo-contacto.component'

/**
 * Definimos las rutas soportadas por nuestra app. Las rutas tienen como propiedades
 * las siguientes:
 * - path --> Ruta a navegar
 * - component --> Componente encargado de responder a la ruta cuando se navega
 * Si queremos controlar las rutas no definidas, tenemos que indicar como 'path'
 * doble asterisco, además de establecer el 'pathMatch' como 'full'
 */
const routes: Routes = [
  {
    path: "mis-contactos",
    component: MisContactosComponent
  },
  {
    path: "nuevo-contacto",
    component: NuevoContactoComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "mis-contactos"
  }
];

/**
 * Creamos un módulo con el Router, las directivas necesarias y las rutas definidas
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
