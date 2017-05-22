import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service'

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  /* para hacer una inyeccion de dependencias, devemos indicar en el contructor 
  de una clase un parametro tipado precisamente con el servicio que queremos usar
  y añadir siempre el modificador de acceso
  */
  constructor(
    private _contactoService: ContactoService,
    private _router: Router
    ){}

  ngOnInit() {
  }

  /**
   * Se encarga de crear nuevos contactos en la app
   * @param contacto 
   */
  darAltaContacto(contacto: Contacto): void {
    this._contactoService.crearContacto(contacto);
    alert("El contacto se ha creado correctamente.");

    // Podemos navegar desde un componente a traves del Router
    this._router.navigate(['/mis-contactos']);
  } 

}
