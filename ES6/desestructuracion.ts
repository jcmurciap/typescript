(() => {
    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };
    
    const avenger:Avenger = {
        nick: 'actor 1',
        ironman: 'actor 2',
        vision: 'actor 3',
        activo: true,
        poder: 15000.12
    };
    
    const printAvenger = ({ironman, ...resto}: Avenger) => {
        console.log(ironman);
    };
    printAvenger(avenger);
    
    const avengersArr:string[] = ['Cap America', 'Ironman','Hulk'];
    const [capitan, ironman, hulk] = avengersArr;
    console.log(capitan);
})()
