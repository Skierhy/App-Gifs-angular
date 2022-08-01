import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  // se usa para que sea global
  // no se necesita que este y que no se necesita ponerlos en los provided de modulo
  // lo especificas en el modulo pues solamente podra usar en ese modulo nada mas
  // en pocas palabras root para global y sin eso local
  providedIn: 'root',
})
export class GifsService {
  // propiedad privada
  private _historial: string[] = [];
  private _serviciosURL: string = 'https://api.giphy.com/v1/gifs';
  private _apiKey: string = 'zcsrgLK48PVAYXE7dzRcIZZ4Zun9mVU9';
  private _limit: number = 10;
  // propiedad publico
  public resultados: Gif[] = [];
  // metodo publico
  get historial(): string[] {
    return [...this._historial];
  }
  // http es un service
  constructor(private http: HttpClient) {
    // ciclo de vida del service
    // solamente se ejecuta una vez

    // leer el localstorage
    // json.parse convierte el string a un objeto o primitivos, stringify convierte un objeto a string
    // if (localStorage.getItem('Historial')) {
    //   // el ! typescript que confie en mi
    //   this._historial = JSON.parse(localStorage.getItem('Historial')!);
    // }
    // || es si no tiene algo entonces retorna un string vacio
    this._historial = JSON.parse(localStorage.getItem('Historial') || '[]');
    this.resultados = JSON.parse(localStorage.getItem('resultados') || '[]');
  }
  // metodo publico
  buscarGifs(querry: string = ''): void {
    // que el usuario no ponga a y luego A
    querry = querry.trim().toLocaleLowerCase();
    // saber si no esta en el arreglo algun string
    if (!this._historial.includes(querry)) {
      // unshift agrega al inicio del arreglo
      this._historial.unshift(querry);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('Historial', JSON.stringify(this._historial));
    }

    // fetch(
    //   'https://api.giphy.com/v1/gifs/search?api_key=zcsrgLK48PVAYXE7dzRcIZZ4Zun9mVU9&q=anime&limit=10'
    // ).then((resp) => {
    //   resp.json().then((data) => {
    //     console.log(data);
    //   });
    // });

    // peticion http
    // usa observable
    // observable es una promesa
    // tiene mas control que una promesa
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', this._limit)
      .set('q', querry);

    this.http
      .get<SearchGifsResponse>(`${this._serviciosURL}/search`, {
        params: params,
      })
      .subscribe((respuesta) => {
        // console.log(respuesta.data);
        this.resultados = respuesta.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
