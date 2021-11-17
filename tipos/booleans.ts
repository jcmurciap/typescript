(() => {
    let isSuperman:boolean = true;
    let isBatman: boolean = false;
    console.log(isSuperman);
    console.log({ isBatman });
    
    isSuperman = ( isBatman ) ? true: false;
    //isSuperman = ( isBatman ) ? true: 'false'; --> error
    console.log({ isSuperman });
})();