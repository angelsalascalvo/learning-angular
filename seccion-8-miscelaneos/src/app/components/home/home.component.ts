import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Demos <small>angular</small></h1>
    <hr>  

    <h3 class="mb-3 mt-4">ngStyle</h3>
    <app-gn-style></app-gn-style>
    
    <hr>

    <h3 class="mb-3 mt-4">CSS en componente</h3>
    <app-css></app-css>
    <p>A esta etiqueta no le afecta el estilo</p>
    
    <hr>

    <h3 class="mb-3 mt-4">ngClass</h3>
    <app-clases></app-clases>
  
    <hr>
    <h3 class="mb-3 mt-4">Directiva Personalizada</h3>
    <p [appResaltado]="'orange'">Coloca el raton sobre este texto</p>
    
    <hr>
    <h3 class="mb-3 mt-4">ngSwitch</h3>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
