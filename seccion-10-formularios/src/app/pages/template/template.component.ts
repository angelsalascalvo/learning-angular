import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises:any[] =[];
  usuario={
    nombre:'Angel',
    email:'angel@gmail.com',
    apellido:'Salas',
    pais:'ESP',
    genero:'m',
  }

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
    //Comprobar el funcionamiento de la caja de bananas (hace que los datos entre input y variable sea omnidireccional )
    // setTimeout(()=>{
    //   console.log(this.usuario.nombre);
    // }, 2000);
    
    this.paisService.getPaises()
      .subscribe(paises =>{
        this.paises = paises;

        this.paises.unshift({
          nombre:"Seleccione un país",
          codigo: ""
        })
      });
  }

  /**
   * Metodo que se ejecuta cuando se presiona el submit del formulario
   */
  guardar(form:NgForm){
    
    //Comprobar si el formulario es valido
    if(form.invalid){
      //Recorrer todos los inputs para marcarlos como tocados  (simular que el usuario ha introducido algo en el campo) para que se lancen las validaciones
      return Object.values(form.controls).forEach(control =>{
          control.markAsTouched();
      })
      
    }

    console.log(form)
    console.log(form.value)
  }

}
