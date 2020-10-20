(()=>{

    //Con los 2 puntos despues de la declaracion de parametros se indica que devuelve un numero si todo es correcto (resolve)
    const retirarDinero = (cantidadRetirar:number):Promise<number>=>{
        let fondos = 1000;

        return new Promise((resolve, reject)=>{
            if(cantidadRetirar>fondos){
                reject("No tienes suficientes fondos");
            }else{
                fondos -= cantidadRetirar;
                resolve(fondos);
            }
        }); 
    }

    retirarDinero(80)
        .then((fondos) => console.log("Fondos actuales: "+fondos) ) //Resolve
        .catch((err) => console.error(err)); //Reject

    //Abreviar
    retirarDinero(2100)
        .then((fondos) => console.log("Fondos actuales: "+fondos) ) //Resolve
        .catch(console.error); //Reject



})();
