import { ListaItem } from './lista-item.dol';

export class Lista{
    id:number;
    titulo:string;
    creadaEn: Date;
    terminadaEn: Date;
    completada:boolean;
    items:ListaItem[];

    constructor(titulo:string){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.completada = false;
        this.items = [];
        this.id = new Date().getTime(); //Obtener Id unico con la hora
    }
}