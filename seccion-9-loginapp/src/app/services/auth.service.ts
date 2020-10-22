import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

import {map} from 'rxjs/operators';
import { hostViewClassName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Crear usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url="https://identitytoolkit.googleapis.com/v1/";
  private apikey = "AIzaSyBO3R61hOQTXqj7qtnEVbKi9fnZtn-_H08"
  private userToken:string;
  constructor(private http:HttpClient) {
    this.leerToken();
  }

  //Cerrar sesion
  logout(){
    localStorage.removeItem('token');
  }

  //Acceder
  login(user:UsuarioModel){
    const authData = {
      email:user.email,
      password:user.password,
      returnSecureToken:true,
    }

    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      //Si no se obtiene ningun error, el map será ejecutado
      map( resp =>{
        //Almacenamos el token
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  //Nuevo usuario
  newUser(user:UsuarioModel){
    const authData = {
      email:user.email,
      password:user.password,
      returnSecureToken:true,
    }

    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apikey}`,
      authData
    ).pipe(
      //Si no se obtiene ningun error, el map será ejecutado
      map( resp =>{
        //Almacenamos el token
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  /**
   * Metodo para guardar el token en el local storage
   * @param idToken 
   */
  private guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  /**
   * Metodo para leer un token del local storage si existe
   */
  private leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = ""
    }

    return this.userToken;
  }

  /**
   * Metodo para saber si el usuario esta autenticado
   */
  isAuthenticated():boolean{

    const time = Number(localStorage.getItem('expira'));
    const expira = new Date();
    expira.setTime(time);

    return this.userToken.length>2 && expira > new Date(); 
  }
}
