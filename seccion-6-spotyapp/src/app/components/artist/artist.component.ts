import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist:any;
  topTracks:any[];
  loading:boolean;

  constructor(private activateRouter:ActivatedRoute,
              private spotifyService:SpotifyService) {
    this.loading = true;

    //Recibir el id por parametro
    activateRouter.params.subscribe(params =>{
      this.getArtist(params.id)
      this.getTopTracks(params.id)
    })

  }

  //---------------------------------------------------------------------------

  ngOnInit(): void {
  }

  //---------------------------------------------------------------------------

  /**
   * METODO PARA LLAMAR AL METODO OBTENER ARTISTA DEL SERVICIO
   * @param id 
   */
  getArtist(id:string){
    this.spotifyService.getArtist(id)
      .subscribe(data=>{
        this.artist = data;
        this.loading = false;
      })
  }

  //---------------------------------------------------------------------------

  /**
   * METODO PARA LLAMAR AL METODO OBTENER TOP CANCIONES DEL SERVICIO
   * @param id 
   */
  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id)
      .subscribe(data=>{
        this.topTracks = data;
      })
  }
}
