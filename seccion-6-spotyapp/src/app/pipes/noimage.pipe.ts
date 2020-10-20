import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  /**
   * METODO PARA CARGAR IMAGEN POR DEFECTO SI EL USUARIO NO TIENE NINGUNA
   * @param value 
   */
  transform(value: any[]): unknown {
    if(!value || value.length <=0){
      return 'assets/img/noprofile.png'
    }else{
      return value[0].url;
    }
  }

}
