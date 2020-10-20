import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //---------------------------------------------------------

  /**
   * Metodo para redireccionar a la ruta de buscar con el texto indicado
   * @param text 
   */
  buscarHeroe(text:string){
    this.router.navigate(['/search', text]);
  }
}
