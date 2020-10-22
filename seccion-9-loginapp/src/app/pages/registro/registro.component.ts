import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import {UsuarioModel} from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  recuerdame=false;
  usuario:UsuarioModel;

  constructor(private auth:AuthService,
              private router :Router) {
    
   }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm){

    //Comprobar si el formulario es valido a traves del campo NgForm
    if(form.invalid) return

    //Recordar el email del usuario
    if(this.recuerdame){
      localStorage.setItem('email', this.usuario.email);
    }else{
      localStorage.removeItem('email');
    }

    //Libreria externa para mostrar alertas modales
    Swal.fire({  allowOutsideClick: false, icon: 'info', text: 'Espera por Favor..'}); 
    Swal.showLoading();

    //Enviar post a firebase para guardar el usuario
    this.auth.newUser(this.usuario)
      .subscribe(resp =>{
        
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('\home');

      }, err =>{
        console.log(err.error.error.message);
        Swal.fire({ icon: 'error', title: 'Error al autenticar',text: err.error.error.message }); 
      });
    
  }


}
