import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      Pantalla Detalle Usuario {{id}}
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  id:string;

  constructor(private router:ActivatedRoute) {
    //Obtenemos los parametros de la ruta del padre
    router.parent.params.subscribe( params =>{
        this.id = params.id; 
    });
  }

  ngOnInit(): void {
  }

}
