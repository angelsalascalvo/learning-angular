import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}

  /**
   * Este pipe nos permite indicar que un url pasado a la vista desde nuestra clase es seguro
   * @param value 
   * @param args 
   */
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
