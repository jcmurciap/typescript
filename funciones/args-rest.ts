(() => {
    const fullName = (firstName: string, ...args: string[]):string => {
        return `${firstName} ${args.join(' ')}`;
    }

    const superman = fullName('juan', 'camilo');
    console.log({ superman });
})();