import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

interface ErrorValidate{
  [s:string]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  /**
   * Validacion personalizada, el apellido no puede ser herrera
   */
  noHerrera(control:FormControl):ErrorValidate{
   
    if(control.value?.toLowerCase()=='herrera'){ //Con la interrogacion comprobamos si existe contenido
      return{
        noesherrera:true
      }
    }

    return null
  }

  //-------------------------------------------------------------------

  /**
   * Validacion personalizada mediante otro modo de empleo
   * @param pass1 
   * @param pass2 
   */
  passwordsIguales(pass1:string, pass2:string){
    return ( formGroup:FormGroup)=>{
      const p1 = formGroup.controls[pass1];
      const p2 = formGroup.controls[pass2];

      if(p1.value==p2.value){
        p2.setErrors(null); //No hay errores en el campo
      }else{
        p2.setErrors({noEsIgual:true}) //Si hay error
      }
    }
  }

  //-------------------------------------------------------------------

  /**
   * Validacion para comprobar si existe un usuario 
   */
  existeUsuario( control:FormControl):Promise<ErrorValidate> | Observable<ErrorValidate>{

    if(!control.value){
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject)=>{
      //Simular peticion asincrona
      setTimeout(()=>{
        //Comprobacion de usuario (No puede ser angel)
        if(control.value == 'angel'){
          resolve({existe:true});
        }else{
          resolve(null);
        }
      }, 3000);
    })
  }
}

