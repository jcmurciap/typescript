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
            console.log('Constructor Xmen llamado')
        }

        getFullnameFromXMen(){
            console.log(super.getFullName())
        }
        
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string){
            
            if (name.length < 3){
                throw new Error('name must be longer that 3 words')
            }
            this.name = name;
        }
    }

    const wolverine = new Xmen('Wolverine','Logan', true)
    
    
    wolverine.fullName = "Camilo" // 'setter'
    console.log(wolverine.fullName); // Camilo - Logan --> 'getter'

    // wolverine.getFullnameFromXMen();  // Wolverine Logan
    
    // PROTECTED significa que solo se puede acceder desde
    // la clase contenedora clases que se extiendan de ella.

})();
