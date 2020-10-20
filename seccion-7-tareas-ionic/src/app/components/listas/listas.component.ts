import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) ionlistElement:IonList; //Con esto obtenemos el elemento html ionlist
  @Input() paginaPendientes = true;

  constructor(public tareas:TareasService, 
              private router:Router,
              private alert:AlertController) { }

  ngOnInit() {}

  //----------------------------------------------------------------

  /**
   * Metodo para acceder a la vista de la lista
   * @param lista 
   */
  verLista(lista:Lista){
    //Acceder a la vista de la lista desde el tab en el que estemos
    if(this.paginaPendientes)
      this.router.navigateByUrl("/tabs/tab1/agregar/"+lista.id);
    else
      this.router.navigateByUrl("/tabs/tab2/agregar/"+lista.id);

  }

  /**
    * Metodo para eliminar una lista
    * @param lista 
    */
  borrar(lista:Lista){
      this.tareas.borrarLista(lista);
  }


   /**
   * Metodo para modificar el nombre de una lista
   */
  async editarLista(lista:Lista){

   
    const a = await this.alert.create({
     
      header: 'Editar lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{
            this.ionlistElement.closeSlidingItems();
          }
        },
        {
          text:'Guardar',
          handler:(data:any)=>{
            this.ionlistElement.closeSlidingItems();
            if(data.titulo.length ==0)
              return
            
            //Cambiar titulo
            lista.titulo = data.titulo;
            //Guardar cambios
            this.tareas.guardarStorage();
            
          }
        }
      ]
    });

    await a.present();
  }

}
