(()=>{
    //Con los 2 puntos despues de la declaracion de parametros, indicamosque devuelve la funcion
    const sumar = (a:number, b:number):number => a+b;

    const nombre = ():string => "hola mundo";

    //Si no indicamos el tipo de devolución al intentar ejecutar "toUpperCase" se nos mostraria un error
    const obtenerSalario = ():Promise<string> =>{

        return new Promise((resolve, reject)=>{
            resolve("Poco");
        });

    }

    obtenerSalario().then(a=>console.log(a.toUpperCase()));
})();
