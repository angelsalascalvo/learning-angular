import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../models/lista.model';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public tareas:TareasService,
              private router:Router,
              private alert:AlertController) {
  }



  /**
   * Metodo para agregar una nueva lista
   * Metodo asincrono ya que contiene un await 
   */
  async agregarLista(){

    //Await permite esperar a que se reciba un resultado de una promesa para actuar
    //en esta caso almacenarto en la constante alert
    const a = await this.alert.create({
     
      header: 'Nueva lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler:() => {
            console.log("cancelar");
          }
        },
        {
          text:'Crear',
          handler:(data:any)=>{
            if(data.titulo.length ==0)
              return
            
            const nuevaLista = this.tareas.crearLista(data.titulo);

            //Acceder a la vista de la lista
            this.router.navigateByUrl("/tabs/tab1/agregar/"+nuevaLista.id);
          }
        }
      ]
    });

    await a.present();
  }
}