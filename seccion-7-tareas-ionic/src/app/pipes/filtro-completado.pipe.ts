import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure:false, //Para que este pipe se ejecute aunque la detección de cambios se realice en un componente en el que no esta importado el pipe (En uno padre)
})
export class FiltroCompletadoPipe implements PipeTransform {

  /**
   * Pipe como filtro de listas
   * @param listas 
   * @param completado si queremos mostrar las listas que estan completadas o las que no
   */
  transform(listas:Lista[], showPendientes:boolean=false): Lista[] {

      return listas.filter(data=>{
        return data.completada == !showPendientes;
      })
    
  }

}
