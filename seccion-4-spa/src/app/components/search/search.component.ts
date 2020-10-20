import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  encontrados:Heroe[];
  texto:string;

  constructor( private router:Router,
               private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService) {}

  //---------------------------------------------------------

  ngOnInit(): void {
    //Realizar la busqueda con el termino recibido
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['text'];
      this.encontrados = this._heroesService.buscarHeroes(this.texto);
    })

    console.log(this.encontrados);
  }

  //---------------------------------------------------------

  /**
   * Metodo para redireccionar a la vista del indice del heroe pasado por parametro
   */
  verHeroe(index:number){
    console.log(index);
    this.router.navigate(['/heroe', index]);
  }
}
