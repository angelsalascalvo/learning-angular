(function(){

    let mensaje = "hola"; //Let es un tipo de variable de typescript
    var mensaje2 = "adios";
    
    if(true){
        //El ambito de las variables con let y var cambia
        //Let crea una nueva variable en este ambito mientras que var sobreescribe el espacio de memoria anterior
        let mensaje= "mundo";
        var mensaje2= "planeta";
    }

    console.log(mensaje);
    console.log(mensaje2)

    //-------------------------------------------

    const SIEMPRE = "valor constante"
    //SIEMPRE = "valor"//No se puede cambiar el valor, da error

    //-------------------------------------------

    //Tipado de typescript
    let texto = 'aaa';
    texto = 2; //Se ha inicializado como string, no podemos asignar numeros

    let numero:number; //Se puede tipar antes de inicializar
    let condicion:boolean;
    let hoy: Date = new Date(); // let hoy = new Date(); //Tambien valido

    //Por defecto de tipo any, admite cualquier cosa
    let comodin;
    comodin="hola";
    comodin=1;


    //---------------------------------------------

    //Crear un objeto
    let spiderman = {
        nombre:"Peter",
        edad:30
    }


})();
