(()=>{

    //Declarar interfaz
    interface Avenger{
        nombre:string;
        edad:number;
        poder?:string; //Podemos marcar parametro como opcional
    }

    const enviarMision = (avenger:Avenger)=>{
        console.log(` ${avenger.nombre} ha sido enviado a la mision`);
    }

    //Podemos indicar que estas constantes son de un tipo de interfaz, marcando errores si no cumplimos lo establecido
    const hulk:Avenger = {
        nombre: "Hulk",
        edad : 45
    }
    const iron:Avenger= {
        nombrewe: "Ironman", //!!!!!
        edad : 39
    }

    enviarMision(hulk);
    enviarMision(iron);
    

})();
