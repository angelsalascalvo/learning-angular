import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  
  //Obtenemos un valor de entrada que se declara en la llamada de la directiva
  @Input ("appResaltado") color:string;

  //Actuar sobre el elemento HTML que tiene la directiva asignada 
  //Una directiva es similar a un pipe pero para elementos html
  constructor(private el:ElementRef) {}

  //Escuchar entradas del raton sobre el elemento
  @HostListener('mouseenter') mouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  //Escuchar salidas del raton sobre el elemento
  @HostListener('mouseleave') mouseLeave(){
    this.el.nativeElement.style.backgroundColor = null;
  }

}
