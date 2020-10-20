(function(){
    const nombre = "Manolo";
    const apellido = "García";
    const edad = 22;

    //Metodo clasico
    const completo = nombre + " " + apellido + " (" + edad+ ")";
    console.log(completo)

    //El uso de las comillas invertidas me proporciona una forma de trabajar más limpia con cadenas de texto
    const completoPro = `${nombre} ${apellido} (${edad})`;
    console.log(completoPro);

    //Saltos de linea
    const completoProSaltos = `${nombre} ${apellido} \n(${edad - 20})`;
    console.log(completoProSaltos);

    //Llamadas a metodos dentro de ${ }
    const completoProMetodos = `${nombre} ${apellido} (${getEdad()})`;
    console.log(completoProMetodos);

    //-------------------------------------------

    function getEdad(){
        return edad + " años"
    }
})();
