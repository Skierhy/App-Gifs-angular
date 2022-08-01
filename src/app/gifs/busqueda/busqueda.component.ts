import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // sintaxis de ViewChild
  // @ViewChild('buscar') buscar: ElementRef;
  // se busca por etiquetas, clases, variable de plantilla etc
  // lo que hace es buscar un elemento de html y lo asgina a un propiedad
  // el uso de de ! su nombre es Non-null assertion operator
  // es una forma de validar que el elemento exista
  // ElementRef es una clase que representa un elemento de html
  // ElementRef<T> para tener el tipado para que se muestre .value
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(public gifs_service: GifsService) {}
  buscar() {
    const buscar = this.txtBuscar.nativeElement.value;
    // insertar a que se busque
    if (buscar.trim().length === 0) {
      return;
    }
    this.gifs_service.buscarGifs(buscar);
    this.txtBuscar.nativeElement.value = '';
  }
}
