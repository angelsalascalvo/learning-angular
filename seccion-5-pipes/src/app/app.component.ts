import { Component } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Angel Salas";
  nombre2:string = "aNgEl SALas caLVo";
  numList:number[] = [1,2,3,4,5,6,7,8,9];
  num:number = 12.85753;
  porcent = 0.235;
  salario:number = 1234.5;
  fecha:Date = new Date();
  idioma = 'fr';
  videoUrl = 'https://www.youtube.com/embed/UM8CDDAmp98';
  mostrar=true;

  valorPromesa = new Promise<string>((resolve, reject) =>{
    setTimeout(()=>{
      resolve('procesado')
    }, 4500);
  });

  heroe={
    nombre:'Bruce',
    clave:'Batman',
    edad: 36,
    direccion:{
      calle: 'Primera',
      numero: '20'
    }
  };

  //---------------------------------------------------
  // METODOS SET Y GET

  setIdioma(idioma:string){
    this.idioma = idioma;
  }

  setMostrar(estado:boolean){
    this.mostrar = estado;
  }
}
