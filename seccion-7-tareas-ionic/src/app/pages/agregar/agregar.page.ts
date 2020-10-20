import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.dol';
import { Lista } from 'src/app/models/lista.model';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista:Lista;
  inputNombre:string="";

  constructor(private tarea:TareasService,
             private route:ActivatedRoute) {
    
    //Es como poner un observable pero lo obtengo solo una vez, no esta detectando cambios
    const idLista = route.snapshot.paramMap.get('idLista');
    //Obtener la lista pasada por parametra a traves del servicio
    this.lista = tarea.getLista(idLista);

  }

  ngOnInit() {
  }

  /**
   * Metodo para añadir un elemento a la lista de tareas en cuestion
   */
  agregarItemALista(){
    if(this.inputNombre.length===0)
      return

    //Crear el item de la lista
    const nuevoItem = new ListaItem(this.inputNombre);
    //Agregar item a la lista
    this.lista.items.push(nuevoItem);

    //Vaciar el campo input
    this.inputNombre = "";

    //Actualizar el storage haciendo los datos persistentes
    this.tarea.guardarStorage();
  }

  /**
   * Metodo para guardar los cambios en el storage cuando cambia el estado de un checkbox
   */
  saveChangesCheck(item:ListaItem){
    //Obtener el numero de items que estan No completados.
    const pendientes = this.lista.items.filter(data => !data.completado).length;
    
    //Marcar si todos los elementos de la lista se han completado
    this.lista.completada = pendientes==0;
    if(pendientes==0)
      this.lista.terminadaEn = new Date();
    else
      this.lista.terminadaEn = null;

    //Hacer los cambios persistentes
    this.tarea.guardarStorage();
  }

  /**
   * Metodo para borrar un elemento de la lista
   */
  borrar(i:number){
    //Eliminar un elemento del array 
    this.lista.items.splice(i,1);

    //Hacer los cambios persistentes
    this.tarea.guardarStorage();
  }

}
