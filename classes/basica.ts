(() => {
    
    class Avenger {
        
        // Se coloca fuera del constructor porque
        // NO se va a modificar
        static avgAge: number = 35;
        
        constructor (
            // Accessing only in this class. 
            private name: string,
            
            public team: string,
            public realName?: string,
        ) {};
    };
    
    const atman:Avenger = new Avenger('Camilo', 'runner', 'juank');
    console.log(atman);

    // acceder a la propiedad estatica
    // console.log(Avenger.avgAge); // --> 35

    console.log(Avenger.avgAge) // 55
})()
