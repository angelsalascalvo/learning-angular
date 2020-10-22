import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) {

  }

  /**
   * Método para obtener un listado de todos los paises
   */
  getPaises(){
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(
        map((resp:any[]) =>{ //Con este pipe limitados o recortamos la salida a unos solos objetos o parametros del json obtenido

          return resp.map(pais =>{ //Este metodo map es diferente al anterior ya que este es el map de los arrays genericos de javascript para obtener unos solos datos
            return {
              nombre: pais.name,
              codigo: pais.alpha3Code
            }
          }); 

      }));
  }
}
