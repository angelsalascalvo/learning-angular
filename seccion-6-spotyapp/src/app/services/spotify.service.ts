import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("servicion spotify")
   }

   /**
    * METODO PARA LLMAR A LA API DE SPOTIFY PASANDO LA CONSULTA POR PARAMETRO
    * @param query 
    */
  callApi(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAUp4wQbq0mFSXLZQyhNI8JE3es-TY00NZLIWSylmtjWIXGT0JtrxwVnIQ7t0daBvJIp6FuuPexBqfuD2Q'
    })

    return this.http.get(url,{headers})

  }

  //---------------------------------------------------------------------------

  /**
   * METODO PARA OBTENER LAS NOVEDADES EN LANZAMIENTOS DE SPOTIFY
   */
  getNewReleases(){
      return this.callApi("browse/new-releases")
        .pipe( map(data => {
          //Con esta funcion map puedo filtrar los datos para devolver los que necesito de este modo y así no enviar tanta informacion a la vista
          //data['albums'] es para indicar que se busque ese campo dentro de data y devolver esos datos
            return data['albums'].items; 
        }));       
  }

  //---------------------------------------------------------------------------

  /**
   * METODO PARA OBTENER LOS ARTISTAS A PARTIR DE UN TAG DE BUSQUEDA
   */
  getArtists(text:string){
    return this.callApi(`search?q=${text}&type=artist&limit=15`)
      .pipe( map(data=> data['artists'].items) ); //Version abreviada
  }

  //---------------------------------------------------------------------------

  
  /**
   * METODO PARA OBTENER UN ARTISTA
   */
  getArtist(id:string){
    return this.callApi(`artists/${id}`);
  }

  //---------------------------------------------------------------------------

  
  /**
   * METODO PARA OBTENER UN ARTISTA
   */
  getTopTracks(idArtist:string){
    return this.callApi(`artists/${idArtist}/top-tracks?country=us`)
      .pipe(map(data=>data['tracks'])); //Obtener directamente el array de canciones que estaba envuelto en un objeto
  }



}
