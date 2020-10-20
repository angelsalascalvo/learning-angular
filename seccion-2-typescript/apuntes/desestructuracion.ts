(()=>{

    const avenger ={
        nombre:"Peter",
        clave:"Spiderman",
        poder:"Tela de araña"
    }

    const avenger2 ={
        nombre:"Steve",
        clave:"Capitan America",
        poder:"Fuerza"
    }

    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    //Desestructurar o extraer propiedades de un objeto
    const {nombre, clave, poder} = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);


    //-------------------------------------------

    //Desestructurar o extraer directamente en los parametros
    const extraer = ({nombre, poder}:any) =>{
        console.log(nombre);
        console.log(poder);
    }

    extraer(avenger2);

    //-------------------------------------------

    //Desestructuracion o extraccion de array

    const avengers:string[] = ["Thor", "Ironman", "Hulk"];

    const [aveng1, , aveng3] = avengers;

    //Modo clasico
    console.log( avengers[0]);
    console.log( avengers[2]);
    //Modo con desestructuracion
    console.log( aveng1 );
    console.log( aveng3 );

    //Desestructurar o extraer array directamente en los parametros
    const extraer2 = ([av1, av2, av3]:string[]) =>{
        console.log(av1);
        console.log(av2);
        console.log(av3);
    }
    extraer2(avengers);
    
})();
