(()=>{

    console.log("Inicio");

    //DECLARAR PROMESA
    //Resolve es lo que se devuelve si todo está correcto y Reject si algo sale mal
    const prom1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                reject("Error.");
            }else{
                resolve("Tiempo finalizado")
            }

        }, 3000)
    });

    //EJECUTAR PROMESA Y ACTUAR SEGUN OBTENIDO
    prom1
        .then(mensaje => console.log(mensaje)) //Si todo sale correctamente
        .catch(err => console.warn(err)); //Si ocurre un error
    

    console.log("Fin");


})();
