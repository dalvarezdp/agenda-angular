import { Component, OnInit } from '@angular/core';

@Component({
  // selector css del elemento donde se instanciará el componente.
  selector: 'app-root', 
  // Ruta al template correspondiente al componente
  templateUrl: './app.component.html',
  // Ruta al CS correspondiente al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  private title: String;

  // Este metodo es de obligatoria implementacion cuando usamos la interfaz OnINit. Puesto que no retorna nada, podemos anotarlo como 'void'. Este metodo se ejecuta al instanciarse la clase 'AppComponent'
  ngOnInit(): void {
    this.title = 'Vamos a desarrollar la agenda';
  }

  mostrarContactoSeleccionado(contacto: string): void {
    alert(contacto);
  }

}
