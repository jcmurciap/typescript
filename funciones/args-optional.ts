(() => {
    const fullName = (firstName: string, lastName?:string):string => {
        return `${firstName} ${lastName || ''}`;    
    }
    const name = fullName('Camilo');
    console.log({ name });
})();