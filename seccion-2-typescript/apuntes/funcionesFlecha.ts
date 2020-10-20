(function(){

    //Funcion tradicional
    function miFuncion0 (a:string){
        return a;
    }

    //Funcion asignada a variable
    let miFuncion1 = function(a:string){
        return a;
    }

    //Funcion asignada a constante //No puedo redefinir la funcion
    const miFuncion2 = function(a:string){
        return a;
    }
    
    //Funcion de FLECHA que se puede abreviar del siguiente modo si solo se devuelve algo dentro del metodo
    const miFuncionFlecha = (a:string) =>{
        return a.toUpperCase();
    }

    const miFuncionFlechaPro = (a:string) => a.toUpperCase();
    

    console.log(miFuncionFlechaPro("Hola"));

    //-------------------------------------------

    //Otro ejemplo de tipo flecha
    const sumar = function(a:number, b:number){
       return a+b;
    }

    const sumarFlecha = (a:number, b:number) => a+b;

    console.log(sumarFlecha(2, 3));

    //-------------------------------------------

    //Las funciones de flecha además permiten no cambiar el ambito de las variables
    const HULK ={
        nombre:"Hulk",
        golpear(){
            setTimeout(function(){
                console.log(`${this.nombre} golpeó`); //Aquí this hace referencia a la propia funcion anonima que acabamos de crear
            }, 2000)
        }
    }

    const BATMAN ={
        nombre:"Batman",
        golpear(){
            setTimeout(()=>{
                console.log(`${this.nombre} golpeó`); //Aqui this hace referencia a la constante batman
            }, 2000)
        }
    }

    HULK.golpear();
    BATMAN.golpear();

})();
