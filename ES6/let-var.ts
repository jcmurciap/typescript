(() => {
    // don't use var, instead use let if
    // variable will mutate
    const name: string = 'Camilo';
    const getName = (): void => {
        console.log('Old getName');
    }
})();