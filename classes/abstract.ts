(() => {
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo a salvo';
        }
    }

    class Villian extends Mutante {
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('wolverine','Logen');
    const magneto = new Villian('magneto','magnus');
    const printName = (character: Mutante) => {
        console.log(character.name)
    } 
    printName(wolverine);
    printName(magneto);
    
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    
})()


