import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  get resultados() {
    return this.gifs_service.resultados;
  }
  constructor(private gifs_service: GifsService) {}
}
