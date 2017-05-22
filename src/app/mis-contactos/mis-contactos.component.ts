import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service'
import { Contacto } from '../contacto';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  private _listaContactos: Contacto[];

  /* para hacer una inyeccion de dependencias, devemos indicar en el contructor 
  de una clase un parametro tipado precisamente con el servicio que queremos usar
  y añadir siempre el modificador de acceso
  */
  constructor(private _contactoService: ContactoService){}

  // Este metodo es de obligatoria implementacion cuando usamos la interfaz OnINit. Puesto que no retorna nada, podemos anotarlo como 'void'. Este metodo se ejecuta al instanciarse la clase 'AppComponent'
  ngOnInit() {
    this._contactoService
        .obtenerContactos()
        .subscribe((contactos: Contacto[]) => {
          this._listaContactos = contactos;
    });
  }

  /**
   * Se encarga de mostrar un mensaje de aviso de eliminación con el contacto indicado
   * @param contacto 
   */
  avisarEliminacionContacto(contacto: Contacto): void {
    if (confirm(`¿Estás seguro de querer eliminar a ${contacto.nombre}?`)){
      this._contactoService.eliminarContacto(contacto);
      //this._listaContactos = this._contactoService.obtenerContactos();
    }
  }

}
