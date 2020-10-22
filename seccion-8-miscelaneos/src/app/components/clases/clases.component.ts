import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  tipoAlerta:string = "alert-info";

  propiedades:any = {
    danger:false
  };

  loading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    this.loading=true
    //Despues de pasar 4 segundos cambiar loading
    setTimeout(()=>this.loading=false, 4000);
  }

}
