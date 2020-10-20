import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:Heroe; //Con inport indicamos al componente que este objeto viene del padre
  @Input() index:number;

  @Output() heroeSeleccionado: EventEmitter<number>; //Con export podemos enviar o llamar informacion del componente padre

  constructor() { 
    this.heroeSeleccionado = new EventEmitter(); //Inicializar emisor
  }

  //---------------------------------------------------------

  ngOnInit(): void {
  }

  //---------------------------------------------------------

  /**
   * Metodo para emitir evento pasandole el index por parametro y que el padre pueda recibirlo y actuar con el
   */
  verHeroe(){
    if(this.heroe.id){
      this.heroeSeleccionado.emit(this.heroe.id); //Emitir/Llamar al componente padre pasandole el id si estamos en una busqueda
    }else{
      this.heroeSeleccionado.emit(this.index); //Emitir/Llamar al componente padre pasandole el index si estamos en el listado de todos los heroes
    }
    
  }

}
