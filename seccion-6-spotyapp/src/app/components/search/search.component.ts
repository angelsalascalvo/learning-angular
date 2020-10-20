import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists : any[];
  loading:boolean;

  constructor(private spotifyService:SpotifyService) {
    this.loading=false;
  }

  ngOnInit(): void {
  }

  /**
   * METODO PARA REALIZAR UNA BUSQUEDA DE ARTISTAS USANDO LA API DE SPOTIFY
   * @param text 
   */
  buscar(text:string){
    if(text){
      this.loading=true;
      this.spotifyService.getArtists(text)
        .subscribe((data:any)=>{
          this.artists = data;
          this.loading=false;
        });
    }
  }
}
