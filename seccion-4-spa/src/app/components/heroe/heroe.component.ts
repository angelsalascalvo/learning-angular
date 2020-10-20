import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  /**
   * Constructor del componente de detalles de cada heroe
   * @param activatedRoute 
   */
  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService) {
      //Poner a la escucha los parametros pasados por la ruta a traves del metodo flecha
      this.activatedRoute.params.subscribe(params => {
          //Obtener el heroe correspondiente con el id pasado a traves del servicio (modelo)
          this.heroe = _heroesService.getHeroe(params['id']);
      })
   }

  //------------------------------------------------------------------
   
  /**
   * Metodo que se ejecuta en el inicio cuando todo este listo, despues del constructor.
   */
  ngOnInit(): void {
    console.log(this.heroe)
  }

}
