import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private listas : Lista[];

  constructor() { 
    this.listas=[];
    this.cargarStorage();

  }


  /**
   * METODO PARA OBTENER LISTAS
   */
  getListas():Lista[]{
    return this.listas;
  }

  /**
   * Metodo para crear una nueva lista
   * @param titulo 
   */
  crearLista(titulo:string):Lista{
    const nuevaLista  = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista;
  }

  /**
   * Metodo para crear una nueva lista
   * @param lista 
   */
  borrarLista(lista:Lista){
    //Crear una lista con las listas que no coincidan con el id a borrar
    this.listas = this.listas.filter(data =>{
      return data.id != lista.id;
    });

    this.guardarStorage();
  }

  /**
   * Metodo para obtener una lista/tarea en funcion de su id
   * @param id 
   */
  getLista(id:string | number):Lista{
    id = Number(id); //Parsear a numero

    //Usar find para buscar un objeto en el listado
    return this.listas.find( (data:Lista) =>{
      return data.id == id;
    })
  }

  /**
   * Metodo para hacer la informacion persistente en el navegador
   */
  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas)); //Pasar de objeto a JSON
  }

  /**
   * Metodo para obtener la informacion persistente en el navegador
   */
  cargarStorage(){
    if(localStorage.getItem('data'))
      this.listas = JSON.parse(localStorage.getItem('data')); //Pasar de JSON a objeto
  }

 

}
