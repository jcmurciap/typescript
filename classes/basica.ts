(() => {
    
    class Avenger {
        // acceso a la propiedad dentro SOLO de la clase.
        private name: string;
        public team: string;
        public realName?: string;
        static avgAge: number = 35;
        
        constructor (name: string, team: string, realName?:string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        };
    };

    
    const atman:Avenger = new Avenger('Camilo', 'runner');
    console.log(atman);

    // acceder a la propiedad estatica
    // console.log(Avenger.avgAge); // --> 35

})()