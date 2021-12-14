(() => {

    class Apocalipsis {
        
        static instance: Apocalipsis;
        
        // solo puede ser usado dentro de la clase
        private constructor(public name: string){}

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy camilito');
            }
            return Apocalipsis.instance;
        }

        changeName(newName: string){
            this.name = newName;
        }
    }

    // const apocalipsis = new Apocalipsis("I'm apocalipsis");
    // const apocalipsis2 = new Apocalipsis("I'm apocalipsis2");
    // const apocalipsis3 = new Apocalipsis("I'm apocalipsis3");

    // const apocalipsis1 = Apocalipsis.callApocalipsis();
    // const apocalipsis2 = Apocalipsis.callApocalipsis();
    // const apocalipsis3 = Apocalipsis.callApocalipsis();
    // apocalipsis1.changeName('Juanca');
    // console.log(apocalipsis1,apocalipsis2,apocalipsis3);

})();