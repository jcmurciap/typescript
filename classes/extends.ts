(() => {
    class Avenger {
        
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado')
        }

        protected getFullName (){
            return `${this.name} ${this.realName}`
        }
    }
    class Xmen extends Avenger {
        
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
            console.log('COntructor Xmen llamado')
        }

        getFullnameFromXMen(){
            console.log(super.getFullName())
        }
    }

    const wolverine = new Xmen('Wolverine','Logan', true)
    wolverine.getFullnameFromXMen();  // Wolverine Logan

    const newAvenger = new Avenger('Hola','Mundo');
    
    // protected significa que solo se puede acceder desde
    // la clase padre o clases que se extiendan de ella.

})();
