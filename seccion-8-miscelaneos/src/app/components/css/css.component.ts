import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      Estilo propio dentro del componente.
    </p>
  `,
  styles: [
    `
    p{
      color:red;
      font-weight: 700;
    }

    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
