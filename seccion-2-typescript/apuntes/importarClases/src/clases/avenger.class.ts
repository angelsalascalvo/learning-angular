function imprimirConst(constructorClase:Function){
    console.log(constructorClase);
}

//Esto es un decorador, permite agregar una funcionalidad a una clase (un especie de metodo estatico)
//En este caso, por ejemplo, imprimimos la declaracion del contructor
@imprimirConst
//Con export indicamos que esta clase puede ser usada desde otros ficheros
export class Avenger{
    constructor(
        public nombre: string,
        public clave: string
    ){}

    imprimir(){
        console.log(`${this.clave} (${this.nombre})`)
    }
}