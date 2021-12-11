(() => {
    
    type Avenger = {
        name: string,
        weapon: string;
    };

    const ironman:Avenger = {
        name: 'Ironman',
        weapon: 'Armoursuit'
    };
    const capAmerica:Avenger = {
        name: 'Capitan america',
        weapon: 'Shield'
    };
    const thor:Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };

    const avengers = [ironman, capAmerica, thor];
    for(const avenger of avengers){
        console.log(avenger);
    };

})();