import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizadoPipe implements PipeTransform {

  /**
   * Pipe personalizado para capitalizar
   * @param value 
   * @param todas Si queremos capitalizar todas las palabras o solo algunas
   * @param cuantas Si queremos solo capitalizar algunas palabras, cuantas?
   */
  transform(value: string, todas: boolean, cuantas:number = 0): string {

    let palabras:string[] = value.trim().split(" ");
    let transformar: string[];

    //Si se ha indicado que tenemos que capitalizar todas las palabras
    if(todas)
      transformar = palabras;
    //Si se ha indicado que solo tenemos que capitalizar algunas
    else
      transformar = palabras.slice(0, cuantas);
    
    //Poner la primera letra en mayuscula
    transformar.forEach((p, index) => {
      transformar[index] = p.substr(0,1).toUpperCase() + p.substr(1).toLocaleLowerCase();
    });

    //Agregar el resto de palabras de forma original si no las hemos capitalizado todas
    if(!todas)
      transformar = transformar.concat(palabras.slice(cuantas, palabras.length));

    return transformar.join(" ");
  }

}
