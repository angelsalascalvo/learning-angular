(()=>{


    class Avenger{
        public nombre:string;
        public equipo:string;
        public nombreReal:string;

        public puedePelear:boolean;
        public peleasGanadas?:number; //Indica que este parametro es opcional

        constructor(nombre:string, equipo:string, nombreReal:string, puedePelear:boolean ){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
        }   

    }

    const ironman = new Avenger("IronMan", "A", "Tony", true);
    console.log(ironman)

    //Otra forma de declarar la clase
    class Avenger2{

        constructor(public nombre:string, 
                    public equipo:string,
                    public nombreReal:string,
                    public puedePelear:boolean,
                    public peleasGanadas:number = 0){}   

    }

    const ironman2 = new Avenger2("IronMan", "A", "Tony", true);
    console.log(ironman2)


})();
