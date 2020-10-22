import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import {UsuarioModel} from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel;
  recuerdame = false;

  constructor(private auth:AuthService,
              private router :Router) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {
     //Si existe un email almacenado
     if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recuerdame=true; //Marcar el check como activo
    }
  }

  /**
   * Llamada al servicio para hacer login
   * @param form 
   */
  login(form:NgForm){
    if(form.invalid)
      return

    //Recordar el email del usuario
    if(this.recuerdame){
      localStorage.setItem('email', this.usuario.email);
    }else{
      localStorage.removeItem('email');
    }

    //Libreria externa para mostrar alertas modales
    Swal.fire({  allowOutsideClick: false, icon: 'info', text: 'Espera por Favor..'}); 
    Swal.showLoading();
    
    this.auth.login(this.usuario)
      .subscribe(data =>{
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('\home');
      },err =>{
        console.log(err.error.error.message);
        Swal.fire({ icon: 'error', title: 'Error al autenticar',text: err.error.error.message }); 
      });

  }

}
