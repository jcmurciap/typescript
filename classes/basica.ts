(() => {
    
    class Avenger {
        
        // Se coloca fuera del constructor porque
        // NO se va a modificar
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name; // Return the class name --> Avenger
        }

        constructor (
            // Accessing only in this class. 
            private name: string,
            
            public team: string,
            public realName?: string,
        ) {};

        public bio() {
            return `${this.name} (${this.team})`
        }
    };
    
    const atman:Avenger = new Avenger('Camilo', 'runner', 'juank');
    console.log(atman);

    // acceder a la propiedad estatica
    // console.log(Avenger.avgAge); // --> 35

    // console.log(Avenger.avgAge) // 55
    console.log('atman bio():',atman.bio())
    //Remember that if you set a private classe, typescript
    // allow you continue code, dont get error!
})();
