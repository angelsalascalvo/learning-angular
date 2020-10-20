import { Pipe, PipeTransform } from '@angular/core';
import { strict } from 'assert';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean=false): string {
    if(mostrar)
      return value;
    else{
      let result:string = ""
      for(let i =0 ; i<value.length ;i++){
        result+="*";
      }
      return result;
    }

    //Esto se puede conseguir de manera mas sencilla con la funcion de typescript "*".repeat(num)
  }

}
