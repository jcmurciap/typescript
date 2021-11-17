(() => {
    let avenger: any = 123;
    let exist;
    let power;
    avenger = 'Dr strange';
    console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0));
    
    avenger = 150.56754;
    console.log(avenger.toFixed(2));
})();