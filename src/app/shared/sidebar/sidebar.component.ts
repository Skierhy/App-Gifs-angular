import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(public gifs_service: GifsService) {}

  get historial(): string[] {
    return this.gifs_service.historial;
  }

  buscar(buscar: string) {
    this.gifs_service.buscarGifs(buscar);
  }
}
