import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];

  /**
   * Constructor del componente
   * @param _heroesService 
   * @param router 
   */
  constructor(private _heroesService:HeroesService, //Automaticamente el servicio es inicializado se llama al constructor del propio servicio
              private router:Router){} 
              
  //-----------------------------------------------------------------------

  /**
   * Metodo que se ejecuta en el inicio cuando todo este listo, despues del constructor.
   */
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  //---------------------------------------------------------

  /**
   * Metodo para redireccionar a la vista del indice del heroe pasado por parametro
   */
  verHeroe(index:number){
    this.router.navigate(['/heroe', index]);
  }

}
