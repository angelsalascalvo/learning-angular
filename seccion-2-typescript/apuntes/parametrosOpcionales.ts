(function(){


    //Si asignamos un valor en la declaracion de unos de los parametros, lo convertimos en un 
    //parametro opcional ya que si no indicamos nada obtiene este valor, si se indica algo en la llamada, se sobrescribe
    function activar(quien:string, objeto:string = "batiseñal"){
        console.log(`${quien} activó ${objeto}`);
    }

    activar("gordon");
    activar("batman", "batmovil")

    //Tambien se puede indicar un argumento opcional y sin ningun valor por defecto con ?
    function activar2(quien:string, objeto:string = "batiseñal",  hora?:string){
        if(hora){
            console.log(`${quien} activó ${objeto} a las ${hora}`);
        }else{
            console.log(`${quien} activó ${objeto}`);
        }
        
    }

    activar2("gordon", "batiseñal", "20:00");
    activar2("gordon");
    activar2("batman", "batmovil");

})();
