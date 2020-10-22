import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gn-style',
  template: `
    <p [style.fontSize.px]="tamanio">
      Hola mundo, esto es una etiqueta con ngStyle
    </p>

    <button class="btn btn-primary mr-1" (click)="tamanio = tamanio + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class GnStyleComponent implements OnInit {

  tamanio:number=15;

  constructor() { }

  ngOnInit(): void {
  }

}
