import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos:any[];
  loading:boolean;
  error:boolean;
  errorText:string;

  constructor( private spotifyService: SpotifyService) {

    //Ejemplo de como realizar peticion a una API (Devuelve los paises que hablan español)
    //this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //  .subscribe((respuesta:any) => {
    //    console.log(respuesta)
    //});
    this.loading = true;
    this.error=false;

    this.spotifyService.getNewReleases()
    .subscribe((data:any) => {
      this.nuevosLanzamientos = data;
      this.loading=false;
    //Controlar posible errores
    }, (errorServicio) => {
      this.error=true;
      this.loading=false
      this.errorText = errorServicio.error.error.message;
    })

   }

  ngOnInit(): void {

  }

}
