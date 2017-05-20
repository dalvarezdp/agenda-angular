import { Component, OnInit } from '@angular/core';
import { ContactoService } from './contacto.service'

@Component({
  // selector css del elemento donde se instanciará el componente.
  selector: 'app-root', 
  // Ruta al template correspondiente al componente
  templateUrl: './app.component.html',
  // Ruta al CS correspondiente al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  private _title: string;
  private _listaContactos: string[];

  /* para hacer una inyeccion de dependencias, devemos indicar en el contructor 
  de una clase un parametro tipado precisamente con el servicio que queremos usar
  y añadir siempre el modificador de acceso
  */
  constructor(private _contactoService: ContactoService){}

  // Este metodo es de obligatoria implementacion cuando usamos la interfaz OnINit. Puesto que no retorna nada, podemos anotarlo como 'void'. Este metodo se ejecuta al instanciarse la clase 'AppComponent'
  ngOnInit(): void {
    this._title = 'Super Agenda';
    this._listaContactos = this._contactoService.obtenerContactos();
  }

  mostrarContactoSeleccionado(contacto: string): void {
    alert(contacto);
  }

}
