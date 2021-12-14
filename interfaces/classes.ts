(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number):string;
    }

    interface Human {
        age: number;
    }

    // class Mutant implements Xmen, Human { 
        
        
    //     name: string; //BUG
    //     realName: string; //BUG
    //     age: number; //BUG
        
    //     mutantPower(id: number){
    //         return this.name + ' ' + this.realName;
    //     };
    // }
})()
